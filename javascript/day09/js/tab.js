// let tabItem=document.getElementsByClassName('tabItem');

// for(let i=0; i< tabItem.length;i++){
//     tabItem[i].addEventListener('click', function(){
//         this.classList.toggle('bgpanel');
//         const aria=this.getAttribute('aria-controls');
//         const ariarecieved = document.getElementById(aria);
//         // console.log(panel.style.maxHeight);
//         if(ariarecieved){
//             aria.style.display = 'block';
//         }
//         else{
//             aria.style.display = 'none';
//         }
//         tabItem.forEach(item => {
//             item.classList.remove('active');
//         });
//         tabItem.classList.add('visit');

//     })
// };

"use strict"

const mytabs=document.querySelectorAll('.tabItem');
const tabpanels=document.querySelectorAll('.tabpanel');

const init=function(){
    let initli=mytabs[0].firstElementChild;
    console.log(initli);
    let initA=initli.parentElement.getAttribute('aria-controls');
    console.log(initA);
    initli.classList.add('bgpanel');
    initli.focus();
    console.log(initli);
    let initId=document.getElementById(initA);
    console.log(initId);
    initId.classList.add('visit');
}


init();

mytabs.forEach(item=>{
    item.firstChild.addEventListener('focus', function(e){
        e.preventDefault();
        for(let i=0; i<mytab)
    })
})