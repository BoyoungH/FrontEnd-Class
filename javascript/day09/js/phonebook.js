"use strict"

// let input=document.getElementById('myInput');
// let inputValue=input.value;
// // let lilist=document.getElementsByTagName('ul')[0];
// let listItems = document.querySelectorAll('#myul li');
// console.log(listItems);
// input.addEventListener('keyup', item => {
//     if(item.key === 'Enter'){
//         listItems.forEach(item=>{
//             if(item.textContent.includes(inputValue)){
//                 item.style.display='block';
//                 console.log(item);
//             }
//             else{
//                 item.style.display='none';
//             }
//         });
//     }
// });


const searchfn=(e)=>{
    e.preventDefault();
    // console.log(e.target.value);
    let inputValue=e.target.value;
    let element_li=document.getElementsByTagName('li');
    [...element_li].forEach(item=>{
        // console.log(item);
        let ele_a=item.getElementsByTagName('a')[0];
        let a_content=ele_a.textContent;
        // console.log(a_content);
        if(a_content.indexOf(inputValue)>-1){
            item.style.display="";

        }
        else{
            item.style.display="none";
        }
    });
}

document.getElementById('myInput').addEventListener("input", searchfn);



