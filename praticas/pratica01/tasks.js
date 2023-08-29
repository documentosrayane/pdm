// tasks.js


let tasks = [];

function getTasks() {
  return tasks;
}

function addTask(taskName) {

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    name: taskName,
    completed: false
  };

  tasks.push(newTask);
}

function removeTask(taskId) {
 
  tasks = tasks.filter(task => task.id !== taskId);
}

function updateTask(taskId, updatedProperties) {
  const taskToUpdate = tasks.find(task => task.id === taskId);

  if (taskToUpdate) {
    Object.assign(taskToUpdate, updatedProperties);
  }
}

addTask("Tomar cafe da manha");
addTask("Estudar JavaScript");
addTask("Trabalhar o dia todo");

console.log(getTasks());

updateTask(2, { completed: true });

console.log(getTasks());

removeTask(1);

console.log(getTasks());