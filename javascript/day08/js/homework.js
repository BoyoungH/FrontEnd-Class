const addItemButton = document.getElementById('addItem');
const newItemInput = document.getElementById('newItem');
const leftSelect = document.getElementById('leftSelect');
const rightSelect = document.getElementById('rightSelect');
const moveRightButton = document.getElementById('moveRight');
const moveLeftButton = document.getElementById('moveLeft');

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


leftSelect.addEventListener('dblclick', () => {
    let selectedOptions = Array.from(leftSelect.selectedOptions);
    selectedOptions.forEach(option => {
        leftSelect.removeChild(option);
    });
});

rightSelect.addEventListener('dblclick', () => {
    let selectedOptions = Array.from(rightSelect.selectedOptions);
    selectedOptions.forEach(option => {
        rightSelect.removeChild(option);
    });
});