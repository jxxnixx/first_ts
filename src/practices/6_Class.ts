//// 6

class Car {
    color : string; // 멤버변수 미리 선언해줘야 함!
    constructor(color : string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}

// or 접근제한자, read-only 사용 가능
// like this

// class Car {
//     constructor(public color : string) {         
//         this.color = color;
//     }
//     ...

// class Car {
//     constructor(readonly color : string) {
//         this.color = color;
//     }
//     ...


const bmw = new Car("red");


/// 접근 제한자 Access modifier - public, private, protected

// public - 자식 클래스나, 클래스 인스턴스에서 접근 가능. 
//          아무것도 표기하지 않고 작성하면 public.

class Car01 {
    name : string = "car"; // 아무것도 없거나 public을 써주면 public
    color : string;
    constructor (color : string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}

class Bmw01 extends Car01 {
    constructor(color : string) {
        super(color); // super 호출하지 않으면 에러!
    }
    showName() {
        console.log(this.name); 
        // Car01의 name이 public이라 super.name으로 사용 가능하다고 했는데....
        // 무슨 이유에선지 안 되므로 this.name으로 변경
    }
}

const z4_1 = new Bmw01("black");


// private : 해당 클래스 내부에서만 접근 가능

class Car02 {
    private name : string = "car"; // #name 이나 private name이라고 적으면 private
    // 단 #을 사용할 경우 아래에 호출하는 모든 name들 앞에 #name을 사용해야 함
    color : string;
    constructor (color : string) {
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.name); // 이런 식으로!
    }
}

class Bmw02 extends Car02 {
    constructor(color : string) {
        super(color);
    }
    showName() {
        console.log(this.name); 
        // Car02의 name이 private이므로, name은 Car02 클래스 내부에서만 사용 가능
    }
}

const z4_2 = new Bmw02("black");


// protected : 자식 클래스에서 접근 가능

class Car03 {
    protected name : string = "car"; // protected
    color : string;
    constructor (color : string) {
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
}

class Bmw03 extends Car03 {
    constructor(color : string) {
        super(color);
    }
    showName() {
        console.log(this.name); // 자식 클래스에서 접근 가능. 
        // 그러면 public 과의 차이점은? 
    }
}

const z4_3 = new Bmw03("black");
console.log(z4_3.name); // 클래스 인스턴스를 통한 접근 불가. 이는 public만 가능.

// 즉, 자식 클래스에서는 접근 가능하나 클래스 인스턴스로는 접근 불가.


/// static : 정적인 멤버변수 생성 가능 
// 정적인 멤버변수 - 사용 시 this.- 가 아닌 클래스명.- 으로 사용!

class Car04 {
    readonly name : string = "car"; 
    color : string;
    static wheels = 4;
    constructor (color : string, name : string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car04.wheels);  // like this
    }
}

class Bmw04 extends Car04 {
    constructor(color : string, name : string) {
        super(color, name);
    }
    showName() {
        console.log(this.name); 
    }
}


/// 추상 class : 
// 추상화 - 프로퍼티나 메소드의 이름만 선언해주고, 
// 구체적인 내용과 기능은 상속받는 쪽에서 정의해주는 것.

abstract class Car_a {
    color : string;
    constructor(color : string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething() : void; 
    // abstract 안에 abstract를 선언했을 경우, 
    // 상속받은 Class 안에서 구체적으로 정의해주어야 함.
    // 안 해주면 지금처럼 상속받는 클래스에서 오류남ㅋ
}

const car = new Car_a("red"); 
// 에러! 추상 class는 new를 이용해 객체를 만들 수 없음.
// 아래처럼, 오직 상속을 통해서만 사용 가능.

class Bmw_a extends Car_a { 
    constructor(color : string) {
        super(color);
    }
}

const z4_a = new Bmw_a("black");