//// 7

/// Generic : class, function, interface 를 다양한 type으로 재사용 가능
// 선언할 때는 type parameter만 적어 주고, 생성 시점에 사용하는 타입을 결정

function getSize(arr : number[] | string[] ) : number {
    return arr.length;
}

const arr1 = [1,2,3];
getSize(arr1);

const arr2 = ["a", "b", "c"];
getSize(arr2);

// 이렇게 union type을 사용하더라도, 
// 지정해 준 두 개 type밖에 사용할 수 없으며
// 다른 type들이 계속 늘어나면 함수 자체의 parameter 길이도 계속 늘어날 수밖에 없음.
// 이런 식으로

function getSize_(arr : number[] | string[] | boolean[] | object[]) : number {
    return arr.length;
}

const arr_1 = [1,2,3];
getSize_(arr_1);

const arr_2 = ["a", "b", "c"];
getSize_(arr_2);


const arr_3 = [false, true, true];
getSize_(arr_3);

const arr_4 = [{}, {}, {name : "Tim"}];
getSize_(arr_4);


/// generic
// <T> 는 type parameter : 어떤 type을 전달받아 함수에서 사용할 수 있도록 함.
// arr : T[] 처럼, 받는 쪽에서 type을 결정할 수 있도록 함.

function getSize_g<T>(arr : T[]) : number {
    return arr.length;
}

const arr_1g = [1,2,3];
getSize_g<number>(arr_1g); // 이렇게 사용 가능
getSize_g(arr_1g); // <number> 를 기입해 주지 않아도, 
// ts는 전달되는 매개변수 type을 통해 어떤 type인지 앎.

// 특정 타입으로 강제하고 싶은 경우, 
getSize_g<number | string> (arr_1g);
// 이렇게 사용 가능.

const arr_2g = ["a", "b", "c"];
getSize_g<string>(arr_2g);

const arr_3g = [false, true, true];
getSize_g(arr_3g);

const arr_4g = [{}, {}, {name : "Tim"}];
getSize_g(arr_4g);


// generic을 활용한 interface
// 하나의 interface만을 선언 후, 각기 다른 모습의 객체 생성 가능

interface Mobile<T> { 
    name : string;
    price : number;
    option : T;
}

const m1 : Mobile <object> = { 
    // 혹은 Mobile <{ color : string; coupon : boolean }> 
    name : "s21",
    price : 1000,
    option : {
        color : "red",
        coupon : false,
    }
};

const m2 : Mobile <string> = {
    name : "s20",
    price : 900,
    option : "good"
};

//

interface User_g {
    name : string;
    age : number;
}

interface Car_g {
    name : boolean;
    color : string;
}

interface Book_g {
    price : number;
}

const user_ : User_g = { name : "a", age : 10 };
const car_ : Car_g = {name : true, color : "red"};
const book_ : Book_g = {price : 3000};

function showName<T>(data:T) : string {
    return data.name; // 모든 매개변수에 name이 존재하지 않을 수도 있으므로 오류
}

function showName01<T extends {name : string}> (data : T) : string {
    return data.name;
}
// 어떤 T타입이 올 건데, 그 타입은 name이 string인 객체를 확장한 형태이다.
// 이러면 다양한 모습의 객체가 올 수 있겠지만, 항상 name은 string을 가지고 있게 됨.
// name이 없거나, string이 아니라면, 아래 car_, book_을 전달할 때처럼 에러가 뜸.


showName(user_);
showName(car_);
showName(book_);

showName01(user_);
showName01(car_);
showName01(book_);