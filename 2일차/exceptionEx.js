/*
[예외 처리]
- 처리하지 못한 에러
- 노드 스레드를 멈춤 (=프로세스 멈춤)
- 에러가 발생할 만한 곳을 try ~ catch문으로 감싼다 (에러 처리는 필수!)
*/
setInterval(() => {
    console.log('시작')
    try {
        throw new Error('무한 출력');
    }
    catch(err){
        console.log(err);
    }
}, 200);

// 노드 내장 모듈의 에러는 실행중인 프로세스를 멈추지 않는다.
const fs = require('fs');
setInterval(()=>{
    fs.unlink('./test.txt', (err)=>{ // unlink : 파일 삭제
        if(err) console.log(err);
    })
}, 200);


/* 
예측 불가능한 에러 처리
- 최후의 수단
- 에러 내용 기록용으로 사용
- 콜백 함수 동작이 수행 안될 수도 있다
*/
process.on('uncaughtException', (err)=>{
    console.log('예기치 못한 에러',err);
});
setInterval(()=>{
    throw new Error('무한 출력');
}, 1000);
setInterval(()=>{
    throw new Error('실행됩니다');
}, 2000);
