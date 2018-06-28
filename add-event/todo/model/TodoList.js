var TodoList = function() {
  this.list = []
}

TodoList.prototype.addTodo = function(todo) {
  this.list.push(todo)
  console.log('addTodo ', addTodo)
  addTodo(JSON.stringify({text: todo.text, isCompleted: false}))
  .done(function(res) {
    console.log('add done ', res)
  })
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
  // var listLocal = JSON.parse(localStorage.getItem('todoList')) || []
  var callingTodos = getTodo()
  console.log('callingTodos.status ', callingTodos.state())
  if(callingTodos.state() === 'pending') {
    $('.all-todos').append('<p>Loading</p>')
  }
  getTodo().done(function(res) {
    $('p').remove()
    this.list = res
    this.list.forEach(function(todo) {
      new Todo(todo.text).render()
    })
  })
}

TodoList.prototype.saveInLocal = function() {
  localStorage.setItem('todoList', JSON.stringify(this.list))
}
