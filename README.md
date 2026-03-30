# TypeCash - Earn by Typing

A modern web application where users can earn money by typing text challenges.

## Features

- ⌨️ Typing challenges with WPM and accuracy tracking
- 💰 Earn money for completing typing tasks
- ⚡ Premium mode with 2X earnings
- 🏆 Leaderboard system
- 📱 Mobile responsive design
- 🔒 Anti-cheat protection (no copy-paste)
- 💳 Withdrawal system via PayPal/Crypto

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import repository in Vercel
3. Use these settings:
   - **Framework**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
4. Click Deploy

### Local Development

Simply open `index.html` in your browser - no build process needed.

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # Styles and animations
├── script.js       # All JavaScript functionality
├── manifest.json   # PWA configuration
├── vercel.json     # Vercel deployment config
└── package.json    # Project metadata
```

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: Vercel (Static Hosting)
- **PWA**: Progressive Web App capabilities

## Security Features

- Copy-paste prevention in typing fields
- XSS protection headers
- Content Security Policy
- Secure authentication flows
