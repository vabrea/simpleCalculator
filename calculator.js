function calculation(){
    console.log("calulating.....");
    //get values from the prompt and store them in the two vars.    

    let number1=Number(prompt("Enter in a number"));
    let number2=Number(prompt("Enter another number"))

    // do the operation and store the results in vars (need four vars)
    let sum=number1+number2;
    let minus=number1-number2;
    let multiply=number1*number2;
    let divide=(number1/number2).toFixed(3);


    //display the result in the html
    document.getElementById("add").innerHTML=`
    <p>${number1} + ${number2} = ${sum} </p>`
    document.getElementById("sub").innerHTML=`
    <p>${number1} - ${number2} = ${minus} </p>`
    document.getElementById("multiply").innerHTML=`
    <p>${number1} * ${number2} = ${multiply} </p>`
    document.getElementById("divide").innerHTML=`
    <p>${number1} / ${number2} = ${divide} </p>`

}
    