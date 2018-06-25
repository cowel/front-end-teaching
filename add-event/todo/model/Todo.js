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
