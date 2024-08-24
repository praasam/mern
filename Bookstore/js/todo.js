let taskList = document.getElementById('task-list');
let newTaskInput = document.getElementById('new-task');
let addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let newTask = newTaskInput.value.trim();
    if (newTask!== '') {
        tasks.push({ text: newTask, completed: false });
        newTaskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let taskListItem = document.createElement('li');
        taskListItem.textContent = task.text;
        taskListItem.className = task.completed? 'completed' : '';
        
        let completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.backgroundColor = '#4CAF50'; 
        completeBtn.style.color = '#fff'; 
        completeBtn.style.margin = '10px';
        completeBtn.style.border = 'none';
        completeBtn.style.padding = '5px 10px';
        completeBtn.style.borderRadius = '5px';
        completeBtn.style.cursor = 'pointer';
        completeBtn.addEventListener('click', () => {
            task.completed = true;
            renderTaskList();
        });
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#f44336'; 
        deleteBtn.style.color = '#fff'; 
        deleteBtn.style.margin = '10px';
        deleteBtn.style.border = 'none';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.borderRadius = '5px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
        
        taskListItem.appendChild(completeBtn);
        taskListItem.appendChild(deleteBtn);
        taskList.appendChild(taskListItem);
    });
}

renderTaskList();