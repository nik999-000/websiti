export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Here you would typically send an email using a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // For now, we'll just log the data and return success

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Return OK for the form validation to work properly
    res.status(200).send('OK');
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 