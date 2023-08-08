// document.getElementById('sum').addEventListener('click', function(){
//     let su1=document.getElementById('su1');
//     let su2=document.getElementById('su2');
//     let result=Number(su1.value) + Number(su2.value);
//     console.log(result);
//     su1.value="";
//     su2.value="";
// });

// let su1=Number('10');
// let data=su1.toString();
// console.log(typeof su1, su1);
// console.log(typeof data, data);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// let dd=new Date();
// console.log(dd);
// console.log('========================');
// // 오늘 날짜 가져오기
// let today = new Date();
// let year = today.getFullYear();
// let month = String(today.getMonth() + 1).padStart(2, '0');
// let day = String(today.getDate()).padStart(2, '0');

// // 현재 시간 가져오기
// let hours = String(today.getHours()).padStart(2, '0');
// let minutes = String(today.getMinutes()).padStart(2, '0');
// let seconds = String(today.getSeconds()).padStart(2, '0');

// console.log(`${year}.${month}.${day} ${hours}:${minutes}:${seconds}`);

let now=new Date();
let y=now.getFullYear();
let m=now.getMonth()+1;
let d=now.getDate();

let h=now.getHours();
let mm=now.getMinutes();
let ss=now.getSeconds();

let result=`${y}.${m}.${d} ${h}:${mm}:${ss}`
console.log(result);




