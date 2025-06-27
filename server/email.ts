import nodemailer from 'nodemailer';
import type { InsertContactInquiry } from '@shared/schema';

// Function to mask sensitive data
function maskString(str: string | undefined): string {
  if (!str) return 'not-provided';
  if (str.length <= 8) return '*'.repeat(str.length);
  return str.slice(0, 4) + '*'.repeat(str.length - 8) + str.slice(-4);
}

// Create a transporter using Gmail SMTP
// Note: For production, use environment variables for credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

export async function sendContactEmail(inquiry: InsertContactInquiry) {
  // Log the submitted email first
  console.log('[Email Service] New submission email address:', {
    submittedEmail: inquiry.email,
    timestamp: new Date().toISOString()
  });

  // Log the environment and configuration
  console.log('[Email Service] Configuration:', {
    NODE_ENV: process.env.NODE_ENV,
    configuredEmail: process.env.EMAIL_USER,
    configuredPassword: maskString(process.env.EMAIL_PASS), // Masked password
    timestamp: new Date().toISOString()
  });

  // Log the incoming inquiry email
  console.log('[Email Service] Processing inquiry from:', {
    inquiryEmail: inquiry.email,
    inquiryName: inquiry.name,
    company: inquiry.company,
    timestamp: new Date().toISOString()
  });

  // If email credentials are not configured, log a warning
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('[Email Service] Email credentials not configured. Skipping email notification.');
    console.log('[Email Service] Contact form submission:', JSON.stringify({
      ...inquiry,
      timestamp: new Date().toISOString()
    }, null, 2));
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'theosaasconsulting@gmail.com',
    subject: `New Contact Inquiry from ${inquiry.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Company:</strong> ${inquiry.company || 'Not provided'}</p>
      <p><strong>Project Stage:</strong> ${inquiry.stage || 'Not provided'}</p>
      <p><strong>Budget:</strong> ${inquiry.budget || 'Not provided'}</p>
      <h3>Project Description:</h3>
      <p>${inquiry.description}</p>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${inquiry.name}
      Email: ${inquiry.email}
      Company: ${inquiry.company || 'Not provided'}
      Project Stage: ${inquiry.stage || 'Not provided'}
      Budget: ${inquiry.budget || 'Not provided'}
      
      Project Description:
      ${inquiry.description}
    `
  };

  try {
    console.log('[Email Service] Attempting to send email:', {
      from: mailOptions.from,
      to: mailOptions.to,
      timestamp: new Date().toISOString()
    });
    
    await transporter.sendMail(mailOptions);
    console.log('[Email Service] Contact email sent successfully');
  } catch (error: any) {
    console.error('[Email Service] Error sending contact email:', {
      error: error.message,
      code: error.code,
      response: error.response,
      timestamp: new Date().toISOString()
    });
    throw error;
  }
}

// Alternative: Send to a webhook (e.g., Zapier, Make, or custom endpoint)
export async function sendContactWebhook(inquiry: InsertContactInquiry) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('[Webhook Service] No webhook URL configured');
    return;
  }

  try {
    console.log('[Webhook Service] Sending webhook request for:', {
      inquiryEmail: inquiry.email,
      timestamp: new Date().toISOString()
    });
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...inquiry,
        timestamp: new Date().toISOString(),
        to: 'theosaasconsulting@gmail.com'
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }

    console.log('[Webhook Service] Contact webhook sent successfully');
  } catch (error: any) {
    console.error('[Webhook Service] Error sending webhook:', {
      error: error.message,
      timestamp: new Date().toISOString()
    });
    throw error;
  }
} 