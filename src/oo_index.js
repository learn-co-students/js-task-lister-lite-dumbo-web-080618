
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  create = document.getElementsByTagName("form")[0]
  create.addEventListener("submit", a => {
    a.preventDefault()
    let b = document.getElementById("new-task-description")
    let c = b.value
    b.value = ""
    let d = document.querySelector("#tasks")
    let e = document.createElement("li")
    e.innerText = c
    d.appendChild(e)
  })
});
