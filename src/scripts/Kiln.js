let firedId = true
let crackedId = null
export const firePottery = (wheelPottery, num1) => {
    

    const fireObject = {
        kilnobject: wheelPottery,
        firingtemperature: num1,
        fired: firedId,
        cracked: crackedId,
        
    }
    if( num1 > 2200) {
    fireObject.cracked = true
    }
    else {
    fireObject.cracked = false
    }
    

    return fireObject

}