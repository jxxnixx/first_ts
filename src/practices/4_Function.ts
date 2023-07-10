//// 4. 

/// 함수

// 반환값 O
function add_1 (num1 : number, num2 : number) : number {
    return num1 + num2;
}

// 반환값 X
function add_2 (num1 : number, num2 : number) : void {
    console.log(num1 + num2);
}

// boolean 반환
function isAdult_1 (age : number) : boolean {
    return age > 19;
}

// interface 처럼, 함수의 매개변수도 optional 로 지정 가능
// 선택적 매개변수
function hello(name? : string) {
    return `Hello, ${name || "world"}`;
    // name이 있으면 name을 쓰고, 없으면 world를 출력
}

const result = hello(); 
//?: 때문에, 매개변수가 있든 없든 상관없음. 
// 하지만, 선택적 매개변수라 하더라도 타입은 항상 지켜줘야 함.

const result2 = hello("Sam");
const result3 = hello(123); // 에러!

// 매개변수에 디폴트 값 지정 가능
function hello2(name = "world") {
    return `Hello, ${name}`;
}

// 매개변수 2개
// 주의! 선택적 매개변수가 필수 매개변수 앞에 위치하면 에러임.
function hello3(name : string, age ?: number) : string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello3("Sam"));
console.log(hello3("Sam", 30));

// age를 앞에 두고 optional하게 사용하고 싶다면
function hello4(age : number | undefined, name : string) : string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello4(30, "Sam"));
console.log(hello4(undefined, "Sam"));
// 단, 여기서는 선택적 매개변수가 아니라 명시적으로 undefined를 전달해줘야 함.


// 나머지 매개변수 : 변수의 갯수가 바뀔 수 있고, 전달받은 매개변수를 배열로 취급
function add(...nums : number[] ) {
    return nums.reduce((result, num) => result + num, 0);
}

add(1,2,3) // 6
add(1,2,3,4,5,6,7,8,9,10) // 55


/// this 관련
// bind : 사용 시, this는 내가 정한 object로 고정된다.

interface User {
    name : string;
}

const Sam : User = {name : 'Sam'}

function showName() {
    console.log(this.name)
    // this의 type을 지정해주지 않아 에러!
}

const a = showName.bind(Sam);
a();

// 
function showName1(this : User) { // 지정
    console.log(this.name)
}

const aa = showName1.bind(Sam);
aa();

/// this + 매개변수
// 주의! 매개변수 3개라고 착각하지 말 것! this 이외 2개만 매개변수
function showName2(this : User, age : number, gender : 'm'|'f'){
    console.log(this.name, age, gender)
}

const aaa = showName2.bind(Sam);
aaa(30, 'm'); 


/// 함수 오버로드
interface User_ {
    name : string;
    age : number;
}

function join(name : string, age : number|string ) : User_ | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해 주세요.";
    }
}

const sam_ : User_ = join("Sam", 30);
const jane_ : string = join("Jane", 30);

// sam_이 User_ 객체를 반환하는 데 확신이 없음.
// string을 반환할 수도 있다고 판단하기 때문.
// 함수 코드 상에서는 처리가 되어 있지만, 
// 타입만 봤을 때는 그렇다는 것.
// 동일한 매개변수여도 타입이 다를 수 있음.
// 전달받는 매개변수 age의 타입에 따라 반환값의 타입이 달라짐.
// 객체에 관한 문자열.
// 이럴 때 사용하는 것이, 오버로드 overload

// 함수 오버로드
// 전달받는 매개변수의 갯수나 타입에 따라 다른 동작을 하게 하는 것.

// 그러면, 함수 join 위에

function join(name : string, age : number) : User_;
function join(name : string, age : string) : string;

// 이 두개를 추가해 주면 됨.

// 이렇게!

function join_(name : string, age : number) : User_;
function join_(name : string, age : string) : string;
function join_(name : string, age : number | string ) : User_ | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해 주세요.";
    }
}

const sam_1 : User_ = join_("Sam", 30);
const jane_1 : string = join_("Jane", "30");




