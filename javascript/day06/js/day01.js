// "use strict"

//var a=underfined
// console.log('a', a);
// var a=20;

//error
//let b;
// console.log('b', b);
// let b=20;

// let a=30;
// {
//     let a=10;
//     console.log('block-a', a);
// }

// console.log('global-a', a);

// var su=100;
// {
//     var su=10;
//     console.log('block  -su', su);
// }
// console.log('global-su', su);
// console.log('-----------------');
// for(var i=1; i<3; i++){
//     console.log(i);
// }

// console.log('i :', i);
// console.log('--------------------');

// let tf='';
// if(tf)
//     console.log("true");
// else
//     console.log("false");

// let arr=[10, 20, 30];

// let fn = function(){
//     console.log('function');
// }

// fn();
// console.log(arr.length);


// console.log(typeof arr);
// console.log(typeof(arr));
// console.log(typeof fn);

// let person={};
// console.log(typeof person);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(person));

// let a='10';
// let b=20;
// let c=a+b;
// console.log(typeof c, c);
// console.log(typeof(10/2), 10/2);
// console.log(typeof('10'/2), '10'/2);
// console.log(typeof('a'/2), 'a'/2);

// console.log(Number('10'), Number('aa'), Number(null), Number(undefined));

/*숫자형:eval, parseInt, parseFloat Number */

// let name1="hong gil dong";
// let jumsu=100;
// console.log('name : '+ name1 +"jumsu");
// console.log('name : ', name1, "jumsu");
// console.log(`name :${name1}, jumsu:${jumsu}`);

/* 
        단항연산자
        ++(증가연산), --(감소연산)
        
        let x=20;
        let y=++x;(전위연산)
        let z=x++;(후위연산)

        이항연산자
            산술연산자: +,-,*,/,%,**
 */

/*let a=10;
let b=++a;
console.log(`a : ${a} b :${b}`);

let t1=10;
let t2=3;

console.log(t1+t2);
console.log(t1*t2);
console.log(t1/t2);
console.log(t1%t2);
console.log(t1**t2);

console.log(10+20+"aaa");
console.log("aaa"+10+20);*/

/* 비교연산 */

/*let a='10';
let b=10;
console.log(typeof a);
console.log(typeof b);
console.log(a==b);
console.log(a===b);*/

/*let m1={name:'hong', age:20};
let m2=m1;
let m3={name:'hong', age:20};

console.log(m1==m2, m1===m2);//true
console.log(m1==m3, m1===m3);//false


console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(false=='');//true
console.log(false==0);//true
console.log(false===0);//false
*/

/*
    복합대입 연산자 a=a+10
*/

// let a=10;
// console.log(a);
// a+=30;
// console.log(a);

// let max;
// let su1=10;
// let su2=20;
// max=(su1>su2)? su1:su2;
// console.log(max);

// let a=10;
// console.log(a>>2);
// console.log(a<<2);

//조건문 -if

// let kor=85;
// if (kor>=60){
//     console.log("합격");
// }
// else{
//     console.log("불합격");
// }

// if(kor>=90)
//     console.log("수");
// else if(kor>=80)
//     console.log("우");
// else if(kor>=70)
//     console.log("미");
// else if(kor>=60)
//     console.log("양");
// else
//     console.log("가");

// document.getElementById('btn').onclick=function(){
//     let elekor=document.getElementById('kor');
//     let eleeng=document.getElementById('eng');
//     let elemath=document.getElementById('math');
//     let kor=Number(elekor.value);
//     let eng=Number(eleeng.value);
//     let math=Number(elemath.value);

//     let average=(kor+eng+math)/3;
//     let result="<li> 평균점수 : </li>"+average;

//     let comp="";
//     if(kor >=90 && eng >=90 && math>=90)
//         result+="<li>very good</li>"
//         // comp="very good";
//     else if(kor >=90 || eng >=90 || math>=90)
//         result+="<li>very good</li>"
//         // comp="good";
//     else
//         result+="<li>very good</li>"
//         // comp="bad";
//     // document.getElementById('average').innerHTML="평균 : " + average;
//     // document.getElementById('comp').innerHTML="성취도 : " + comp;
//     document.getElementById('result').innerHTML=result;
//     elekor="";
//     eleeng="";
//     elemath="";
// }

// let su=5;
// let data="";

// switch(su){ //변수,식
//     case 5:
//         data+='5';
//     case 4:
//         data+='4';
//     case 3:
//         data+='3';
//     case 2:
//         data+='2';
//     case 1:
//         data+='1';
//         break;
//     default:
//         data+="나머지경우";
// }

// console.log(data);
// console.log("--------------------------------");

// let a=prompt("숫자를 입력하세요", 0);
// Number(a);

// let result1=a%3;

// switch(result1){
//     case 0:
//         // console.log("3의배수");
//         document.getElementById('one').innerHTML="3의 배수";
//         break;
//     case 1:
//         // console.log(`나머지 값은 1`);
//         document.getElementById('one').innerHTML="나머지 값은 1";
//         break;
//     case 2:
//         // console.log(`나머지 값은 2`);
//         document.getElementById('one').innerHTML="나머지 값은 2";
//         break;
// }

// for(let i=10;i<15;i=i+2){
//     console.log('1 : ', i);
// }

// let arr=['a1', 'a2', 'a3'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// console.log("======================");

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log("======================");
// for(let item of arr){
//     console.log(item);
// }
// console.log("======================");
// arr.forEach(item=>{
//     console.log(item);
// })

// console.log("======================");

// let man={
//     irum:"홍길동",
//     age:20,
//     addr:"서울"
// };
// console.log(typeof man);
// console.log(man.irum);
// console.log(man.age);
// console.log(man.addr);

// console.log("======================");
// for(let key in man){
//     console.log(key);
// }

// console.log("======================");
// for(let index in arr){
//     console.log(index);
// }
// console.log("======================");

// let data="hello, javascript";
// console.log(data[1]);

// data[1]='T';
// console.log(data);

// for(let item of data){
//     console.log(item);
// }

// let i=0;
// while(i<5){
//     i++;
//     console.log(i);
// }
// console.log("======================");

// let d=10;
// while(d>0){
//     console.log(d);
//     d=d-2;
// }
// console.log("======================");
// let i=1;
// while(true){
//     console.log(i);
//     if(i==5) break;  
//     i++;  
// }

// console.log("======================");
// for(let i=1;i<10;i++){
//     if(i%3==0)
//         continue;
//     console.log(i);
// }
// console.log("======================");
// let f=0;
// while(f<10){
//     f++;
//     if(f%3==0)
//         continue;
//     console.log(f);
// }

let sungjuckarr=[60,90,70,100,75];
sungjuckarr.forEach(function(item){
    console.log(item);
});
