let x = prompt("Enter the value of first number:", "0");
let y = prompt("Enter the value of second number:", "0");
let operator = prompt("Choose the operation (+ (addition), - (subtraction), / (division) or * (multiplication)):", "/");

//if ((isNaN(x))||(isNaN(y)))
   // {alert("Please choose numbers!")} 
if (operator=="+") {
    if ((isNaN(x))||(isNaN(y))){
        var result =x + y;
    alert("The addition of strings ="+ result);}
    else {var result = Number(x) + Number(y);
    alert("The addition of numbers ="+ result);}}
else if (operator=="-") {
    var result = Number(x) - Number(y);
    if (isNaN(result))
    {alert("Subtraction is not possible!")}
    else {
    alert("The subtraction of numbers ="+ result);}}
else if (operator=="/"){
    var result = Number(x) / Number(y);
    if (isNaN(result))
    {alert("Division is not possible!")}
    else {alert("The division of numbers ="+ result);}}
else if (operator=="*"){
    var result = Number(x) * Number(y);
    if (isNaN(result))
    {alert("Multiplication is not possible!")}
    else {alert("The multiplication of numbers ="+ result);}}
else {alert("Incorrect operator, please choose one of the options!")}
