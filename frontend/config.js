// ELI5 App Configuration
// This file handles frontend configuration
// API key is managed server-side for security

window.ELI5_CONFIG = {
    // API endpoint URL
    // For production, this should be your deployed API endpoint
    // For development, this will be localhost:8000
    apiUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:8000/api/chat' 
        : 'https://ai-engineer-challenge-api.vercel.app/api/chat',
    
    // App version and settings
    version: '1.0.0',
    environment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'development' : 'production'
};

// Security Notes:
// 1. API key is managed server-side only
// 2. Frontend never sees or handles API keys
// 3. All OpenAI API calls go through our backend
// 4. Backend handles authentication and rate limiting
