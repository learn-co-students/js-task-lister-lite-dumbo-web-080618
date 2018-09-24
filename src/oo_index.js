
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const list = document.getElementById('list')
const tasks = document.getElementById('tasks')


function createToDo() {

  let newToDo = document.getElementById("new-task-description").value

  let newOne = new Task(newToDo);
  newInfo = document.createElement('li')

  newInfo.id = "added-task"
  newInfo.dataset.num = newOne.id
  newInfo.innerHTML = newOne.name + `<input type="button" value="X" onclick="remove(${newInfo.dataset.num})">`


  list.appendChild(newInfo)
}

function remove(num){
  let pending = Array.prototype.slice.call(document.querySelectorAll("#added-task"))

  let goodbye = pending.filter(task => parseInt(task.dataset.num) === num)
  goodbye[0].remove()

}
