document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const submitButton = document.querySelector("#create-task-form input[type=submit]")
  const taskText = document.querySelector("#new-task-description")
  const taskArea = document.getElementById('tasks')



  submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = taskText.value
      let button = document.createElement("button")
      button.innerText = "x"
    li.append(button)
    console.log(button)
    button.setAttribute("class", "delete");
    button.setAttribute("data", taskText.value);
    taskArea.appendChild(li)
    taskText.value = ""


    li.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        let x = e.target.parentNode
        x.remove()
      }
    })
  })




});
