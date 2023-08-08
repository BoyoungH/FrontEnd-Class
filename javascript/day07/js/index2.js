
// 1.funcion 생성자 함수
// 2.object 생성자 함수
// 3.생성자 함수
// 4.객체리터럴
// 5.클래스

// const op = new function('a','b',"return a+b");

// let result=op(10,20);
// console.log('result', result);

// let person1=new Object();
// person1.name="홍길동";
// person1.age=20;
// person1.addr="서울";
// person1.prt=function(){
//     console.log("prt function");
// }

// console.log(person1);

// console.log(`name:${person1.name}, age:${person1.age}, addr:${person1.addr}`);
// console.log(typeof person1);
// console.log(Array.isArray(person1));

// function Man(irum, age){
//     this.irum=irum;
//     this.age=age;
//     this.prt=function(){
//         console.log(`name ${this.irum}, age:${this.age}`);
//     }
// }

// let p1=new Man('hong',20);
// let p2=new Man('park',10);

// console.log(p1);
// console.log(p2);

// console.log(p1.irum, p1.age);
// p1.prt()
// console.log('+++++++++++++++++');
// console.log(p2['irum'],p2['age']);
// p2.prt();

// const m1={
//     irum:'hong', age:20, add:"서울"
// }

// const m2={
//     irum:'park', age:10, add:"경기"
// }

// console.log(typeof m1, m1);
// console.log(typeof m2, m2);
// console.log(m1.irum, m1.age, m1.add);
// console.log(m2['irum'], m2['age'], m2['add']);

// class Student{
//     constructor(studentId, irum, age){
//         this.studentId=studentId;
//         this.irum=irum;
//         this.age=age;
//     }
// }
// let s1=new Student(1,'hong', 20);
// let s2=new Student(2,'park', 10);

// console.log(s1, typeof s1);
// console.log(s2, typeof s2);

// // 속성 추가
// // 대괄호만 사용하는 경우 여러개의 속성으로 한 값을 정의, 런타임시 결정되는 속성

// s1.addr='서울';
// s1.sayhello=()=>{
//     console.log('안녕하세요');
// }
// console.log(s1);
// console.log("=======속성삭제=======");
// delete s1.age;
// console.log(s1);

// // s1.nick1 nick2="eee";//여러개 속성을 한번에 쓰려고 했을때.쓰면 오류
// s1['nick1 nick2']="test";
// console.log(s1);
// console.log(s1['nick1 nick2']);

// let a='age';
// const user={
//     name:'hong',
//     [a]:20
// }
// console.log(user);
// console.log("======================");
// console.log(s1);

// for(let item in s1){
//     console.log(s1[item]);// s1.item은 안댐->s1에서 item속성을 직접적으로 찾기 때문
// }

class Student{
    constructor(irum, age){
        this.irum=irum;
        this.age=age;
    }
    // prt=function(){
    //     console.log('prt method');
    // }
}
Student.prototype.prt=function(){//원형 객체에 메소드 하나 만들어서 같이 쓰고 있음
    console.log('prt!');
}

let ins1=new Student("a1", 20);
let ins2=new Student("a2",10);

ins1.prt();
// console.dir(ins1);
// console.dir(ins2);

// console.log("==================================");
// console.log(ins1);
// console.log(ins1);