/* 
http 모듈 : 웹서버 개발을 쉽게 사용할 수 있게 http 모듈을 제공한다

- 요청 / 응답
요청(클라이언트) - 페이지에 접속하려고 하는 어떤 요청
응답(서버) - 요청을 받아 이를 처리하는 작업
       
- 서버와 클라이언트의 관계
클라이언트가 서버로 요청을 보냄 -> 서버는 요청을 처리 -> 처리 후 클라이언트로 응답을 보냄

---------------------------------------------------
// 서버 생성
var server = require('http').createServer();

// 서버 객체에 이벤트 연결
server.on('request', function(code){
      console.log('Request on...')
});
server.on('connection', function(code){
      console.log('Connection on...')
})

// 서버 실행
server.listen(4444, function(){
      console.log('4444번 포트에서 대기중...');
});

// 서버 종료 (close())
var test = function(){
      server.close();
};
setInterval(test, 5000); // 5초 후에 서버 종료
*/

/* 
실제 페이지를 띄어보기
- res : 응답 보냄 (write/end)
- listen(포트번호) 메서드로 특정 포트에 연결
- localhost는 컴퓨터 내부 주소(외부에서 접근 불가능)
- 사용하지 않는 포트를 사용자 포트로 정해야한다
*/
var http = require('http');
http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
      res.write('<h1>Hello Node.js</h1>');
      res.end('<p>Hello Server</p>');
})
.listen(4444, function(){
      console.log('4444번 포트에서 대기중...');
});
