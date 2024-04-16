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
      name: name,
      email: email,
    };
    sendSmtpEmail.to = [
      { email: "sales@aadyah.com", name: "Aadyah" },
      //   { email: "rahul.rn@supercode.in", name: "Rahul" },
    ];
    sendSmtpEmail.replyTo = { email: "sales@aadyah.com", name: "Aadyah" };

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
