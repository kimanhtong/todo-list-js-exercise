/*// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}



// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/

function newTask (title) {
  const task = {
    title: title,
    completed: false,
    markCompleted: function () {
      return this.completed = true;
    },
    printState: function() {
      console.log(`${this.title} has${this.completed ? " " : " not "}been completed`);
    }
  }
  return task;
};
let task0 = newTask("Clean Cat Litter");
task0.printState();
task0.markCompleted();
task0.printState();
let task1 = newTask("Do Laundry"); // task 1
