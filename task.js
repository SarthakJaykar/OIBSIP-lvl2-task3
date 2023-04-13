const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const taskInput = form.elements.task;
  const taskText = taskInput.value.trim(); 
  if (taskText) { 
    addTask(taskText);
    taskInput.value = ''; 
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) { 
    event.target.parentElement.remove(); 
  }
});

function addTask(taskText) {
  const taskItem = document.createElement('li'); 
  taskItem.textContent = taskText; 
  const deleteButton = document.createElement('button'); 
  deleteButton.textContent = 'Delete'; 
  deleteButton.classList.add('delete'); 
  taskItem.appendChild(deleteButton); 
  taskList.appendChild(taskItem); 
}
