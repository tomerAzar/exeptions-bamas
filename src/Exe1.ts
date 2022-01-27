
function divideTwoNumbers() : number
{
    const prompt = require('prompt-sync')({sigint: true});
    const number1 : number = Number( prompt('Enter a number 1: '));
    const number2 : number = Number( prompt('Enter a number 2: '));
    try
    {
        if(number2 == 0)
            throw new Error("Number must be positive");
        return number1/number2;
    }
    catch(e)
    {
        console.log(e)
        return divideTwoNumbers();
    }
}
console.log( divideTwoNumbers());
