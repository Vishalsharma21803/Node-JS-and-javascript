const http = require('http');
const url = require('url');

// Create a server
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Get the path name
    const pathname = parsedUrl.pathname;

    // Get the query parameters
    const query = parsedUrl.query;

    // Route the request based on the path
    switch (pathname) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, this is the homepage!');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the about page!');
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Contact us at: example@example.com');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
    }
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
