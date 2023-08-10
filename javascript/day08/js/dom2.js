document.getElementById('append').addEventListener('click',function(e){
    console.log(e.target);
    e.preventDefault();//submit같은 것을 막음
    let irum=document.getElementById('irum');
    let data=irum.value;
    let ele_li=document.createElement('li');
    let txt=document.createTextNode(data);
    ele_li.appendChild(txt);
    let result=document.getElementById('result');
    result.appendChild(ele_li);
    irum.value="";
});

// result.addEventListener('click', function(e){
//     e.target.classList.toggle('yellow');
// });

const result=document.getElementById('result');
result.addEventListener('click', function(){
    e.target.classList.toggle('bg');
});

result.addEventListener('dblclick', function(e){//getElementById이거 쓰는거 줄이고 parent, sibiling같은 걸 사용
    let parent = e.target.parentElement;
    parent.removeChild(e.target);
});

