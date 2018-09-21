document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const submitButton = document.querySelector("#create-task-form input[type=submit]")
  const taskText = document.querySelector("#new-task-description")
  const taskArea = document.getElementById('tasks')
  const deletes = document.querySelector("#tasks button")
  submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = taskText.value
      let button = document.createElement("button")
      button.innerText = "x"
    li.append(button)

    button.setAttribute("data-description", taskText.value);
    taskArea.appendChild(li)
    taskText.value = ""
    li.addEventListener("click",(e)=>{

      if (e.target.nodeName == "BUTTON"){
        let p = e.target.parentNode
        p.remove()
      }
    })

    // xButton.addEventListener("click", ()=>{
    //
    //
    // })
    // console.log(xButton)
  })
});
