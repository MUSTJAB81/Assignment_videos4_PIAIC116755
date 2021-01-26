
var text ="The quick brown fox jumps  over the lazy dog";
var text1 = text.toLocaleLowerCase();

var count = (text1.match(/the/g) || []).length;
document.write("Text: "+text+"<br>"+"There are "+count+" occurrences(s) of the word \'the'")