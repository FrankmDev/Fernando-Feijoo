import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the request body
    const data = await request.json();
    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email address",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Log the submission to console (development mode)
    console.log("\n📧 CONTACT FORM SUBMISSION:");
    console.log("━".repeat(42));
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`💬 Message: ${message}`);
    console.log("━".repeat(42));
    console.log("✅ Contact form processed successfully\n");

    // In production, you would send an email here using:
    // - EmailJS (recommended for client-side)
    // - Nodemailer with SMTP
    // - SendGrid, Mailgun, or other email service
    // See CONTACT-FORM-SETUP.md for details

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process your message. Please try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
