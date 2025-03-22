// alert('linked');

const button = document.getElementById('button');
const todo = document.getElementById('todo');
const ul = document.getElementById('ul');

button.addEventListener('click', () => {
    const value = todo.value
    console.log('User entered', value);

    const li = document.createElement('li') //li tag
    li.innerText = value;

    const button = document.createElement('button');
    button.innerText = 'X';

    button.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(button);

    ul.appendChild(li);
    todo.value = ''; //to khali the value
});