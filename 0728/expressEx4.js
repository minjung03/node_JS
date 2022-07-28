var express = require('express');
var http = require("http");
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); 

// 미을웨어 사용
app.use(function(req, res, next){
    console.log('첫번째 미들웨어\n');

    // 데이터를 주고 받을 수 있게 get,post 사용
    var useAgent = req.header('User-Agent');
    var parmName = req.query.name;
    var parmTel = req.query.tel;
    res.send('<h2>서버에서 응답 User-Agent -> </h2>'+useAgent+
    '<h2>parmName -> '+parmName+'</h2>'+'<h2>parmTel -> '+parmTel+'</h2>');
});

// get() : 서버 설정을 위해 지정한 속성 꺼내오기
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});