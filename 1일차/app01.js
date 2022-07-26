/* -- 0725(1일차) 실습 -- */

console.log('hello world');
console.log(10+10+'\n');

// time, timeEnd (시간 측정)
console.time('전체시간');
console.log('hello');
var sum = 0;
for(i=0; i<10000; i++){
    sum+=i;
}
console.timeEnd('전체시간'); // console.time()의 리터널과 같아야 한다
console.log();

// 출력 방식
console.log('filename:', __filename);
console.log('dirname:', __dirname);
console.log('output: %d', 123);
console.log('%d+%d=%d', 10, 20, 10+20);
console.log('%d+%d=%d', 10, 20, 10+20, 30); // 형식보다 더 많을 때
console.log('%d+%d=%d', 10, 20); // 형식보다 적을 때
console.log('JSON: %j\n', {name:"tom"}); // %j *json형식

// 글자 색상 변경 (31~37)
console.log('\u001b[31m', 'hello world..'); // 빨강
console.log('\u001b[32m', 'hello world..'); // 초록
console.log('\u001b[33m', 'hello world..'); // 노랑
console.log('\u001b[34m', 'hello world..'); // 파랑
console.log('\u001b[35m', 'hello world..'); // 보라
console.log('\u001b[36m', 'hello world..'); // 하늘
console.log('\u001b[37m', 'hello world..'); // 흰색
console.log('\u001b[0m', 'hello world..\n');  // 초기화(흰색)

// 배경 색상 변경 (41~47)
console.log('\u001b[41m', 'hello world..'); // 빨강
console.log('\u001b[42m', 'hello world..'); // 초록
console.log('\u001b[43m', 'hello world..'); // 노랑
console.log('\u001b[44m', 'hello world..'); // 파랑
console.log('\u001b[45m', 'hello world..'); // 보라
console.log('\u001b[46m', 'hello world..'); // 하늘
console.log('\u001b[47m', 'hello world..'); // 흰색
console.log('\u001b[0m', 'hello world..\n');  // 초기화(투명)


// process 객체 (프로그램 관련 정보를 나타냄, node.js만 가지고 있다)
console.time('time'); // 시간 측정 시작
var output = 0;
for(var i=1; i<=100; i++){
    output+=i;
}
// process.exit(); -- 프로그램 종료 (주석 처리하면 결과가 보인다)
console.log('result: ',output);
console.timeEnd('time'); // 시간 측정 종료
console.log();


// var와 const
if(1){
    var x = 10;
}
console.log('x: ',x);
if(1){
    const y = 10;
    console.log('y: ',y); // 잘 출력된다
}
// console.log(y); -- const는 범위를 벗어나면 안됨 (에러)
console.log();


// const와 let
const y = 10;
// y= 20; -- const는 값 변경 불가능 (에러)
console.log('y: ',y); // node.js는 const를 많이 쓴다 (바꿀 일이 거의 없어서)

let z = 10;
z=20; // let은 값 변경 가능
console.log('z: ',z);
console.log();


// 문자열 합치기 (`` 사용)
const num1=1;
const num2=2;
const result= num1+num2;
const string = `${num1} 더하기 ${num2}는 ${result}`;
console.log(string+'\n');


// 함수를 이용한 화면 출력
function helloWorld(){
    console.log('Hello World');
    helloNode();
}
function helloNode(){
    console.log('Hello Node\n');
}
helloWorld();


// 함수의 종류(*화살표 함수)
function add1(x,y){
    return x+y;
}
const add2 = function(x,y){
    return x+y;
}
const add3 = (x,y) => {
    return x+y;
}
console.log('화살표 함수: '+add3(1,2)+'\n');

// 화살표 함수는 이렇게도 작성 가능
const add4 = (x,y) => x+y;
const add5 = (x,y) => (x+y);

// ex) 화살표 함수로 바꿔보기 
const helloWorld2 = () => {
    console.log('hello world2');
    helloNode2();
}
const helloNode2 = () => console.log('hello Node2\n');
helloWorld2();


// 파일 읽기 (파일 입출력은 비동기식 방법으로 읽어야함)
const fs = require('fs'); // 파일 읽어오기
fs.readFile('./sam.txt', function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString()); // 파일 내용 출력하기
});
// ex) 화살표 함수로 바꿔보기 
const fs2 = require('fs');
fs2.readFile('./sam.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString()+'(화살표 함수)\n'); // 파일 내용 출력하기
});


// 모듈 가져오기 (module01.js)
const {odd, even} = require('./module01');
function check(num){
    if(num%2) return add1;
    return even;
}
console.log(check(2)+'\n');


// setTimeout, setInterval
const timeout = setTimeout(() => {  // 한번만 실행
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => { // 계속 실행
    console.log('1초마다 실행')
}, 1000);

setTimeout(() => {
    clearInterval(interval); // 2초 후 Interval 취소
}, 2000);