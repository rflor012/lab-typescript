let varTodo;
class Todo {
    constructor(toDoTasks) {
        this.toDoTasks = toDoTasks;
    }
    addTask(task) {
        toDoTasks.push(task);
        console.log('=========== NEW TASK ===========\n' +
            "Task " + task + " inserted in the list\n");
        return toDoTasks.length;
    }
    listAllTasks() {
        for (let i = 0; i < toDoTasks.length; i++) {
            console.log(toDoTasks[i]);
        }
        ;
    }
    deleteTask(task) {
        let index = toDoTasks.indexOf(task);
        if (index !== -1) {
            toDoTasks.splice(index, 1);
        }
        return toDoTasks.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
