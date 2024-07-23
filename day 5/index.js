// function declaration

function isEven(number) {
    if (number % 2 === 0) {

        console.log("Even number")
    }
    else {

        console.log("Odd number")
    }

}
isEven(35)


console.log("\n")
// in the function declaration function call can be hoisted
square(6)
function square(num) {

    console.log(num * num)
}



console.log("\n")

// Function expression

const max = function (a, b) {

    if (a > b) {
        console.log(a, " is the maximum")
    }
    else {

        console.log(b, " is the greatest")
    }

}
max(12, 14)

console.log("\n")

const concatenate = function (string1, string2) {
    return string1 + string2


}
console.log("hello", "world")


console.log("\n")
// callback function
const sum = (a, b) => {

    return a + b;

}
console.log(sum(12, 23))


console.log("\n")

const stringContainCharacter = (string, char) => {
    return string.includes(char)


}
console.log(stringContainCharacter("hello", "l"))
console.log(stringContainCharacter("fine", "m"))


console.log("\n")


// function parameters and default values

const mul = (a, b = 2) => {
    return a * b
}
console.log(mul(3))


console.log("\n")

const greet = (name, age = 18) => {

    console.log("hello", name, age)

}
greet("raju");


console.log("\n")

//High -order function 

const composeFunction = (func1, func2, value) => {
    return func2(func1(value));
};

const fun1 = (num) => {
    return num * 3;
};

const func2 = (num) => {
    return num * num;
};

// Using composeFunction to apply fun1 and then func2 to the value 4
const result = composeFunction(fun1, func2, 4);
console.log(result); // Outputs: 144
