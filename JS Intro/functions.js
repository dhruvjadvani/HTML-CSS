// non primitive -> array, objects, function

//function defination
function sayHi(param) {
    console.log("Hi!");
    console.log("param recieved", param);
    return "returned from a function"; // no need to define return type
}

// function call
sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3, 4, 5]);

let rVal = sayHi([1, 10, 11, 22]);
console.log("rval", rVal);

