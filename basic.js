console.log('hello world')
console.log('x ', x)
console.log('y ', y)
console.log('z ', z)

var x = '20'
var y = x + 5 + 'hello'
var z = 10 // false => null undefined 0

if(z) {
    console.log('have value')
} else {
    console.log('dont have value')
}

console.log('SUM ', sum(10, 15))

function sum(a, b) {
  console.log('b ', b)
  return a + b 
}

var sub = function(a, b) {
  return a - b
}

console.log('SUB ', sub(10, 15))
console.log('SUM 2 ', sum(10)) // => NaN

var cat = {
  color: 'white',
  year: 2010,
  name: 'Nali',
  gender: 'Female',

  getName: function() {
    return this.name
  },
  calAge: function() {
    return new Date().getFullYear() - this.year
  }
}

cat.getGender = function () {
  return this.gender
}

cat.color = 'black'

console.log('color 111 ', cat['color'])
console.log('cat ', typeof x)

console.log('get Name ', cat.getName())
console.log('Age ', cat.calAge())

var arr = [1, 2, 4]
arr.push()
// arr.pop()
arr.forEach((item, index) => {
  console.log('item ' + index + ' ', item)
})
var result = arr.find(function(item) {
  return item < 3
})

console.log('result ' , result)
