# Web3Forms Setup Guide

## What is Web3Forms?
Web3Forms is a free contact form submission service that sends submissions directly to your email without requiring backend code. Perfect for static sites, JAMstack, and serverless architectures.

**Features:**
- ✅ Free up to 250 submissions/month
- ✅ No backend/server code needed
- ✅ Submissions sent directly to your email
- ✅ GDPR compliant
- ✅ AWS powered infrastructure
- ✅ HTTPS encrypted

## Setup Steps

### 1. Create a Web3Forms Account
1. Visit: https://app.web3forms.com
2. Sign up with your email
3. Verify your email address
4. Create a new form (give it a name like "Makjuz Contact Form")
5. You'll receive your **Access Key** - this is what you need

### 2. Add Access Key to Environment
1. Open your `.env` file (in the `frontend` folder)
2. Replace `your_access_key_here` with your actual Access Key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
3. Save the file

### 3. Restart Your Development Server
```bash
cd frontend
npm run dev
```

### 4. Test the Form
1. Navigate to your Contact Page
2. Fill out the form and submit
3. Check your email inbox for the submission
4. The form should show a success message

## Advanced Configuration (Optional)

### Auto-Redirect on Success
To redirect users to a thank-you page after submission:

Edit `frontend/src/components/forms/ContactForm.jsx` and uncomment this line:
```javascript
// formData.append('redirect', 'https://yoursite.com/thank-you')
```

### Add reCAPTCHA Protection
Add this line in the form submission:
```javascript
formData.append('captcha_key', 'YOUR_CAPTCHA_KEY')
```

### Custom Email Subject
```javascript
formData.append('subject', 'New Contact Form Submission from Makjuz')
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Email not received" | Check spam folder, verify Access Key is correct |
| CORS error | Make sure you're using POST method to `https://api.web3forms.com/submit` |
| Form not submitting | Check that `VITE_WEB3FORMS_ACCESS_KEY` is set in `.env` |
| Wrong email recipient | Access Key must be generated from the email you want to receive submissions on |

## Web3Forms vs Your Backend

**Current Setup:** Your backend handles contact form submissions.

**With Web3Forms:** Submissions go directly to Web3Forms → Your email, no backend involvement needed.

### Why Use Web3Forms?
- Reduces server load
- No database maintenance needed
- Automatic email delivery
- Free service
- Less infrastructure to manage

### Keep Both?
You can keep your backend for other purposes (API, data processing) and use Web3Forms just for contact forms.

## Pricing
- **Free Plan:** 250 submissions/month, 30-day storage
- **Pro Plan:** $20/month for unlimited submissions, 1-year storage, and more features

Visit https://web3forms.com/pricing for details.

## More Resources
- Docs: https://docs.web3forms.com/
- Examples: https://docs.web3forms.com/getting-started/examples
- Support: https://web3forms.com/contact

---
Updated ContactForm: `frontend/src/components/forms/ContactForm.jsx`
Environment config: `frontend/.env`
