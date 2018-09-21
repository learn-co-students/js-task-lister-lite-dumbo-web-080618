// let button = document.querySelector('input[type="submit"]');
// let form = document.getElementById("create-task-form");
let input = document.querySelector('input[type="text"]');
let description = document.getElementById("new-task-description")

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value)
  let tasks = document.getElementById("tasks");
  let li = document.createElement("li");
  li.innerText = input.value;
  tasks.appendChild(li);

})
