var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('This is my webserver created by an Ansible playbook\n It has NodeJS, NPM and MongoDB \nCreated by Thomas Mitchum\n')
}).listen(3333)

// Console will print the message
console.log('Server running')
