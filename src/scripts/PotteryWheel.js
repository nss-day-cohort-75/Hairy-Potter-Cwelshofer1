
 let potteryId = 1
export const makePottery = (shapeId, weightId, heightId) => {
   
    return {
        id: potteryId++,
        shape: shapeId,
        weight: weightId,
        height: heightId
        
    }
    
    

}


