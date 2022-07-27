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


/* ejs 모듈 */

// 모듈을 추출
var http = require('http');
var fs = require('fs');
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