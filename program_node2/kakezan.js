var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  // パラメーターを得る
  var p = url.parse(req.url, true);
  var a = p.query["a"];
  var b = p.query["b"];
  // 計算結果を表示する
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("result=" + (a * b));
  res.end();
}).listen(1234);

