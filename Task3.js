
var input=prompt("Enter your Pasward contain alphabets and numbers")

var chr= input;
var chr1=chr.charAt(0)
if(chr1==parseInt(chr)){
    alert("Enter a valid password For character codes of a-z A-Z & 0-9")
}
else if(chr.length<8) {
    alert("Enter a valid password For character codes of a-z A-Z & 0-9")
}