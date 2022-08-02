// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var static = require('serve-static');
var errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');
const { Console } = require('console');

// 익스프레스 객체 생성
var app = express();

app.set('port', process.env.PORT || 4444);
// body-parser 설정
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// public 폴더 사용
app.use('/public', static(path.join(__dirname, 'public')));
// cookie-parser 설정
app.use(cookieParser());
// 세션 설정
app.use(expressSession({ 
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었습니다 포트 : '+app.get('port'));
    // 데이터베이스 연결 함수 호출
    connectDB();
});

// 데이터베이스 연결
// MongoDB 모듈 사용
var MongoClient = require('mongodb').MongoClient;
var database;
function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/local';

    MongoClient.connect(databaseUrl, function(err,db){
        if(err) { throw err };

        console.log('데이터베이스에 연결되었습니다. : '+databaseUrl);
        database = db.db('local');
    });
}

// 로그인 라우팅
var router = express.Router();
router.route('/process/login').post(function(req, res){
    console.log('/process/login 호출됨');
    
    // 요청 파라미터 확인
    var parmId = req.query.id||req.body.id; // get 혹은 post로 받기
    var parmPassword = req.query.password||req.body.password;
    console.log('요청 파라미터 : '+parmId+', '+parmPassword);

    // authUser 호출해 사용자 인증
    if(database){
        authUser(database, parmId, parmPassword, function(err, docs){
            if(err) {throw err};
            
            // 조회된 레코드가 있으면
            if(docs){
                console.dir(docs);
                // 조회 결과에서 사용자 이름 확인
                var username = docs[0].name;
                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
                res.write('<h1>로그인 성공</h1>');
                res.write('<div>사용자 아이디 : '+parmId+'</div>');
                res.write('<div>사용자 이름 : '+username+'</div>');
                res.write('<br><br><a href="/public/login.html"> 다시 로그인하기 </a>');
                res.end(); 
            }
            else {
                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
                res.write('<h1>로그인 실패</h1>');
                res.write('<div><p>아이디와 패스워드를 다시 확인하십시오.</p></div>');
                res.write('<a href="/public/login.html"> 다시 로그인하기 </a>');
                res.end();
            }
        }); 
    } else { // 데이터베이스 객체가 초기화되지 않은 경우 실패 응답
        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        res.write('<h1>데이터베이스 연결 실패</h1>');
        res.write('<div><p>데이터베이스에 연결하지 못했습니다</p></div>');
        res.end();
    }
});

app.use('/', router);

// 사용자를 인증하는 함수
var authUser = function(database, id, password, callback){
    console.log('\nauthUser 호출됨 : '+id+', '+password);

    // users 컬렉션 참조
    var users = database.collection('users');

    // 아이디와 비밀번호를 이용해 검색
    users.find({"id":id, "password":password}).toArray(function(err, docs){
        if(err){ // 에러 발생 시 콜백 함수를 호출하면서 에러 객체 전달
            callback(err, null);
            return;
        }

        if(docs.length > 0){ // 조회한 레코드가 있는 경우 콜백 함수를 호출하면서 조회 결과 전달
            console.log('아이디 [%s], 패스워드 [%s]가 일치하는 사용자 찾음', id, password);
            callback(null, docs);

        } else { // 조회한 레코드가 없는 경우 콜백 함수를 호출하면서 null, null 전달
            console.log('일치하는 사용자 찾지 못함 -----> '+docs.length);
            callback(null, null);
        }
    });
}

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static :{
        '404' : './public/404error.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);