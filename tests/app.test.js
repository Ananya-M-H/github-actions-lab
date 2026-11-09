const { test, beforeEach } = require("node:test");
const assert = require("node:assert");

const {
    addTask,
    getTasks,
    completeTask,
    resetTasks
} = require("../src/app");

beforeEach(() => {
    resetTasks();
});

test("Should add a new task", () => {
    const task = addTask("Learn GitHub Actions");

    assert.strictEqual(task.title, "Learn GitHub Actions");
    assert.strictEqual(task.completed, false);
});

test("Should retrieve all tasks", () => {
    addTask("Learn Docker");
    addTask("Learn Jenkins");

    assert.strictEqual(getTasks().length, 2);
});

test("Should mark a task as completed", () => {
    const task = addTask("Learn CI/CD");

    const completedTask = completeTask(task.id);

    assert.strictEqual(completedTask.completed, true);
});

test("Should throw an error for an empty task", () => {
    assert.throws(
        () => addTask(""),
        {
            message: "Task title cannot be empty"
        }
    );
});

test("Should throw an error when task does not exist", () => {
    assert.throws(
        () => completeTask(999),
        {
            message: "Task not found"
        }
    );
});