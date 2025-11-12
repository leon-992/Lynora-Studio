# EmailJS Setup Instructions

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from your website without needing a backend server. The free tier includes 200 emails per month.

## Step-by-Step Setup Guide

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Your Email Service

1. Log in to your EmailJS dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
5. Follow the instructions to connect your email account
6. **Note your Service ID** (you'll need this later)

### Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** Neue Kontaktanfrage von {{from_name}}

**Content:**
```
Neue Nachricht von Ihrer Website:

Name: {{from_name}}
Email: {{from_email}}

Nachricht:
{{message}}

---
Diese Nachricht wurde über das Kontaktformular auf Ihrer Website gesendet.
```

4. Click **Save**
5. **Note your Template ID** (you'll need this later)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find your **Public Key**
3. **Copy this key** (you'll need this later)

### Step 5: Update Your Website Code

1. Open `script.js` in your project
2. Find these three lines (around line 360-362):
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';      // Replace with your EmailJS Service ID
   const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your EmailJS Template ID
   const publicKey = 'YOUR_PUBLIC_KEY';       // Replace with your EmailJS Public Key
   ```

3. Replace the values:
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4

4. Also update the initialization (around line 350):
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS Public Key
   ```

5. Update the recipient email (around line 365):
   ```javascript
   to_email: 'your-email@example.com' // Change to your actual email address
   ```

### Step 6: Test Your Form

1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email inbox - you should receive the message!

## Example Configuration

After setup, your code should look something like this:

```javascript
// Initialize EmailJS
emailjs.init('abc123xyz789'); // Your Public Key

// In the form handler:
const serviceID = 'service_abc123';      // Your Service ID
const templateID = 'template_xyz789';    // Your Template ID
const publicKey = 'abc123xyz789';        // Your Public Key

const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: 'contact@studio.com' // Your email
};
```

## Troubleshooting

### Form not sending emails?
1. Check browser console for errors (F12 → Console)
2. Verify all three IDs are correct in `script.js`
3. Make sure EmailJS script is loaded (check Network tab)
4. Verify your email service is connected in EmailJS dashboard

### Getting "Invalid Public Key" error?
- Make sure you're using the Public Key from Account → General, not the Private Key

### Emails going to spam?
- Check your spam folder
- Add your email service domain to your email's whitelist
- Consider using a custom domain email for better deliverability

## Free Tier Limits

- **200 emails per month** (free tier)
- If you need more, upgrade to a paid plan starting at $15/month

## Alternative: Formspree

If you prefer another service, Formspree is also popular:
- Website: [https://formspree.io/](https://formspree.io/)
- Free tier: 50 submissions/month
- Similar setup process

## Security Note

The Public Key is safe to use in frontend code. Never share your Private Key or Service credentials publicly.

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

