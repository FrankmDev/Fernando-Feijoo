import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  console.log("🚀 Contact API endpoint called");

  try {
    // Parse JSON data
    const contentType = request.headers.get("content-type");
    console.log("📋 Content-Type:", contentType);

    if (!contentType || !contentType.includes("application/json")) {
      console.log("❌ Invalid content type");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid content type. Expected application/json",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await request.json();
    console.log("📝 Received data:", data);

    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      console.log("❌ Validation failed: missing fields");
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Validation failed: invalid email");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email address",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Check if SMTP is configured
    const smtpConfigured =
      import.meta.env.SMTP_USER && import.meta.env.SMTP_PASS;

    if (!smtpConfigured) {
      // Development mode - log to console
      console.log("📧 DEVELOPMENT MODE - Email that would be sent:");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📅 Timestamp:", new Date().toISOString());
      console.log("👤 Name:", name);
      console.log("📧 Email:", email);
      console.log("💬 Message:", message);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(
        "⚠️  To enable real email sending, configure SMTP_USER and SMTP_PASS in your .env file",
      );

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("✅ Contact form processed successfully (development mode)");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Message sent successfully! We'll get back to you soon.",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        },
      );
    }

    // Configure multiple SMTP options for Dondominio
    console.log("🔧 Testing Dondominio SMTP configurations...");
    console.log("📧 SMTP User:", import.meta.env.SMTP_USER);

    const smtpConfigs = [
      {
        name: "Dondominio STARTTLS",
        host: "smtp.dondominio.com",
        port: 587,
        secure: false,
        auth: {
          user: import.meta.env.SMTP_USER,
          pass: import.meta.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      {
        name: "Dondominio SSL",
        host: "smtp.dondominio.com",
        port: 465,
        secure: true,
        auth: {
          user: import.meta.env.SMTP_USER,
          pass: import.meta.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      {
        name: "Panel247 SSL",
        host: "smtp.panel247.com",
        port: 465,
        secure: true,
        auth: {
          user: import.meta.env.SMTP_USER,
          pass: import.meta.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      {
        name: "Fernando-feijoo.com",
        host: "smtp.fernando-feijoo.com",
        port: 587,
        secure: false,
        auth: {
          user: import.meta.env.SMTP_USER,
          pass: import.meta.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    ];

    let workingTransporter = null;
    let workingConfig = null;

    // Try each configuration until one works
    for (const config of smtpConfigs) {
      console.log(`🔍 Testing ${config.name}...`);
      const transporter = nodemailer.createTransport(config);

      try {
        await transporter.verify();
        console.log(`✅ ${config.name} - Connection verified!`);
        workingTransporter = transporter;
        workingConfig = config;
        break;
      } catch (error) {
        console.log(`❌ ${config.name} - Failed: ${error.message}`);
        continue;
      }
    }

    if (!workingTransporter) {
      console.error("❌ All SMTP configurations failed");
      throw new Error(
        "Unable to connect to any SMTP server. Please check your credentials and network connection.",
      );
    }

    console.log(`🎉 Using working configuration: ${workingConfig.name}`);

    // Email configuration
    const mailOptions = {
      from: `"${name} via Contact Form" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.CONTACT_EMAIL || "info@fernando-feijoo.com",
      replyTo: email,
      subject: `New contact message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0;">
            📧 New Contact Message
          </h2>

          <div style="background: #f9f9f9; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0;"><strong>🖥️ Source:</strong> Contact Form</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">💬 Message:</h3>
            <div style="background: #ffffff; padding: 20px; border-left: 4px solid #000; border: 1px solid #eee; white-space: pre-line; line-height: 1.6;">
${message}
            </div>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center; margin: 0;">
            This message was sent from the contact form at <strong>fernando-feijoo.com</strong><br>
            Configuration used: <em>${workingConfig.name}</em>
          </p>
        </div>
      `,
      text: `
📧 NEW CONTACT MESSAGE
====================

👤 Name: ${name}
📧 Email: ${email}
📅 Date: ${new Date().toLocaleString()}
🖥️ Source: Contact Form

💬 Message:
-----------
${message}

---
This message was sent from the contact form at fernando-feijoo.com
Configuration used: ${workingConfig.name}
      `,
    };

    console.log("📤 Sending email with working configuration...");
    console.log(
      `📧 Using: ${workingConfig.name} (${workingConfig.host}:${workingConfig.port})`,
    );
    console.log("📧 From:", mailOptions.from);
    console.log("📧 To:", mailOptions.to);
    console.log("📧 Subject:", mailOptions.subject);

    // Send the email with detailed logging
    const info = await workingTransporter.sendMail(mailOptions);

    console.log("🎉 Email sent successfully!");
    console.log("📧 Message ID:", info.messageId);
    console.log("📧 Response:", info.response);
    if (info.envelope) console.log("📧 Envelope:", info.envelope);
    if (info.accepted?.length) console.log("✅ Accepted:", info.accepted);
    if (info.rejected?.length) console.log("❌ Rejected:", info.rejected);
    if (info.pending?.length) console.log("⏳ Pending:", info.pending);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      },
    );
  } catch (error) {
    console.error("❌ Error in contact endpoint:", error);
    console.error(
      "Stack trace:",
      error instanceof Error ? error.stack : "No stack trace",
    );

    // Log specific SMTP errors with more detail
    if (error && typeof error === "object") {
      if ("code" in error) {
        console.error("🚨 SMTP Error Code:", error.code);
      }
      if ("response" in error) {
        console.error("🚨 SMTP Error Response:", error.response);
      }
      if ("responseCode" in error) {
        console.error("🚨 SMTP Response Code:", error.responseCode);
      }
      if ("command" in error) {
        console.error("🚨 SMTP Command:", error.command);
      }
    }

    // Additional debugging info
    console.error("🔍 Environment check:");
    console.error("  SMTP_USER defined:", !!import.meta.env.SMTP_USER);
    console.error("  SMTP_PASS defined:", !!import.meta.env.SMTP_PASS);
    console.error("  CONTACT_EMAIL:", import.meta.env.CONTACT_EMAIL);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
