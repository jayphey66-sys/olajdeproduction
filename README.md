# 📸 PhotoBrand - Professional Photography Website

A modern, fully responsive photography portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing commercial and product photography with features like image galleries, lightbox, shop section, blog, and contact form.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Gallery** - Beautiful grid layout with category filtering
- **Lightbox** - Click to expand images with smooth navigation
- **About Page** - Showcase your skills, experience, and testimonials
- **Blog Section** - Share photography tips and industry insights
- **Shop** - Sell prints and products with product listings and ratings
- **Contact Form** - Professional contact form with validation
- **Mobile Menu** - Hamburger navigation for mobile devices
- **Smooth Animations** - CSS and JavaScript animations throughout
- **SEO-Friendly** - Proper HTML structure and meta tags
- **Fast Loading** - Optimized for performance
- **No Dependencies** - Pure HTML, CSS, and JavaScript (no jQuery or frameworks)

## 📁 File Structure

```
photography-website/
├── index.html              # Home page
├── portfolio.html          # Portfolio/gallery page
├── about.html              # About page with testimonials
├── blog.html               # Blog/journal page
├── shop.html               # Shop with products
├── contact.html            # Contact form
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Your photography images
└── README.md               # This file
```

## 🚀 Getting Started

### Local Development

1. **Download/Clone the project** to your computer
2. **Open `index.html`** in your web browser
3. Replace placeholder images in `assets/images/` with your photos
4. Update text content with your information

### Customization

#### 1. Change Brand Name & Contact Info

**In all HTML files**, find and replace:
- `PhotoBrand` → Your brand name
- `hello@photobrand.com` → Your email
- `(123) 456-7890` → Your phone
- `123 Photography Street, Creative City, CC 12345` → Your address

#### 2. Update Images

Replace placeholder images in `assets/images/` with your photos:
- `portfolio-1.jpg` through `portfolio-8.jpg` - Portfolio images
- `about-1.jpg` - Your portrait
- `blog-1.jpg` through `blog-6.jpg` - Blog post images
- `product-1.jpg` through `product-9.jpg` - Shop product images

**Good image sizes:**
- Portfolio: 500x500px (1:1)
- Blog: 600x400px (3:2)
- Products: 400x400px (1:1)

#### 3. Customize Colors

In `assets/css/style.css`, change the color variables:

```css
:root {
    --primary-color: #2c3e50;      /* Main color (dark blue) */
    --accent-color: #e74c3c;       /* Accent color (red) */
    --text-color: #333;            /* Text color */
    --light-bg: #f8f9fa;           /* Light background */
    --white: #ffffff;              /* White */
    --border-color: #e0e0e0;       /* Borders */
}
```

Example color schemes:
- **Professional**: Primary: #2c3e50, Accent: #e74c3c
- **Warm**: Primary: #34495e, Accent: #f39c12
- **Modern**: Primary: #1a1a1a, Accent: #00d4ff
- **Nature**: Primary: #27ae60, Accent: #2ecc71

#### 4. Update Social Media Links

Find the footer and update social links:
```html
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://facebook.com/yourprofile">Facebook</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
<a href="https://pinterest.com/yourprofile">Pinterest</a>
```

#### 5. Set Up Contact Form

The contact form is currently a frontend demo. To make it functional:

**Option A: Use Formspree (Free)**
1. Visit https://formspree.io/
2. Create a new form
3. Replace the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option B: Use EmailJS (Free with limits)**
1. Visit https://www.emailjs.com/
2. Set up your service and template
3. Add EmailJS script to contact.html and update JavaScript

**Option C: Custom Backend (Advanced)**
- Create a server-side script to handle form submissions
- Update the JavaScript fetch call in `assets/js/script.js`

#### 6. Add Google Analytics (Optional)

Add to the `<head>` of all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

## 🌐 Deployment

### Deploy to GitHub Pages (Free)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name it: `yourusername.github.io` or `photography-website`
   - Keep it public
   - Click "Create repository"

2. **Upload Files**
   - Clone: `git clone https://github.com/yourusername/your-repo.git`
   - Copy all files into the cloned folder
   - Run these commands:
     ```bash
     git add .
     git commit -m "Initial commit: photography website"
     git push origin main
     ```

3. **Your Site is Live!**
   - If using `yourusername.github.io`: Visit https://yourusername.github.io
   - If using custom repo: Visit https://yourusername.github.io/your-repo

### Deploy to Netlify (Free, Recommended)

1. Visit https://netlify.com
2. Click "Deploy Site"
3. Drag and drop your `photography-website` folder
4. Get a free .netlify.com domain or connect custom domain

### Deploy to Your Own Hosting

1. Buy hosting (Bluehost, GoDaddy, Hostinger, etc.)
2. Upload files via FTP
3. Point domain to hosting provider
4. Done!

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile hamburger menu
- Touch-friendly buttons
- Optimized images for mobile
- Vertical gallery layout on mobile
- Readable typography on all screen sizes

Test on mobile devices or use DevTools (F12 → Device Toolbar).

## ⚡ Performance Tips

1. **Optimize Images**
   ```bash
   # Use tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - FileOptimizer (Windows)
   ```

2. **Compress Images**
   - Keep JPEG quality at 75-85%
   - Use WebP format when possible
   - Ideal sizes: 
     - Portfolio: 500x500px (max 100KB)
     - Blog: 600x400px (max 80KB)

3. **Browser Caching**
   - Add cache headers on your server
   - Use a CDN for faster global delivery

## 🎨 Typography & Fonts

Currently using system fonts (Segoe UI, Tahoma, etc.). To add Google Fonts:

1. Visit https://fonts.google.com/
2. Choose font (e.g., "Playfair Display" + "Lato")
3. Add to HTML `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;600&display=swap" rel="stylesheet">
   ```
4. Update CSS:
   ```css
   h1, h2, h3 { font-family: 'Playfair Display', serif; }
   body { font-family: 'Lato', sans-serif; }
   ```

## 🔒 Security Considerations

- Never hardcode sensitive information (API keys, passwords)
- Use HTTPS for your domain
- Sanitize any user input if you add backend
- Keep your repository private if it contains sensitive data

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are relative: `assets/images/image.jpg`
- Make sure image files exist
- Clear browser cache (Ctrl+F5)

**Mobile menu not working?**
- Make sure JavaScript is enabled
- Check browser console for errors (F12)
- Verify `assets/js/script.js` is loaded

**Contact form not submitting?**
- Check browser console for errors
- Make sure form has all required fields
- Verify backend service (Formspree, EmailJS, etc.) is set up

**Slow loading?**
- Compress images
- Minimize CSS/JS
- Use a CDN
- Check browser Network tab for slow resources

## 📚 Additional Resources

- **Colors**: https://coolors.co/
- **Icons**: https://fontawesome.com/
- **Images**: https://unsplash.com/, https://pexels.com/
- **Fonts**: https://fonts.google.com/
- **Inspiration**: https://dribbble.com/, https://behance.net/
- **SEO Help**: https://moz.com/beginners-guide-to-seo

## 📝 License

This template is free to use and modify for your photography business.

## 📧 Support

For questions or issues, consider:
- Checking your browser console (F12) for errors
- Verifying file paths and image locations
- Testing on different browsers
- Checking responsiveness on mobile

---

**Happy photography! 📸**
