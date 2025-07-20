const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🧪 Testing Dondominio SMTP Configuration');
console.log('=====================================');

// Check environment variables
console.log('📋 Environment Check:');
console.log('  SMTP_USER:', process.env.SMTP_USER ? '✅ Set' : '❌ Missing');
console.log('  SMTP_PASS:', process.env.SMTP_PASS ? '✅ Set' : '❌ Missing');
console.log('  CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'Using default');
console.log('');

async function testSMTPConfig(config, configName) {
  console.log(`🔧 Testing ${configName}...`);
  console.log(`   Host: ${config.host}:${config.port}`);
  console.log(`   Secure: ${config.secure}`);

  const transporter = nodemailer.createTransporter({
    ...config,
    debug: true,
    logger: false // Disable verbose logging for cleaner output
  });

  try {
    console.log('   🔍 Verifying connection...');
    await transporter.verify();
    console.log(`   ✅ ${configName} - Connection verified!`);

    // Test sending email
    console.log('   📤 Sending test email...');
    const testEmail = {
      from: `"Test Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@fernando-feijoo.com',
      subject: 'SMTP Test - Contact Form Configuration',
      html: `
        <h2>✅ SMTP Test Successful</h2>
        <p>This is a test email to verify that your contact form SMTP configuration is working correctly.</p>
        <p><strong>Configuration:</strong> ${configName}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>If you received this email, your contact form is ready to send messages!</p>
      `,
      text: `
SMTP Test Successful

This is a test email to verify that your contact form SMTP configuration is working correctly.

Configuration: ${configName}
Time: ${new Date().toLocaleString()}

If you received this email, your contact form is ready to send messages!
      `
    };

    const info = await transporter.sendMail(testEmail);
    console.log(`   ✅ ${configName} - Email sent successfully!`);
    console.log(`   📧 Message ID: ${info.messageId}`);
    console.log(`   📧 Response: ${info.response}`);
    return true;

  } catch (error) {
    console.log(`   ❌ ${configName} - Failed:`);
    console.log(`      Error: ${error.message}`);
    if (error.code) console.log(`      Code: ${error.code}`);
    if (error.response) console.log(`      Response: ${error.response}`);
    return false;
  }
}

async function runTests() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('❌ Missing SMTP credentials in .env file');
    console.log('Please add your email credentials to .env:');
    console.log('  SMTP_USER=info@fernando-feijoo.com');
    console.log('  SMTP_PASS=your-password');
    return;
  }

  const configurations = [
    {
      name: 'Dondominio STARTTLS (Port 587)',
      config: {
        host: 'smtp.dondominio.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
          ciphers: 'SSLv3'
        }
      }
    },
    {
      name: 'Dondominio SSL (Port 465)',
      config: {
        host: 'smtp.dondominio.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    },
    {
      name: 'Panel247 SSL (Port 465)',
      config: {
        host: 'smtp.panel247.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    },
    {
      name: 'Fernando-feijoo.com (Port 587)',
      config: {
        host: 'smtp.fernando-feijoo.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    }
  ];

  console.log('🚀 Starting SMTP tests...\n');

  let successfulConfig = null;

  for (const { name, config } of configurations) {
    const success = await testSMTPConfig(config, name);
    if (success && !successfulConfig) {
      successfulConfig = { name, config };
    }
    console.log(''); // Empty line for readability
  }

  console.log('📋 Test Results Summary:');
  console.log('========================');

  if (successfulConfig) {
    console.log(`✅ Working configuration found: ${successfulConfig.name}`);
    console.log('📧 Check your email inbox for the test message');
    console.log('\n🔧 Recommended .env settings:');
    console.log(`SMTP_HOST=${successfulConfig.config.host}`);
    console.log(`SMTP_PORT=${successfulConfig.config.port}`);
    console.log(`SMTP_SECURE=${successfulConfig.config.secure}`);
  } else {
    console.log('❌ No working configuration found');
    console.log('💡 Troubleshooting suggestions:');
    console.log('  1. Verify your email credentials');
    console.log('  2. Check if 2FA is enabled (may need app password)');
    console.log('  3. Contact Dondominio support for SMTP settings');
    console.log('  4. Try accessing webmail with same credentials');
  }
}

// Run the tests
runTests().catch(console.error);
