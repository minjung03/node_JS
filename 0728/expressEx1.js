/* 익스프레스(express)로 서버 만들기 */

/* 
[익스프레스 객체]

set - 서버 설정을 위한 속성 지정
get - 서버 설정을 위해 지정한 속성 꺼내기
use - 미들웨어 함수를 사용하도록 한다
속성이름 - env : 서버 모드를 설정

[미들웨어]

- 중간에 요청을 처리하고 라우터는 요청 패스에 따라 분기하여 처리
- 여러개 오기 가능
- use()로 설정
*/

var express = require('express');
var http = require("http");

// 익스프레스 객체 생성
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); // 기본 포트를 app 객체에 속성으로 설정

// 미을웨어 사용
app.use(function(req, res, next){
    console.log('첫번째 미들웨어\n');
    req.user = 'hong';
    req.next(); // 두번째 미들웨어에서 req.user 사용 가능
    
    /* 
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.end('<h1>서버에서 응답한 결과 : '+req.user+'</h1>'); 
    */
});

app.use(function(req, res, next){
    console.log('두번째 미들웨어\n');
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.end('<h1>서버에서 응답한 결과 : '+req.user+'</h1>');
});

// get() : 서버 설정을 위해 지정한 속성 꺼내오기
var server = http.createServer(app).listen(app.get('port'), function(){ // 익스프레스 서버 시작
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});