#!/usr/bin/env python3
"""
Simple HTTP server for serving the ELI5 frontend locally.
Run this script from the frontend directory to test the application.
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

def main():
    # Change to the directory where this script is located
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    PORT = 8001
    
    # Create a simple HTTP server
    Handler = http.server.SimpleHTTPRequestHandler
    
    # Add CORS headers for development
    class CORSRequestHandler(Handler):
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            super().end_headers()
    
    try:
        with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
            print(f"🚀 ELI5 Frontend Server Started!")
            print(f"📱 Open your browser and go to: http://localhost:{PORT}")
            print(f"📁 Serving files from: {script_dir}")
            print(f"🔄 Press Ctrl+C to stop the server")
            print(f"🔗 Make sure your API backend is running on port 8000")
            print("-" * 50)
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try using a different port or stop the process using port {PORT}")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
