var getTodo = function() {
  return $.ajax({
    url: 'http://localhost:3000/todoList',
    type: 'GET',
    // dataType: 'application/json',
    // contentType: 'application/json',
    success: function(res) {
      console.log('success ', res)
      return res.responseJson
    },
    fail: function(err) {
      console.log('fail ', err)
      return err
    },
    error: function(err) {
      console.log('error ', err)
      return err
    },  
  })
}

var addTodo = function(data) {
  return $.ajax({
    url: 'http://localhost:3000/todoList',
    type: 'POST',
    contentType: 'application/json',
    data
  })
}
