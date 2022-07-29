var express = require('express');
var http = require("http");
var bodyParser = require('body-parser'); 
var path = require("path");
/*
[라우터]
- 사용자가 요청한 기능이 무엇인지 패스를 기준으로 구별
- Router 객체를 참조한 후 route() 메소드를 이용해 라우팅
*/

var static = require('serve-static');
var app = express();

app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// 라우터 사용, 라우터 사용 시에는 use 미들웨어 생략 가능
var router = express.Router();
router.route('/process/login').post(function(req, res){
    console.log('/process/login 라우팅 함수 받음');
    var parmId = req.query.id||req.body.id; // get 혹은 post로 받기
    var parmPw = req.query.pass||req.body.pass;

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>서버에서 로그인</h1>');
    res.write('<div>'+parmId+'</div>');
    res.write('<div>'+parmPw+'</div>');
    res.end();
});

app.use('/', router); // 위치 조절 잘하기!

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});