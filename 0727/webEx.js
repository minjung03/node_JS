var fs = require('fs');
var http = require('http');
var url = require('url');

// 서버 생성
http.createServer((request, response) => {
/*
      var pathname = url.parse(request.url).pathname; // url 변수 선언
      if(pathname == '/'){
            url = "/index1.html";
      }
      response.writeHead(200);
      response.end(fs.readFileSync(__dirname+pathname));
*/

}).listen(4444, () =>{ // 4444번 포트로 서버 실행
      console.log('4444번 포트에서 대기중...');
});