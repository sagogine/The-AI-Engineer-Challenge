class ELI5App {
    constructor() {
        this.apiKey = null;
        this.apiUrl = null;
        this.appVersion = '1.0.0';
        this.lastUpdate = Date.now();
        
        try {
            this.init();
        } catch (error) {
            console.error('❌ Error initializing ELI5App:', error);
        }
    }

    init() {
        console.log('🚀 Initializing ELI5 App...');
        
        try {
            this.loadConfiguration();
            this.bindEvents();
            this.hideApiKeySection();
            console.log('✅ ELI5 App initialized successfully');
        } catch (error) {
            console.error('❌ Error in init:', error);
        }
    }

    loadConfiguration() {
        try {
            if (window.ELI5_CONFIG) {
                this.apiKey = this.getApiKey();
                this.apiUrl = this.getApiUrl();
                console.log('✅ Configuration loaded:', {
                    hasApiKey: !!this.apiKey,
                    apiUrl: this.apiUrl,
                    environment: window.ELI5_CONFIG.environment
                });
            } else {
                console.error('❌ ELI5_CONFIG not found');
            }
        } catch (error) {
            console.error('❌ Error loading configuration:', error);
        }
    }

    getApiKey() {
        if (window.ELI5_CONFIG && window.ELI5_CONFIG.apiKey) {
            return window.ELI5_CONFIG.apiKey;
        }
        return null;
    }

    getApiUrl() {
        // Check if config has explicit API URL
        if (window.ELI5_CONFIG && window.ELI5_CONFIG.apiUrl) {
            return window.ELI5_CONFIG.apiUrl;
        }
        
        // Default to localhost for development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:8000/api/chat';
        } else {
            // For production, use relative path
            return '/api/chat';
        }
    }

    bindEvents() {
        try {
            // Explain button
            document.getElementById('explain-btn').addEventListener('click', () => {
                this.handleExplain();
            });

            // Copy button
            document.getElementById('copy-btn').addEventListener('click', () => {
                this.copyToClipboard();
            });

            // Complexity slider - removed automatic header update
            document.getElementById('complexity').addEventListener('input', () => {
                // Don't update the header automatically - only update when explaining
            });

            // Topic input
            document.getElementById('topic').addEventListener('input', (e) => {
                console.log('📝 Topic input:', e.target.value);
            });

            // Enter key in topic input
            document.getElementById('topic').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleExplain();
                }
            });

            console.log('✅ Event listeners bound successfully');
        } catch (error) {
            console.error('❌ Error binding events:', error);
        }
    }

    hideApiKeySection() {
        const apiKeySection = document.querySelector('.api-key-section');
        if (apiKeySection) {
            apiKeySection.style.display = 'none';
        }
    }

    updateComplexityLabel(complexity) {
        const resultTitle = document.getElementById('result-title');
        if (resultTitle && resultTitle.textContent !== 'Explanation') {
            const complexityLevels = {
                '1': 'ELI5 (Explain Like I\'m 5)',
                '2': 'Beginner',
                '3': 'Intermediate',
                '4': 'Advanced',
                '5': 'Expert'
            };
            resultTitle.textContent = `${complexityLevels[complexity]} Explanation`;
        }
    }

    showLoading(complexity) {
        console.log('🔄 Showing loading...');
        const loadingElement = document.getElementById('loading');
        const resultTitle = document.getElementById('result-title');
        
        if (loadingElement) {
            loadingElement.classList.remove('hidden');
            
            // Update loading message based on complexity
            const loadingText = document.querySelector('#loading p');
            if (loadingText) {
                const complexityLevels = {
                    '1': 'Thinking like a 5-year-old... 🤔',
                    '2': 'Breaking it down simply... 📚',
                    '3': 'Building up the concepts... 🧱',
                    '4': 'Adding technical details... ⚙️',
                    '5': 'Going deep into the topic... 🔬'
                };
                loadingText.textContent = complexityLevels[complexity] || 'Processing your request...';
            }
        }
        
        if (resultTitle) {
            const complexityLevels = {
                '1': 'ELI5 (Explain Like I\'m 5)',
                '2': 'Beginner',
                '3': 'Intermediate',
                '4': 'Advanced',
                '5': 'Expert'
            };
            resultTitle.textContent = `${complexityLevels[complexity]} Explanation`;
        }
        
        console.log('✅ Loading shown');
    }

    hideLoading() {
        console.log('🔍 Hiding loading...');
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.classList.add('hidden');
            console.log('✅ Loading hidden');
        } else {
            console.error('❌ Loading element not found');
        }
    }

    showResults() {
        console.log('🔍 Showing results...');
        const resultsElement = document.getElementById('results');
        if (resultsElement) {
            resultsElement.classList.remove('hidden');
            console.log('✅ Results shown');
        } else {
            console.error('❌ Results element not found');
        }
    }

    hideResults() {
        console.log('🔍 Hiding results...');
        const resultsElement = document.getElementById('results');
        if (resultsElement) {
            resultsElement.classList.add('hidden');
            console.log('✅ Results hidden');
        } else {
            console.error('❌ Results element not found');
        }
    }

    showError(message) {
        console.log('🔍 Showing error:', message);
        const errorElement = document.getElementById('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
            console.log('✅ Error shown');
        } else {
            console.error('❌ Error element not found');
        }
    }

    hideError() {
        console.log('🔍 Hiding error...');
        const errorElement = document.getElementById('error');
        if (errorElement) {
            errorElement.classList.add('hidden');
            console.log('✅ Error hidden');
        } else {
            console.error('❌ Error element not found');
        }
    }

    async handleExplain() {
        console.log('🚀 handleExplain called');
        
        const topic = document.getElementById('topic').value.trim();
        const complexity = document.getElementById('complexity').value;
        
        console.log('🔍 Form values:', { topic, complexity });
        console.log('🔍 API Configuration:', { 
            apiKey: this.apiKey ? `${this.apiKey.substring(0, 10)}...` : 'NOT SET',
            apiUrl: this.apiUrl,
            configExists: !!window.ELI5_CONFIG
        });
        
        if (!topic) {
            console.log('❌ No topic entered');
            this.showError('Please enter a topic to explain');
            return;
        }
        
        if (!this.apiKey) {
            console.log('❌ No API key configured');
            this.showError('Please configure your OpenAI API key in config.js');
            return;
        }
        
        console.log('✅ Validation passed, showing loading...');
        this.showLoading(complexity);
        this.hideError();
        this.hideResults();
        
        try {
            console.log('📚 Getting explanation...');
            const explanation = await this.getExplanation(topic, complexity);
            console.log('✅ Explanation received, length:', explanation.length);
            
            console.log('🖥️ Displaying results...');
            this.displayResults(explanation, topic, complexity);
            console.log('✅ Results displayed');
            
        } catch (error) {
            console.error('❌ Error in handleExplain:', error);
            this.showError(error.message);
        } finally {
            console.log('🔚 Hiding loading...');
            this.hideLoading();
        }
    }

    async getExplanation(topic, complexity) {
        console.log('📚 getExplanation called with:', { topic, complexity });
        
        const complexityLevels = {
            '1': 'ELI5 (Explain Like I\'m 5)',
            '2': 'Beginner',
            '3': 'Intermediate',
            '4': 'Advanced',
            '5': 'Expert'
        };
        
        const developerMessage = `You are a teacher. Explain the topic as if teaching someone at a ${complexityLevels[complexity]} level.

        Please structure your response with:
        - A simple, clear explanation
        - Key concepts broken down
        - Real-world examples or analogies
        - Visual descriptions that could be drawn
        
        Make it engaging and easy to understand for the specified complexity level.`;
        
        const userMessage = `Please explain: ${topic}`;
        
        console.log('📡 Making API request with:', { 
            developerMessage: developerMessage.substring(0, 100) + '...', 
            userMessage,
            apiUrl: this.apiUrl,
            hasApiKey: !!this.apiKey
        });
        
        const requestBody = {
            developer_message: developerMessage,
            user_message: userMessage,
            model: 'gpt-4.1-mini',
            api_key: this.apiKey
        };
        
        console.log('📡 Request body:', requestBody);
        
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        console.log('📡 API response received, status:', response.status);
        console.log('📡 API response headers:', response.headers);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ API error:', {
                status: response.status,
                statusText: response.statusText,
                errorText: errorText,
                url: response.url
            });
            
            if (response.status === 501) {
                throw new Error('API endpoint not implemented. Please check your backend API configuration.');
            } else {
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }
        }
        
        console.log('✅ API response OK, starting streaming...');
        
        // Handle streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = '';
        let chunkCount = 0;
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                console.log('📝 Streaming complete, total chunks:', chunkCount);
                break;
            }
            
            const chunk = decoder.decode(value, { stream: true });
            result += chunk;
            chunkCount++;
            
            console.log(`📝 Chunk ${chunkCount}: "${chunk.substring(0, 50)}${chunk.length > 50 ? '...' : ''}"`);
            
            // Update the result content in real-time
            this.updateStreamingResult(result);
        }
        
        console.log('✅ Streaming complete, final result length:', result.length);
        
        return result;
    }

    updateStreamingResult(result) {
        const resultContent = document.getElementById('result-content');
        if (resultContent) {
            resultContent.innerHTML = this.formatMarkdown(result);
        }
    }

    displayResults(explanation, topic, complexity) {
        console.log('🖥️ displayResults called with:', { topic, complexity, explanationLength: explanation.length });
        
        const resultContent = document.getElementById('result-content');
        if (resultContent) {
            resultContent.innerHTML = this.formatMarkdown(explanation);
            console.log('✅ Result content updated');
        } else {
            console.error('❌ Result content element not found');
        }
        
        this.updateComplexityLabel(complexity);
        this.showResults();
        console.log('✅ Results displayed successfully');
    }

    formatMarkdown(text) {
        // Simple markdown-like formatting
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^/, '<p>')
            .replace(/$/, '</p>');
    }

    copyToClipboard() {
        const resultContent = document.getElementById('result-content');
        if (resultContent) {
            const textToCopy = resultContent.textContent || resultContent.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const copyBtn = document.getElementById('copy-btn');
                if (copyBtn) {
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                    }, 2000);
                }
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }

    updateLoadingMessage(message) {
        const loadingText = document.querySelector('#loading p');
        if (loadingText) {
            loadingText.textContent = message;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.eli5App = new ELI5App();
});

// Add some helpful console messages
console.log('🎓 ELI5 App Loaded!');
console.log('💡 Enter a topic and get explanations at different complexity levels');
console.log('🔑 Configure your API key in config.js');
console.log('🎯 Ready to explain any topic!');
