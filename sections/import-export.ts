import { addTwoNumbers, divideTwoNumbers, substracTwoNumbers, timesTwoNumbers } from "../helpers/math-helpers"

let total1: number  = addTwoNumbers(30,5)
let total2: number  = substracTwoNumbers(30,5)
let total3: number  = timesTwoNumbers(30,5)
let total4: number  = divideTwoNumbers(30,5)

console.log('Add: ', total1)
console.log('Substract: ', total2)
console.log('Times: ', total3)
console.log('Divide: ', total4)