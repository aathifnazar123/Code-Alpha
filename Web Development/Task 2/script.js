function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let taskList = document.getElementById('taskList');
    
    let li = document.createElement('li');
    li.innerHTML = `
        ${taskText} 
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(btn) {
    let li = btn.parentNode;
    li.remove();
}
