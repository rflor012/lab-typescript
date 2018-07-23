"use strict";
exports.__esModule = true;
var varTodo;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.toDoTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.toDoTasks.push(task);
        console.log('=========== NEW TASK ===========\n' +
            "Task " + task + " inserted in the list\n");
        return this.toDoTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.toDoTasks.length; i++) {
            console.log(this.toDoTasks[i]);
        }
        ;
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.toDoTasks.indexOf(task);
        if (index !== -1) {
            this.toDoTasks.splice(index, 1);
        }
        return this.toDoTasks.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
