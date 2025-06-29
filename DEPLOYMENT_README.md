# ONGOD Gadget Shop - Multi-Platform Deployment Guide

This project is configured to work with both **Vercel** and **Render** platforms for maximum flexibility and redundancy.

## 🚀 Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ongod-gadget-shop)

### Option 2: Deploy to Render
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

## 📋 Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Render account (free at [render.com](https://render.com))

---

## 🎯 Deploy to Vercel

### Method 1: One-Click Deploy (Easiest)
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Select your repository
4. Configure environment variables (optional)
5. Click "Deploy"

### Method 2: Manual Deploy

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `ongod-gadget-shop` (or your preferred name)
   - Directory: `.` (current directory)
   - Override settings: `N`

5. **Your app will be deployed** to: `https://ongod-gadget-shop.vercel.app`

---

## 🌐 Deploy to Render

### Method 1: One-Click Deploy (Easiest)
1. Click the "Deploy to Render" button above
2. Connect your GitHub account
3. Select your repository
4. Configure environment variables (optional)
5. Click "Create Web Service"

### Method 2: Manual Deploy

1. **Go to Render Dashboard**:
   - Visit [render.com](https://render.com)
   - Sign up/Login with GitHub

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**:
   - **Name**: `ongod-gadget-shop`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

4. **Environment Variables** (Optional):
   ```
   NODE_ENV=production
   PORT=10000
   JWT_SECRET=your_jwt_secret_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete

6. **Your app will be deployed** to: `https://ongod-gadget-shop.onrender.com`

---

## 🔧 Environment Variables

### For Both Platforms:

Add these in your deployment platform's dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `JWT_SECRET` | Secret key for JWT tokens | `my-super-secret-key-123` |
| `EMAIL_USER` | Gmail address for sending emails | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `your-app-password` |
| `PORT` | Server port (auto-set by platforms) | `3002` |

### How to Get Gmail App Password:
1. Enable 2-factor authentication on your Gmail
2. Go to Google Account settings
3. Security → App passwords
4. Generate a new app password

---

## 🌍 Multi-Platform Features

### ✅ Automatic Platform Detection
- The app automatically detects whether it's running on Vercel or Render
- API calls are automatically routed to the correct backend
- No manual configuration needed

### ✅ Cross-Platform Compatibility
- Works seamlessly on both platforms
- Same features and functionality
- Automatic fallback handling

### ✅ Admin Panel Access
Both platforms support admin access:
- **Email**: `admin@ongod.com`
- **Password**: `admin123`
- **Admin URL**: `https://your-app.vercel.app/admin.html` or `https://your-app.onrender.com/admin.html`

---

## 📊 Platform Comparison

| Feature | Vercel | Render |
|---------|--------|--------|
| **Deployment Speed** | ⚡ Very Fast | 🚀 Fast |
| **Free Tier** | ✅ Generous | ✅ Generous |
| **Custom Domains** | ✅ Free | ✅ Free |
| **SSL Certificate** | ✅ Automatic | ✅ Automatic |
| **Cold Start** | ⚡ Minimal | 🕐 Moderate |
| **Build Time** | ⚡ Very Fast | 🚀 Fast |
| **Database Support** | ✅ Add-ons | ✅ Built-in |

---

## 🔄 Switching Between Platforms

The app automatically handles platform switching:

1. **Deploy to Vercel**: App will use Vercel backend
2. **Deploy to Render**: App will use Render backend
3. **Local Development**: App will use localhost:3002

No code changes needed!

---

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check if all dependencies are in `package.json`
   - Ensure `server.js` is the main file

2. **API Calls Fail**:
   - Check environment variables
   - Verify CORS settings in `server.js`

3. **Email Not Working**:
   - Verify Gmail app password
   - Check email environment variables

4. **Admin Panel Not Loading**:
   - Clear browser cache
   - Check if admin.html is accessible

---

## 📞 Support

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Render Support**: [render.com/docs](https://render.com/docs)
- **Project Issues**: Create an issue on GitHub

---

## 🎉 Success!

After deployment, your ONGOD Gadget Shop will be live with:

✅ **User Registration & Login**
✅ **Email Verification**
✅ **Product Browsing**
✅ **Order Management**
✅ **Address Management**
✅ **Admin Panel**
✅ **Google Maps Integration**
✅ **Responsive Design**

**Happy Deploying! 🚀** 