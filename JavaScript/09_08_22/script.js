function summ(){
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const result = Number(firstNum) + Number(secondNum);
    const resultElement = document.getElementById("resultbut");
    if (isNaN(result)){
        alert("Input must be numbers!")}
    else {
    resultElement.innerText= "The result is = " + result;}
    resultElement.style.border = "1px solid black";
};


function Subtraction(){
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const result = Number(firstNum) - Number(secondNum);
    const resultElement = document.getElementById("resultbut");
    if (isNaN(result)){
        alert("Input must be numbers!")}
    else {
    resultElement.innerText= "The result is = " + result;}
    resultElement.style.border = "1px solid black";
};
function Multiplication(){
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const result = Number(firstNum) * Number(secondNum);
    const resultElement = document.getElementById("resultbut");
    if (isNaN(result)){
        alert("Input must be numbers!")}
    else {
    resultElement.innerText= "The result is = " + result;}
    resultElement.style.border = "1px solid black";
};
function Division(){
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const result = Number(firstNum) / Number(secondNum);
    const resultElement = document.getElementById("resultbut");
    if (isNaN(result)){
        alert("Input must be numbers!")}
    else {
    resultElement.innerText= "The result is = " + result;}
    resultElement.style.border = "1px solid black";
};
function Modulus(){
    const firstNum = document.getElementById("firstNumber").value;
    const secondNum = document.getElementById("secondNumber").value;
    const result = Number(firstNum) % Number(secondNum);
    const resultElement = document.getElementById("resultbut");
    if (isNaN(result)){
        alert("Input must be numbers!")}
    else {
    resultElement.innerText= "The result is = " + result;}
    resultElement.style.border = "1px solid black";
};