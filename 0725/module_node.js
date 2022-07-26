/* node.js 내장 모듈(더 믾음) */

// 1. os 모듈
const os = require('os');

console.log('-----------------------운영체제정보------------------------');
console.log('os.hostname : ', os.hostname());
console.log('---------------------------경로---------------------------');
console.log('os.homedir : ', os.homedir());
console.log('os.tmpdir : ', os.tmpdir());
console.log('---------------------------메모리정보----------------------');
console.log('os.freemem : ', os.freemem());
console.log('os.totalmem : ', os.totalmem());
console.log()


// 2. path 모듈 
const path = require('path');
const string = __filename // 파일 이름

console.log('파일명 : ', __filename);
console.log('분리기호 : ', path.sep);
console.log('환경변수 구분자 : ', path.delimiter);
console.log('-------------------------------------------------');
console.log('폴더명 : ', path.dirname(string));
console.log('확장자명 : ', path.extname(string));
console.log('전체파일명 : ', path.basename(string));
console.log('-------------------------------------------------');
console.log('절대경로(C:\\) : ', path.isAbsolute('C:\\')); // 현재 값이 절대 경로인가
console.log('path.isAbsolute : ', path.isAbsolute('D:\\node_JS'));
console.log('-------------------------------------------------');
console.log('상대경로 : ', path.relative('d:\node_JS', 'd:\\')); // d:\\로 가려면 어떻게 하는가
console.log('상대경로 : ', path.relative('d:\node_JS', 'd:\\node_JS\\media'));
console.log()


// 3. url 모듈
const url = require('url');
const {URL} = url

const myURL = new URL('https://e-mirim.hs.kr/main.do');
console.log('new URL() : ', myURL);
console.log('-------------------------------------------------');
const parsedUrl = url.parse('https://www.e-mirim.hs.kr/schoollife/food.do');
console.log('url.parse() : ', parsedUrl);
console.log()


// 4. querystring 모듈 (search querystring 사용하기 위해 쉽게 변환해서 만들어 준다)
const querystring = require('querystring');

const parseUrl = url.parse('https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0')
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse()', query);
console.log('querystring.stringify()', querystring.stringify(query));
console.log()


// 5. crypto 모듈 (다양한 방식의 암호화를 도움)
const crypto = require('crypto');

// update에 암호화 할 문자를 넣는다
console.log('base64 : ', crypto.createHash('sha512').update('123').digest('base64'));
console.log('md5 : ', crypto.createHash('md5').update('123').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('123').digest('hex'));
console.log()


// 6. fs 모듈 (파일 시스템에 접근하는 모듈, 파일을 생성/삭제/읽기/쓰기 가능)
const fs = require('fs');
fs.readFile('./sam2.txt', (err,data) => {
    if (err) throw err;
    console.log(data.toString());
});

const fs2 = require('fs').promises;
fs2.readFile('./sam2.txt').then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
})