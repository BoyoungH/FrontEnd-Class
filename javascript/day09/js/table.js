"use strict"

// let list=document.getElementsByClassName('yellow');

// list.addEventListner('click', function(){
//     list.classList.toggle('yellow');
//     // this.style.backgroundcolor="yellow";
// });


// const tds = document.querySelectorAll('td');

// tds.forEach(td => {
//     td.addEventListener('click', () => {
//       td.classList.toggle('yellow');
//     });
// });

// let ele_td = document.getElementsByTagName('td');//동적

// [...ele_td].forEach(item=>item.addEventListener(){
// })//정적

// for(let i = ele_td.length-1; i >= 0; i--){//각각의 td에 모두 걸어야함
//     ele_td[i].addEventListener('click', fucntion(){
//         this.parentElement.classList.toggle('yellow');
//     });
// }

let ele_table=document.querySelector('table>tbody');

ele_table.addEventListener('click', function(e){
    console.log(e.target);
    // e.target.classList.toggle('yellow');
    e.target.parentElement.classList.toggle('yellow');
});