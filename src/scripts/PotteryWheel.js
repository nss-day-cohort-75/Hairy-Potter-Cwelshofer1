 let potteryId = 1
export const makePottery = (shapeId, weightId, heightId) => {
   const potteryArray = []
    const potteryObject ={
        shape: shapeId,
        weight: weightId,
        height: heightId,
        id: potteryId
    }
    potteryId++;
    potteryArray.push(potteryObject)

    return potteryArray
}

