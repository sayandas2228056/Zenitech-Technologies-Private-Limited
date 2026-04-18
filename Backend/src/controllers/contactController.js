const transporter = require('../config/mailer.js');
const dotenv=require('dotenv');
dotenv.config();
const EMAIL_COMP=process.env.EMAIL_COMP;

exports.handleContactForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const mailOptions = {
      from: email,
      to: EMAIL_COMP,
      subject: subject ? `New Contact Form Submission: ${subject}` : `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <div style="background-color: #4f46e5; color: white; padding: 20px;">
              <h2>📬 Contact Form Submission</h2>
            </div>
            <div style="padding: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5;">${email}</a></p>
              ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
              <hr style="margin: 20px 0;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line;">${message}</p>

              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${email}?subject=Re: Your Contact Form Submission" 
                   style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4); transition: transform 0.2s;">
                  Reply to ${name}
                </a>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              Submitted via the contact form
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
};
