// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, phone, email, message } = await req.json();
  const htmlContentTOAdmin = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us Form Submission</title>
    <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
  </head>
  <body style="font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
      <tbody>
        <tr>
          <td align="center" vertical-align: top;">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; text-align: left; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
              <tbody>
                <tr>
                  <td style="padding: 20px 0; text-align: center;">
                    <div>
                      <img src="https://i.ibb.co/Qbnj4mz/logo.png" alt="Company Logo" style="width: 100px;">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #ffffff; text-align: left;">
                    <h1 style="margin: 1rem 0; color: #333;">Contact Us Form Submission</h1>
                    <p style="font-size: 16px; line-height: 1.6; color: #555;">You have received a new submission from the contact form on your website. Here are the details:</p>
                    
                    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                        <td style="padding: 8px; color: #555;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
                        <td style="padding: 8px; color: #555;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                        <td style="padding: 8px; color: #555;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
                        <td style="padding: 8px; color: #555;">${message}</td>
                      </tr>
                    </table>

                    <p style="font-size: 16px; line-height: 1.6; color: #555;">Thank you for your submission. A team member will reach out to you soon.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px; text-align: center; color: #999;">
                    <p style="font-size: 14px;">&copy; 2024 Your Company. All Rights Reserved.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  </html>
`;

const htmlContentTOUser = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
  <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
</head>
<body style="font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
    <tbody>
      <tr>
        <td align="center" style="padding: 2rem; vertical-align: top;">
          <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; text-align: left; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <tbody>
              <tr>
                <td style="padding: 20px 0; text-align: center;">
                  <div>
                    <img src="https://i.ibb.co/Qbnj4mz/logo.png" alt="Company Logo" style="width: 100px;">
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; background-color: #ffffff; text-align: left;">
                  <h1 style="margin: 1rem 0; color: #333;">Thank You for Contacting Us!</h1>
                  <p style="font-size: 16px; line-height: 1.6; color: #555;">We have received your message and our team will get back to you shortly. Here are the details you submitted:</p>
                  
                  <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                      <td style="padding: 8px; color: #555;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
                      <td style="padding: 8px; color: #555;">${phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                      <td style="padding: 8px; color: #555;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
                      <td style="padding: 8px; color: #555;">${message}</td>
                    </tr>
                  </table>

                  <p style="font-size: 16px; line-height: 1.6; color: #555;">Thank you once again for reaching out to us. Our team will be in touch soon to assist you further.</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top: 20px; text-align: center; color: #999;">
                  <p style="font-size: 14px;">&copy; 2024 Your Company. All Rights Reserved.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD, 
    },
  });

  const mailOptionsToAdmin = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission', 
    html: htmlContentTOAdmin, 
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL,
    to:email,
    subject: 'Thank you for contacting us',
    html: htmlContentTOUser, 
  };

  try {

    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser)
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
