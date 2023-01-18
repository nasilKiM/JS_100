// 1번. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.

let nums = [100,200,300,400,500];
nums.splice(3,2);
console.log(nums);


// =========================================================================

// 2번. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
//출력 [200,100,10000,300]

let arr = [200,100,300];
arr.splice(2,0,10000);
console.log(arr);


// =========================================================================

// 3번. 변수의 타입
// 다음 출력 값으로 올바른 것은? : 4번(object)

let arr2 = [100,200,300];
console.log(typeof(arr2));

// =========================================================================

// 4번. 변수의 타입2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 맞지 않은 것은? : 2번

a0=1;
console.log(typeof(a0));
a1 = 2.22;
console.log(typeof(a1));
a2 = 'p';
console.log(typeof(a2));
a3 = [1,2,3]
console.log(typeof(a3));


// =========================================================================

// 5번. for문 계산
// 다음 코드의 출력 값으로 알맞은 것은?

let a = 10;
let b = 2;

for(let i = 1; i<5; i+=2){
    a += i;
}
console.log(a+b); //16

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
    'height' : 180,
    'weight' : 78,
    'weight' : 84,
    'temperature' : 36,
    'eyesight' : 1
};

console.log(d['weight']); // 84 


// =========================================================================

// 9번. concat을 활용한 출력 방법
// 다음 소스코드를 완성하여 날짜와 시간을 출력하시오

//데이터
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/',month,'/', day," ",hour,':', minute,':', second)
// 빈칸을 채워주세요

console.log(result);
//출력 예시 : 2019/04/26 11:34:27


// =========================================================================

// 11번. for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass>부분에 완성하세요. for를 사용해야 합니다.

let s = 0;
//pass

for(let i=0; i<100; i++){
    s += i;
}
console.log(s);


