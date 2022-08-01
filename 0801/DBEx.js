// 미들웨어 추가
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');
var static = require('serve-static');
var path = require("path");
var bodyParser = require('body-parser');
// 모듈 추출
var mysql = require('mysql'); 

// express 서버 실행
var app = express();
app.set('port', process.env.PORT || 4444);

app.use('/public', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());

// 데이터베이스와 연결
var client = mysql.createConnection({
    user: 'root',
    password: '111111',
    database: 'company'
});

// 서버 실행
app.listen(4444, function(){
    console.log('server running at http//127.0.0.1:4444...')
});

// 데이터 표시
app.get('/', function(req, res){
    
    fs.readFile('DBEx_list.html', 'utf8', function(error, data){
        client.query('select * from products', function(err, result){
            res.send(ejs.render(data, {
                data : result
            })); 
        });
    });
    // res.send('hi');
});

// 데이터 삭제
app.get('/delete/:id', function(req, res){
    client.query('delete from products where id=?', [req.params.id], function(){
        console.log('--------'+[req.params.id]+'번이 삭제되었습니다');
        res.redirect('/');
    });
});

// 데이터 추가
app.get('/insert', function(req, res){
    fs.readFile('DBEx_add.html', 'utf-8',function(error, data){
        res.send(data);
    })
});
app.post('/insert', function(req, res){
    var body = req.body;
    client.query('insert into products(name, modelnumber, series) values (?,?,?)',
    [body.name, body.modelnum, body.series], function(){
        console.log('--------데이터가 추가되었습니다.');
        res.redirect('/');
    });
});

// 데이터베이스 쿼리 실행
client.query('select * from products', function(error, result, fields){
    if(error) console.log('에러 발생 : '+error);
    else {
        // console.log(result);
    }
});