// document.getElementById('win_open').onclick=function(){
//     // window.open("hello");
//     // location.href="http://www.naver.com";
//     // document.write('hello');
// }

let d=document.body;
console.log(d);

let list_id=document.getElementById('listId');
console.log(list_id);

let li_class=document.getElementsByClassName('listClass');
console.log(li_class);

let tagname=document.getElementsByTagName('li');
console.log(tagname);

let names=document.getElementsByName('listName');
console.log(names);

let child1=document.body.children;
console.log(child1);

let lis=document.getElementsByTagName('li')[2].textContent;
console.log(lis);

let lis1=document.getElementsByTagName('li')[2].className;
console.log(lis1);

let lis2=document.getElementsByTagName('li')[2].tagName;
console.log(lis2);
