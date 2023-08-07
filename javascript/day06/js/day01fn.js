// function fnmove1(){///선언적 함수
//     console.log('fnmove1-1');
//     console.log('fnmove1-2');
// }
// fnmove1();
// console.log('=========');
// fnmove1();

// function fnmove2(irum, age){
//     console.log(`name :${irum}, age :${age}`);
//     console.log('움직입니다.');
// }

// fnmove2('hong', 20);
// console.log('=========');

// function getSu(){
//     let su=100;
//     return su;
// }
// let su=getSu();
// console.log('값은 : '+su);

// console.log('=========');

// let su1=10;
// let su2=20;
// function add(a, b){
//     return a+b;
// }


// let result2=add(su1, su2);
// console.log(result2);

// function prt(arg){
//     console.log(arg, typeof arg);
// }

// let arr=[10,20,30];
// prt(arr);

// let irum="kim";//전역변수

// function prt2(){
//     var test="hong";//지역변수
//     console.log(irum, test);
// }

// prt2();
// console.log('=========');
// console.log(irum,test);


// const prt=function(){ //고정함수
//     console.log('prt');
// }

// prt();//변수처럼 사용

// console.log('==========================');

// const prt2=function(irum="hello", age=0){
//     console.log('irum :', irum);
//     console.log('age : ', age);
// }

// prt2('test', 20);

// console.log('==========================');
// prt2();

// const show=function(...irum){
//     for(let i=0; i< irum.length ; i++){
//         console.log(irum[i]);
//     }
//     console.log('==========================');
//     for(let a of irum){
//         console.log(a);
//     }
// }

// show();
// console.log('==========================1');
// show('a1');
// console.log('==========================2');
// show('a1','a2');

// let arr1=[10, 20, 30];
// let arr2=[100, 200, 300];
// //let arr3=[10, 20, 30, 100, 200, 300]
// let arr3=[...arr1, ...arr2];
// let prt=function(t){
//     console.log(t[1]);
// }

// prt(arr3);

// let add=function(a,b){
//     return a+b;
// }
// let tot=add(10,20);
// console.log(tot);

// let prt=()=>"hong"; //한줄자리로 return의 이름을 가짐, 두줄 이상이면 중괄호 열고 닫으면 댐/error 연산자
// let result3 = prt();
// console.log(result3);

// let prt2=()=>{
//     console.log('test1');
//     console.log('test2');
// }
// prt2();

// let prt3=(a,b)=>{
//     console.log('a : ', a, 'b :', b);
// }
// prt3("test","test2");

// let fn=function(a, b, t1){
//     console.log(a,b);
//     console.log(t1);
//     t1(a,b); //콜백함수
// }

// let add=function(su3,su4){
//     console.log("add function", (su3+su4));
// }
// fn(10,20,add);

[10,20,30].forEach(function(item){
    console.log(item);
});
console.log('==========================');

[10,20,30].forEach((item)=>{
    console.log(item);
});
