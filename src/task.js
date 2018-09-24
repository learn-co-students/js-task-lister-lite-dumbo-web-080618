let store = {tasks: []}
let taskId = 0;

class Task {
  constructor(name){
    this.name = name;
    this.id = ++taskId
    store.tasks.push(this)

  }
}
