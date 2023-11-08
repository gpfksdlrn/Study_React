// index.js에 있는 함수 가져오기
// 계산기 기능
export function add(a, b){
    return a + b;
}

export function sub(a, b){
    return a - b;
}

/* CJS(Common JS) 모듈 시스템
// module 객체의 exports 프로퍼티를 이용하여 내보낼 것을 정의함
module.exports = {
    add,
    sub,
};
*/

/* ES 모듈 시스템(ESM) */
// export {add, sub}; 이렇게 명시적으로 써줄 수도 있고,
// function 앞에 export를 써줄 수도 있다.

export default function multply(a, b){
    return a * b;
}