var fs = require('fs');
var http = require('http');
var url = require('url');

// 서버 생성
http.createServer((req, res) => {
      
      var pathname = url.parse(req.url).pathname; // url 변수 선언

      if(pathname == '/') {
            fs.readFile('./index.html', (err,data) => {
                  // 응답을 한다
                  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
                  res.end(data);
            })
      }
      else if(pathname == '/other'){
            fs.readFile('./other.html', (err, data) => {
                  // 응답을 한다
                  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
                  res.end(data);
            })
      }

}).listen(4444, () =>{
      console.log('4444번 포트에서 대기중...');
});