# Deploy We Fix It to AWS Amplify

Your code is now on GitHub: **https://github.com/MG7CS/WeFixIt**

## Quick Deploy Steps

### 1. Go to AWS Amplify Console
Visit: https://console.aws.amazon.com/amplify/

### 2. Create New App
- Click **"New app"** (top right)
- Select **"Host web app"**

### 3. Connect GitHub
- Choose **"GitHub"** as the source
- Click **"Continue"**
- Authorize AWS Amplify if prompted
- Select repository: **WeFixIt**
- Select branch: **main**
- Click **"Next"**

### 4. Configure Build Settings
Amplify will auto-detect your `amplify.yml` file. You should see:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Nothing to build - static site"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
```

- Leave everything as default
- Click **"Next"**

### 5. Review and Deploy
- Review all settings
- Click **"Save and deploy"**

### 6. Wait for Deployment (2-3 minutes)
You'll see 4 stages:
1. ✓ Provision
2. ✓ Build
3. ✓ Deploy
4. ✓ Verify

### 7. Get Your Live URL
Once complete, you'll see your live URL:
- Format: `https://main.d1a2b3c4d5e6f7.amplifyapp.com`
- Click it to view your live site!

## Post-Deployment Checklist

Test these on your live site:
- [ ] Hero video plays automatically
- [ ] All images load correctly
- [ ] Navigation works and scrolls smoothly
- [ ] "Schedule a Visit" modal opens
- [ ] All phone/text/WhatsApp links work
- [ ] Mobile responsive on actual phone
- [ ] Contact information is correct

## Custom Domain (Optional)

To use your own domain (e.g., `wefixit.com`):

1. In Amplify Console, click **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for SSL certificate (5-10 minutes)

## Automatic Deployments

Every time you push to GitHub, Amplify will automatically:
- Pull the latest code
- Build and deploy
- Update your live site

To update the site:
```bash
# Make changes to your files
git add .
git commit -m "Your update message"
git push
```

## Troubleshooting

**Build fails:**
- Check the build logs in Amplify Console
- Verify `amplify.yml` is in the root directory

**Video not playing:**
- Check file size (under 10MB recommended)
- Verify MP4 format

**Images not loading:**
- Verify all files are committed to Git
- Check file paths are correct

## Your Site Info

- **GitHub**: https://github.com/MG7CS/WeFixIt
- **Local**: http://localhost:8000
- **Amplify URL**: (will be provided after deployment)

---

**Ready to deploy!** Just follow the steps above in the AWS Amplify Console.
