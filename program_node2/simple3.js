var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello");
  res.end();
  // 情報を見る
  var params = url.parse(req.url, true);
  console.log(params);
}).listen(8080);

