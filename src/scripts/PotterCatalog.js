const potteryCatalog = [];

export const toSellOrNotToSell = (potteryobj) => {
   
    if (potteryobj.kilnobject.weight >= 6 && potteryobj.firingtemperature <= 2200){ 
        potteryobj.price = 40
    }
    else if(potteryobj.kilnobject.weight < 6 && potteryobj.firingtemperature <= 2200)
    {
        potteryobj.price = 20
    }
    if (potteryobj.cracked === false)
            potteryCatalog.push(potteryobj)
    

    return potteryCatalog
    
}
console.log(potteryCatalog)

export const usepottery = () => {
return potteryCatalog.map(potteryCatalog => ({...potteryCatalog}))
}


// export const getVillains = () => {
//     return database.villains.map(villain => ({...villain}))
// }