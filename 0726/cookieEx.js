var http = require('http')
http.createServer(function(request, response){

    var date = new Date();
    date.setDate(date.getDate + 7) // 7일 동안 저장

    // 쿠키 입력
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['breakfast = toast', 'dinner = chiken']
    });

    // 쿠키 출력
    // response.end('<h1>'+request.headers.cookie+'</h1>');
    response.end('<h1>'+JSON.stringify(request.headers.cookie)+'</h1>');

}).listen(4444, () =>{
    console.log('4444번 포트에서 대기중...');
});
