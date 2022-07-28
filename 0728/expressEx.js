/* 익스프레스(express)로 서버 만들기 */

var express = require('express');
var http = require("http");
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); 

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
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});