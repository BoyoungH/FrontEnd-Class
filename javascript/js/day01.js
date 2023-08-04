console.log('hello');

/*
    1.변수 선언
    let, var
    2.상수
    const
 */

const irum='홍길동';
console.log('name', irum);
// irum='park';
// console.log('new name', irum);

// console.log('a', a);
// var a=10;
// a=20;
// console.log('new-a', a);
console.log('-------------------');

// var b;
// console.log('b', b);
// console.log('====================');

// let su;
// su=10;
// console.log(su);
// let su;
/* */
let a1=10;
let b='aaa';
let c=10.2;
let d=10==10;
let f=null;
let e;

console.log(typeof a1, 'a1');
console.log(typeof b, 'b');
console.log(typeof c, 'c');
console.log(typeof d, 'd');
console.log(typeof e, 'e');
console.log(typeof f, 'f');
console.log(10/0,'-10/0');
console.log(-10/0, '-10/0');
console.log('aa'/10, 'aa/10');

let t1=[];//배열
let t2={};//객체
console.log(typeof t1);
console.log(typeof t2);

let t3=function(){console.log('test');};//함수
console.log(typeof t3);