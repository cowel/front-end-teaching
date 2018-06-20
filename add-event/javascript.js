// var btn = document.getElementsByClassName('btn')
// console.log('btn ', btn)
// var hello = document.getElementById('hello')
// console.log('hello ', hello)

// hello.onclick = function() {
//   hello.style.backgroundColor = "blue"
// }

// var callHello = function () {
//   alert('Hello')
// }

// var inputName = document.getElementsByClassName('input-name')[0]
// var validateName = document.getElementsByClassName('validate-name')[0]
// var button = document.getElementsByName
// inputName.onchange = function() {
//   var value = inputName.value
//   console.log('value ', value)
//   if(value.length > 10) {
//     validateName.innerHTML = 'Name is too long'
//   }
// }

var clickBtn = $('.btn')
console.log('clickBtn', clickBtn)


$('div').on('click', '.btn', function() {
  $(this).html(' Click From Div')
})

$('div').on('focus', 'input', function() {
  $(this).val('Changed')
})

$('div').on('click', '.btn', function() {
  var id = $(this).attr('data-id')
  console.log('id ', id)
})

$('div').on('keypress', 'input', function(e) {
  if(e.keyCode === 13) {
    var value = $(this).val()
    var ele = `<p>${value}</p>`

    $('.wrap-todo').append($(ele))
  }
})
