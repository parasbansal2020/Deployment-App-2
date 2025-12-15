const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from KIND + Jenkins + Kubernetes! + Paras");
}).listen(3000);
