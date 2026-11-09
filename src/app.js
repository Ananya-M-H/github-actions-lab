// Store tasks in an array
let tasks = [];

// Add a new task
function addTask(title) {
    if (!title || title.trim() === "") {
        throw new Error("Task title cannot be empty");
    }

    const task = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(task);
    return task;
}

// Retrieve all tasks
function getTasks() {
    return tasks;
}

// Mark a task as completed
function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        throw new Error("Task not found");
    }

    task.completed = true;
    return task;
}

// Reset tasks (useful for testing)
function resetTasks() {
    tasks = [];
}

module.exports = {
    addTask,
    getTasks,
    completeTask,
    resetTasks
};