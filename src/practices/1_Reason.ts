//// 1.

function add(num1 : number, num2 : number) {
    console.log(num1 + num2);
}
// num1, num2에 타입을 지정해주지 않으면 any 타입이 되면서
// 빨간 밑줄 찍찍..

add();
add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");

// 몇 개의 인수를, 어떤 타입으로 전달해야 하는지 
// 일일이 확인할 필요 없음! 사전 에러 방지. 아쥬 굿굿

function showItems(arr : number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}
// 숫자 배열을 인자로 설정

showItems([1,2,3]);
showItems(1,2,3);

// 숫자 배열만 에러 없음!

function showItems2(arr : number) {
    arr.forEach((item) => {
        console.log(item);
    });
}
// number 타입엔 forEach 메서드가 없다고 친절히 알려줌.

function showItem3(arr : string[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItem3([1,2,3]);
showItem3(["Kim","Yeon","Ju"]);