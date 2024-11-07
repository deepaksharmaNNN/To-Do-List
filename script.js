let todoApp = {
    tasks: [],
    addTask(task) {
        this.tasks.unshift({
            text: task,
            isCompleted: false
        });
        this.renderTasks();
    },
    toggleTask(index) {
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
        this.renderTasks();
    },
    renderTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.tasks.forEach((task, index) => {
            const taskElement = document.createElement("li");
            taskElement.textContent = task.text;
            taskElement.onclick = () => {
                this.toggleTask(index);
            };
            if (task.isCompleted) {
                taskElement.classList.add('completed');
            }
            taskList.appendChild(taskElement);
        });
    }
};

document.getElementById("addTask").onclick = () => {
    let taskInput = document.getElementById("taskInput");
    todoApp.addTask(taskInput.value);
    taskInput.value = "";
};