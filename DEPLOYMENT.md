# Deployment Guide for Render

This guide will help you deploy the Fermiro Refrigeration portfolio website to Render.

## Prerequisites

1. A [Render](https://render.com) account (free tier available)
2. A GitHub repository with this code
3. Email credentials for the contact form

## Deployment Steps

### 1. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New"** → **"Blueprint"**
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click **"Apply"**

### 3. Configure Environment Variables

After deployment, configure the backend service environment variables:

1. Go to your **portfolio-backend** service in Render dashboard
2. Navigate to **Environment** tab
3. Add the following environment variables:

   - `EMAIL_USER`: Your email address (e.g., your Gmail)
   - `EMAIL_PASS`: Your email app password (see below for Gmail setup)
   - `EMAIL_TO`: Email address to receive contact form submissions

### 4. Gmail App Password Setup

If using Gmail:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail"
4. Use this app password for `EMAIL_PASS` (not your regular password)

### 5. Update Frontend API URL

Update the backend API URL in your contact form:

1. Open `src/components/Contact.jsx`
2. Replace the API endpoint with your Render backend URL:
   ```javascript
   const response = await fetch('https://portfolio-backend.onrender.com/api/contact', {
   ```

## Services Deployed

### Frontend (Static Site)
- **URL**: `https://portfolio-frontend.onrender.com`
- **Type**: Static site hosted on Render
- **Build**: Vite production build
- **Location**: `./dist` folder

### Backend (Node.js API)
- **URL**: `https://portfolio-backend.onrender.com`
- **Type**: Web service
- **Runtime**: Node.js
- **Port**: 10000 (Render default)

## Important Notes

### Free Tier Limitations
- Backend service spins down after 15 minutes of inactivity
- First request after inactivity takes ~30 seconds to wake up
- Upgrade to paid plan for always-on service

### Custom Domain (Optional)
1. Go to your frontend service settings
2. Navigate to **Custom Domain**
3. Add your domain and configure DNS as instructed

### CORS Configuration
The backend is configured to accept requests from any origin. For production:
1. Edit `server/server.js`
2. Update CORS origin to your frontend URL:
   ```javascript
   app.use(cors({
     origin: 'https://your-custom-domain.com'
   }));
   ```

## Monitoring

- Check service logs in Render dashboard
- Monitor email delivery success
- Test contact form after deployment

## Troubleshooting

### Contact Form Not Working
1. Check backend service is running
2. Verify environment variables are set
3. Check browser console for CORS errors
4. Verify email credentials are correct

### Build Failures
1. Check build logs in Render dashboard
2. Ensure `package.json` has correct build script
3. Verify Node.js version compatibility

### Images Not Loading
1. Ensure images are in `/public` folder
2. Check image paths start with `/` (e.g., `/logo.png`)
3. Verify images are committed to git

## Cost Estimate

**Free Tier:**
- Frontend: Free (static site)
- Backend: Free (750 hours/month, spins down when idle)

**Paid Plans Start At:**
- Static Site: $1/month
- Web Service: $7/month (always-on)

## Support

For issues specific to Render deployment, visit [Render Documentation](https://render.com/docs)
