let a;
document.getElementById('timer').onclick=function(){
    a=setInterval(() => {
        let now=new Date();
        let y=now.getFullYear();
        let m=now.getMonth()+1;
        let d=now.getDate();
        let h=now.getHours();
        let mm=now.getMinutes();
        let ss=now.getSeconds();
        let result=`${y}.${m}.${d} ${h}:${mm}:${ss}`
        document.getElementById('result').innerHTML=result;
    }, 1000);
}


document.getElementById('stop').onclick=function(){
    clearInterval(a);
}