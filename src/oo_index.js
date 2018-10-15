
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  task = document.querySelector("#tasks")
  input = document.querySelector("#create-task-form").addEventListener("submit", cb)
  description = document.querySelector("#new-task-description")


  function cb(event) {
    event.preventDefault();
    li = document.createElement("li")
    li.innerText = description.value
    task.append(li)

    deleteButton = document.createElement('button');
    deleteButton.innerText = "x";
    deleteButton.addEventListener('click', event => {
      event.target.parentNode.remove();
    })

    li.append(deleteButton)

  }






  // taskList.addEventListener("submit")
});
