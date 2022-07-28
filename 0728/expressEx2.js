var express = require('express');
var http = require("http");
var app = express();

// set() : 서버 설정을 위한 속정 지정하기
app.set('port', process.env.PORT || 4444); 

// 미을웨어 사용
app.use(function(req, res, next){
    console.log('첫번째 미들웨어\n');
    req.user = 'hong';
    req.next();
});

// json형태로 정의해서 send()로 가져오기
app.use(function(req, res, next){
    console.log('두번째 미들웨어_send()\n');

    // json 형태로 정의
    var student = {
        name : '홍길동',
        tel : '1111-2222'
    };
    // send도 사용 가능
    var studentStr = JSON.stringify(student);
    res.send(studentStr);

});

// get() : 서버 설정을 위해 지정한 속성 꺼내오기
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});