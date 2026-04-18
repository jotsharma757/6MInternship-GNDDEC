const taskInput = document.querySelector(".task");
const addBtn = document.querySelector(".btn");
const list = document.querySelector(".list");

let task = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(task));
}

function createTask(taskText) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = taskText;

    // line-through
    span.addEventListener("click", () => {
        span.style.textDecoration = "line-through";
    });

    // edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit task", span.textContent);
        if (newTask !== null && newTask !== "") {
            const index = task.indexOf(span.textContent);
            task[index] = newTask;
            span.textContent = newTask;
            saveTasks();
        }
    });

    // delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        task = task.filter(t => t !== span.textContent);
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

// load saved tasks
task.forEach(t => createTask(t));

// add task
addBtn.addEventListener("click", () => {
    if (taskInput.value === "") return;

    task.push(taskInput.value);
    saveTasks();
    createTask(taskInput.value);

    taskInput.value = "";
});
