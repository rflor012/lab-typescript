const toDoTasks = [];
function addTask(task) {
    toDoTasks.push(task);
    console.log('=========== NEW TASK ===========\n' +
        "Task " + task + " inserted in the list\n");
    return toDoTasks.length;
}
function listAllTasks() {
    for (let i = 0; i < toDoTasks.length; i++) {
        console.log(toDoTasks[i]);
    }
    ;
}
function deleteTask(task) {
    let index = toDoTasks.indexOf(task);
    if (index !== -1) {
        toDoTasks.splice(index, 1);
    }
    return toDoTasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
