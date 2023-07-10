let age : number = 30;
let isAdult : boolean = true;
let a : number[] = [1,2,3];
let a2 : Array<number> = [1,2,3];

let week1 : string[] = ['mon', 'tue', 'wed'];
let week2 : Array<string> = ['mon', 'tue', 'wed'];

week1.push(1); // 에러!

/// Tuple 튜플

let b : [string, number];

b = ['z', 1];
b = [1, 'z']; // 에러!

b[0].toLowerCase();
b[1].toLowerCase(); // number에 toLowerCase를 사용할 수 없음.

/// void, never
// void : 함수에서 아무것도 반환하지 않는 (return이 없는) 경우에 사용
// 해당 위치는, 반환값의 타입을 정의하는 위치임.
// 따라서 void가 쓰인 자리에 number, string이 오게 되면
// 반환값의 타입이 number, string이어야 한다는 말

function sayHello() : void {
    console.log('hello');
}

// never : 항상 error를 반환하거나 무한루프 타입 함수로 사용

function showError() : never {
    throw new Error();
}

function infLoop() : never {
    while (true) {
        // do something...
    }
}

/// enum : 비슷한 값들끼리 묶어줌.
// 수동으로 값을 주지 않으면, 자동으로 0부터 1씩 증가하며 값 부여

enum Os {
    Window, // 0
    Ios,    // 1
    Android // 2
}

enum Os2 {
    Window = 3, // 3 (값을 주면)
    Ios,    // 4 (1씩 증가)
    Android // 5
}

enum Os3 {
    Window = 3, // 3
    Ios = 10,    // 10
    Android // 11
}

console.log(Os[0]); // Window 출력
console.log(Os['Ios']); // 1 출력
console.log(Os3[10]); // Ios 출력
console.log(Os3['Android']) // 11 출력

// enum은 숫자가 아닌 문자열도 입력 가능.
// 이때는, 위처럼 양방향이 아닌 단방향 매핑만 가능.
// JS 코드 봐봐! 위랑 달리 단방향

enum Os4 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs : Os4;

myOs = Os4.Window;

// 특정 값만 입력하도록 강제하고 싶을 때,
// 그리고 값들이 공통점이 있을 때 사용


/// null, undefined

let a1 : null = null;
let b1 : undefined = undefined;
