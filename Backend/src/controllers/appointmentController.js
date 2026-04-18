const transporter = require('../config/mailer.js');
const dotenv=require('dotenv');
dotenv.config();
const EMAIL_COMP=process.env.EMAIL_COMP;

exports.handleAppointmentForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      designation,
      city,
      country,
      companyContact,
      preferredDate,
      preferredTime,
      reason
    } = req.body;

    // Validate all fields
    if (
      !fullName || !email || !phone ||
      !companyName || !designation || !city || !country || !companyContact ||
      !preferredDate || !preferredTime || !reason
    ) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create email content
    const mailOptions = {
      from: email,
      to: EMAIL_COMP,
      subject: `New Appointment Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <div style="background-color: #4f46e5; color: white; padding: 20px;">
              <h2>📅 New Appointment Request</h2>
            </div>
            <div style="padding: 20px;">
              <h3>👤 Personal Details</h3>
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              
              <h3>🏢 Company / Institution Details</h3>
              <p><strong>Name:</strong> ${companyName}</p>
              <p><strong>Designation:</strong> ${designation}</p>
              <p><strong>City:</strong> ${city}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Contact (Email/Website):</strong> <a href="${companyContact}" target="_blank" style="color: #4f46e5;">${companyContact}</a></p>

              <h3>📆 Appointment Details</h3>
              <p><strong>Preferred Date:</strong> ${preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${preferredTime}</p>

              <h3>📝 Reason</h3>
              <p style="white-space: pre-line;">${reason}</p>

              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${email}?subject=Re: Your Appointment Request" 
                   style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4); transition: transform 0.2s;">
                  Reply to ${fullName}
                </a>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              Submitted via your appointment form.
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Appointment request sent successfully' });
  } catch (error) {
    console.error('Appointment Form Error:', error);
    res.status(500).json({ success: false, message: 'Error sending appointment request' });
  }
};
