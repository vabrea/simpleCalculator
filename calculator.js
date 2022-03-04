function calculation(){
    console.log("calulating.....");
    //get values from the prompt and store them in the two vars.    

    let number1=Number(prompt("Enter in a number"));

    // do the operation and store the results in vars (need four vars)
    let sum=number1+10;
    //display the result in the html
    document.getElementById("results").innerHTML=`
    <p>The sum is: ${sum} </p>
    `;
}
    