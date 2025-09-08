# Contact Form Setup Instructions

## Formspree Integration

The contact form is configured to use Formspree for form handling. To complete the setup:

### 1. Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form project

### 2. Get Your Form Endpoint
1. In your Formspree dashboard, create a new form
2. Copy the form endpoint URL (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)
3. Replace `YOUR_FORM_ID` in the ContactForm component

### 3. Update the Form Endpoint
In `src/components/contact/ContactForm.tsx`, find line 87 and replace:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

With your actual Formspree endpoint:
```typescript
const response = await fetch('https://formspree.io/f/your-actual-form-id', {
```

### 4. Configure Formspree Settings
In your Formspree dashboard:
- Set up email notifications to receive form submissions
- Configure spam protection
- Set up auto-reply messages (optional)
- Add your domain to the allowed origins

### 5. Test the Form
1. Deploy your site
2. Submit a test form
3. Check your email for the submission
4. Verify the thank you page redirect works

## Alternative: EmailJS Setup

If you prefer EmailJS instead of Formspree:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an email service
3. Create an email template
4. Replace the fetch call in ContactForm.tsx with EmailJS SDK calls

## Contact Information Updates

Update the contact information in `src/config/site.ts`:
- Replace placeholder email with actual studio email
- Replace placeholder phone with actual studio phone
- Replace placeholder address with actual studio address
- Replace placeholder Instagram URL with actual Instagram profile

## Form Validation

The form includes client-side validation for:
- Required fields (name, email, message)
- Email format validation
- Message length limits (10-1000 characters)
- Clear error messages for user guidance

## Accessibility Features

The contact form includes:
- Proper form labels
- ARIA attributes
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility