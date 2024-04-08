// pages/api/send-email.js
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, name, mobileNumber, message, subject } = body || {};
    // Initialize Brevo SDK
    const apiInstance = new TransactionalEmailsApi();

    // Set API key
    const apiKey = apiInstance.authentications["apiKey"];
    apiKey.apiKey =
      "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";

    // Create email object
    const sendSmtpEmail = new SendSmtpEmail();
    sendSmtpEmail.subject = subject || "testSubject";
    sendSmtpEmail.htmlContent = ` <html>
    <body>
    <h4>A data has been submitted via  Contact form Following are the details captured</h4>
    ${name ? `<p><strong>Full Name</strong>: ${name}</p>` : ``}
    ${mobileNumber ? `<p><strong>Phone no</strong>: ${mobileNumber}</p>` : ``}
      <p><strong>Email</strong>: ${email}</p>
      ${message ? `<p><strong>Message</strong>: ${message}</p>` : ``}
      <p>This email was sent from <a href="https://aadyah.com">aadyah.com</a></p>
      </body>
      </html>`;
    sendSmtpEmail.sender = {
      name: "jashwanth",
      email: "jashwanth.hs@supercode.in",
    };
    sendSmtpEmail.to = [
      { email: "jashureddy56@gmail.com", name: "Jashwanth" },
      //   { email: "rahul.rn@supercode.in", name: "Rahul" },
    ];
    sendSmtpEmail.replyTo = { email: "info@supercode.in", name: "supercode" };

    // Send email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
