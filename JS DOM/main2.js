function changeBackground(color){
    document.body.style.backgroundColor = color;
}


const Button = document.getElementById('theme');

Button.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor =  document.body.style.backgroundColor;

    if(!currentColor || currentColor == 'white') {
        changeBackground('Black');
        theme.innerText = 'Light Mode'
    }else {
        changeBackground('white');
        theme.innerText = 'Dark mode'
    }
})