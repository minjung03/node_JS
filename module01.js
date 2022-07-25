// 모듈(특정한 기능을 하는 함수나 변수들의 집합)
// 모듈은 한번 잘 만들어놓으면 여러 곳에서 유용하게 사용할 수 있다.
const exp = require("constants");

const odd = '홀수';
const even = '짝수';
module.exports = {odd, even}; // exports : 내보내기

// 위 방법 module 말고 exprot 객체로도 모듈을 만들 수 있다
exports.odd = '홀수';
exports.even = '짝수';


/* 모듈 생성 방법 */
exports.aaa = function(a,b){
    return a+b;
};

module.exports.aaa = function(a,b){
    return a+b;
};

aaa = function(a,b){
    return a+b;
};
module.exports = {aaa};