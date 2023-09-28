// Arrays to keep track of each task's state
const tasks = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description = "") {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

// DRIVER CODE BELOW

tasks.push(newTask("Clean Cat Litter")); // task 0
tasks.push(newTask("Do Laundry"));

tasks[0].logState();
tasks[0].completeTask();
tasks[0].logState();

