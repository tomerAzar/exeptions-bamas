import { isNumericLiteral } from "typescript";

function sumOfNumbers() 
{
    console.log("this function gets one number at a time and return sum. \nto stop inputing enter '.'")
    const prompt = require('prompt-sync')({sigint: true});
    let tempNumber : string=  prompt('Enter a number : ');
    let sum : number = 0;

    while(tempNumber != '.')
    {
        try { 
            if(isNaN(Number(tempNumber)))
                throw new Error ('enter numbers only');
            else
            sum += parseInt(tempNumber);
        }
        catch(e) {console.log(e);}
        tempNumber = prompt('enter a number : ');
    }
console.log("\nsum of numbers : " + sum);
}
sumOfNumbers();

