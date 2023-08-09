"use strict"

//1
// let a1=[10, 20, 30];
// let a2=a1;

// console.log(a1===a2);

// a1.forEach(item=>console.log(item));

// a2[1]=100;
// console.log("========");
// a1.forEach(item=>console.log(item));

//2
// let a=[10, 20, 30];

// let newA=Object.assign([],a);
// console.log(a===newA);
// newA[1]=100;
// a.forEach(item=>{
//     console.log(item);
// })
// console.log("++++");
// newA.forEach(item=>{
//     console.log(item);
// })

////3 me
// let email="htong@aaa.com";

// let b=email.indexOf("@");

// let em=email.substring(0,b);
// let domain=email.substring(b+1);

// console.log(em);
// console.log(domain);

// //3 answer
// let data="hong gil dong";
// let result=data.split(" ");
// result.forEach(item=>{
//     console.log(item);
// })

// let result2=email.split("@");
// console.log(`이메일:${result2[0]} 도메인:${result2[1]}`);


// //4
// let arr=[10,20,30];
// let arr2=new Array(100,200,300);

// let newarr=arr.concat(arr2,['t1','t2']);
// console.log(arr);
// console.log(newarr);

////5
// let data=[10,50,40,30,100,50];
// let result=data.filter(function(element){
//     //return element===50;
//     return element>=40;
// });
// console.log(result);

// //6
// let arrName=['hong', 'kim', 'lee'];
// let result=arrName.join('');
// console.log(result);

// //7
// let arr=[];
// arr.push("aaa");
// arr.push("bbb");
// arr.push("ddd");

// console.log(arr, arr.length);

// console.log("++++++");

// arr.forEach(item=>console.log(item));
// console.log(arr.length);

// let d1=arr.pop();
// console.log(`삭제한 요소${d1}, 전체요소${arr}`);

//8
// let irum=['홍','김','이','박','나'];
// let result1="";

// document.getElementById('view').onclick=function(){
//     let elements="";
//     // irum.forEach(element=>{
//     //     elements+=`<li>${element}</li>`
//     // });

//     let bb=irum.map(item=>`<li>${item}</li>`);
//     console.log(bb);
//     document.getElementById('result').innerHTML=bb.join('');
//     // document.getElementById('result').innerHTML=elements;
// }

//9
// try{
//     console.log("test");
//     console.log("test2");
//     let arr=new Array(-1);
//     console.log("test3");
// }catch(e){
//     // console.log(e);
//     console.log("tttt");
// }finally{
//     console.log('finally');
// }
//10
// try{
//     console.log("test");
//     console.log("test2");
//     let arr=new Array(-1);
//     console.log("test3");
// }catch(e){
//     // console.log(e);
//     console.log("tttt");
// }finally{
//     console.log('finally');
// }

// //11
// let a=10;
// try{
//     if(a>=20)
//         console.log('a가 20보다 큽니다.');
//     else if(a==20)
//         throw new Error("20과 동일");
//     else
//         throw new Error("20보다 작다");
// }catch(e){
//     console.log(e);
// }finally{
//     console.log('finally');
// }

//12
// let irum=prompt("이름:");
// let age=Number(prompt("나이:"));

// try{
//     if(age>=0){
//         console.log(`이름 : ${irum}`);
//         console.log(`나이 : ${age}`);
//     }
//     else if(irum == null && age == null)
//         throw new Error("기타 에러");
//     else
//         throw new Error("0보다 작은 나이를 입력하였습니다.");
// }catch(e){
//     console.log(e);
//     console.log("error");
// }finally{
//     console.log('finally');
// }

// document.getElementById("send").addEventListener('click', function(){
//     const irum=document.getElementById('irum');
//     const txtage=document.getElementById('age');

//     try{
//         let age=Number(txtage.value);
//         if(Number.isNaN(age)){
//             throw new Error("숫자형 자료가 아님");
//         }
//         else{
//             if(age < 0)
//                 throw new Error('0보다 작습니다.');
//             else{
//                 console.log(`이름 :${irum.value} 나이:${age}`);
//             }
//         }
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.log("done");
//     }

//     irum.value="";
//     txtage.value="";
// });

// async(비동기):브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행
// defer:브라우저가 페이지 파싱을 모두 끝내면 스크립트가 실행
// async, defer 모두 선언하지 않을 경우
//     브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행

// dom을 다 만들고 밑에다가 작성하기에는 너무 늦어짐
// 따라서 html,css dom구조가 만들어질때까지 웨이팅 후 실행


