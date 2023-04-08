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

// 22번. 6의 배수인지 확인하기
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

const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i]; // 이부분 이해가 잘 안됨..
}

console.log(obj);

// =========================================================================

// 28번. 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 'Javascript'를 2-gram으로 반복해본다면 다음과 같은 결과가 나옵니다.
// 입력 : Javascript
/*
출력 : 
Ja
av
va
as
sc
cr
ri
ip
pt

입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요.
*/

// 문자열 + 반복문 + 2글자씩 나오게 반복

const word = "java";
for (let i = 0; i < word.length; i++) {
  console.log(word[i], word[i + 1]);
}

// =========================================================================

// 29번. 대문자만 지나가세요
// 진구는 영어학원 알바를 하고있습니다.
// 반 아이들은 알파벳 공부하는데,오늘은 대문자 쓰기 시험을 봤습니다.
// 알파벳 하나만을 입력하고 그 알파벳이 대문자면 YES, 아니면 NO를 출력하게

const alphabet = prompt("알파벳을 하나만 입력하세요");

if (alphabet == alphabet.toUpperCase()) {
  console.log("Yes");
} else {
  console.log("No");
}

// =========================================================================

// 30번. 문자열 속 문자 찾기
// 문자 pineapple 에는 apple이라는 문자가 숨어있습니다.
// 문자열 속에 숨어있는 문자를 찾아보려고합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어주세요.

// 예시 :
// pineapple is yummy
// apple

// 출력 : 4

// =========================================================================

// 31번. JS 자료형의 복잡도
// 다음 배열 내장함수의 시간복잡도가 O(1)이 아닌 것을 모두 고르시오.

/*
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)


* 시간복잡도란? 

1. O(1) - Constant Time
O(1)은 입력 공간에 대해 변하지 않습니다. 따라서 O(1)을 상수시간이라고 부릅니다.
n의 값이 얼마나 크든 상관이 없습니다. O(1) 알고리즘의 예로 배열에 있는 항목을
인덱스를 사용해 접근하는 경우가 있습니다.

function exampleConstant(arr) {
  console.log(arr[0]);
}

2. O(n) - Linear Time
O(n)은 선형시간이고 최악의 경우에 n번의 연산을 수행해야 하는 알고리즘에 적용됩니다.
O(n)의 예로 0부터 n-1까지의 숫자를 출력하는 경우가 있습니다.

... 그 외에 아래와 같이 있다. 1번부터 Better 에 가깝고 아래로갈수록 Worse임.
O(n log n)
O(n2)
O(n3)
O(2n)

*/

// =========================================================================

// 35번.

function one(n) {
  function two(m) {
    return m ** n;
  }
  return two;
}

const a0 = one(2);
// 숫자 2가 function(n)<-에 들어감.
// a가 함수니까 인자를 받아서 실행.
const b0 = one(3);
const c0 = one(4);

console.log(a0(10));
console.log(b0(10));
console.log(c0(10));

// =========================================================================

// 38번.

// 점수를 받아서 상위 1등부터 3등까지 인원수를 체크하기

const scores = ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95"];
scores.sort((a, b) => a - b);

let score = [];
let count01 = 0;

while (score.length < 3) {
  const value = scores.pop();

  if (!score.includes(value)) {
    score.push(value);
  }
  count01++;
}

console.log(count01);

/* 먼저 scores array를 오름차순으로 정리하기 위해 sort로 a - b정렬을 한다 -> b - a 로 정렬하면 내림차순이 된다
그럼 scores = ["55", "66", "75", "85", "86", "95", "97", "97", "97", "97"]
높은 점수가 배열 뒷쪽으로 오게된다

1,2,3위 점수를 pop으로 빼서 다른 변수에 배열로 저장하기 위해서
score라는 배열을 선언했고
score.length가 3이 되지 않을 때 해당 점수를 배열 뒤에서 pop하기로.

여기까지만 하면 97만 3개 추출되기 때문에
해당 점수가 score배열에 저장되어있지 않은 경우에만 score에 넣어달라는 의미로
includes를 사용한다.

score에 그 점수가 includes되어 있니? 확인하는 메소드다.
부정형으로 묻기 위해 !를 붙여준다.
이제 score = ["97", "95", "86"]

우리가 원하는 값은 점수가 아니라 97, 95, 86점을 맞은 사람이 몇 명인지 구하는 것이기 때문에
count를 0에서부터
해당 while문이 몇 번 실행되었나 체크하기 위해 매 루프가 돌때마다 count를 1씩 더해준다 -> count ++
count = 6이 나온다. 6명이 1,2,3위에 해당한다는 뜻이다.
*/

