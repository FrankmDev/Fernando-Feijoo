export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email address"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    console.log("\n📧 CONTACT FORM SUBMISSION:");
    console.log("━".repeat(42));
    console.log(`📅 Timestamp: ${(/* @__PURE__ */ new Date()).toISOString()}`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`💬 Message: ${message}`);
    console.log("━".repeat(42));
    console.log("✅ Contact form processed successfully\n");
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process your message. Please try again."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
