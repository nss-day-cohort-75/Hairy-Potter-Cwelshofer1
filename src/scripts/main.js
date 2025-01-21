// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", "10 pounds", "5cm")
console.log(mug)
let plate = makePottery("round", "5 pounds", "10cm")
console.log(plate)
let vase = makePottery("oval", "4 pounds", "4cm")
console.log(vase)
let platter = makePottery("rectangle", "8 pounds", "15cm")
console.log(platter)
let ornament = makePottery("round", "3 pounds", "6cm")
console.log(ornament)

let piece = firePottery(mug, 2100 )
console.log(piece)
let pieceTwo = firePottery(plate, 2300)
console.log(pieceTwo)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

