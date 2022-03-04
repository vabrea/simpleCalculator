// let j=0
// while(j <= 100){
//     console.log(j);
//     j= j + 10;
// }


function calculatingTotal(price, qty){
    let subtotal=price*qty;
    return subtotal;
}

function calculatingTaxes(subtotalParam){
    let taxes=subtotalParam*0.16;
    let total=subtotalParam+taxes;
    return total;
}

//use the function
let laptop=calculatingTotal(1000,3);
let speakers=calculatingTotal(200,2);

console.log(calculatingTaxes(laptop));
console.log(calculatingTaxes(speakers));


