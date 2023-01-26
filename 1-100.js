// 1번. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.

let nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

// =========================================================================

// 2번. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
//출력 [200,100,10000,300]

let arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// =========================================================================

// 3번. 변수의 타입
// 다음 출력 값으로 올바른 것은? : 4번(object)

let arr2 = [100, 200, 300];
console.log(typeof arr2);

// =========================================================================

// 4번. 변수의 타입2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 맞지 않은 것은? : 2번

a0 = 1;
console.log(typeof a0);
a1 = 2.22;
console.log(typeof a1);
a2 = "p";
console.log(typeof a2);
a3 = [1, 2, 3];
console.log(typeof a3);

// =========================================================================

// 5번. for문 계산
// 다음 코드의 출력 값으로 알맞은 것은?

let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b); //16

/*
        a       i       a+= i
------------------------------
1       10      1       11
2       11      3       14    
3       12      5       >> i가 5보다 작아야하니까 x -> for문 탈출
4

*/

// =========================================================================

// 6번. False
// 다음 자바스크립트 문법 중에서 false로 취급하는 것들입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

/*
1) NaN
2) 1
3) ""
4) 0
5) undefined

답: 2

*알아두기
undefined = 박스만 준비된 상태 → 메모리 차지는 하는데 값이 없음
null = 박스만 준비되어 있고 내용물 , 포장 없음 → 값이 없다는 것을 확실히 하기 위해 사용

truthy and falsy 한 자료형들~
- 0
- null
- ''
- NaN
- undefined

*/

// =========================================================================

// 7번. 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

/*
1) age
2) &age
3) let
4) _age
5) 1age

답: 2번 + 5번
*/

// =========================================================================

// 8번. 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오
// (출력값은 공백을 넣지않습니다.)

let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); // 84

// =========================================================================

// 9번. concat을 활용한 출력 방법
// 다음 소스코드를 완성하여 날짜와 시간을 출력하시오

//데이터
let year = "2019";
let month = "04";
let day = "26";
let hour = "11";
let minute = "34";
let second = "27";

let result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second);
// 빈칸을 채워주세요.

console.log(result);
//출력 예시 : 2019/04/26 11:34:27

// =========================================================================

// 11번. for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass>부분에 완성하세요. for를 사용해야 합니다.

let s = 0;
//pass

for (let i = 0; i < 100; i++) {
  s += i;
}
console.log(s);

// =========================================================================

// 12번. 게임캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스코드를 수정해선 안됩니다.

//데이터
//<여기에 class를 작성하세요.>

const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
};

const x = new Wizard(545, 210, 10);
console.log("wizard의 능력은 " + x.health, x.mana, x.armor);
x.attack();

//출력
// 545 210 10
//파이어볼

/* class관련 공부

class MyClass {
  // 여러 메서드를 정의할 수 있음
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
}
클래스를 만들고, new MyClass()를 호출 -> 정의한 메서드가 있는 객체 생성
생성자 메서드 constructor()는 
(1)객체의 기본 상태를 설정
(2) new에 의해 자동으로 호출 -> 객체 초기화

예시:
class User {
    constructor(name) {this.name = name;}
    helloWorld() {alert(this.name);}
}

사용법:
let user = new User("nasil");
user.helloWorld();

new User("nasil")를 호출 이후
(1) 새로운 객체 생성
(2) 넘겨받은 인수 & constructor 자동실행
(3) 이때 인수 "nasil"이 this.name에 할당
(4) user.helloWorld() 같은 객체 메서드를 호출


* 클래스 => 함수!
* 생성자 메소드와 동일
* 클래스 내부에서 정의한 메소드는 User.prototype에 저장됨
* 예시의 프로토타입에 메소드 갯수 : 2개 (constructor, helloWorld)

*/

// =========================================================================

// 13번. 몇번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 수성,금성,지구,화성,목성,토성,천왕성,해왕성으로
// 총 8개입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요.
// 예를 들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

/*
<답>
const planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const n = prompt("몇번째 행성인가요?");
console.log(planet[n-1]);

>> prompt로 사용자의 입력값을 받는걸 깜빡잊고있었다...
*/

// =========================================================================

// 14번. 3의 배수인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가면서 랜덤으로 숫자를
// 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해주세요.

//한글설계
// (1) 3의 배수를 알 수 있는 건? : n / 3  나머지 값이 0임.

let n;
if (n % 3 == 0) {
  console.log("짝");
} else {
  console.log(n);
}

// =========================================================================

