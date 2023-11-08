// 1. Terminal로 실행 -> npm src/index.js 입력하여 실행
//console.log("Hello Node.js");

// 2. "package.json"에 매크로와 같이 저장해두기 -> "scripts": {"start": "node src/index.js"} 추가
// 실행 방법 : Terminal에서 npm run start 입력하여 실행

/****************************************************************/

/* CJS(Common JS) 모듈 시스템
 // node.js가 제공하는 내장함수 require
 // 인수로 전달한 경로의 모듈에서 내보낸 객체를 반환
 // const moduleData = require("./math");
 
 // const {add, sub} = require("./math");
*/

/* ES 모듈 시스템(ESM)
 - "package.json"에 "type": "module" 추가(CJS는 사용할 수 없다.) 
*/
import mul, {add, sub} from "./math.js"; // 기본값은 이름 변경 가능


// math.js에 있는 함수 가져오기
// console.log(moduleData.add(1, 2)); // 3
// console.log(moduleData.sub(1, 2)); // -1

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1
// console.log(mul(10, 20)); // 200


// Node.js 라이브러리 사용하기
// npmjs.com 에서 필요한 라이브러리 설치 명령어 복사하여 터미널 통해 설치
// randomcolor 라이브러리 사용해보기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);