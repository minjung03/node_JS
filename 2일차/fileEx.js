const fs = require('fs');

/* 
동기식 파일 읽기 
- readFile 대신 readFileSync 사용
- 이전 작업이 완료되어야 다음 작업을 진행하는 단점이 있다 (순차적)
*/
console.log('\n시작');

let data = fs.readFileSync('../1일차/sam.txt');
console.log('1번 : ', data.toString());

data = fs.readFileSync('../1일차/sam.txt');
console.log('2번 : ', data.toString());

data = fs.readFileSync('../1일차/sam.txt');
console.log('3번 : ', data.toString());

console.log('끝\n');


/* 
비동기식 파일 읽기 
- 백그라운드에 읽기 요청만 하고 다음 작업으로 넘어간다 (비순차적)
- 실행할 때마다 순서가 다르다

console.log('시작');
fs.readFile('../1일차/sam.txt', (err, data) => {
    if(err) throw err;
    console.log('1번 : ', data.toString());
})

fs.readFile('../1일차/sam.txt', (err, data) => {
    if(err) throw err;
    console.log('2번 : ', data.toString());
})

fs.readFile('../1일차/sam.txt', (err, data) => {
    if(err) throw err;
    console.log('3번 : ', data.toString());
})

console.log('끝');

// 비동기식 방법에서 순서를 유지하고 싶다면? => 콜백함수 사용
console.log('\n시작');
fs.readFile('../1일차/sam.txt', (err, data) => {
    if(err) throw err;
    console.log('1번 : ', data.toString());

    fs.readFile('../1일차/sam.txt', (err, data) => {
        if(err) throw err;
        console.log('2번 : ', data.toString());

        fs.readFile('../1일차/sam.txt', (err, data) => {
            if(err) throw err;
            console.log('3번 : ', data.toString());
        });

    });
    // 하지만 함수가 쌓이게 되어 '콜백 지옥' 상태가 된다
    // 이를 해결하기 위해 promise를 활용한다
});
console.log('끝');
*/

/*
promise : 콜백 지옥인 지저분한 코드의 해결책 
- then을 붙여 결과 반환
- resolve 성공 리턴시 -> then으로 연결/reject 실패 리턴시 -> catch로 연결
*/
const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) resolve('성공')
    else reject('실패');
});

promise.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log('무조건 실행\n')
});

// 위의 콜백 지옥 수정
const fs2 = require('fs').promises;

console.log('\n시작');
fs2.readFile('../1일차/sam.txt').then((data) => {
    console.log('1번 : ', data.toString());
    return fs2.readFile('../1일차/sam.txt')
})
.then((data)=>{
    console.log('2번 : ', data.toString());
    return fs2.readFile('../1일차/sam.txt')
})
.then((data)=>{
    console.log('3번 : ', data.toString());
    return fs2.readFile('../1일차/sam.txt')
})
.catch((err)=>{
    console.error(err);
})
console.log('끝');

