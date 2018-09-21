
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
});

let tasks = document.querySelector('#tasks');
let newTaskField = document.querySelector('#new-task-description');
let submitButton = document.querySelectorAll('input')[1];

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let task = document.createElement('li');
    task.innerText = newTaskField.value;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', e => {
      e.target.parentNode.remove();
    })

    task.appendChild(deleteButton)
    tasks.appendChild(task);

    newTaskField.value = '';
});
