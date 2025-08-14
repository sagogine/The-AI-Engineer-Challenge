// ELI5 App Configuration
// This file should be configured with your production settings
// DO NOT commit this file with real API keys to version control

window.ELI5_CONFIG = {
    // Your OpenAI API key - set this in production
    // For security, this should come from environment variables or secure config
    // IMPORTANT: Replace 'your-openai-api-key-here' with your actual OpenAI API key
    // Get your API key from: https://platform.openai.com/account/api-keys
    apiKey: 'your-openai-api-key-here',
    
    // API endpoint URL
    // For production, this should be your deployed API endpoint
    // For development, this will be localhost:8000
    apiUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:8000/api/chat' 
        : 'https://your-api-domain.vercel.app/api/chat',
    
    // App version and settings
    version: '1.0.0',
    environment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'development' : 'production'
};

// Production Security Notes:
// 1. Never expose API keys in client-side code
// 2. Use environment variables or server-side configuration
// 3. Consider using a proxy API that handles authentication server-side
// 4. Implement rate limiting and API key rotation
// 5. Use HTTPS in production

// Check if API key is properly configured
if (window.ELI5_CONFIG.apiKey === 'your-openai-api-key-here') {
    console.error('❌ WARNING: OpenAI API key not configured!');
    console.error('Please update frontend/config.js with your actual API key');
    console.error('Get your API key from: https://platform.openai.com/account/api-keys');
}
