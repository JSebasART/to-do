document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const list = document.getElementById('list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        todoInput.value = '';
    });

    function addTask(text) {
        const item = document.createElement('li');
        item.textContent = text;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container'); 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            list.removeChild(item);
        });

        const completeButton = document.createElement('button')
        completeButton.textContent = 'Complete task';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            item.classList.toggle('completed')
        });

        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);

        item.appendChild(buttonContainer)
        list.appendChild(item);
    }
});
