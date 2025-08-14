# ELI5 Frontend Application

A beautiful, modern web application that explains any topic at varying complexity levels using OpenAI's GPT models.

## 🚀 Features

- **Complexity Slider**: Choose from 5 levels (ELI5 → Expert)
- **Domain Selection**: Specialized explanations for Science, Tech, History, Math, and Literature
- **Real-time Streaming**: See explanations appear as they're generated
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Local Storage**: API key is saved locally for convenience
- **Copy to Clipboard**: Easy sharing of explanations
- **Markdown Support**: Rich text formatting in results

## 🛠️ Prerequisites

- OpenAI API key
- Python backend running (see API setup below)

## 📁 Project Structure

```
frontend/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Start the Backend API

First, make sure your Python backend is running:

```bash
cd api
pip install -r requirements.txt
python app.py
```

The API will be available at `http://localhost:8000`

### 2. Open the Frontend

Simply open `frontend/index.html` in your web browser, or serve it using a local server:

```bash
# Using Python (if available)
cd frontend
python -m http.server 8001

# Using Node.js (if available)
cd frontend
npx serve .

# Using PHP (if available)
cd frontend
php -S localhost:8001
```

### 3. Configure Your API Key

1. Enter your OpenAI API key in the designated field
2. Click "Save" to store it locally
3. The key will be remembered for future sessions

### 4. Start Explaining!

1. Enter any topic you'd like explained
2. Adjust the complexity level using the slider
3. Select the appropriate domain
4. Click "Explain" and watch the magic happen!

## 🎯 Usage Examples

### Example 1: Science (ELI5 Level)
- **Topic**: Photosynthesis
- **Complexity**: ELI5
- **Domain**: Science
- **Result**: Simple explanation with plant analogies

### Example 2: Technology (Intermediate Level)
- **Topic**: Blockchain
- **Complexity**: Intermediate
- **Domain**: Technology
- **Result**: Technical explanation with practical examples

### Example 3: History (Advanced Level)
- **Topic**: French Revolution
- **Complexity**: Advanced
- **Domain**: History
- **Result**: Detailed analysis with historical context

## 🔧 Configuration

### API Endpoint
The frontend automatically detects your environment:
- **Development**: Uses `http://localhost:8000/api/chat`
- **Production**: Uses `/api/chat` (relative path)

### Customization
You can modify the API endpoint in `script.js`:

```javascript
// Change this line in the constructor
this.apiUrl = 'http://localhost:8000/api/chat';
```

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Beautiful spinner during API calls
- **Error Handling**: User-friendly error messages
- **Accessibility**: Proper labels and keyboard navigation

## 🔒 Security Features

- API key is stored locally in browser localStorage
- No sensitive data is sent to external servers
- HTTPS-ready for production deployment

## 🚀 Deployment

### Vercel Deployment
This frontend is ready for Vercel deployment. Simply:

1. Connect your GitHub repository to Vercel
2. Set the build command to: `echo "Static site - no build needed"`
3. Set the output directory to: `frontend`
4. Deploy!

### Other Platforms
The static files can be deployed to any web hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Any traditional web hosting

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Error**
   - Ensure the backend is running on port 8000
   - Check if CORS is properly configured
   - Verify the API endpoint URL

2. **API Key Issues**
   - Make sure you have a valid OpenAI API key
   - Check if the key has sufficient credits
   - Verify the key is properly saved

3. **No Response**
   - Check browser console for errors
   - Verify network connectivity
   - Ensure the topic input is not empty

### Debug Mode
Open browser console (F12) to see detailed logs and error messages.

## 🤝 Contributing

Feel free to contribute improvements:
- UI/UX enhancements
- Additional domain specializations
- Better markdown formatting
- Performance optimizations

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with vanilla HTML, CSS, and JavaScript
- Powered by OpenAI GPT models
- Beautiful icons from Font Awesome
- Modern fonts from Google Fonts

---

**Happy Learning! 🎓✨**