// Add the reference to the "TodoInterface"
import { TodoInterface } from 'todoInterface';

let varTodo: TodoInterface;
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{

constructor(public toDoTasks: Array<string>){}

addTask(task:string):number{
  toDoTasks.push(task)
  console.log('=========== NEW TASK ===========\n' +
              "Task "+ task + " inserted in the list\n");
  return toDoTasks.length;
}

listAllTasks():void{
  for(let i=0; i < toDoTasks.length; i++){
    console.log(toDoTasks[i]);
  };
}

deleteTask(task:string):number{
  let index:number = toDoTasks.indexOf(task);

  if (index !== -1){
    toDoTasks.splice(index, 1);
  }
  return toDoTasks.length
}


}
// Execution
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
