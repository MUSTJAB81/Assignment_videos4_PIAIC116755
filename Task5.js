var number = prompt("Enter an Integer Number");
var dNumber= parseFloat(number);
var roundNumber= Math.round(number);
var floorNumber= Math.floor(number);
var ceilNumber= Math.ceil(number);

document.write("Number :"+ dNumber+"<br>");
document.write("Round value of Number :"+roundNumber+"<br>");
document.write("Floor value of Number :"+floorNumber+"<br>");
document.write("Ceil value of Number :"+ceilNumber);