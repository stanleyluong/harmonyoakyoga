# AWS Amplify Setup Summary

This document provides a quick reference for deploying the Harmony Oak Studio website to AWS Amplify.

## 🚀 Quick Start

### 1. Prerequisites Setup
```bash
# Verify deployment readiness
npm run verify:deployment

# Test environment variables (after setting up .env.local)
npm run test:env

# Final deployment check
npm run deploy:check
```

### 2. External Services Required

| Service | Purpose | Setup Required |
|---------|---------|----------------|
| **Formspree** | Contact form handling | Create account, get form ID |
| **Calendly** | Booking system | Create account, set up availability |

### 3. Environment Variables for Amplify

Add these in the AWS Amplify Console under "Environment variables":

```
NEXT_PUBLIC_SITE_URL=https://main.d1234567890.amplifyapp.com
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourusername
```

### 4. AWS Amplify Configuration

The project includes:
- ✅ `amplify.yml` - Build configuration
- ✅ Static export setup in `next.config.mjs`
- ✅ Optimized build process
- ✅ Environment variable handling

## 📋 Deployment Steps

1. **Connect Repository**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Configure Build**
   - Amplify will auto-detect `amplify.yml`
   - No manual build configuration needed

3. **Add Environment Variables**
   - Add the three required environment variables
   - Save configuration

4. **Deploy**
   - Click "Save and deploy"
   - Wait 2-5 minutes for build completion

## 🧪 Testing After Deployment

### Contact Form Test
1. Visit `/contact` page
2. Submit test form
3. Check email delivery via Formspree
4. Verify thank you page redirect

### Booking System Test
1. Visit `/book` page
2. Verify Calendly widget loads
3. Test booking flow (can cancel)
4. Check confirmation page

### General Site Test
- All navigation links work
- Pages load quickly (< 3 seconds)
- Mobile responsiveness
- No console errors

## 🔧 Troubleshooting

### Build Failures
```bash
# Check locally first
npm run build
npm run verify:deployment
```

### Form Not Working
- Verify `NEXT_PUBLIC_FORMSPREE_FORM_ID` is correct
- Check Formspree dashboard for form status
- Test form endpoint directly

### Calendly Not Loading
- Verify `NEXT_PUBLIC_CALENDLY_URL` is correct
- Test Calendly URL in browser
- Check browser console for errors

## 📊 Performance Expectations

- **Build Time**: 2-5 minutes
- **Page Load**: < 3 seconds
- **Lighthouse Score**: 90+ (Performance)
- **Bundle Size**: ~94KB (First Load JS)

## 🔄 Continuous Deployment

Once set up, Amplify automatically:
- Builds on every Git push
- Updates environment variables
- Provides build notifications
- Maintains deployment history

## 📞 Support Resources

- **AWS Amplify**: [docs.amplify.aws](https://docs.amplify.aws/)
- **Formspree**: [help.formspree.io](https://help.formspree.io/)
- **Calendly**: [help.calendly.com](https://help.calendly.com/)

## 📁 Related Files

- [`DEPLOYMENT.md`](./DEPLOYMENT.md) - Detailed deployment guide
- [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist
- [`.env.example`](./.env.example) - Environment variables template
- [`amplify.yml`](./amplify.yml) - Build configuration

---

**Ready to deploy?** Follow the [deployment checklist](./DEPLOYMENT_CHECKLIST.md) for a step-by-step process.