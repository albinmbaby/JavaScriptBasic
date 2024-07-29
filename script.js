const number = parseInt(prompt("Enter a number between 0 and 1 million"));
let sumUpToNumber = 0;
if(number>0 && number<1000000){
    for(let i=1;i<=number;i++){

        sumUpToNumber +=i;
    }
    document.write(`The sum of numbers upto ${number} is ${sumUpToNumber}`);
    alert("See the answer,click OK button");


    
}
else{
    alert("Invalid number, Please refresh the page and enter a new valid number");
}