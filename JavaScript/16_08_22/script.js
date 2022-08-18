var x;
var y;
let rez;
function percent(){
x =Number(document.getElementById("result").innerText);
x*= 0.01;
document.getElementById("result").innerText = x
};
function delAll(){
    document.getElementById("result").innerText = 0;
    y=0
};
function delThis(){
    document.getElementById("result").innerText = 0
};
function del(){    
    x=document.getElementById("result").innerText;
    var m=x.substring(0, x.length - 1);
    document.getElementById("result").innerText = m
};

function reverse(){
    x = Number(document.getElementById("result").innerText);
    x = 1/x;
    document.getElementById("result").innerText = x
};

function sqr(){
    x = Number(document.getElementById("result").innerText);
    y = x*x;
    document.getElementById("result").innerText = y;
};
function sqrt(){
    x = Number(document.getElementById("result").innerText);
    x = (Math.sqrt(x));
    document.getElementById("result").innerText = x
};
function division(){
    y = Number(document.getElementById("result").innerText);
    document.getElementById("result").innerText = 0

};

function sum(){

};
function subtraction(){

};
function multiplication(){

};

function minus(){

};
function dot(){

};
function calculate(){
    document.getElementById("result").innerText = rez
    y=0
    x=0
    rez=0
};

function add1(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=1}
    else {
    x += 1;}
    document.getElementById("result").innerText = x}
function add2(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=2}
    else {
    x += 2;}
    document.getElementById("result").innerText = x}
function add3(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=3}
    else {
    x += 3;}
    document.getElementById("result").innerText = x}
function add4(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=4}
    else {
    x += 4;}
    document.getElementById("result").innerText = x}
function add5(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=5}
    else {
    x += 5;}
    document.getElementById("result").innerText = x}
function add6(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=6}
    else {
    x += 6;}
    document.getElementById("result").innerText = x}
function add7(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=7}
    else {
    x += 7;}
    document.getElementById("result").innerText = x}
function add8(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=8}
    else {
    x += 8;}
    document.getElementById("result").innerText = x}
function add9(){
    x = document.getElementById("result").innerText;
    if (x==0) {x=9}
    else {
    x += 9;}
    document.getElementById("result").innerText = x}
function add0(){
    x = document.getElementById("result").innerText;
    if (x==0)
    {}
    else {
    x += 0}
    document.getElementById("result").innerText = x}