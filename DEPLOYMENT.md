# AWS Amplify Deployment Guide

This guide walks you through deploying the Harmony Oak Studio website to AWS Amplify.

## Prerequisites

1. AWS Account with Amplify access
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Formspree account for contact form
4. Calendly account for booking integration

## Step 1: Prepare Environment Variables

Before deploying, you'll need to set up the following environment variables in AWS Amplify:

### Required Environment Variables

1. **NEXT_PUBLIC_SITE_URL**
   - Value: Your Amplify app URL (e.g., `https://main.d1234567890.amplifyapp.com`)
   - Used for: SEO, Open Graph tags, and canonical URLs

2. **NEXT_PUBLIC_FORMSPREE_FORM_ID**
   - Value: Your Formspree form ID (e.g., `xpzgkqyw`)
   - How to get: 
     - Sign up at [formspree.io](https://formspree.io)
     - Create a new form
     - Copy the form ID from the form endpoint URL

3. **NEXT_PUBLIC_CALENDLY_URL**
   - Value: Your Calendly scheduling URL (e.g., `https://calendly.com/yourusername`)
   - How to get:
     - Sign up at [calendly.com](https://calendly.com)
     - Set up your availability and services
     - Copy your Calendly URL from your account

## Step 2: Deploy to AWS Amplify

### Option A: Using AWS Amplify Console (Recommended)

1. **Connect Repository**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)
   - Select the repository and branch (usually `main` or `master`)

2. **Configure Build Settings**
   - Amplify should auto-detect the `amplify.yml` file
   - If not, use these build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: out
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
           - .next/cache/**/*
     ```

3. **Add Environment Variables**
   - In the Amplify console, go to your app
   - Navigate to "Environment variables" in the left sidebar
   - Add the environment variables listed above
   - Click "Save"

4. **Deploy**
   - Click "Save and deploy"
   - Wait for the build to complete (usually 2-5 minutes)

### Option B: Using Amplify CLI

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify Project**
   ```bash
   amplify init
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   # Choose "Amazon CloudFront and S3"
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

## Step 3: Configure Custom Domain (Optional)

1. In the Amplify console, go to "Domain management"
2. Click "Add domain"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for SSL certificate provisioning (can take up to 24 hours)

## Step 4: Test Deployment

After deployment, test the following functionality:

### Contact Form Testing
1. Visit `/contact` page
2. Fill out and submit the contact form
3. Check that you receive the email via Formspree
4. Verify the thank you page displays correctly

### Calendly Integration Testing
1. Visit `/book` page
2. Verify the Calendly widget loads properly
3. Test booking a session (you can cancel it afterward)
4. Check that the confirmation page displays after booking

### General Site Testing
1. Test all navigation links
2. Verify responsive design on mobile/tablet
3. Check that images load properly
4. Test page load speeds

## Step 5: Set Up Continuous Deployment

AWS Amplify automatically sets up continuous deployment when you connect a Git repository. Every push to your main branch will trigger a new build and deployment.

### Build Notifications
You can set up build notifications in the Amplify console:
1. Go to "Notifications" in your app settings
2. Add email or SNS notifications for build status

## Troubleshooting

### Build Failures
- Check the build logs in the Amplify console
- Ensure all dependencies are listed in `package.json`
- Verify environment variables are set correctly

### Form Submissions Not Working
- Check that `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set correctly
- Verify the Formspree form is active and not in test mode
- Check browser network tab for API errors

### Calendly Not Loading
- Verify `NEXT_PUBLIC_CALENDLY_URL` is set correctly
- Check that the Calendly URL is publicly accessible
- Test the Calendly URL directly in a browser

### Performance Issues
- Use the Amplify performance monitoring tools
- Check Core Web Vitals in the console
- Optimize images if needed

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to your repository
2. **HTTPS**: Amplify provides HTTPS by default
3. **Form Spam**: Consider adding reCAPTCHA to the contact form if needed
4. **Content Security Policy**: Consider adding CSP headers for additional security

## Monitoring and Analytics

1. **Amplify Analytics**: Enable in the console for basic metrics
2. **Google Analytics**: Add tracking code if needed
3. **Performance Monitoring**: Use Amplify's built-in performance tools

## Cost Optimization

- Amplify free tier includes 1000 build minutes and 15GB storage per month
- Monitor usage in the AWS billing console
- Consider using Amplify's branch-based deployments for staging environments

## Support

For issues with:
- **AWS Amplify**: Check AWS documentation or contact AWS support
- **Formspree**: Check Formspree documentation or support
- **Calendly**: Check Calendly help center or support
- **Website Issues**: Check the project repository or contact the development team