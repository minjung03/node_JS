/* 
[외부 모듈]

ejs / jade 모듈
- 웹페이지를 동적으로 생성하는 템플릿 엔진 모듈

supervisor 모듈
- 파일의 변경사항을 자동으로 인식하고 종료 후 다시 실행시킨다

forever 모듈
- 웹 서비스 장애와 같은 예외 상황을 대비하고자 만들어진 모듈

npm install 명령
- 외부 모듈 설치할 때 사용

npm init 명령 
- node.js 프로젝트 생성시 사용

package.json 파일
- node.js 프로젝트의 환경 설정 정보를 담은 파일
*/

var http = require('http');
var fs = require('fs');

/* ejs 모듈 */
// 모듈을 추출
var ejs = require('ejs');

// 서버 생성 & 실행
http.createServer(function(request, response){
    fs.readFile('ejsPage.ejs', 'utf-8', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        
        // response.end(ejs.render(data));
        response.end(ejs.render(data, { // 이렇게도 전달 가능!
            name : 'funny_node.js', // ejs 파일에서 출력
            description : 'Hello ejs With Node.js!'
        }));

    })
}).listen(4444, function(){
    console.log('Server Running at http://127.0.0.1:4444');
});


/* 
jade 모듈 
- ejs 모듈의 render() 메서드와 다르게 함수를 리턴

compile(string, option) 
- jade 문자열을 html 문자열로 바꿀 수 있는 함수 생성

기본형식
- 들여쓰기를 한다

특수기호
- # (value) / =(value) : 데이터 출력
- -Code : JS 코드
*/

// 모듈을 추출
var jade = require('jade');

// 서버 생성 & 실행
http.createServer(function(request, response){
    fs.readFile('jadePage.jade', 'utf-8', function(error, data){

        // jade 모듈 사용
        var fn = jade.compile(data);

        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        // response.end(fn());
        response.end(fn({ 
            name : 'node.js', 
            description : 'Hello node.js With JadePage!'
        }));
    })
}).listen(4444, function(){
    console.log('Server Running at http://127.0.0.1:4444');
});