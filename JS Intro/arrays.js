let arr = [];

let arrays = [1, 2, 3, 5, 8];

console.log(arrays);
console.log(arrays.length);

let i = 0;
while(i < arrays.length) {
    console.log("elem at idx", i, " is ", arrays[i]);
    i++;
}

arrays.push("last value"); // add at last index of an array
arrays.unshift("first value"); // add at first index of an array


console.log("---------------------");

console.log(arrays);

arrays.shift(); // removes first element from array
arrays.pop(); // removes last element from array

console.log("---------------------");

console.log(arrays);


// starting index, ending index

let partOfAnArray = arrays.slice(0, 2); // 0 1 includes, 2 excludes

console.log(partOfAnArray);

let partOfAnArrayOne = arrays.slice(2); // from 2nd index to last index

console.log(partOfAnArrayOne);

console.log(arrays);

//2 3 4
arrays.splice(2, 4); // delete specified elements from given index range

console.log("---------------------");

console.log(arrays);

// index of
// contain


