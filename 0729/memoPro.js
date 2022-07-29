var express = require('express');
var http = require("http");
var bodyParser = require('body-parser'); 
var path = require("path");
var static = require('serve-static');
const fs = require('fs');
var ejs = require('ejs');
var app = express();

app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// 라우터 사용, 라우터 사용 시에는 use 미들웨어 생략 가능
var router = express.Router();
app.use('/', router);

router.route('/process/new_memo').post(function(req, res){
    console.log('/process/login 라우팅 함수 받음');
    var parmName = req.query.name||req.body.name; 
    var parmDate = req.query.date||req.body.date;
    var parmText = req.query.text||req.body.text;


    fs.readFile('memo_result.ejs', 'utf-8', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    
        res.end(ejs.render(data, { // 이렇게도 전달 가능!
            parmName : parmName, 
            parmDate : parmDate,
            parmText : parmText
        }));

    });
});

router.route('/process/reset_memo').post(function(req, res){
    res.redirect('/memo_form.html');
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});