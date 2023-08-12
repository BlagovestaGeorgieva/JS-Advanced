function toggle() {
    
    let button = document.querySelector('.button');
    let element = document.getElementById('extra');
    
    if (button.textContent === 'Less') {
        button.textContent = 'More';
        element.style.display = 'none';
    } else {
        button.textContent = 'Less';
        element.style.display = 'block';
    }
}