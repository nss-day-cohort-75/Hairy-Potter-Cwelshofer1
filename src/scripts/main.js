// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotterCatalog.js"
import { usepottery } from "./PotterCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", 10, 5)
console.log(mug)
let plate = makePottery("round", 5, 10)
console.log(plate)
let vase = makePottery("oval", 4, 4)
console.log(vase)
let platter = makePottery("rectangle", 8, 15)
console.log(platter)
let ornament = makePottery("round", 3, 6)
console.log(ornament)



// Fire each piece of pottery in the kiln
let piece = firePottery(mug, 2100 )
console.log(piece)
let pieceTwo = firePottery(plate, 2300)
console.log(pieceTwo)
let pieceThree = firePottery (vase, 2500)
console.log(pieceThree)
let pieceFour = firePottery(platter, 1900)
console.log(pieceFour)
let pieceFive = firePottery(ornament, 1800)
console.log(pieceFive)

// Determine which ones should be sold, and their price
let pot = toSellOrNotToSell(piece)
console.log(pot)
let potTwo = toSellOrNotToSell(pieceTwo)
console.log(potTwo)
let potThree = toSellOrNotToSell(pieceThree)
console.log(potThree)
let potFour = toSellOrNotToSell(pieceFour)
console.log(potFour)
let potFive = toSellOrNotToSell(pieceFive)
console.log(potFive)

const potteryData = usepottery()
console.log(potteryData)
// Invoke the component function that renders the HTML list

