// document.getElementById('btn').addEventListener('click', function(){
//     let data=document.getElementById('txt').value;
//     let opt=document.createElement('option');
//     let ele=document.createTextNode(data);
//     opt.appendChild(ele);

// });

let addItemButton = document.getElementById('addItem');
let newItemInput = document.getElementById('newItem');
let leftSelect = document.getElementById('leftSelect');
let rightSelect = document.getElementById('rightSelect');
let moveRightButton = document.getElementById('moveRight');
let moveLeftButton = document.getElementById('moveLeft');

function addItem(){
    let newItemText = newItemInput.value;
    let option = document.createElement('option');
    option.textContent = newItemText;
    leftSelect.appendChild(option);
    newItemInput.value = '';
}
addItemButton.addEventListener('click', addItem);

newItemInput.addEventListener('keyup',item=>{
    if(item.key === 'Enter'){
        addItem();
    }
});

moveRightButton.addEventListener('click', () => {
    let selectedOptions = Array.from(leftSelect.selectedOptions);
    selectedOptions.forEach(option => {
        rightSelect.appendChild(option);
    });
});

moveLeftButton.addEventListener('click', () => {
    let selectedOptions = Array.from(rightSelect.selectedOptions);
    selectedOptions.forEach(option => {
        leftSelect.appendChild(option);
    });
});