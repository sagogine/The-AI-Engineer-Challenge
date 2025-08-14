# ELI5 App - Production Deployment Guide

## 🚀 Quick Start

This guide will help you deploy your ELI5 app to production with proper API configuration.

## 📋 Prerequisites

- OpenAI API key
- Vercel account (for deployment)
- Python 3.8+ (for local development)

## 🔧 Configuration Steps

### 1. Frontend Configuration

Update `frontend/config.js` with your production settings:

```javascript
window.ELI5_CONFIG = {
    // Your OpenAI API key - set this in production
    apiKey: 'sk-your-actual-openai-api-key-here',
    
    // API endpoint URL - IMPORTANT: Update this to your deployed API domain
    apiUrl: 'https://your-api-domain.vercel.app/api/chat',
    
    version: '1.0.0',
    environment: 'production'
};
```

**⚠️ IMPORTANT:** Replace `your-api-domain.vercel.app` with your actual deployed API domain.

### 2. Backend API Deployment

Deploy your Python API to Vercel:

```bash
# Navigate to the API directory
cd api

# Deploy to Vercel
vercel --prod
```

**Note:** The API will be deployed to a separate domain (e.g., `https://your-api-name.vercel.app`)

### 3. Update Frontend API URL

After deploying the API, copy the API domain and update `frontend/config.js`:

```javascript
apiUrl: 'https://your-api-name.vercel.app/api/chat'
```

### 4. Deploy Frontend

Deploy your frontend to Vercel:

```bash
# Navigate to the root directory
cd ..

# Deploy to Vercel
vercel --prod
```

## 🔍 Troubleshooting

### Common Issues

1. **"API endpoint not implemented" Error**
   - Check that your API is deployed and accessible
   - Verify the API URL in `config.js` matches your deployed API domain
   - Ensure your API has the correct routes configured

2. **CORS Errors**
   - The API is configured to allow all origins (`allow_origins=["*"]`)
   - If you need to restrict origins, update `api/app.py`

3. **API Key Issues**
   - Never commit real API keys to version control
   - Use environment variables in production
   - Consider implementing server-side API key handling

### Testing Your Setup

1. **Test API Endpoint:**
   ```bash
   curl -X GET https://your-api-domain.vercel.app/api/health
   ```
   Should return: `{"status": "ok"}`

2. **Test Frontend:**
   - Open your deployed frontend
   - Check browser console for any errors
   - Try explaining a simple topic

## 🏗️ Architecture

```
Frontend (Static HTML/CSS/JS)
    ↓
Vercel Static Hosting
    ↓
API Calls to Python Backend
    ↓
Python API (FastAPI)
    ↓
OpenAI API
```

## 🔒 Security Considerations

1. **API Keys:** Never expose in client-side code
2. **CORS:** Configure appropriately for production
3. **Rate Limiting:** Implement on your API
4. **HTTPS:** Always use in production

## 📚 Additional Resources

- [Vercel Python Runtime](https://vercel.com/docs/runtimes#python)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [OpenAI API Documentation](https://platform.openai.com/docs)

## 🆘 Need Help?

If you're still experiencing issues:

1. Check the browser console for error messages
2. Verify your API is deployed and accessible
3. Ensure your configuration files are properly set
4. Check Vercel deployment logs

---

**Happy Deploying! 🎉**
