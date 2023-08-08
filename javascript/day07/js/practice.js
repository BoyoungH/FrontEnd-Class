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

document.getElementById('btn').onclick=function(){
    let input=document.getElementById('tt');
    let irum=input.value;//get, set -> input.value="aaa"
    document.getElementById('result').innerHTML+=`<li>${irum}</li>`;
}