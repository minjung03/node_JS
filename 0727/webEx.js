var fs = require('fs');
var http = require('http');

// 서버 생성
http.createServer((request, response) => {

      var url = request.url; // url 변수 선언
      if(request.url == '/'){
            url = "/index1.html";
      }
      response.writeHead(200);
      response.end(fs.readFileSync(__dirname+url));

}).listen(4443, () =>{ // 4444번 포트로 서버 실행
      console.log('4444번 포트에서 대기중...');
});