// 15번. 자기소개
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
// 만약 입력으로 '김다정'이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."
// 라고 출력하게 해주세요.

const introduce = prompt("자기소개를 합니다");

if (introduce == "김다정") {
  console.log("안녕하세요. 저는 김다정입니다.");
} else {
  console.log("반갑습니다.");
}

// =========================================================================

// 16번. 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어봅시다.

const text = prompt("문장을 입력하세요.");
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}
console.log(reverse(text));

// =========================================================================

// 17번. 놀이기구 키 제한

// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

const height = prompt("키가 어떻게 되세요?");
if (height >= 150) {
  console.log(YES);
} else {
  console.log(NO);
}

// =========================================================================

// 18번. 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면
// 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

const subjectScore = prompt("국,영,수 시험성적을 차례로 입력하세요").split(" ");
// 세 과목의 점수를 입력받고 빈칸을 기준으로 구분한다.
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += parseInt(subjectScore[i], 10);
}
//parseInt는 string을 number로 만든다. parseInt(string, n진수);
console.log(Math.floor(sum / 3));

// 그리고 sum 변수에 for 문을 돌려서 각 변수의 값들의 데이터 타입을
// 10진수 형태의 숫자로 변환하고 그 값을 더해준다.
// 합산 된 점수에서 3을 나누는데, 소숫점 버림을 위해 Math.floor 를 사용

// =========================================================================

// 19번. 제곱을 구하자
// 공백으로 구분하여 두 숫자 a, b가 주어지면 a의 b승을 구하는 프로그램을 작성

let 제곱 = prompt("숫자 두개를 입력하세요").split("");
console.log(Math.pow(parseInt(제곱[0], 10), parseInt(제곱[1], 10)));
// Math.pow(a,b) -> a의 b제곱을 구해준다.

// =========================================================================

// 20번. 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 떄 그 몫과 나머지를 공백으로 구분하여 출력

const number = prompt("숫자 두개를 입력하세요");
const numbers = number.split(" ");
console.log(numbers[0] / numbers[1], numbers[0] % numbers[1]);

// =========================================================================

// 21번. set은 어떻게만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

/*
Set
· 동일한 값은 한 번만 저장하는 객체 (중복허용x)
· length 대신 size라는 프로퍼티를 사용하여 크기를 알 수 있다
· forEach 문으로 순환탐색이 가능하며 객체 타입이므로, new, instanceof를 사용함
· 전용 메서드는 add(), delete(), has(), clear(), keys(), values(), entries()가 있다
· 배열을 통해 객체를 생성할 수 있다
· 1와 '1'은 다른것으로 간주 즉, 중복을 확인하기 위해 강제적으로 자료형을 변형하지 않는다.
· forEach(callback(value,key,set)[, thisArg]), for of 로 값에 접근가능하다
*/

/*
1) let x = {1,2,3,5,6,7}
2) let x = {}
3) let x = new Set('javascript');
4) let x = new Set(range(5));
5) let x = new Set();
: 5번
*/

// =========================================================================

// 22번. 배수인지 확인하기
// 다음 중 변수 i 가 6의 배수인지 확인하는 방법으로 올바른 것은?
/*
1) i / 6 == 0
2) i % 6 == 0
3) i & 6 == 0
4) i | 6 == 0
5) i // 6 == 0

: 2번
*/

// =========================================================================

// 23번. OX문제
// console.log(10/3)의 출력 결과는 3 이다.
// : 아니오.

// =========================================================================

// 24번. 대문자로 바꿔주세요!
// 민지는 국제 포럼에서 알바를 하게 되었습니다.
// 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데
// 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져있는 등
// 형식이 제각각 이었습니다.
// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

const internationalName = prompt("please write down your name in English.");
console.log(internationalName.toUpperCase());

// =========================================================================

// 25번. 원의 넓이를 구하세요.
// 원의 넓이는 <반지름의 길이 x 반지름의 길이 x 3.14 >로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해 봅시다.
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어주세요.

const n2 = prompt("반지름의 길이를 입력해주세요.");
function circleWidth(n) {
  return n2 * n2 * 3.14;
}
console.log(circleWidth(n));

// =========================================================================

// 26번. 행성문제2
/*우리 태양계를 이루는 행성은 (수,금,지,화,목,토,천,해)입니다.
이 행성들의 영어 이름은 mercury, venus, earth, mars, jupiter, saturn, uranus, neptune 입니다.
행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어주세요.
 */

const planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const n3 = prompt();
console.log(planet[n3]);

// =========================================================================

// 27번. 객체 만들기
// 첫번째입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
