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

app.listen(4444, function(){
    console.log('server running at http//127.0.0.1:4444...')
});

app.get('/', function(req, res){
    
    fs.readFile('Person_list.html', 'utf8', function(error, data){
        client.query('select * from person', function(err, result){
            res.send(ejs.render(data, {
                data : result
            })); 
        });
    });
});

app.get('/delete/:id', function(req, res){
    client.query('delete from person where id=?', [req.params.id], function(){
        console.log('--------'+[req.params.id]+'번이 삭제되었습니다');
        res.redirect('/');
    });
});

app.get('/insert', function(req, res){
    fs.readFile('Person_add.html', 'utf-8',function(error, data){
        res.send(data);
    })
});
app.post('/insert', function(req, res){
    var body = req.body;
    client.query('insert into person(name, age, married) values (?,?,?)',
    [body.name, body.age, body.married], function(){
        console.log('--------데이터가 추가되었습니다.');
        res.redirect('/');
    });
});

app.get('/update/:id', function(req, res){
    fs.readFile('Person_update.html', 'utf8', function(error, data){
        client.query('select * from person where id = ?', [req.params.id], function(err, result){
            res.send(ejs.render(data, {
                data : result[0]
            })); 
        });
    });
});
app.post('/update/:id', function(req, res){
    var body = req.body;
    client.query('update person set name=?, age=?, married=? where id=?',
    [body.name, body.age, body.married, req.params.id], function(){
        console.log('--------데이터가 수정되었습니다.');
        res.redirect('/');
    });
});