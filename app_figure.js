const figure = require('./module_figure'); // 모듈 가져오기

console.log('절대값 : ',figure.abs(-15));
console.log('원의 면적 : ',figure.circleArea(3.2));
console.log('원의 둘레 : ', figure.circleRound(3.2));
console.log('사각형의 면적 : ',figure.squareArea(2,3));
console.log('삼각형의 면적 : ',figure.triangleArea(5,10));