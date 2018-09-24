
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const submitBtn = document.querySelector("input[type=submit]")
  const list = document.querySelector("#tasks")


  submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    let input = document.getElementById("new-task-description").value
    let li = document.createElement("li");
    // li.innerHTML = input + `<button onclick()="deleteTask()" data-description=${input}>X</button`;
    li.innerHTML = input;
    // debugger
    let button = document.createElement("button");
    button.innerText = "X"
    button.dataset.description = input;
    // debugger;
    button.onclick = deleteTask;
    li.append(button)
    list.appendChild(li);
    document.getElementById("new-task-description").value  = ""
  })

});

function deleteTask(){
  let match = this.dataset.description
  let lis = document.getElementsByTagName("li")
  for (let i = 0; i <lis.length; i++){
    let word = lis[0].innerText.slice(0, lis[0].innerText.length-1)
    if (word === match){
      lis[i].remove();
      return
    }
  }
  return
}
