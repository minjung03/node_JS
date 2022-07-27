var fs = require('fs');
var http = require('http');
var url = require('url');

// 서버 생성
http.createServer((req, res) => {
      var pathname = url.parse(req.url).pathname; // url 변수 선언
      if(pathname == '/') { // 루트로 접속한다면
            fs.readFile('./index1.html', (err,data) => { // index
                  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});    
                  res.end(data); 
            })
      }
      else if(pathname == '/1.html') { // 루트로 접속한다면
            fs.readFile('./index1.html', (err,data) => {
                  res.end('<h3>HTML</h3>'); 
                  res.end('<p>The WorldWide Web</p>'); 
            })
      }
      else if(pathname == '/2.html') { // 루트로 접속한다면
            fs.readFile('./index1.html', (err,data) => {
                  res.end('<h3>CSS</h3>'); 
                  res.end('<p>The CSS</p>'); 
            })
      }
      else if(pathname == '/3.html') { // 루트로 접속한다면
            fs.readFile('./index1.html', (err,data) => {
                  res.end('<h3>JavaScript</h3>'); 
                  res.end('<p>The JavaScript</p>'); 
            })
      }

}).listen(4444, () =>{ // 4444번 포트로 서버 실행
      console.log('4444번 포트에서 대기중...');
});