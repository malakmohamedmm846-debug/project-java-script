let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value == "") {
        alert("Enter task");
        return;
    }

    tasks.push(input.value);

    displayTasks();

    input.value = "";
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        list.innerHTML += `
        <div class="task">
            ${tasks[i]}
            <button onclick="deleteTask(${i})">Delete</button>
        </div>
        `;
    }
}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}