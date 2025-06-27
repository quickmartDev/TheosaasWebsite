import nodemailer from 'nodemailer';
import type { InsertContactInquiry } from '@shared/schema';

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
  // If email credentials are not configured, log a warning
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not configured. Skipping email notification.');
    console.log('Contact form submission:', inquiry);
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
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}

// Alternative: Send to a webhook (e.g., Zapier, Make, or custom endpoint)
export async function sendContactWebhook(inquiry: InsertContactInquiry) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('No webhook URL configured');
    return;
  }

  try {
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

    console.log('Contact webhook sent successfully');
  } catch (error) {
    console.error('Error sending webhook:', error);
    throw error;
  }
} 