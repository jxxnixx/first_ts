//// 5.

/// 문자열 리터럴 타입 : 정해진 string 값을 갖는 것
// like userName1

const userName1 = "Bob";

let userName2 : string | number = "Tom";
userName2 = 3;

// like Job
type Job = "police" | "developer" | "teacher";

interface User_01 {
    name : string;
    job : Job;
}

const user_01 : User_01 = {
    name : "Bob",
    job : "developer" 
    // Job이 가지는 세 가지 string 이외의 것을 입력하면 에러. like student
}

/// 숫자형 리터럴 타입
// like grade

interface HighSchoolStudent {
    name : number | string;
    grade : 1 | 2 | 3; // | : 유니온 타입
}


/// 유니온 타입 Union Type

interface Car_ {
    name : "car";
    color : string;
    start() : void;
}

interface Mobile_ {
    name : "mobile";
    color : string;
    call() : void;
}

function getGift ( gift : Car_ | Mobile_) {
    console.log(gift.color); 
    //color는 둘 다 존재하므로 이렇게 사용 가능

    gift.start(); 
    // 에러! 둘 다에 존재하지 않으므로
    // 그러므로 이렇게 구분해 사용
    if (gift.name === "car") {
        gift.start();
    } else {
        gift.call();
    }
    // but 검사 항목이 많아지면, if 보다 switch 문을 사용하는 것이 좋음.
    // 동일한 속성의 타입을 구분해 사용할 수 있는 것을 
    /// 식별 가능한 유니온 타입이라고 함.
}

/// 교차 타입 Intersection Type
// 여러 타입을 합쳐서 사용. & (유니온 타입은 |)
// 따라서 필요한 기능을 모두 합친 함수 생성 가능

interface Car1 {
    name : string;
    start() : void;
}

interface Toy1 {
    name : string;
    color : string;
    price : number;
}

const ToyCar1 : Toy1 & Car1 = {
    name : "타요",
    start() {},
    color : "blue",
    price : 1000,
};
// 주어진 프로퍼티를 전부 할당해 주어야 에러가 뜨지 않음.


