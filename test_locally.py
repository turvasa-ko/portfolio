import http.server
import socketserver

PORT = 9000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}.")
    print("Open 'http://localhost:9000' to test.")
    httpd.serve_forever()
