var express = require('express');
var http = require("http");
var bodyParser = require('body-parser'); 
var path = require("path");
var static = require('serve-static');
var app = express();
app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

var router = express.Router();
router.route('/process/login/:name').post(function(req, res){
    console.log('/process/login/:name 라우팅 함수 받음');
    var parmName = req.params.name; // url 파라메터 이용
    var parmId = req.query.id||req.body.id; // get 혹은 post로 받기
    var parmPw = req.query.pass||req.body.pass;

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>서버에서 로그인</h1>');
    res.write('<div>'+parmName+'</div>');
    res.write('<div>'+parmId+'</div>');
    res.write('<div>'+parmPw+'</div>');
    res.end();
});
 
// 오류 페이지 만들어보기
app.all('*', function(req, res){
    res.status(404).send('<h1>요청 하신 페이지가 없습니다</h1>');    
})
app.use('/', router);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});