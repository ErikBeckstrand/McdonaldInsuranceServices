# GitHub Pages Deployment Guide for McDonald Insurance Services

## Overview
This site is configured to deploy to GitHub Pages using the `gh-pages` package with a custom domain: **mcdinserv.com**

---

## Prerequisites

✅ GitHub repository: `https://github.com/ErikBeckstrand/McdonaldInsuranceServices`
✅ Custom domain: `mcdinserv.com`
✅ DNS provider access (to configure domain)

---

## Step 1: Install gh-pages Package

Run this command to install the deployment package:

```bash
npm install --save-dev gh-pages
```

---

## Step 2: Build and Deploy to GitHub Pages

Deploy your site with a single command:

```bash
npm run deploy
```

This command will:
1. Run `npm run build` (via the `predeploy` script)
2. Create the `dist` folder with your built site
3. Push the contents to the `gh-pages` branch on GitHub
4. Make your site available at GitHub Pages

---

## Step 3: Configure GitHub Repository Settings

1. Go to your GitHub repository: `https://github.com/ErikBeckstrand/McdonaldInsuranceServices`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

---

## Step 4: Configure Custom Domain (mcdinserv.com)

### A. In GitHub (Repository Settings)

1. In the **Pages** section (same place as Step 3)
2. Under **Custom domain**, enter: `mcdinserv.com`
3. Click **Save**
4. Check **Enforce HTTPS** (after DNS propagates)

### B. In Your DNS Provider (Domain Registrar)

You need to add DNS records to point `mcdinserv.com` to GitHub Pages.

**Option 1: Using A Records (Root Domain)**

Add these 4 A records pointing to GitHub Pages IPs:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**AND add a CNAME for www:**

```
Type: CNAME
Name: www
Value: erikbeckstrand.github.io
```

**Option 2: Using CNAME (Subdomain - Not Recommended for Root)**

If your DNS provider supports ALIAS/ANAME records:

```
Type: CNAME
Name: @
Value: erikbeckstrand.github.io
```

---

## Step 5: Verify Deployment

### Check Build Status
1. After running `npm run deploy`, check GitHub repository
2. Look for `gh-pages` branch - it should exist with your built files

### Check GitHub Pages Status
1. Go to Settings > Pages
2. You should see: "Your site is published at https://mcdinserv.com"
3. Initial deployment takes 1-10 minutes

### Check DNS Propagation
```bash
# Check if DNS is pointing correctly
nslookup mcdinserv.com

# Should show GitHub Pages IPs:
# 185.199.108.153, 185.199.109.153, etc.
```

DNS propagation can take 1-48 hours depending on your provider.

---

## Configuration Files Explained

### package.json
```json
{
  "homepage": "https://mcdinserv.com",
  "scripts": {
	"predeploy": "npm run build",
	"deploy": "gh-pages -d dist"
  }
}
```
- `homepage`: Tells React the base URL
- `predeploy`: Automatically builds before deploying
- `deploy`: Pushes `dist` folder to `gh-pages` branch

### vite.config.js
```javascript
{
  base: '/', // Root path for custom domain
  build: {
	outDir: 'dist'
  }
}
```

### public/CNAME
```
mcdinserv.com
```
- Required for custom domain on GitHub Pages
- Automatically copied to `dist` folder during build

### public/.nojekyll
- Empty file that prevents GitHub from processing files with Jekyll
- Required for Vite/React apps on GitHub Pages

---

## React Router Fix (Already Configured)

Your site uses React Router, which requires special handling for GitHub Pages:

✅ **Already Implemented:**
- `404.html` redirect to `index.html` (GitHub Pages handles this)
- `public/_redirects` for Netlify-style routing
- Client-side routing in `router.jsx`

**If 404 errors occur on page refresh:**

Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
	<meta charset="utf-8">
	<title>McDonald Insurance Services</title>
	<script>
	  // Redirect 404s to index.html for client-side routing
	  sessionStorage.redirect = location.href;
	</script>
	<meta http-equiv="refresh" content="0;URL='/index.html'">
  </head>
  <body></body>
</html>
```

And add to `index.html` in `<head>`:

```html
<script>
  (function() {
	var redirect = sessionStorage.redirect;
	delete sessionStorage.redirect;
	if (redirect && redirect !== location.href) {
	  history.replaceState(null, null, redirect);
	}
  })();
