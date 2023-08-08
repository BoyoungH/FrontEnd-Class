// const add=(function(input){
//     let name=[];
//     let count=0;
//     let fn=function(){
//         name.push(input);
//         count++;
//         return name;
//     }
//     return fn;
// })();

// document.getElementById('btn').onclick=function(){
//     let input=document.getElementById('tt');
//     document.getElementById('result').innerHTML=add(input);
// }

// document.getElementById('btn').onclick=function(){
//     let input=document.getElementById('tt');
//     let irum=input.value;//get, set -> input.value="aaa"
//     document.getElementById('result').innerHTML+=`<li>${irum}</li>`;
// }

// let list=[];
// document.getElementById('add').onclick=function(){
//     let input_name=document.getElementById('irum').value;
//     let input_age=document.getElementById('age').value;
//     list.push({input_name,input_age});
//     console.log(input_name,input_age);
// }
// document.getElementById('total').onclick=function(){
//     let resultHTML = '';

//     for (let i = 0; i < list.length; i++) {
//         resultHTML += `<li>이름: ${list[i].input_name}, 나이: ${list[i].input_age}</li>`;
//     }
//     document.getElementById('result').innerHTML+=resultHTML;
// }

let arrinfo=[];
document.getElementById('append').addEventListener('click', function(){
    let txtname=document.getElementById('irum');
    let txtage=document.getElementById('age');
    let irum=txtname.value;
    let age=Number(txtage.value);

    let info={irum:irum, age:age};
    arrinfo.push(info);

    txtname="";
    txtage="";
});

document.getElementById('view').onclick=function(){
    // let lilist=arrinfo.map((item)=>`<li>${item.irum}, ${item.age}</li>`); //return값을 받아서 새로운 배열로 넘겨줌
    // document.getElementById('result').innerHTML=lilist;//for each로도 해보기
    document.getElementById('result').innerHTML=arrinfo.forEach((item)=>`이름: ${irum} 나이: ${age}`);//for each로도 해보기->for each는 출력용
}