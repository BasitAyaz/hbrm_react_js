// ES6

// let, Var, Const
// Template Litterals
// Ternary Operators
// Spread Operators
// array destructuring
// object destructuring
// rest operators
// circuits
// functions
//      higher order function
//      callback function
//      Arrow Functions
//      default Peraters
//      lexical scoping
//      closures
// event loop
// array functions
//      map
//      filter
//      find
//      findIndex
//      flat
//      forEach
//      some
//      every

// object functions
//      keys
//      value
//      entries
//      freez

// promises
// async await



// let, Var, Const

// var
// hoist (y)
// redeclarable (y)
// reassignable (y)
// block Scope (n)



// let
// hoist (n)
// redeclarable (n)
// reassignable (y)
// block Scope (y)


// const
// hoist (n)
// redeclarable (n)
// reassignable (n)
// block Scope (y)



// console.log(a)
// var a = 10

// console.log(a)
// let a = 10

// console.log(a)
// const a = 10


// var a = 10
// var a = 20

// console.log(a)



// let a = 10
// let a = 20

// console.log(a)

// const a = 10
// const a = 20

// console.log(a)


// var a;
// a = 10

// console.log(a)


// let a = 10;
// a = 20

// console.log(a)


// const a = 10;
// a = 20

// console.log(a)

// if (true) {
//     var a = 10
// }

// console.log(a)


// if (true) {
//     let a = 10
// }
// console.log(a)


// if (true) {
//     const a = 10
// }
// console.log(a)

// function abc() {
//     var a = 10
// }
// abc()
// console.log(a)



// abc()
// function abc() {
//     console.log("ABC")
// }

// ============= Template Literal =================
// let marks = 75

// let b = "my Subject Marks is " + marks + " percent"

// let a = `my subject
// marks
// is ${marks} percent`

// let num = 9

// let a = `the square root of ${num} is ${num * num}`


// console.log(a)



// ============= Ternary Operator =================

// let a = true

// if (a) {
//     console.log('True Condition')
// } else {
//     console.log('False Condition')
// }

// a ? console.log("True Condition") : console.log("False Condition")


// let age = 15
// let studentCard = false

// if (age >= 18) {
//     console.log("Allow")
// } else if (studentCard) {
//     console.log("Allow On Student Card")
// } else {
//     console.log("Not Allow")
// }

// age >= 18 ? console.log("Allow") : studentCard ? console.log("Allow on Student Card") : console.log("Not Allow")

// let a = 10
// let b = "ABCD"


// a < 20 && b == 'ABC' ? console.log('Valid') : console.log("Invalid")


// ============= Spread Operators =================


// let obj = {
//     id: 1,
//     name: "ABC"
// }

// let obj2 = {
//     inst: "HBRM",
//     course: "React JS"
// }

// let finalObj = {
//     ...obj,
//     ...obj2
// }

// console.log(finalObj)

// let a = {
//     name: "ABC"
// }

// let b = { ...a }

// b.name = "xyz"

// console.log(a)
// console.log(b)


// let a = [1, 3, 2, 7, 3]

// let b = ['a', 'b', 'c']

// let c = [...a, ...b]

// let a = [1, 2, 3]

// let b = [...a]

// b.push(4)

// console.log(a)
// console.log(b)


// let a = 'abc'
// a = 'xyz'


// let b = []
// b[0] = 1


// const a = "abc"
// a = "xyz"


// const a = []
// a[0] = "1"

// console.log(a)


// ============= DeStructuring =================

// let objFromDatabase = {
//     id: 1,
//     name: 'ABC'
// }

// let { name, id } = objFromDatabase

// console.log(id)


// let a = ['a', 'b', 'c', 'd']

// // let abc = a[2]

// let [, , abc] = a
// console.log(abc)


// ============= Rest Operator =================
// function abc(...rest) {
//     console.log(rest)
// }

// abc(1, 2, 3, 4, 5, 6, 7, 8, 9)

// ============= Circuit =================
// let num = 10 * "ac"

// let a = num || 0

// console.log(a)

// ============= CallBack/Higher Order Function =================
// function abc(a) {
//     return a
// }

// function xyz(b) {
//     console.log(b)
// }

// xyz(abc(10))


// ============= Arrow Function =================

// function abc() {
//     console.log("Normal Function")
// }
// abc()

// let abc = () => {
//     console.log("Arrow Function")
// }
// abc()

// let abc = a => {
//     console.log(a)
// }
// abc(10)

// let abc = (a) => "xyz"

// let val = abc('abc')

// console.log(val)

// ============= Lexical Scoping =================

// let a = "value 1"
// let abc = () => {
//     let xyz = () => {
//         console.log(a)
//     }
//     xyz()
// }
// abc()