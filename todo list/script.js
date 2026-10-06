let input = document.getElementById("task");
let button = document.getElementById("add");
let taskList = document.getElementById("taskList");
let completed = document.getElementById("completed");

let taskCount = 0;
let completedCount = 0;

function completeTask(task) {
    if (task.style.textDecoration === "line-through") {
        task.style.textDecoration = "none";
        task.style.color = "black";

        completedCount = completedCount - 1;
        completed.textContent = "Completed: " + completedCount + " / " + taskCount;
    }
    else {
        task.style.textDecoration = "line-through";
        task.style.color = "gray";

        completedCount = completedCount + 1;
        completed.textContent = "Completed: " + completedCount + " / " + taskCount;
    }
}

function addTask() {
    if (input.value === "") {
        return;
    }

    let task = document.createElement("p");

    task.textContent = input.value;

    task.addEventListener("click", function() {
        completeTask(task);
    });

    taskList.appendChild(task);

    taskCount = taskCount + 1;
    completed.textContent = "Completed: " + completedCount + " / " + taskCount;

    input.value = "";
}

button.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});