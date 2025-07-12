# 🌟 VIJAY - Full Stack MERN Developer Portfolio

A modern, responsive portfolio website showcasing skills, projects, and experience as a Full Stack MERN Developer. Built with semantic HTML5, modern SCSS, and vanilla JavaScript with performance optimizations.

## ✨ Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern CSS Grid & Flexbox** - Clean, structured layouts
- **SCSS Architecture** - Organized, maintainable stylesheets
- **Smooth Animations** - ScrollReveal animations and CSS transitions
- **Contact Form** - Functional contact form with EmailJS integration
- **SEO Optimized** - Proper meta tags, structured data, and accessibility
- **Performance Optimized** - Lazy loading, prefetching, and optimized assets
- **Dark Mode Support** - Automatic dark mode based on user preference
- **Accessibility Features** - ARIA labels, keyboard navigation, screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server with live reload and SCSS watching
- `npm run build` - Build for production (compile and compress SCSS)
- `npm run sass:watch` - Watch SCSS files for changes
- `npm run sass:build` - Compile SCSS to compressed CSS
- `npm start` - Alias for `npm run dev`

## 🏗️ Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Compiled CSS (auto-generated)
│   ├── scss/
│   │   └── styles.scss     # Source SCSS file
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── Media/              # Images and media files
├── package.json            # Project configuration
└── README.md              # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Color**: `hsl(224, 89%, 60%)` - Blue accent
- **Secondary Color**: `hsl(224, 56%, 12%)` - Dark blue
- **Background**: White/Dark (auto-switching)
- **Text**: Dark gray/Light gray (auto-switching)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Font Weights**: 400, 600, 700
- **Responsive Font Sizes**: Scales with screen size

### Breakpoints
- **Mobile**: 320px - 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: 992px+

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service ID and template ID in `assets/js/main.js`:
   ```javascript
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
       // ... template parameters
   });
   ```

## 🔧 Customization

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding styles in `assets/scss/styles.scss`
3. Add any JavaScript functionality in `assets/js/main.js`

### Modifying Colors
Update the CSS custom properties in the `:root` selector in `assets/scss/styles.scss`:
```scss
:root {
    --hue-color: 224; // Change this value (0-360)
    --first-color: hsl(var(--hue-color), 89%, 60%);
    --second-color: hsl(var(--hue-color), 56%, 12%);
}
```

### Adding Projects
Add new project links in the Work section of `index.html`:
```html
<a href="YOUR_PROJECT_URL" target="_blank" rel="noopener noreferrer" class="work__img">
    <img src="assets/Media/your-project.png" alt="Project Description" loading="lazy">
</a>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Lazy Loading**: Images load only when needed
- **Prefetching**: External links are prefetched on hover
- **Optimized Animations**: Reduced animations for users who prefer reduced motion
- **Efficient Scrolling**: Throttled scroll events for better performance
- **Compressed Assets**: SCSS compiled to compressed CSS for production

## 🎯 SEO Features

- **Meta Tags**: Complete OpenGraph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Semantic HTML**: Proper HTML5 semantic elements
- **Accessibility**: ARIA labels and proper heading hierarchy

## 🔍 Testing

- Test responsive design across different devices
- Validate HTML at [W3C Validator](https://validator.w3.org/)
- Check accessibility with browser dev tools
- Test contact form functionality
- Verify all external links work correctly

## 📈 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the root directory to Netlify
3. Set up continuous deployment from your Git repository

### Other Platforms
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Deploy the built files to `gh-pages` branch
- **Traditional Hosting**: Upload all files via FTP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**VIJAY** - Full Stack MERN Developer

- 🌐 Portfolio: [Your Website URL]
- 💼 LinkedIn: [linkedin.com/in/vijay-kumar-239199306](https://www.linkedin.com/in/vijay-kumar-239199306)
- 🐱 GitHub: [github.com/vkumar36000](https://github.com/vkumar36000)
- 💻 LeetCode: [leetcode.com/u/Vkumar360](https://leetcode.com/u/Vkumar360/)

## 🙏 Acknowledgments

- [BoxIcons](https://boxicons.com/) for the icon library
- [ScrollReveal](https://scrollrevealjs.org/) for scroll animations
- [EmailJS](https://www.emailjs.com/) for contact form functionality
- [Google Fonts](https://fonts.google.com/) for typography
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

---

⭐ **Star this repository if you found it helpful!**