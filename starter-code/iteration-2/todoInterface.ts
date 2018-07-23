// Write the interface for class Todo. It must have:
interface TodoInterface{
  toDoTasks: Array<string>;
  // - An array of strings as a property.
  addTask(task:string):number;

  listAllTasks():void;
  // - Method for listing all task in the console, doesn't return anything.
  deleteTask(task:string):number;
  // - Method for delete a task where will receive a string, doesn't return anything.
}

export interface TodoInterface {
  toDoTasks: Array<string>;
  // - An array of strings as a property.
  addTask(task:string):number;

  listAllTasks():void;
  // - Method for listing all task in the console, doesn't return anything.
  deleteTask(task:string):number;
}
