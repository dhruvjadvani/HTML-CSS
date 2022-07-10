// object -> group of key value pair
// key : value -> property
// key : function -> method

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

// get
console.log(person.name);
console.log(person.lastName);
console.log(person.address);
console.log(person.age);
console.log(person.isEngineer);
console.log(person.companies);
person.sayHi();
console.log(person.companies[0]);

// set // update

console.log("person :", person);
person.age = 22;
person.friends = ["Pratik", "Hiren", "Aadarsh"];
console.log("-------------------------------");
console.log("person :", person);



