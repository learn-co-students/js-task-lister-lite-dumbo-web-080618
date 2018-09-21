document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.querySelector('#create-task-form');
  const description = document.querySelector('#new-task-description');
  const ul = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = description.value;
    description.value = '';
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })

    li.appendChild(btn);
    ul.appendChild(li);

  })
});