// =========================================================================

// 39번.
// 문장의 모든q를 e로 바꿔라

let text01 = "hqllo my namq is hyqwon";
let str = text.split("");
console.log(str) >>
  [
    "h",
    "e",
    "l",
    "l",
    "o",
    " ",
    "m",
    "y",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "i",
    "s",
    " ",
    "h",
    "y",
    "e",
    "w",
    "o",
    "n",
  ];

for (let i = 0; i < str.length; i++) {
  if (str[i] === "q") {
    str[i] = "e";
  }
}
str.join("");

//정답
let text2 = "hqllo my namq is hyqwon";
text2.split("q").join("e");

// 심플하게 생각하자.....

// =========================================================================

// 40번.
//무게 제한에 맞춰서 놀이기구에 탈 수 있는 인원수 계산하기

const weightLimit = prompt("무게 제한을 입력해주세요.");
const countMember = prompt("인원수를 입력해주세요.");
let count = 0;
let totalWeight = 0;

for (let i = 0; i < countMember; i++) {
  totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해주세요."), 10);
  if (totalWeight <= weightLimit) {
    count++;
  }
}
console.log(count);

// =========================================================================

// 41번
// 소수 판별기

const num = prompt("숫자를 입력하세요.");

function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("NO");
      return false;
    }
  }
  if (n === 1) {
    console.log("NO");
    return false;
  }
  console.log("YES");
}

primeNumber(num);

/*
for문으로 해당 숫자 이하의 숫자로 나눴을 때
딱 떨어지면 소수가 아님 > NO

단, 1로 나누면 다 나누어떨어지기 때문에 i가 2부터 시작함
1을 숫자로 입력받을 경우는 따로 설정. 1은 소수가 아니니까 "NO"
떨어지지 않음 소수 > YES
*/

// =========================================================================

// 42번
// 달, 월을 입력하면 2023년 해당 날짜가 무슨 요일인지 알려주기

const day2 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const month2 = "2";
const date2 = "25";

function solution(a, b) {
  const newDay = new Date(`2023-${a}-${b}`);
  console.log(day[newDay.getDay()]);
}

solution(month2, date2);

/*
getDay는 요일을 숫자로 반환함. sun이 0임.
new Date에 저렇게 날짜를 넣어도 date정보 생김
*/

// =========================================================================

// 43번
// 10진수를 2진수로
// 사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요.

// =========================================================================

// 44번
// 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요.

const sumNum = prompt("숫자를 입력하세요.");

// =========================================================================

// 45번
// getTime()함수 사용하기
// 현재연도(2023)를 출력해보세요.

// 우선 Date 객체 생성하기

const date = new Date();
getTime();

//메서드를 사용하기 위해선 Date 객체를 생성해야 한다.
//객체를 생성한 후 date 변수에 담아준다.

let currentYear = date.getTime();
//변수 year을 선언한 후 위에서 만든 date 변수를 통해 getTime() 메서드를 사용한다.
//이제 1970년 1월 1일 자정 이후의 시간이 밀리초로 year에 저장되었다.

//밀리초를 연도로 변환하기

currentYear = Math.floor(currentYear / (3600 * 24 * 365 * 1000)) + 1970;
console.log(currentYear);

// 1년을 밀리초로 환산하면 '60(1분)*60(1시간)*24(1일)*365(1년)*1000(밀리초)'이다.
// 이걸 아까 만든 year로 나누면 1970년부터 흐른 '연도'의 값이 된다.
// 소수점이 나올수 있기 때문에 Math.floor를 이용해서 소수점을 없애준다.
// 여기에 1970을 더해주면 현재 연도를 알 수 있다.

/*시간, 날짜 환산*
- 1밀리초 = 1/1000초
- 1초 = 1000밀리초
- 1분 = 60초(60 * 1000 = 60,000밀리초)
- 1시간 = 60분(60 * 60 * 1,000 = 3,600,000밀리초), 3600초(60*60)
- 1일 = 24시간(24 * 60 * 60 * 1,000 = 86,400,000밀리초), 86400초(60*60*24)
- 1년 = 365일, 31536000(60*60*24*365)
*/

// =========================================================================

// 46번
// 각 자리수의 합 2
// 1부터 20까지의(20포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요

