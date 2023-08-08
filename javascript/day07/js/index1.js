// const addcount=function(){
//     let count=0;
//     count++;
//     return count;
// }
// document.getElementById('btn').onclick=function(){
//     document.getElementById('result').innerHTML=addcount();
// }

const addcount=(function(){
    let count=0;
    let fn=function(){
        count++;
        return count;
    }
    return fn;
})();

document.getElementById('btn').onclick=function(){
    document.getElementById('result').innerHTML=addCount();
}