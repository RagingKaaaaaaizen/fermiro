# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Frontend Setup ✅ (Already Done!)

The frontend is already running on `http://localhost:5173`

To restart it if needed:
```bash
npm run dev
```

## Step 2: Backend Setup (For Contact Form) 📧

### 2.1 Configure Gmail

1. **Copy the environment file:**
```bash
cd server
cp .env.example .env
```

2. **Get Gmail App Password:**
   - Go to your Google Account: https://myaccount.google.com/security
   - Enable 2-Step Verification (if not already enabled)
   - Go to App Passwords: https://myaccount.google.com/apppasswords
   - Select "Mail" and generate a password
   - Copy the 16-character password

3. **Edit `.env` file in the `server` folder:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx  # Your 16-char app password
RECIPIENT_EMAIL=where-to-receive@gmail.com
PORT=3001
```

### 2.2 Start the Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:3001`

## Step 3: Test Everything! 🎉

1. Open browser: `http://localhost:5173`
2. Scroll through the sections
3. Fill out the contact form
4. Check your email!

## 🎨 Customize Your Site

### Change Text Content

Edit the components in `src/components/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About section text and cards
- `Services.jsx` - Services list
- `Portfolio.jsx` - Project showcase
- `Contact.jsx` - Contact info

### Change Colors

Search for these gradients in CSS files and replace:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* You can use any colors, e.g.: */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```

### Adjust Animations

Modify GSAP animations in component files:
```javascript
// Make animations faster
duration: 0.5  // default is usually 1

// Change easing
ease: 'power3.out'  // try: 'back.out', 'elastic.out', 'bounce.out'

// Adjust scroll trigger
start: 'top 80%'  // when animation starts
```

## 📱 What's Working?

✅ Smooth scroll animations with GSAP
✅ Section transitions with ScrollTrigger
✅ Responsive design (mobile, tablet, desktop)
✅ Interactive hover effects
✅ Working contact form with email
✅ Modern UI with gradients and shadows

## 🛠️ Need More Features?

Want to add:
- Navigation menu?
- Image gallery?
- Blog section?
- Dark mode?
- Animations customization?

Just let me know what you need!

## 🆘 Troubleshooting

### Frontend not showing?
```bash
npm install
npm run dev
```

### Contact form not working?
1. Check `.env` file in server folder
2. Make sure backend is running (`npm start` in server folder)
3. Check Gmail App Password is correct
4. Look for errors in terminal

### Animations not smooth?
- Clear browser cache
- Check if you're using a modern browser (Chrome, Firefox, Safari, Edge)

## 📚 Learn More

- [GSAP Documentation](https://gsap.com/docs/v3/)
- [React Documentation](https://react.dev/)
- [Nodemailer Guide](https://nodemailer.com/)

---

**Enjoy building your portfolio! 🎨✨**
