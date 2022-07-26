/*

[이벤트 처리하기]
- node.js는 내부적으로 이벤트를 생성할 수 있다
- event 모듈을 통해 event 객체를 가져온 후 할당

----------------------------------------------
on(이벤트명, 콜백함수)
- 이벤트 이름과 이벤트 발생 시의 콜백을 연결
- 이벤트 하나에 여러 이벤트 달기 가능

addListener
- on과 같은 기능을 한다

emit
- 이벤트를 호출하는 메서드

removeAllListener, removeListener
- 이벤트에 연결된 리스너 제거

listenerCount
- 현재 연결되어있는 리스너 갯수 확인
----------------------------------------------

*/

const EventEmitter = require('events');
// npm install events
const myEvent = new EventEmitter();

myEvent.on('event1', () => {
    console.log('이벤트1');
});
myEvent.addListener('event2', () => {
    console.log('이벤트2');
});
myEvent.on('event2', () => {
    console.log('이벤트2 추가');
});
myEvent.once('event3', () => {  // once : 한번만 수행
    console.log('이벤트3');
});
myEvent.on('event4', () => {
    console.log('이벤트4');
});

const listener = () => {
    console.log('이벤트5');
};
myEvent.on('event5', listener);

myEvent.emit('event'); // 호출
myEvent.emit('event2');
myEvent.emit('event3'); // event3는 once이기 때문에 한번만 수행
myEvent.emit('event3'); 
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 제거했기 때문에 실행되지 않음
myEvent.emit('event5'); 
 
console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2')); // 2개가 연결되어 있음