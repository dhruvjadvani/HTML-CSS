let number = 23;
let flag = true;

for(let div = 2; div < number; div++) {
    if(number % div == 0) {
        flag = false;
        break;
    }
}

if(flag == true) {
    console.log(number, " is prime");
} else {
    console.log(number, " is not prime");
}
