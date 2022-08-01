var express = require('express');
var http = require("http");
var path = require("path");
var static = require('serve-static');
var app = express();

var expressErrorHandler = require('express-error-handler');
var errorHandler = require('errorhandler');

app.set('port', process.env.PORT || 4444); 
app.use('/public', static(path.join(__dirname, 'public')));

var router = express.Router();
app.use('/', router);

router.route('/').get(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>메인 페이지</h1>');
    res.end();
});

// 404 에러 핸들러
var errorHandler = expressErrorHandler({
    static : {
        '404' : './public/404error.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다 : '+app.get('port'));
});