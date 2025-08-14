# ELI5 App - Production Deployment Guide

## 🚀 Quick Start

1. **Configure API Key:**
   ```javascript
   // In config.js
   window.ELI5_CONFIG = {
       apiKey: 'your-actual-openai-api-key',
       apiUrl: '/api/chat'
   };
   ```

2. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 🔐 Security Best Practices

### API Key Management
- **NEVER** commit API keys to version control
- Use environment variables in production
- Consider server-side proxy for API calls
- Implement rate limiting

### Environment Configuration
```bash
# .env.local (for local development)
OPENAI_API_KEY=your-key-here
API_URL=http://localhost:8000/api/chat

# Production environment variables
OPENAI_API_KEY=your-production-key
API_URL=https://yourdomain.com/api/chat
```

## 🌐 Deployment Options

### Vercel (Recommended)
- Automatic deployments from Git
- Built-in environment variable support
- Global CDN
- Free tier available

### Netlify
- Similar to Vercel
- Good for static sites
- Environment variable support

### Traditional Hosting
- Upload files to web server
- Configure environment variables
- Set up HTTPS

## 📁 File Structure
```
frontend/
├── index.html          # Main app
├── styles.css          # Styling
├── script.js           # App logic
├── config.js           # Configuration (configure here)
└── DEPLOYMENT.md       # This file
```

## 🔧 Configuration

### Development
```javascript
// config.js
window.ELI5_CONFIG = {
    apiKey: 'your-dev-key',
    apiUrl: 'http://localhost:8000/api/chat',
    environment: 'development'
};
```

### Production
```javascript
// config.js
window.ELI5_CONFIG = {
    apiKey: 'your-production-key',
    apiUrl: '/api/chat',
    environment: 'production'
};
```

## 🚨 Important Notes

1. **API Key Security:** Never expose API keys in client-side code
2. **HTTPS:** Always use HTTPS in production
3. **Rate Limiting:** Implement rate limiting on your API
4. **Monitoring:** Set up error monitoring and logging
5. **Backup:** Keep backups of your configuration

## 📞 Support

For issues or questions:
1. Check the console for errors
2. Verify API key configuration
3. Test API endpoint connectivity
4. Check network requests in browser dev tools
