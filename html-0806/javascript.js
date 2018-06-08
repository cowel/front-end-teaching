console.log('Hello javascript')


var formatTwoNumber = function (number) {
  return number < 10 ? '0' + number : number
}

// if(number < 10) {
//   return '0' + number
// } else {
//   return number 
// }
// Format Date => MM/DD/YYYY
var formatDate = function (date) {
  const dateValue = new Date(date)
  var dateNumber = formatTwoNumber(dateValue.getDate())
  var month = formatTwoNumber(dateValue.getMonth() + 1)
  var year = dateValue.getFullYear()
  return month + '/' + dateNumber + '/' + year
}

console.log('Date return ', formatDate(new Date()))

// Print 7 dates from a date 
var getDatesFromDate = function (date, numOfDate = 7) {
  var milliSecondDay = 24 * 60 * 60 * 1000
  var valueDate = new Date(date).valueOf()
  var result = []
  for (var i = 0; i < numOfDate; i++) {

    // next i date
    var nextDate = formatDate(new Date(valueDate + milliSecondDay * i))
    result.push(nextDate)
    if( i === 3) return result
  }
  return result
}

console.log('7 dates ', getDatesFromDate(new Date(), 10))

// Array

var array = [1, 5, 7, 9]
array.forEach((element, index) => {
  console.log('element ', element)
  if(index > 2) return
});

var number = array.filter(function (element) {
  return element > 5 
}) // => return Array

console.log('number ', number)

var family = {
  quantity: 6,
  names: ['Trang', 'Loan', 'Ngan', 'Hieu', 'Phong', 'Hoai'],
  ages: [13, 15, 11, 45, 23, 12]
}

// Find an oldest person
var findOldestPerson = function(family) {
  var indexPerson = 0
  for (var i = 1; i < family.quantity; i++) {
    indexPerson = family.ages[i] > family.ages[i-1] ? i : indexPerson
  }
  return family.names[indexPerson]
}

console.log('findOldestPerson ', findOldestPerson(family))

// Sum of people's age
var sumAge = function(family) {
  return family.ages.reduce(function (total, value) {
    return total + value
  })
} // reduce return a value
console.log('sumAge ', sumAge(family))

var person = function(name, age) {
  this.name = name;
  this.age = age
}
