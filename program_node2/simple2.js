var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello");
  res.end();
  // 情報を見る
  console.log("URL=" + req.url);
}).listen(8080);

