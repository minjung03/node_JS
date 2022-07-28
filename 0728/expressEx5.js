var bodyParser = require('body-parser'); // bodyParser 불러오기
var express = require('express');
var http = require("http");
var path = require("path");
var static = require('serve-static');
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media')));

// bodyParser 미들웨어 사용 (post 방식의 데이터를 주고 받을 수 있음)
app.use(bodyParser.urlencoded({extended : false}));
// body-parser을 이용해 application/json 파싱
app.use(bodyParser.json());

// 미을웨어 사용
app.use(function(req, res, next){
    console.log('첫번째 미들웨어\n');

    // 데이터를 주고 받을 수 있게 get,post 사용
    var useAgent = req.header('User-Agent');
    // post 방식 사용
    var parmId = req.body.id; // html에 있는 name과 같아야한다
    var parmPw = req.body.pass;

    res.send('<h2>서버에서 응답 User-Agent -> </h2>'+useAgent+
    '<h2>parmId -> '+parmId+'</h2>'+'<h2>parmPw -> '+parmPw+'</h2>');
});

// get() : 서버 설정을 위해 지정한 속성 꺼내오기
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});