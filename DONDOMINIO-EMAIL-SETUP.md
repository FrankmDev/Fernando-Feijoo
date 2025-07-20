# Dondominio Email Setup & Troubleshooting Guide

## 🚨 Current Issue: Email Not Reaching Inbox

The contact form sends successfully but emails don't arrive at `info@fernando-feijoo.com`. Let's fix this step by step.

## 🔧 Quick Test Script

I've created a test script to verify your SMTP configuration. Run this first:

```bash
node test-smtp.js
```

This will test all possible Dondominio configurations and tell you which one works.

## 📧 Dondominio SMTP Settings

Based on your Dondominio configuration, try these settings in order:

### Configuration 1: STARTTLS (Most Compatible)
```bash
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=587
SMTP_USER=info@fernando-feijoo.com
SMTP_PASS=your-password
```

### Configuration 2: SSL Direct
```bash
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=info@fernando-feijoo.com
SMTP_PASS=your-password
```

### Configuration 3: White Label Server
```bash
SMTP_HOST=smtp.panel247.com
SMTP_PORT=465
SMTP_USER=info@fernando-feijoo.com
SMTP_PASS=your-password
```

### Configuration 4: Domain-Specific Server
```bash
SMTP_HOST=smtp.fernando-feijoo.com
SMTP_PORT=587
SMTP_USER=info@fernando-feijoo.com
SMTP_PASS=your-password
```

## 🐛 Common Issues & Solutions

### Issue 1: "Authentication Failed"
**Possible causes:**
- Wrong password
- 2FA enabled without app password
- Account locked

**Solutions:**
1. **Test webmail access:** Log into `webmail.dondominio.com` with same credentials
2. **Check for 2FA:** If enabled, you may need an app-specific password
3. **Contact Dondominio:** Ask about SMTP authentication requirements

### Issue 2: "Connection Timeout"
**Possible causes:**
- Firewall blocking ports
- Wrong server/port combination
- ISP blocking SMTP

**Solutions:**
1. **Try different ports:** 587, 465, 25
2. **Check firewall:** Ensure ports 587 and 465 are open
3. **Test from different network:** Try mobile hotspot

### Issue 3: "SSL/TLS Errors"
**Possible causes:**
- Certificate mismatch
- Outdated SSL protocols
- Server requires specific encryption

**Solutions:**
1. **Disable SSL verification:** Already configured in the code
2. **Try different protocols:** STARTTLS vs SSL
3. **Update Node.js:** Ensure you have recent version

### Issue 4: Email Sends but Doesn't Arrive
**Possible causes:**
- Going to spam folder
- Server rejects the email silently
- Recipient server issues

**Solutions:**
1. **Check spam folder** in `info@fernando-feijoo.com`
2. **Check server logs:** Look for bounce messages
3. **Try different recipient:** Test with Gmail/Yahoo temporarily

## 🔍 Debugging Steps

### Step 1: Verify Credentials
```bash
# Test basic email access
curl -u "info@fernando-feijoo.com:your-password" \
  "imaps://imap.dondominio.com/INBOX"
```

### Step 2: Test SMTP Connection
```bash
# Use telnet to test SMTP connection
telnet smtp.dondominio.com 587
```

### Step 3: Check DNS Settings
```bash
# Verify MX records
nslookup -type=MX fernando-feijoo.com
```

### Step 4: Run Our Test Script
```bash
node test-smtp.js
```

## 📋 Dondominio-Specific Requirements

Some providers have specific requirements:

1. **SMTP Authentication:** Must be enabled
2. **From Address:** Must match authenticated user
3. **Rate Limiting:** May limit emails per hour
4. **Security:** May require specific ports/encryption

## 🔧 Advanced Configuration

If standard configs don't work, try these advanced settings:

### Option 1: Custom Authentication
```javascript
// In the SMTP config
auth: {
  user: 'info@fernando-feijoo.com',
  pass: 'your-password',
  // Try adding:
  method: 'PLAIN' // or 'LOGIN'
}
```

### Option 2: Custom TLS
```javascript
tls: {
  rejectUnauthorized: false,
  servername: 'smtp.dondominio.com',
  secureProtocol: 'TLSv1_2_method'
}
```

### Option 3: Connection Pooling
```javascript
pool: true,
maxConnections: 1,
rateDelta: 20000,
rateLimit: 5
```

## 📞 Contact Dondominio Support

If nothing works, contact Dondominio with these questions:

1. **SMTP Server Details:**
   - Correct server hostname
   - Supported ports (587, 465, 25)
   - Required encryption (SSL, STARTTLS, PLAIN)

2. **Authentication Requirements:**
   - Does the account need SMTP enabled?
   - Are there IP restrictions?
   - Is 2FA affecting SMTP access?

3. **Sending Restrictions:**
   - Daily/hourly email limits
   - Content filtering rules
   - Blacklisted domains/IPs

## ✅ Success Checklist

When emails start working, you should see:

- [ ] SMTP connection verified
- [ ] Test email received in inbox
- [ ] Contact form emails arriving
- [ ] No errors in server console
- [ ] Proper email formatting

## 🚀 Production Notes

For production deployment:

1. **Environment Variables:** Add all SMTP settings to your hosting platform
2. **Error Monitoring:** Set up alerts for failed emails
3. **Backup Options:** Consider EmailJS as fallback
4. **Testing:** Always test after deployment

---

**Need immediate help?** Run `node test-smtp.js` and share the output - this will show exactly what's failing.
