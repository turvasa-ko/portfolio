import http.server
import socketserver
import subprocess

PORT = 9000
Handler = http.server.SimpleHTTPRequestHandler

subprocess.run(["python", "-m", "http.server", "9000"])

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()