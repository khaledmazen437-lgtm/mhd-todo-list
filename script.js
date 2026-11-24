const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = input.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">🗑️</button>
    `;

    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.style.opacity = '0';
        setTimeout(() => li.remove(), 300);
    });

    todoList.appendChild(li);
    input.value = '';
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
