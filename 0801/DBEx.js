// 미들웨어 추가
var fs = require('fs');
var ejs = require('ejs');
var http = reauire('http');
var express = require('express');
var bodyParser = require('body-parser');

// express 서버 실행
var app = express();
app.set('prot', process.env.PORT || 4444);

// 모듈 추출
var mysql = require('mysql'); 

// 데이터베이스와 연결
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port : 3306,
    password: '111111',
    database: 'company'
});

// 데이터베이스 쿼리 실행
db.query('select * from products', function(error, result, fields){
    if(error) console.log('에러 발생 : '+error);
    else console.log(result);
});