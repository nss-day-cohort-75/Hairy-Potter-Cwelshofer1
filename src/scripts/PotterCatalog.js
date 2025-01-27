const potteryCatalog = [];

export const toSellOrNotToSell = (potteryobj) => {
   
    if (potteryobj.weight >= 6 && potteryobj.firingtemperature <= 2200){ 
        potteryobj.price = 40
    }
    else if(potteryobj.weight < 6 && potteryobj.firingtemperature <= 2200)
    {
        potteryobj.price = 20
    }
    if (potteryobj.cracked === false){
            potteryCatalog.push(potteryobj)
    
    }
    return potteryCatalog
    
}


export const usepottery = () => {
const potteryTest = potteryCatalog.map(potteryCatalog => (potteryCatalog))
return potteryTest

}


// export const getVillains = () => {
//     return database.villains.map(villain => ({...villain}))
// }