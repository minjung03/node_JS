const exp = require("constants");

// 원의 면적을 구하는 모듈
module.exports.circleArea = function(r){
    return r*r*Math.PI;
}

// 절대값을 구하는 모듈
exports.abs = function(num){
    if(num < 0) return num*-1;
    return num;
}

// 원의 둘레를 구하는 모듈
exports.circleRound = function(r){
    return 2 * r * Math.PI;
}

// 사각형의 면적을 구하는 모듈
exports.squareArea = function(width, height){
    return width * height;
}

// 삼각형의 면적을 구하는 모듈
exports.triangleArea = function(base, height){
    return base * height / 2;
}
