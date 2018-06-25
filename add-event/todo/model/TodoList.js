var TodoList = function() {
  this.list = []
}

TodoList.prototype.addTodo = function(todo) {
  this.list.push(todo)
}

TodoList.prototype.deleteTodo = function(id) {
  var newTodos = this.list.filter(function(todo) {
    return todo.id !== id
  })
  this.list = newTodos
}

TodoList.prototype.updateTodoList = function(todo) {
  var index = this.list.find(function(t) {
    return t.id === todo.id
  })
  this.list[index] = todo
}

TodoList.prototype.render = function() {
  var listLocal = JSON.parse(localStorage.getItem('todoList')) || []
  this.list = listLocal
  this.list.forEach(function(todo) {
    new Todo(todo.text).render()
  })
}

TodoList.prototype.saveInLocal = function() {
  localStorage.setItem('todoList', JSON.stringify(this.list))
}
