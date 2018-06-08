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
  }
  return result
}

console.log('7 dates ', getDatesFromDate(new Date(), 10))

