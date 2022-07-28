var static = require('serve-static'); // 경로 static를 위한 미들웨어
var express = require('express');
var path = require('path');
var http = require("http");
var app = express();

app.set('port', process.env.PORT || 4444); 

// 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할
app.use(static(path.join(__dirname, 'media')));

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});