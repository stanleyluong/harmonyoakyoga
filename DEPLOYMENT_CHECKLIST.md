# AWS Amplify Deployment Checklist

Use this checklist to ensure a successful deployment of the Harmony Oak Studio website.

## Pre-Deployment Setup

### 1. Repository Preparation
- [ ] Code is committed to your Git repository (GitHub, GitLab, or Bitbucket)
- [ ] `amplify.yml` build configuration file is present
- [ ] `.env.example` file is available for reference
- [ ] All dependencies are listed in `package.json`

### 2. External Service Setup

#### Formspree (Contact Form)
- [ ] Created account at [formspree.io](https://formspree.io)
- [ ] Created a new form for the contact page
- [ ] Copied the form ID (e.g., `xpzgkqyw`)
- [ ] Verified form is active (not in test mode)

#### Calendly (Booking System)
- [ ] Created account at [calendly.com](https://calendly.com)
- [ ] Set up availability and services
- [ ] Configured booking types for yoga sessions
- [ ] Copied your Calendly URL (e.g., `https://calendly.com/yourusername`)
- [ ] Tested booking flow

## AWS Amplify Deployment

### 3. Amplify App Creation
- [ ] Logged into [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
- [ ] Clicked "New app" → "Host web app"
- [ ] Connected Git repository
- [ ] Selected correct repository and branch
- [ ] Confirmed build settings (should auto-detect `amplify.yml`)

### 4. Environment Variables Configuration
- [ ] Added `NEXT_PUBLIC_SITE_URL` (use Amplify's default URL initially)
- [ ] Added `NEXT_PUBLIC_FORMSPREE_FORM_ID` with your Formspree form ID
- [ ] Added `NEXT_PUBLIC_CALENDLY_URL` with your Calendly URL
- [ ] Saved environment variables

### 5. Initial Deployment
- [ ] Clicked "Save and deploy"
- [ ] Monitored build process (should take 2-5 minutes)
- [ ] Build completed successfully
- [ ] Site is accessible via Amplify URL

## Post-Deployment Testing

### 6. Functionality Testing

#### Contact Form
- [ ] Visited `/contact` page
- [ ] Filled out contact form with test data
- [ ] Submitted form successfully
- [ ] Received email notification via Formspree
- [ ] Redirected to thank you page

#### Booking System
- [ ] Visited `/book` page
- [ ] Calendly widget loaded properly
- [ ] Tested booking flow (can cancel afterward)
- [ ] Confirmed booking confirmation page works

#### General Site
- [ ] All navigation links work
- [ ] Homepage loads correctly
- [ ] About page displays properly
- [ ] Services page shows all offerings
- [ ] Testimonials page renders correctly
- [ ] 404 page works for invalid URLs

### 7. Performance and SEO
- [ ] Site loads within 3 seconds
- [ ] Mobile responsiveness works on phone/tablet
- [ ] Images load and display properly
- [ ] Meta tags and Open Graph data present
- [ ] Lighthouse score above 90 for performance

### 8. Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Optional Enhancements

### 9. Custom Domain (Optional)
- [ ] Purchased domain name
- [ ] Added domain in Amplify console
- [ ] Configured DNS settings
- [ ] SSL certificate provisioned
- [ ] Updated `NEXT_PUBLIC_SITE_URL` environment variable

### 10. Analytics and Monitoring (Optional)
- [ ] Set up Google Analytics (if desired)
- [ ] Configured Amplify monitoring
- [ ] Set up build notifications
- [ ] Added error tracking (if needed)

## Troubleshooting Checklist

If something isn't working:

### Build Failures
- [ ] Check build logs in Amplify console
- [ ] Verify all dependencies in `package.json`
- [ ] Ensure Node.js version compatibility
- [ ] Check for syntax errors in code

### Contact Form Issues
- [ ] Verify Formspree form ID is correct
- [ ] Check that form is active in Formspree dashboard
- [ ] Test form endpoint directly
- [ ] Check browser network tab for errors

### Calendly Issues
- [ ] Verify Calendly URL is correct and public
- [ ] Test Calendly URL directly in browser
- [ ] Check for JavaScript errors in console
- [ ] Ensure Calendly account is properly configured

### Performance Issues
- [ ] Check image optimization settings
- [ ] Review bundle size in build logs
- [ ] Test on different network speeds
- [ ] Use Lighthouse for performance analysis

## Success Criteria

Your deployment is successful when:
- [ ] Site loads quickly and reliably
- [ ] Contact form sends emails successfully
- [ ] Calendly booking system works end-to-end
- [ ] All pages are accessible and functional
- [ ] Mobile experience is smooth
- [ ] No console errors or broken links

## Next Steps After Deployment

1. **Share the URL** with stakeholders for review
2. **Monitor** form submissions and bookings
3. **Update content** as needed (services, pricing, etc.)
4. **Set up regular backups** of any dynamic content
5. **Plan for ongoing maintenance** and updates

## Support Resources

- **AWS Amplify Documentation**: https://docs.amplify.aws/
- **Formspree Documentation**: https://help.formspree.io/
- **Calendly Help Center**: https://help.calendly.com/
- **Next.js Documentation**: https://nextjs.org/docs