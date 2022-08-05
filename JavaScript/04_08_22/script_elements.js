// Write a program where multiple actions with an array will be done. For element filtering please use the loop.
// Create an array with the elements from input +
// Print out elements which are negative. +
// Print out elements which are odd (uneven) + 
// Compute how many elements are odd (uneven).+
// Print out each second element.+
// Compute average value of the array.+
// Establish how many elements are smaller than average value.
// Verify if there are multiple elements with the same value+

const Numbers=[];
const Negative=[];
const Odd=[];
const Even=[];
const Smaller=[];
const Dublicates=[];
let Sum=0;
let Average;
for (let i=1; i<6; i++){
    Numbers [i-1] = prompt("Insert "+i+". number:");
    Sum+=Number(Numbers [i-1])
if (isNaN(Numbers [i-1])) {
    Numbers [i-1] = prompt("Please enter a number!")};
if (Numbers [i-1]<0){
    Negative.push(Numbers [i-1])};
if (Numbers [i-1]%2==1 || Numbers [i-1]%2==-1){
    Odd.push(Numbers [i-1])}
if (i%2==0){Even.push(Numbers [i-1])};
};
alert("Your numbers: "+ Numbers);
alert("Negative numbers: "+ Negative);
alert("Odd numbers: "+ Odd);
alert("There are "+ Odd.length +" odd numbers");
alert("Every second element: " + Even);
Average = Sum / Numbers.length;
alert("Average value of your numbers: " + Average)
for (let j=1; j<6; j++){
    if (Numbers [j-1] < Average){
        Smaller.push(Numbers [j-1])
    }
    for (let k=1; k<j; k++){
        if (Numbers [j-1] == Numbers [k-1]){
            Dublicates.push(Numbers [j-1])}
    }
}
alert("Numbers smaller that average value: " + Smaller);
alert("Duplicate elements: "+ Dublicates)