</script>
```

---

## Deployment Workflow

### Initial Deployment
```bash
npm run deploy
```

### After Making Changes
```bash
# 1. Make your code changes
# 2. Test locally
npm run dev

# 3. Deploy to GitHub Pages
npm run deploy
```

That's it! The deploy script handles building and pushing to GitHub.

---

## Troubleshooting

### Issue: Site shows 404
**Solution:** 
- Check GitHub Settings > Pages > Source is set to `gh-pages` branch
- Wait a few minutes for deployment to complete

### Issue: Site loads but pages are blank
**Solution:**
- Check browser console for errors
- Verify `base: '/'` in `vite.config.js`
- Verify `homepage` in `package.json` matches your domain

### Issue: Routing doesn't work (404 on refresh)
**Solution:**
- Add the `404.html` redirect script mentioned above
- This is a limitation of GitHub Pages with SPAs

### Issue: Custom domain not working
**Solution:**
- Verify DNS records are correct (A or CNAME)
- Check DNS propagation: `nslookup mcdinserv.com`
- Wait up to 48 hours for DNS propagation
- Ensure `CNAME` file exists in `public` folder

### Issue: HTTPS not working
**Solution:**
- DNS must be fully propagated first
- Go to Settings > Pages > Check "Enforce HTTPS"
- Wait a few minutes for SSL certificate provisioning

### Issue: Assets/Images not loading
**Solution:**
- Verify files are in `public` folder
- Paths should be absolute: `/logo.png` not `./logo.png`
- Check `base: '/'` in `vite.config.js`

---

## Advantages of This Setup

✅ **One-Command Deployment**: `npm run deploy`
✅ **Custom Domain Support**: `mcdinserv.com` instead of `username.github.io/repo`
✅ **Free Hosting**: No cost from GitHub
✅ **HTTPS**: Free SSL certificate from GitHub
✅ **Version Control**: Automatic versioning through git
✅ **Rollback**: Can revert to previous deployments easily

---

## Alternative: GitHub Actions (More Advanced)

If you want automated deployment on every push to `master`:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
	branches: [ master ]

jobs:
  build-and-deploy:
	runs-on: ubuntu-latest
	steps:
	  - uses: actions/checkout@v3

	  - name: Setup Node
		uses: actions/setup-node@v3
		with:
		  node-version: '18'

	  - name: Install dependencies
		run: npm ci

	  - name: Build
		run: npm run build

	  - name: Deploy
		uses: peaceiris/actions-gh-pages@v3
		with:
		  github_token: ${{ secrets.GITHUB_TOKEN }}
		  publish_dir: ./dist
```

This automates deployment but requires GitHub Actions knowledge.

---

## DNS Provider Specific Instructions

### GoDaddy
1. Go to DNS Management
2. Delete existing A records for `@`
3. Add the 4 GitHub Pages A records
4. Add CNAME for `www` → `erikbeckstrand.github.io`

### Namecheap
1. Go to Advanced DNS
2. Add A records for `@` host
3. Add CNAME record for `www`

### Cloudflare
1. Go to DNS settings
2. Add A records (turn OFF orange cloud initially)
3. Add CNAME for `www`
4. After working, you can enable Cloudflare proxy (orange cloud)

---

## Quick Reference

**Deploy Command:**
```bash
npm run deploy
```

**Test Locally:**
```bash
npm run dev
# Visit: http://localhost:51731
```

**Build Only:**
```bash
npm run build
# Creates: dist folder
```

**Preview Build:**
```bash
npm run preview
# Preview the built site locally
```

---

## Support

If you encounter issues:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Verify DNS propagation: https://dnschecker.org/
3. Review GitHub Pages documentation: https://docs.github.com/en/pages

---

## Summary Checklist

- [ ] Install gh-pages: `npm install --save-dev gh-pages`
- [ ] Deploy: `npm run deploy`
- [ ] Configure GitHub Settings > Pages > Branch: `gh-pages`
- [ ] Add custom domain in GitHub: `mcdinserv.com`
- [ ] Configure DNS A records at your domain provider
- [ ] Wait for DNS propagation (1-48 hours)
- [ ] Enable HTTPS in GitHub Settings
- [ ] Test site at https://mcdinserv.com

**After these steps, your site will be live!** 🎉
