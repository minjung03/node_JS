/* 
**request 객체의 method 속성을 사용하면 요청방식에 따라 페이지를 구분 할 수 있다

[get 방식]
- 적은 양의 데이터를 처리
- 데이터를 직접 전달하는 방식

[post 방식]
- 많은 양의 데이터를 처리할 수 있고 보안 측면에서도 좋다
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    if(request.method == 'GET'){ 
        // Get 요청
        fs.readFile('get_post_form.html', function(error, data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });
    }
    else if(request.method == 'POST'){ 
        // Post 요청
        request.on('data', function(data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(('<h1>'+data+'</h1>'));
        })
    }
}).listen(4444, () =>{ // 4444번 포트로 서버 실행
    console.log('4444번 포트에서 대기중...');
});