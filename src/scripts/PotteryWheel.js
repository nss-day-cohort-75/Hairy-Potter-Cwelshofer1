

 let potteryId = 1
export const makePottery = (shapeId, weightId, heightId) => {
   
    const potteryObject ={
        shape: shapeId,
        weight: weightId,
        height: heightId,
        id: potteryId++
    }
    
    

    return potteryObject
}


