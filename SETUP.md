# 🚀 Quick Setup Guide

## 🔑 **Step 1: Get Your OpenAI API Key**

1. Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Sign in to your OpenAI account
3. Click "Create new secret key"
4. Copy the key (it starts with `sk-`)

## ⚙️ **Step 2: Configure Your App**

1. Open `frontend/config.js`
2. Replace this line:
   ```javascript
   apiKey: 'your-openai-api-key-here',
   ```
3. With your actual API key:
   ```javascript
   apiKey: 'sk-your-actual-api-key-here',
   ```

## 🧪 **Step 3: Test Your App**

1. Make sure both servers are running:
   - API: `http://localhost:8000` ✅
   - Frontend: `http://localhost:8001` ✅

2. Open [http://localhost:8001](http://localhost:8001) in your browser

3. Try explaining a simple topic like "photosynthesis"

## 🚨 **Troubleshooting**

- **"API key not configured"**: Make sure you replaced the placeholder in `config.js`
- **"Network connection lost"**: Check that both servers are running
- **"401 Unauthorized"**: Verify your API key is correct and has credits

## 🔒 **Security Note**

- Never commit your real API key to git
- The `config.js` file is already in `.gitignore`
- For production, use environment variables

---

**Need help?** Check the full deployment guide in `DEPLOYMENT.md`
