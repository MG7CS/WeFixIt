# We Fix It - Phone Repair Providence RI

A modern, minimalistic one-page website for a phone repair shop in Providence, Rhode Island.

## Features

- **Modern Glassmorphism Design**: Beautiful glass-effect cards with backdrop blur
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Responsive Layout**: Works perfectly on all devices
- **Interactive Elements**: Hover effects and scroll animations
- **Contact Form**: Functional form with validation
- **Light Theme**: Clean, professional appearance with gradient accents

## Design Elements

- Animated gradient background with floating orbs
- Glass-morphic cards with blur effects
- Gradient text for headings
- Minimal icons, focus on typography
- Placeholder sections for images
- Smooth transitions and micro-interactions

## Deployment

### AWS Amplify

1. Push this repository to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your GitHub repository
5. Amplify will auto-detect the `amplify.yml` configuration
6. Deploy!

The site will be live at your Amplify URL.

### Manual Deployment

Simply upload the following files to any web host:
- `index.html`
- `styles.css`
- `script.js`

## Local Development

Open `index.html` in your browser or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #06b6d4;
}
```

### Content
Update text directly in `index.html`

### Images
Replace image placeholders with actual images by updating the `.image-placeholder` divs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 We Fix It. All rights reserved.
