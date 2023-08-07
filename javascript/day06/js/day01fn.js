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

function prt(arg){
    console.log(arg, typeof arg);
}

let arr=[10,20,30];
prt(arr);

let irum="kim";//전역변수

function prt2(){
    var test="hong";//지역변수
    console.log(irum, test);
}

prt2();
console.log('=========');
console.log(irum,test);
