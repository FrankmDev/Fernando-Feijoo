# Vercel Deployment Guide for Fernando Feijoo Portfolio

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub repository with your code
- Vercel account (free tier available)
- Environment variables ready

### 2. Automatic Deployment via GitHub

1. **Connect Repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as an Astro project

2. **Configure Project Settings:**
   - Framework Preset: `Astro`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Node.js Version: `18.x`

### 3. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```bash
# Email Configuration (Required for contact form)
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=info@fernando-feijoo.com
SMTP_PASS=your-email-password
CONTACT_EMAIL=info@fernando-feijoo.com

# Node.js Configuration
NODE_OPTIONS=--max-old-space-size=4096
```

### 4. Deploy!
- Click "Deploy"
- Vercel will automatically build and deploy your site
- You'll get a `.vercel.app` URL immediately

## 🔧 Project Configuration

The project is already configured with:

### Vercel Adapter
- `@astrojs/vercel` adapter installed
- Hybrid output mode for static + serverless
- API routes support enabled

### Build Configuration
- Node.js 18.x specified
- Memory optimization
- Rollup binary compatibility
- Production-ready settings

### Files Created for Vercel:
- `vercel.json` - Vercel-specific configuration
- `.nvmrc` - Node.js version specification
- Updated `astro.config.mjs` - Vercel adapter integration
- `scripts/vercel-build.sh` - Custom build script (if needed)

## 📧 Contact Form Functionality

### Development vs Production

**Development Mode:**
- Form logs submissions to console
- No real emails sent
- Perfect for testing

**Production Mode (Vercel):**
- Real emails sent via SMTP
- Requires environment variables
- Automatic error handling

### Testing Email Setup

1. **Deploy without SMTP config** first to ensure site works
2. **Add email environment variables** in Vercel dashboard
3. **Test contact form** on live site
4. **Check email inbox** for test messages

## 🐛 Common Issues & Solutions

### Issue 1: Rollup Binary Error
```
Error: Cannot find module '@rollup/rollup-linux-x64-gnu'
```

**Solution:** Already fixed in configuration
- Vercel uses Linux x64 architecture
- Optional dependencies handle binary compatibility
- Astro config excludes problematic modules

### Issue 2: API Routes Not Working
```
404 - This page could not be found
```

**Solutions:**
- Ensure `output: "hybrid"` in `astro.config.mjs`
- Check API files are in `src/pages/api/`
- Verify Vercel adapter is properly configured

### Issue 3: Environment Variables Not Working

**Solutions:**
- Add variables in Vercel dashboard (not in code)
- Redeploy after adding environment variables
- Check variable names match exactly

### Issue 4: Build Memory Issues
```
FATAL ERROR: Reached heap limit
```

**Solution:** Already configured
- `NODE_OPTIONS=--max-old-space-size=4096` set
- Optimized build process
- Memory-efficient Rollup configuration

## 🚀 Performance Optimizations

### Automatic Optimizations
- **Static Generation:** Most pages pre-built
- **Image Optimization:** Vercel's automatic image optimization
- **CDN Distribution:** Global edge network
- **Compression:** Automatic gzip/brotli

### Manual Optimizations
- **Lazy Loading:** Images load on demand
- **Code Splitting:** JavaScript bundles optimized
- **CSS Purging:** Unused styles removed
- **Caching Headers:** Configured for optimal performance

## 📊 Monitoring & Analytics

### Built-in Analytics
- Vercel Analytics automatically enabled
- Real-time visitor data
- Performance metrics
- Core Web Vitals tracking

### Contact Form Monitoring
- Email delivery status in Vercel logs
- Error tracking for failed submissions
- Usage analytics

## 🔄 Deployment Workflow

### Automatic Deployments
1. **Push to main branch** → Automatic production deployment
2. **Push to other branches** → Preview deployments
3. **Pull requests** → Automatic preview links

### Manual Deployments
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from local machine
vercel --prod
```

## 🌐 Custom Domain Setup

### Steps to Add Custom Domain
1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add fernando-feijoo.com**
3. **Update DNS records** as instructed by Vercel
4. **SSL certificate** automatically provisioned

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔐 Security Features

### Automatic Security
- **HTTPS/SSL:** Automatically enabled
- **Security Headers:** Configured in `vercel.json`
- **DDoS Protection:** Built-in protection
- **Edge Functions:** Secure API execution

### Environment Security
- **Variables encrypted** at rest
- **No secrets in code** - all in Vercel dashboard
- **Secure API endpoints** with proper validation

## 📱 Mobile & Performance

### Optimizations Included
- **Responsive Design:** Works on all devices
- **Fast Loading:** Optimized assets and images
- **Progressive Enhancement:** Works without JavaScript
- **Accessibility:** WCAG compliant

## 🆘 Troubleshooting

### Build Fails
1. **Check Vercel build logs** for specific errors
2. **Verify package.json** scripts are correct
3. **Test build locally** with `npm run build`
4. **Check Node.js version** compatibility

### Contact Form Issues
1. **Test API endpoint** directly: `yoursite.com/api/contact`
2. **Check environment variables** in Vercel dashboard
3. **Review function logs** in Vercel dashboard
4. **Verify email credentials** work externally

### Performance Issues
1. **Check Vercel Analytics** for slow pages
2. **Optimize images** if not using Vercel's optimization
3. **Review bundle size** in build logs
4. **Enable caching** for static assets

## 📞 Support Resources

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Astro on Vercel Guide](https://vercel.com/guides/deploying-astro-with-vercel)
- [Vercel Discord Community](https://vercel.com/discord)

### Project-Specific Help
- Check `CONTACT-FORM-SETUP.md` for email configuration
- Review `DONDOMINIO-EMAIL-SETUP.md` for SMTP details
- Test with `node test-smtp.js` for email debugging

---

## ✅ Deployment Checklist

### Before Deployment
- [ ] Code pushed to GitHub
- [ ] Environment variables documented
- [ ] Contact form tested locally
- [ ] Images optimized and paths correct
- [ ] Build succeeds locally (`npm run build`)

### During Deployment
- [ ] Vercel project connected to GitHub
- [ ] Environment variables added to Vercel
- [ ] Build completes successfully
- [ ] Preview deployment works

### After Deployment
- [ ] Live site loads correctly
- [ ] Contact form sends emails
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] Analytics tracking

### Production Ready!
🎉 Your Fernando Feijoo portfolio is now live on Vercel!

**Live URL:** `https://your-project.vercel.app`
**Custom Domain:** `https://fernando-feijoo.com` (after DNS setup)
