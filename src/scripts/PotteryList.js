import { usepottery } from "./PotterCatalog.js"
// import { toSellOrNotToSell } from "./PotterCatalog.js"

export const potteryList = () => {
    const potvalue = usepottery()
    let potHTML = ""
    for (const vases of potvalue) {
        potHTML += `
        <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${vases.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${vases.weight} grams and is ${vases.height} cm in height
         </div>
        <div class="pottery__price">Price is $${vases.price}</div>
        </section>
        `;
    }



    return potHTML
}


export const renderPotteryToDOM = (potHTML) => {
    let potsList = document.getElementById('potteryList');
 
    if (potsList) {
        potsList.innerHTML = potHTML;
    } 
 };
 console.log(potteryList())


 