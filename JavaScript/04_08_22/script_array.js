//Ask user to enter the elements to the array and sort it (allow numbers only)

const Numbers=[]
for (let i=1; i<6; i++){
    Numbers [i-1] = prompt("Insert "+i+". number:");
    if (isNaN(Numbers [i-1])) {
        Numbers [i-1] = prompt("Please enter a number!");
        }}
alert("Your numbers: "+ Numbers)
let AscNumbers = Numbers.sort(function(a, b){return a - b})
alert("Sorted numbers: "+ AscNumbers)