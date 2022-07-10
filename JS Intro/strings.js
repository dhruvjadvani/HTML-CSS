let singleQuoteStr = 'Dhruv';
let DoubleQuoteStr = "Jadvani";

console.log(singleQuoteStr);
console.log(DoubleQuoteStr);

// there are no characters in JS, only string

let char = singleQuoteStr.charAt(2);

console.log(char);

let subStringstr = singleQuoteStr.substring(1, 3);
console.log(subStringstr);

let asciiCode = singleQuoteStr.charCodeAt(2);
console.log(asciiCode);

// split and join functions

let arrStr = singleQuoteStr.split("h");
console.log(arrStr);

let arrStrAll = singleQuoteStr.split("");
console.log(arrStrAll);

let dollerJoinStr = arrStrAll.join("$");
console.log(dollerJoinStr);


let nwStr = "   String Wing     ";
console.log(nwStr);
console.log("------------");
console.log(nwStr.trim()); // removes white space from starting of the string and ending of the string

let plusStr = arrStrAll.join("+");
console.log(plusStr);
