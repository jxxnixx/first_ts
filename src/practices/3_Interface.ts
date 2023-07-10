//// 3.

/// interface 인터페이스

let user : object; // user라는 객체 생성.

user = {
    name : 'xx',
    age : 30
}

console.log(user.name); 
// 에러! object에는 특정 속성값에 대한 정보가 없기 때문에
// 이렇게 프로퍼티를 이용해 값을 표현하고 싶을 때
/// interface를 사용

interface User {
    name : string;
    age : number;
}

let user1 : User = {
} 
// 이렇게만 하면 에러! 
// User에는 name, age 프로퍼티가 필요하기 때문에

let user2 : User = {
    name : 'xx',
    age : 30
}

user2.age = 10; // 존재하는 프로퍼티의 값 수정 가능
user2.gender = 'male'; // 존재하지 않는 프로퍼티 추가 불가

console.log(user2.age); // 가능


/// 이럴 때, optional 가능
// 있어도 되고, 없어도 되는.

interface User1 {
    name : string;
    age : number;
    gender? : string; // ?추가, optional
}

let user01 : User1 = {
    name : 'xx',
    age : 30
}
// gender가 없어도 에러나지 않음.

user01.age = 10;
user01.gender = 'male'; // string으로 추가 가능


/// readonly : 읽기만 가능하고, 수정은 불가

interface User2 {
    name : string; 
    age : number;
    gender? : string;
    readonly birthYear : number;
}

let user02 : User2 = {
    name : 'xx',
    age : 30,
    birthYear : 2000, // 최초 생성 시 값 할당 가능
}

user02.age = 10;
user02.gender = 'male';
user.birthYear = 1996; // 여기서는 불가! readonly!


/// 문자열 인덱스 

interface User3 {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    1? : string;
    2? : string;
    3? : string;
    4? : string;
}

let user03 : User3 = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A'
}

// 위와 같은 상황에서, 문자열 인덱스를 사용하면

interface User4 {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade : number] : string;
}
// number를 key로, string을 value로 받는 프로퍼티를
// 여러 개 받을 수 있다는 의미

let user04 : User4 = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B'
}

// 여기서, 학년의 성적 A,B,C 등을 사용하기에
// string은 너무 범위가 넓음.


/// 이때, 문자열 리터럴 타입 사용

type Score = 'A' | 'B' | 'C' | 'F';

interface User5 {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade : number] : Score;
}

let user05 : User5 = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
    3 : 'D' // 에러!
}


/// interface로 함수 정의도 가능!

interface Add {
    (num1 : number, num2 : number) : number;
}
// 얘는 리턴값이 number. 위에 쓴 void와 다름.

const add1 : Add = function(x, y) { 
    return x + y;
}

add1 (10, 20);

interface IsAdult{
    (age : number) : boolean;
}

const a_ : IsAdult = (age) => {
    return age > 19;
}

a_(33); // true 출력


/// interface로 class 정의도 가능!
/// 이땐 implements 라는 키워드 사용

interface Car {
    color : string;
    wheels : number;
    start() : void;
}

class Bmw implements Car {
    color; // 생성자 constructor
    wheels = 4;
    constructor(c : string) {
        this.color = c; // 사용 시 색깔 입력받도록!
    }
    start() {
        console.log('go..');
    }
}

const b_ = new Bmw('green');
console.log(b_);
b_.start(); // "go.." 출력


/// interface는 확장 가능
/// extends 사용

interface Benz extends Car {
    door : number;
    stop() : void;
}
// extends를 사용하면, Car의 프로퍼티는 기본으로 가지고
// 추가적으로 더 정의할 수 있음.

const benz : Benz = { 
    door : 5,
    stop() {
        console.log('stop');
    }
}
// 그래서, 이렇게 추가된 프로퍼티들로만 구성할 경우 에러
// Car의 프로퍼티들도 값을 할당해 주어야 함.

const benz01 : Benz = {
    door : 5,
    stop() {
        console.log('stop');
    },
    color : 'black',
    wheels : 4,
    start() {
        console.log('go..');
    }
}
// 이렇게!


/// 확장은 여러개도 가능
 
interface Car_ {
    color : string;
    wheels : number;
    start() : void;
}

interface Toy_ {
    name : string;
}

interface ToyCar extends Car_, Toy_ {
    price : number;
}
// 한 번에 두 개!