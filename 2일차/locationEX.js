var http = require('http')
http.createServer(function(request, response){
    
    // 페이지 이동(302)은 Location을 사용!
    response.writeHead(302, {'Location' : 'https://www.e-mirim.hs.kr/main.do'})
    response.end();

}).listen(4444, () =>{
    console.log('4444번 포트에서 대기중...');
});
