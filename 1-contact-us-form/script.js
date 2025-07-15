const switchBox = document.getElementById('toggleSwitch');
const checkbox = document.getElementById('switch');

switchBox.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    switchBox.classList.toggle('active', checkbox.checked);
    if(switchBox.classList.contains('active')){
        switchBox.style.backgroundColor = 'rgb(62, 79, 231)';
    }
    else{
        switchBox.style.backgroundColor = 'rgb(223, 223, 223)';
    }
});