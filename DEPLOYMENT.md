# Vercel Deployment Guide

This website is now ready for deployment on Vercel. Here's what has been fixed and how to deploy:

## What Was Fixed

1. **PHP Dependencies Removed**: Converted PHP contact and newsletter forms to JavaScript serverless functions
2. **Vercel Configuration Added**: Created `vercel.json` for proper routing
3. **API Routes Created**: Added `/api/contact.js` and `/api/newsletter.js` endpoints
4. **HTML Syntax Fixed**: Fixed malformed anchor tags in footer

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Deploy automatically

## Form Configuration

The contact and newsletter forms are now working with serverless functions. Currently they:

- Validate form data
- Log submissions to console
- Return success responses

### To Add Email Functionality

You can integrate with email services by modifying the API files:

1. **For Contact Form** (`/api/contact.js`):
   - Add Nodemailer, SendGrid, or similar service
   - Configure SMTP or API credentials
   - Update the function to send actual emails

2. **For Newsletter** (`/api/newsletter.js`):
   - Integrate with Mailchimp, ConvertKit, or similar
   - Add database storage for email addresses
   - Configure your mailing list service

## Environment Variables

If you add email services, you may need to set environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add variables like:
   - `SMTP_HOST`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `MAILCHIMP_API_KEY`
   - etc.

## File Structure

```
/
├── api/
│   ├── contact.js          # Contact form handler
│   └── newsletter.js       # Newsletter subscription handler
├── assets/                 # Static assets (CSS, JS, images)
├── forms/                  # Original PHP files (can be removed)
├── foto/                   # Image gallery
├── index.html             # Main website
├── service-details.html   # Service details page
└── vercel.json           # Vercel configuration
```

## Notes

- The original PHP files in `/forms/` are no longer needed but kept for reference
- All static assets are served directly by Vercel
- Forms now use modern JavaScript fetch API instead of PHP
- The website is fully responsive and optimized for mobile devices

Your website should now deploy successfully on Vercel! 