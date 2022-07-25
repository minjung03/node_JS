// 비동기식 이벤트 처리 방식
function run(){
    console.log('3초 후 실행') // 맨 마지막에 출력
}
console.log('시작');
setTimeout(run, 3000); 
console.log('끝');


// 파일도 비동기식으로 읽어야 한다
const fs = require('fs'); // 파일 읽어오기
fs.readFile('./sam.txt', 'utf-8', function(err, data){ // 백그라운드 작업이 나중에 출력됨
     console.log(data.toString()); 
     console.log('파일 오픈');    
});
console.log('다른 작업 중..')


// 파일을 동기식으로 읽을 경우 에러발생
/*
const fs = require('fs');
fs.readFile('./sam.txt', 'utf-8');
console.log('파일 불러오기 완료');
*/