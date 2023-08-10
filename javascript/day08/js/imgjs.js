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
//설명
// children:자식 중 element type 요소만 반환
// firstChild -> firstElementChild
// lastChild -> lastElementChild
// nextSibling -> nextElementSibling
// previousSibling//white space공간들까지 계산함 -> previousElementSibling
// hasChildNodes ->boolean값
//1
// const ul_ele = document.getElementsByTagName('ul')[0];//배열에 대한 자료, queryselector는 하나만 받아옴
// console.log(ul_ele.children);
// console.log(ul_ele.hasChildNodes());
// console.log(ul_ele.firstElementChild);
// console.log(ul_ele.lastElementChild);
//2
// let ele_m3 = document.getElementById('m3');
// let next_ele_m3=ele_m3.nextElementSibling;
// console.log(next_ele_m3);
// next_ele_m3.style.backgroundColor='yellow';
// ele_m3.previousElementSibling.style.color='red';
//설명
// className : class attribute값을 변경하거나 얻어올때 사용
// classList : toggle(add+remove), replace
//3
// let cName=document.getElementById('m2');
// console.log(cName.className);
// cName.className='red';
// console.log(cName.className);

let ele_li=document.querySelectorAll('li');//정적인거라 for문 가능
// ele_li.forEach(item=>{
//     if(item.classList.contains('red'))
//         item.classList.replace('red','green');
// });
ele_li.forEach(item=>{
    if(item.className=='red')
        item.className='green';
});

document.getElementById('aaa').innerHTML='<p>hello</p>';//돔구조 만들고 추가하는애 -> hello
document.getElementById('aaa').textContent='<p>hello</p>';// -> <p>hello</p>