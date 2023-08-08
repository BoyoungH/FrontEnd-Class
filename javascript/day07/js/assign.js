//구조분해 할당:배열이나 객체 속성을 해체해서 개별 변수에 담는 것

// let [a,b]=[10,20];
// console.log("a : ", a);
// console.log("b : ", b);
// console.log("==================================");

// let [t1, t2, ...t3] = [100, 200, 300, 400]; // ...은 무조건 마지막 매개변수로 마지막에 써야함
// console.log(t1);
// console.log(t2);
// console.log(t3);

// console.log("==================================");

// let [su1, su2]=[100, 200];
// console.log(`su1 : ${su1}, su2 : ${su2}`);
// [su2, su1]=[su1, su2];
// console.log(`su1 : ${su1}, su2 : ${su2}`);

// let man={
//     irum:'hong',
//     age:20,
//     addr:"seoul"
// }

// let {irum, age, addr}=man;//속성의 이름이 반드시 같아야함
// console.log(`irum : ${irum}, age : ${age}, addr : ${addr}`);

// console.log("==================================");

// let[a,b,c]=[1,2];
// console.log(a,b,c);

// let [a1,,b1]=['a', 'b', 'c', 'd']
// console.log(a1,b1);

// let arr=[];
// let arr2=new Array(3);
// console.log(Array.isArray(arr));

// let len;
// let arr=[];
// len=arr.push("a1");

// console.log(`len :${len}, arr:${arr}`);
// console.log("-----------------");

// len = arr.push('a2');
// console.log(`len :${len}, arr:${arr}`);