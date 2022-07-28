var express = require('express');
var http = require("http");
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); 

// 미을웨어 사용
app.use(function(req, res, next){
    console.log('첫번째 미들웨어\n');

    // 다른 곳으로 사이트 이동
    res.redirect('http://www.google.com');
    req.next();
});

// get() : 서버 설정을 위해 지정한 속성 꺼내오기
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});