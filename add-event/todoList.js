var ENTER = 13

var Todo = function(text) {
  this.id = new Date().valueOf();
  this.text = text;
  this.isCompleted = false
}

Todo.prototype.render = function() {
  $('.all-todos').append('<li>'+ this.text+'</li>')
}

Todo.prototype.editTodo = function(newContent) {
  this.text = newContent
}

Todo.prototype.toggleTodo = function(isCompleted) {
  this.isCompleted = isCompleted
}

var TodoList = function() {
  this.list = [new Todo('hello')]
}

TodoList.prototype.addTodo = function(todo) {
  this.list.push(todo)
}

TodoList.prototype.updateTodoList = function(todo) {
  var index = this.list.find(function(t) {
    return t.id === todo.id
  })
  this.list[index] = todo
}

TodoList.prototype.render = function() {
  this.list.forEach(function(todo) {
    $('.all-todos').append($('<li>'+ todo.text+'</li>'))
  })
}

var TodoListView = function(todoList) {
  todoList.render()
  this.handleEvent('addTodo', todoList)
}

TodoListView.prototype.handleEvent = function(event, todoList) {
  if(event === 'addTodo') {
    $('body').on('keypress', '.input-todo', function(e) {
      if(e.keyCode === ENTER) {
        var value = $(this).val();
        var todo = new Todo(value);
        todoList.addTodo(todo)
        todo.render()
        $(this).val('')
      }
    }) 
  }
}



var todoList = new TodoList()
var todoListView = new TodoListView(todoList)

