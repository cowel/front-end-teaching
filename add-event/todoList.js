var ENTER = 13

var Todo = function(text) {
  this.id = new Date().valueOf();
  this.text = text;
  this.isCompleted = false
}

Todo.prototype.render = function() {
  var todoUI = '<div class="todo" data-id="' + this.id + '">' +
                  '<input type="checkbox" class="checkbox"' +
                  '<label for="">' + this.text + '</label>' +
                  '<input type="text" class="input-edit" value="' + this.text + '">' +
                  '<button type="button">X</button>' +
                '</div>'
  $('.all-todos').append(todoUI)
}

Todo.prototype.editTodo = function(newContent) {
  this.text = newContent
}

Todo.prototype.toggleTodo = function(isCompleted) {
  this.isCompleted = isCompleted
}

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
  this.list.forEach(function(todo) {
    $('.all-todos').append($('<li>'+ todo.text+'</li>'))
  })
}

var TodoListView = function(todoList) {
  todoList.render()
  this.handleEvent('addTodo', todoList)
}

TodoListView.prototype.handleEvent = function(event, todoList) {
  switch (event) {
    case 'addTodo':
      $('body').on('keypress', '.input-todo', function(e) {
        if(e.keyCode === ENTER) {
          var value = $(this).val();
          var todo = new Todo(value);
          todoList.addTodo(todo)
          todo.render()
          $(this).val('')
        }
      }) 
      break;

    case 'deleteTodo':
      $('body').on('click', 'button', function(e) {
        if(e.keyCode === ENTER) {
          var value = $(this).val();
          var todo = new Todo(value);
          todoList.addTodo(todo)
          todo.render()
          $(this).val('')
        }
      }) 
      break;
  
    default:
      break;
  }
}



var todoList = new TodoList()
var todoListView = new TodoListView(todoList)

