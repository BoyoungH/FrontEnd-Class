// class Man{
//     constructor(irum, age){
//         console.log("constructor");
//         this._irum=irum;// 이 부분에서 setter가 호출됨 따라서 _ 사용
//         this._age=age;

//     }
//     get irum(){
//         console.log("getter irum");
//         return this._irum;
//     }
//     set irum(irum){
//         console.log("setter irum");
//         this._irum=irum;
//     }
//     get age(){
//         console.log("getter age");
//         return this._age;
//     }

//     set age(age){
//         console.log("setter age");
//         this._age=age;
//     }
// }
// let m1=new Man('hong',20);
// console.log(m1.age);

class P1{
    constructor(age){
        this._age=age;
    }
    prt=function(){
        console.log("p1-prt method");
    }
}

class C1 extends P1{
    constructor(irum, age){
        super(age);
        this._irum=irum;
    }
    show=function(){
        console.log("C1 show method");
    }
    prt=function(){
        console.log("C1 prt method");
    }
}

let ins=new P1(10);
ins.prt();

let ins2=new C1("hong",20);
ins2.prt();
ins2.show();