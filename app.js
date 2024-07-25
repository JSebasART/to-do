document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const list = document.getElementById('list');

    //load the tasks in local storage
    loadTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(text,completed) {
        const item = document.createElement('li');
        item.textContent = text;

        if (completed) {
            item.classList.add('completed');
        }

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container'); 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            list.removeChild(item);
            saveTask();
        });

        const completeButton = document.createElement('button')
        completeButton.textContent = 'Complete task';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            item.classList.toggle('completed');
            saveTask();
        });

        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);

        item.appendChild(buttonContainer)
        list.appendChild(item);
        saveTask();
    }

    function saveTask() {
        const tasks = [];
        list.querySelectorAll('li').forEach((item) => {
            tasks.push({
                text: item.firstChild.textContent, // Get the text content of the task
                completed: item.classList.contains('completed') // Check if the task is completed
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Store tasks as a JSON string
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Retrieve tasks from localStorage
        tasks.forEach(task => addTask(task.text, task.completed));
    }
});
