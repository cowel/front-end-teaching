var ENTER = 13
var TodoListView = function(todoList) {
  todoList.render()
  this.handleEvent('addTodo', todoList)
}

TodoListView.prototype.addTodo = function(value) {
  var todo = new Todo(value);
  todoList.addTodo(todo)
  todoList.saveInLocal()
  todo.render()
}

TodoListView.prototype.handleEvent = function(event, todoList) {
  var self = this
  switch (event) {
    case 'addTodo':
      $('body').on('keypress', '.input-todo', function(e) {
        if(e.keyCode === ENTER) {
          var value = $(this).val();
          self.addTodo(value)
          $(this).val('')
        }
      }) 
      break;

    case 'deleteTodo':
      // Handle delete todo


      break;
  
    default:
      break;
  }
}
