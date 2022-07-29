var express = require('express');
var http = require("http");
var bodyParser = require('body-parser'); 
var path = require("path");
var static = require('serve-static');
var router = express.Router();
var expressSession = require('express-session'); // 세션 추가
var app = express();

app.set('port', process.env.PORT || 4444); 

app.use(static(path.join(__dirname, 'media')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/', router); // 위치 조절 잘하기!

// multer 미들웨어 설정
var multer= require('multer');
var fs= require('fs');
var cors= require('cors');

var storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null, 'upload')
    },
    filename : function(req, file, callback){
        callback(null, file.originalname + Date.now())
    }
});

var upload = multer({
    storage:storage,
    limits:{
        files:10,
        fileSize:1024 * 1024 * 1024
    }
});

// 파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/photo').post(upload.array('photo', 1), function(req, res){
    console.log('/process/photo 호출');
    var files = req.files;

    console.log('==========업로드된 파일==========');
    if(files.length > 0){
        console.dir(files[0]);
    }
    else {
        console.log('파일이 없습니다');
    }

    var originalname='';
    var filename='';
    var mimetype = '';
    var size = 0;

    if(Array.isArray(files)){
        for(var i=0; i<files.length; i++){
            originalname = files[i].originalname;
            filename = files[i].filename;
            mimetype = files[i].mimetype;
            size = files[i].size;
        }
    }
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>파일 업로드 성공</h1>');
    res.write('<p>원본파일 : '+originalname+'</p>');
    res.write('<p>저장파일 : '+filename+'</p>');
    res.end();
});



var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});