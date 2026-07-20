# 🚀 Smooth Animated Portfolio Website

A modern, smooth portfolio website built with React and GSAP animations. Features seamless section transitions, scroll-triggered animations, and a working contact form with email integration.

## ✨ Features

- **Smooth GSAP Animations**: Professional animations using GSAP with ScrollTrigger
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Section-based Layout**: Hero, About, Services, Portfolio, and Contact sections
- **Working Contact Form**: Backend integration with Gmail for contact inquiries
- **Modern UI/UX**: Beautiful gradients, smooth transitions, and interactive elements
- **Performance Optimized**: 60fps animations using GSAP best practices

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **GSAP** - Animation library
  - ScrollTrigger - Scroll-based animations
  - useGSAP hook - React integration
- **CSS3** - Styling with modern features

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Clone the repository:
```bash
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your Gmail credentials in `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=where-to-receive-emails@example.com
PORT=3001
```

**Important**: To use Gmail, you need to:
- Enable 2-Step Verification on your Google account
- Generate an App Password:
  1. Go to https://myaccount.google.com/apppasswords
  2. Select "Mail" and your device
  3. Copy the 16-character password
  4. Use this password in EMAIL_PASS

5. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

## 🎨 Project Structure

```
portfolio-site/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing section with animated title
│   │   ├── Hero.css
│   │   ├── About.jsx          # About section with cards
│   │   ├── About.css
│   │   ├── Services.jsx       # Services grid with hover effects
│   │   ├── Services.css
│   │   ├── Portfolio.jsx      # Project showcase with parallax
│   │   ├── Portfolio.css
│   │   ├── Contact.jsx        # Contact form with validation
│   │   └── Contact.css
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── server.js             # Express server
│   ├── .env.example          # Environment variables template
│   └── package.json
├── package.json
└── README.md
```

## 🎭 GSAP Animation Features

### Implemented Animations:

1. **Hero Section**
   - Sequential timeline for title, subtitle, and CTA
   - Bouncing scroll indicator

2. **Section Reveals**
   - Fade and slide up on scroll
   - Smooth scrubbing with ScrollTrigger

3. **About Cards**
   - Alternating left/right entrances
   - Scale animation on profile image

4. **Services**
   - Staggered card reveals
   - Rotating number on hover
   - Scale transitions

5. **Portfolio**
   - Image parallax scrolling
   - Overlay fade on hover
   - Smooth grid animations

6. **Contact Form**
   - Input scale on focus
   - Success message animation
   - Smooth validation feedback

## 🔧 Customization

### Change Colors

Edit the gradient colors in CSS files:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Animations

Adjust GSAP animations in component files:
```javascript
gsap.from(element, {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Use the `section` class for consistent styling

## 📧 Email Configuration

### Using Gmail

1. Enable 2-Step Verification
2. Generate App Password
3. Add credentials to `.env`

### Using Other Email Services

Modify `server/server.js` transporter configuration:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 🚀 Deployment

### Frontend (Vercel, Netlify)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder

### Backend (Heroku, Railway, Render)

1. Push the `server` directory to your hosting
2. Set environment variables in hosting platform
3. Start command: `npm start`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- **GSAP** - Amazing animation library
- **React** - Powerful UI framework
- **Nodemailer** - Simple email solution

## 📞 Support

For issues or questions, please open an issue on the repository or contact through the website form.

---

Built with ❤️ using React + GSAP
