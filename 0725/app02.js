// 모듈 가져오기 (module01.js)
const {odd, even} = require('./module01');
const c = require('./module01');
// 문자열의 길이가 짝수인지 홀수인지
function checkString(str){
    if(str.length%2) return odd;
    return even;
}
console.log(checkString("hello"));
console.log(checkString("hi"));