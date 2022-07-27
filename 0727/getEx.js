var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
    var query = url.parse(request.url, true).query;

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>'+JSON.stringify(query)+'</h1>');
    
}).listen(4444, function(){
    console.log('4444번 포트에서 대기중...');
})