function solution(n) {
  let array = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return array.reduce((acc, cur) => acc * cur, 0);
}
// 다른 풀이방법 고민해보기
// 재귀함수 사용해서 풀이
function solution2(n, a = 0, b = 0) {
  return String(n).length == a ? b : solution2(n[a] * 1);
}
/*
1씩 증가하는 구문 -> 재귀함수 solution2의 인자 중 하나(a+1)
a는 0부터 시작해서 재귀함수를 돌면서 1씩 증가.
문자열 n의 길이와 일치하면 반복 중단히고
지금까지 더한 b를 반환..

b : 0부터 시작해서 누적된 더한 수 
그 수에 더해주는 수 -> string(n)[a]*1 : 자연수 n을 문자열화하고 문자열의 a번째 index를 숫자변환
이때 a가 동일회차의 함수 인자에서 가져오지않고 직전회차의 a , 0부터 시작함

 */

// 다른 풀이방법2
// do whilt 반복문
function solution3(n) {
  let answer = 0;
  do {
    answer += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);
  return answer;
}

/*
answer에 n에10나눈 나머지를 더함(일의자리부터)
Math.Floor로 더한수를 제외 (ex. n이 4자리 숫자라면? -> 3자리숫자됨)
n이 한자리숫자될때까지 반복 ->> 이하로 떨어지면 반복문 중단

while로만 써도 가능할듯

while(n > 0) {
  answer += n%10;
  n=Math.floor(n/10);
}
return answer

*/

// =========================================================================

// 47번
/*아래 주어진 데이터들로부터 중복을 제거하여 실제 접수인원을 출력 */

const people = [
  ("이호준", "01050442903"),
  ("이호상", "01051442904"),
  ("이준호", "01050342904"),
  ("이호준", "01050442903"),
  ("이준", "01050412904"),
  ("이호", "01050443904"),
  ("이호준", "01050442903"),
];

/* 배열에서 중복을 제거하는 방법

1. set() 사용
  : 유니크한 값만을 담을 수 있기 때문에 배열을 set형태로 만들어서 제거하고
    배열안에서 전개연산자를 사용하여 (...) 중복이 제거된 배열을 만들거나
    Array.from()을 사용하여 중복이 제거된 set
*/
let result01 = [...new Set(people)];

let result02 = Array.from(new Set(people));

/*
2. filter(), indexOf() 사용
3. reduce(), includes() 사용
4. for() OR forEach(), includes() 사용
5. Object.fromEntries(), map(), Object.keys() 사용
*/

// =========================================================================

// 48번
/*대소문자 바꿔서 출력하기 
입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

const abcd = prompt().split("");

for (let i = 0; i < abcd.length; i++) {
  // 입력받은 문자열을 나누어서 하나하나 비교해줌
  // 대문자와 같으면 소문자로, 소문자랑 같으면 대문자로!
  if (abcd[i] === abcd[i].toUpperCase()) {
    abcd[i] = abcd[i].toLowerCase();
  } else {
    abcd[i] = abcd[i].toUpperCase();
  }
}
// join해서 출력하기
console.log(abcd.join(""));

// 답안 정답...? (아래)
// 빈배열에 대소문자를 바꾼 문자를 하나씩 추가해서
// 마지막 배열요소들을 하나씩 더하는 방법으로 문제풀이함.

let aaa = prompt("문자열을 입력하세요");
let bbb = [];
let ccc = "";

for (let i = 0; i < aaa.length; i++) {
  if (a[i] === aaa[i].toLowerCase()) {
    bbb.push(aaa[i].toUpperCase);
  } else {
    bbb.push(aaa[i].toLowerCase());
  }
}
for (let j = 0; j < bbb.length; j++) {
  ccc += bbb[j];
}

console.log(ccc);

// =========================================================================

// 49번
/* 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다.
주어진 숫자들 중 최댓값을 반환하라.

입출력
입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10

*/

// 입력받은 문자열을 공백기준으로 분리해서 배열에 넣기
let num1 = prompt("10개의 숫자를 입력하세요").split("");

let max = 0;

// 배열의 Number로 바꾼 각 요소와 비교해서 요소가 max보다 크면 값을 max로 바꾸기
for (let i = 0; i<num1.length; i++){
  if (Number(num1[i] > max) {
    max = Number(num1[i])
  })
}
console.log(max);


// 답안 정답...?! (아래)
// map() 과 sort()를 활용해서 풀이함!!!! ---> 훨씬간편하게 품..

let num2 = prompt('10개의 숫자를 입력하세요').split('').map((n)=>{
  return parseInt(n, 10)
})

num2.sort((a,b)=>{
  return b-a;
});

console.log(num2[0]);