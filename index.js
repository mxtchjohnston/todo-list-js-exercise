// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];
const tasks = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description = "") {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {this.complete = true;},
    logState: function() {console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);}
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

tasks.push(newTask("Clean Cat Litter")); // task 0
tasks.push(newTask("Do Laundry"));

logTaskState(tasks[0]); // Clean Cat Litter has not been completed
completeTask(tasks[0]);
logTaskState(tasks[0]); // Clean Cat Litter has been completed
