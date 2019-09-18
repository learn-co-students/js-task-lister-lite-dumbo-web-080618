
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  let create = document.getElementsByTagName("form")[0]
  create.addEventListener("submit", a => {
    a.preventDefault()
    let b = document.getElementById("new-task-description")
    let c = b.value
    b.value = ""
    let d = document.querySelector("#tasks")
    let e = document.createElement("li")
    let f = document.createElement("button")
    var g = document.createTextNode("x")
    e.innerText = c
    f.appendChild(g);

    e.appendChild(f);
    d.appendChild(e);
  })

  let some = document.querySelectorAll("li")
  document.addEventListener("click", e =>{
    if(e.target.innerText === "x"){
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)
      // e.target.parentElement
    }
  })


});
