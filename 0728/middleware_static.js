/*
[미들웨어_static]
- 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어준다
*/

var static = require('serve-static');
var express = require('express');
var path = require('path');
var http = require("http");
var app = express();

app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media'))); // 미들웨어 static

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});