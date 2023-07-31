const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskItem = button.parentElement;
  taskItem.removeChild(button);
  completedTaskList.appendChild(taskItem);
}
