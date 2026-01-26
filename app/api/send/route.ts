import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, subject, and message are required.",
        },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "TCG Website <onboarding@resend.dev>",
      to: ["muhammad.afzal@kalpayfinancials.com"],
      subject: `New Website Enquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Website Enquiry</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 40px 0;">
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #2A4247; padding: 30px 40px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Website Enquiry</h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <!-- Name -->
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                              <strong style="color: #2A4247; display: block; margin-bottom: 4px;">Name</strong>
                              <span style="color: #555;">${name}</span>
                            </td>
                          </tr>
                          
                          <!-- Email -->
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                              <strong style="color: #2A4247; display: block; margin-bottom: 4px;">Email</strong>
                              <a href="mailto:${email}" style="color: #BD994E; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          
                          <!-- Phone -->
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                              <strong style="color: #2A4247; display: block; margin-bottom: 4px;">Phone</strong>
                              <span style="color: #555;">${phone || "Not provided"}</span>
                            </td>
                          </tr>
                          
                          <!-- Subject -->
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                              <strong style="color: #2A4247; display: block; margin-bottom: 4px;">Subject</strong>
                              <span style="color: #555;">${subject}</span>
                            </td>
                          </tr>
                          
                          <!-- Message -->
                          <tr>
                            <td style="padding: 12px 0;">
                              <strong style="color: #2A4247; display: block; margin-bottom: 8px;">Message</strong>
                              <div style="color: #555; line-height: 1.6; background-color: #f9f9f9; padding: 16px; border-radius: 4px; border-left: 4px solid #BD994E;">
                                ${message.replace(/\n/g, "<br>")}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f9f9f9; padding: 20px 40px; text-align: center; border-top: 1px solid #eee;">
                        <p style="margin: 0; color: #888; font-size: 12px;">
                          This email was sent from the Middle East Advisory Group website contact form.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
