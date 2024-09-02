// Example: Simple Frontend Task Storage (local, not blockchain yet)
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
        // Call backend to store task on blockchain (not implemented here)
        saveTaskToBlockchain(task);
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${task} <button onclick="completeTask(${index})">Complete</button></li>`;
    });
}

function completeTask(index) {
    const task = tasks[index];
    tasks.splice(index, 1);
    renderTasks();
    // Call backend to reward user (not implemented here)
    rewardUser(task);
}

// Placeholder for backend call to store task on blockchain
async function saveTaskToBlockchain(task) {
    const response = await fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    });
    const data = await response.json();
    console.log(data.message);
}

// Placeholder for backend call to reward user
async function rewardUser(task) {
    const response = await fetch('/api/rewardUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    });
    const data = await response.json();
    console.log(data.message);
}
