var fs = require('fs');
var http = require('http');
var url = require('url');

// 서버 생성
http.createServer((req, res) => {
      
      var pathname = url.parse(req.url).pathname; // url 변수 선언

      if(pathname == '/') { // 루트로 접속한다면
            fs.readFile('./index.html', (err,data) => { // index
                  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'}); // html 파일 형식(utf-8)
                  // writeHead : response 객체의 메소드에서 헤더 정보를 응답에 작성해서 내보내는 것
                  
                  res.end(data); // data 그리기(index.html)
                  // end : 컨텐츠 출력 완료 (writeHead에 대한 요청 처리 완료)
            })
      }
      else if(pathname == '/other'){  // /other로 접속한다면
            fs.readFile('./other.html', (err, data) => { // other.html 파일을 읽어 그리기
                  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'}); 
                  res.end(data);
            })
      }

}).listen(4444, () =>{ // 4444번 포트로 서버 실행
      console.log('4444번 포트에서 대기중...');
});