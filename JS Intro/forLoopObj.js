let person = {
    name: "Dhruv",
    lastName: "Jadvani",
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    } ,
    age: 23,
    isEngineer: true,
    companies: ["Keepsake", "TCS"],
    sayHi: function () {
        console.log("Hi!");
    } 
};

for(let key in person) {
console.log(key, " : ", person[key]);
}


