# Email Setup Guide

To enable email notifications for contact form submissions, you need to configure Gmail SMTP settings.

## Option 1: Gmail SMTP (Recommended)

### Steps to Enable Email Notifications:

1. **Create an App Password for Gmail**
   - Go to your Google Account settings: https://myaccount.google.com/
   - Navigate to Security → 2-Step Verification (must be enabled)
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

2. **Set Environment Variables**
   
   For local development, create a `.env` file in the root directory:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

   For Vercel deployment:
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add these variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your app password

## Option 2: Webhook Integration (No Email Credentials Required)

If you prefer not to use email credentials, you can use a webhook service:

1. **Set up a webhook receiver** (choose one):
   - **Zapier**: Create a Zap with Webhook trigger → Gmail action
   - **Make (Integromat)**: Create a scenario with Webhook → Gmail
   - **IFTTT**: Create an applet with Webhook → Email
   - **Custom webhook**: Use your own endpoint

2. **Set the webhook URL**:
   ```
   CONTACT_WEBHOOK_URL=https://your-webhook-url.com/endpoint
   ```

3. **The webhook will receive**:
   ```json
   {
     "name": "Contact Name",
     "email": "contact@email.com",
     "company": "Company Name",
     "stage": "planning",
     "budget": "50k-100k",
     "description": "Project description...",
     "timestamp": "2024-01-01T00:00:00.000Z",
     "to": "theosaasconsulting@gmail.com"
   }
   ```

## Important Notes

- All contact form submissions will be sent to: `theosaasconsulting@gmail.com`
- The system will try both email and webhook methods if configured
- If notifications fail, the form submission will still be saved to the database
- Form data is always stored in the database regardless of email/webhook status

## Alternative Email Services

If you prefer not to use Gmail, you can modify `server/email.ts` to use other services:
- SendGrid
- Mailgun
- AWS SES
- Postmark

Each service will require different configuration in the `nodemailer.createTransport()` function. 