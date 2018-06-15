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

// Homework todo
var milSecondDate = 24 * 60 * 60 * 1000
var getNumberOfDate = function(date) {
  var today = new Date().valueOf()
  var valueInputDate = new Date(date).valueOf()
  return Math.ceil(Math.abs(today - valueInputDate) / milSecondDate)
}

// is Mon, Tue, Sat
var checkDay = (date) => {
  return new Date (date).toUTCString().split(',')[0] === 'Mon' ||
         new Date (date).toUTCString().split(',')[0] === 'Tue' ||
         new Date (date).toUTCString().split(',')[0] === 'Sat'
}

var createListTodos = function() {
  var listTodos = []
  var numOfDate = getNumberOfDate(new Date (2018, 5, 1))
  var dateValueOf = new Date (2018, 5, 1).valueOf()
  for (var i = 0; i < numOfDate; i++) {
    var date = dateValueOf + i * milSecondDate
    var text = ''
    var isCompleted = false
    if (checkDay(date)) {
      text = 'Todo'
      isCompleted = true
    } 
    listTodos.push({
      id: i,
      text,
      isCompleted,
      date: new Date (date).toISOString()
    })
  }
  return listTodos
}

var checkToday = function (todos) {
  var todoToday = todos.pop()
  return todoToday.text ? true : false
}

var countTodoOnList = function(todos) {
  var count = 0
  todos.forEach(function(todo) {
    count = todo.isCompleted ? count + 1 : count
  })
  return count
}

var listTodos = createListTodos()
console.log('list todo ', listTodos)
console.log('Today has a todo? ', checkToday(listTodos))
console.log('Count of todos ', countTodoOnList(listTodos))


// OOP
var Person = function(age, name) {
  this.age = age;
  this.name = name;

  this.getName = function () {
    return this.name
  };
}

Person.prototype.weight = 50
Person.prototype.getAge = function() {
  return this.age
}

Person.prototype.getBirthDate = function() {
  return new Date().getFullYear() - this.age
}


var obj = {
  age: 20,
  name: 'TTT',
  getName: function() {
    return this.name
  }
}

var myself = new Person(24, 'Hoai')
myself.weight = 60

var you = new Person(20, 'You')

console.log('@@@ weight myself ', myself.weight)
console.log('@@@ weight you ', you.weight)

console.log('obj ', obj.getName())
console.log('myself ', myself)
console.log('get Name  ', myself.getName())
console.log('get Age  ', myself.getAge())
console.log('get BirthDate  ', myself.getBirthDate())

console.log('You get Age  ', you.getAge())


var Todo = function (text, isCompleted, date) {
  this.id = new Date().valueOf();
  this.text = text;
  this.isCompleted = isCompleted;
  this.date = date
}

var TodoList = function (todoLists) {
  this.list = todoLists;
}

TodoList.prototype.createTodoList = function() {
  var numOfDate = getNumberOfDate(new Date (2018, 5, 1))
  var dateValueOf = new Date (2018, 5, 1).valueOf()
  for (var i = 0; i < numOfDate; i++) {
    var date = dateValueOf + i * milSecondDate
    var text = ''
    var isCompleted = false
    if (checkDay(date)) {
      text = 'Todo'
      isCompleted = true
    } 
    this.list.push(new Todo(text, isCompleted, new Date (date).toISOString()))
  }
}

TodoList.prototype.filterCompleted = function () {
  return this.list.filter(todo => todo.isCompleted ? true : false)
}

var todoList = new TodoList([])
todoList.createTodoList()
console.log('list ', todoList.list)
console.log('filter  ', todoList.filterCompleted())


// Homework
var Author = function(name, email, gender) {
  this.id = new Date().valueOf();
  this.name = name;
  this.email = email;
  this.gender = gender;
}

var Book = function (title, author, price, quantity, isRead, releaseDate ) {
  this.id = new Date().valueOf();
  this.title = title; '0' === 0
  this.author = author;
  this.price = price;
  this.quantity = quantity;
  this.isRead = isRead;
  this.releaseDate = releaseDate;
}

var BookShelve = function(books) {
  this.books = books
}

var authorName = ['Tue Ninh', 'Duong Thuy', 'Rose Nguyen', 'Nguyen Nhat Anh', 'Duong Thuy']
var titleBook = ['Se co cach ma', 'Oxford', 'Tuoi tre dang gia bao nhieu', 'Cho toi mot ve di tuoi tho', 'De men phieu luu ky']

BookShelve.prototype.createBookshelve = function(numOfBooks = 5) {
  var milliSecondDate = 24 * 60 * 60 * 1000
  for(var i = 0; i < numOfBooks; i++) {
    const author = new Author(authorName[i], 'abc@com', i % 2)
    const date = new Date (new Date().valueOf() - i * milliSecondDate).toISOString()
    const book = new Book(titleBook[i], author, i + 10000, i + 4, (i % 2) ? true : false, date)
    this.books.push(book)
  }
}

BookShelve.prototype.searchBooksByAuthorName = function(name) {
  return this.books.filter(function(book) {
    return book.author.name === name
  })
}

BookShelve.prototype.updateStatusBook = function(title) {
  var indexBook = this.books.findIndex(function(book) {
    return book.title === title
  })
  this.books[indexBook].isRead = true
}

var bookShelve = new BookShelve([])
bookShelve.createBookshelve()
bookShelve.updateStatusBook('Se co cach ma')


console.log('book shelve ', bookShelve.books)
console.log('Books of Duong Thuy ', bookShelve.searchBooksByAuthorName('Duong Thuy'))
console.log('Update book Se co cach ma', bookShelve.books)
