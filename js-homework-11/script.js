const http = require("http");
const os = require("os");
const path = require("path");
let userName = os.userInfo().username;
const sayHello = require("./personalmodule");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
//************************* Task 1 *************************************
  
  // response.end(`
  // <h1>System information</h1>    
  // <p>Current user name:${os.userInfo().username}</p>
  // <p>OS type: ${os.type()}</p>
  // <p>System time: ${Math.floor(os.uptime()/60)}</p>
  // <p>Current work directory: ${process.cwd()}</p>
  // <p>System file name: ${path.basename(__filename)}</p>
  // `);
// ************************ Task 2 ****************************************
  // response.end(sayHello(userName));
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');