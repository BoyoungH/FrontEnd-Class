/*let layoutimgs=document.getElementsByClassName('layout');//배열

for(let layoutimg of layoutimgs){
    layoutimg.addEventListener('mouseover',function(){
        for(let i=0;i < layoutimgs.length;i++){
            layoutimgs[i].style.border="";
        }
        this.style.border='3px solid red';
        let v=document.getElementById('view');
        console.log(v.getAttribute('src'));
        console.log(v.getAttribute('alt'));
        v.setAttribute('src', this.src);
        v.setAttribute('alt', this.alt);
    });
}*/
let ele_red=document.getElementsByClassName('red');//배열!!!!!!,foreach, of 같은건 사용못함->동일한 문제가 발생, 동적?
// let ele_red1=document.querySelectorAll('.red');//정적

// console.log(ele_red);

// for(let i=0;i < ele_red.length;i++){
//     ele_red[i].className="green";
//     i--;
// }

// for(let i=ele_red.length-1;i>=0;i--){
//     ele_red[i].className="green";
// }

// [...ele_red].forEach(item=>item.className='green');
document.querySelectorAll('.red').forEach(item=>item.className="green");