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
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Here you would typically add the email to your newsletter service:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Custom database
    // For now, we'll just log the subscription and return success

    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString()
    });

    // Return OK for the form validation to work properly
    res.status(200).send('OK');
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 