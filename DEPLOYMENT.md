# Deployment Checklist for AWS Amplify

## Pre-Deployment Checklist

### ✅ Files Ready
- [x] `index.html` - Main page with all content
- [x] `styles.css` - All styling and responsive design
- [x] `script.js` - Interactivity and animations
- [x] `favicon.svg` - Site icon
- [x] `amplify.yml` - Amplify build configuration
- [x] `.gitignore` - Git ignore rules
- [x] `assets/videos/hero-bg.mp4` - Hero background video
- [x] `assets/images/*` - All service and feature images

### ✅ Content Verified
- [x] Phone: (401) 712-0773
- [x] Address: 218 Wickenden Street, Providence, RI 02903
- [x] Hours: Monday-Saturday 9am-7pm, Sunday Closed
- [x] Services: Device Repair, Laptop Services, Tablet Repair, Used Devices
- [x] Delivery Repair service highlighted

### ✅ Technical Requirements
- [x] Mobile responsive (tested)
- [x] Video autoplay working
- [x] Modal popup functional
- [x] Smooth scrolling
- [x] All images optimized
- [x] Cross-browser compatible

## AWS Amplify Deployment Steps

### Step 1: Push to GitHub

```bash
# Make sure you're in the project directory
cd /Users/gamo/Desktop/WeFixIt

# Add all files
git add .

# Commit
git commit -m "Initial commit: We Fix It website ready for deployment"

# Create main branch
git branch -M main

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/wefixit.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on AWS Amplify

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify/
   - Sign in to your AWS account

2. **Create New App**
   - Click "New app" → "Host web app"
   - Choose "GitHub" as the source
   - Authorize AWS Amplify to access your GitHub

3. **Select Repository**
   - Choose your `wefixit` repository
   - Select the `main` branch

4. **Configure Build Settings**
   - Amplify will auto-detect `amplify.yml`
   - No changes needed - it's already configured

5. **Review and Deploy**
   - Review settings
   - Click "Save and deploy"
   - Wait 2-3 minutes for deployment

6. **Get Your URL**
   - You'll get a URL like: `https://main.d1a2b3c4d5e6f7.amplifyapp.com`
   - You can add a custom domain later if needed

### Step 3: Post-Deployment

- [ ] Test the live site on desktop
- [ ] Test on mobile devices
- [ ] Verify video plays automatically
- [ ] Test all contact links (phone, text, WhatsApp)
- [ ] Check modal popup works
- [ ] Test smooth scrolling

## Optional: Custom Domain

If you want a custom domain (e.g., `wefixit.com`):

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Follow the instructions to configure DNS
4. Wait for SSL certificate provisioning (5-10 minutes)

## Troubleshooting

**Video not playing on AWS:**
- Check file size (should be under 10MB)
- Verify MP4 format (H.264 codec)
- Check browser console for errors

**Images not loading:**
- Verify all files are committed to Git
- Check file paths are correct
- Ensure images are in `assets/images/` folder

**Site not updating:**
- Go to Amplify Console
- Click "Redeploy this version"
- Or push a new commit to trigger rebuild

## Performance Optimization (Optional)

After deployment, you can:
- Enable CloudFront CDN (automatic with Amplify)
- Add image optimization
- Enable compression (automatic)
- Monitor performance in Amplify Console

## Support

If you need help:
- AWS Amplify Docs: https://docs.amplify.aws/
- AWS Support: https://console.aws.amazon.com/support/

---

**Ready to deploy!** Follow Step 1 to push to GitHub, then Step 2 to deploy on AWS Amplify.
