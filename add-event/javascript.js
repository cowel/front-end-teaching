var btn = document.getElementsByClassName('btn')
console.log('btn ', btn)
var hello = document.getElementById('hello')
console.log('hello ', hello)

hello.onclick = function() {
  hello.style.backgroundColor = "blue"
}

var callHello = function () {
  alert('Hello')
}

var inputName = document.getElementsByClassName('input-name')[0]
var validateName = document.getElementsByClassName('validate-name')[0]
var button = document.getElementsByName
inputName.onchange = function() {
  var value = inputName.value
  console.log('value ', value)
  if(value.length > 10) {
    validateName.innerHTML = 'Name is too long'
  }
}

onblur 
