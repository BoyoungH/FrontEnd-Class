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