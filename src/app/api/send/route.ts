import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const isConfigured = apiKey && apiKey !== "" && apiKey !== "your_resend_api_key_here";

    if (!isConfigured) {
      // Mock successful send for demo/development when key is not configured
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, isDemo: true });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["musfirahsheikh1122@gmail.com"],
      replyTo: email,
      subject: `New Message from Portfolio: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 100px; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: bold;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #f3f4f6;">
            <p style="margin-top: 0; color: #6b7280; font-weight: bold; font-size: 13px;">Message:</p>
            <p style="margin-bottom: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.5; font-size: 14px;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
