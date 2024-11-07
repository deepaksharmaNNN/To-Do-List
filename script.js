let todoApp = {
    tasks: [],
    addTask(task) {
        this.tasks.push({
            text : task,
            isCompleted: false
        });
        this.renderTasks();
    },
    toggleTask(index) {
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
        this.renderTasks();
    },
    deleteTask(index) {
        this.tasks = this.tasks.filter(task => !task.isCompleted);
        this.renderTasks();
    },
    renderTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.task.forEach((task, index) => {
            const taskElement = document.createElement("li");
            taskElement.textContent = task.text;
            taskElement.onclick = () => {
                this.toggleTask(index);
            };
            if(task.isCompleted) {
                taskElement.add('Completed');
            }
            taskList.appendChild(taskElement);
        });
        
    }
};

document.getElementById("addTask").onclick = () => {
    let taskInput = document.getElementById("taskInout");
    todoApp.addTask(taskInput.value);
    taskInput.value = "";
};