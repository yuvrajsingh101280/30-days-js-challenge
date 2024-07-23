// Activity 1: For Loop
for (let i = 0; i <= 10; i++) {

    console.log(i)
}
console.log("\n")

for (let i = 1; i <= 10; i++) {
    console.log("5 X ", i, " = ", 5 * i)

}

console.log("\n")

// Activity 2

let sum = 0;
let a = 10;
while (a > 0) {

    sum = sum + a;
    a--

}
console.log(sum)
console.log("\n")
let x = 10
while (x > 0) {
    console.log(x)
    x--

}
console.log("\n")

// Activity3 

let y = 1;
do {
    console.log(y)
    y++
} while (y <= 5);

console.log("\n")

let fact = 1;
let num = 5

do {

    fact = fact * num;
    num--


} while (num > 0)
console.log(fact)

console.log("\n")
// Activity 4

for (let i = 1; i <= 5; i++) {

    let row = ""
    for (let j = 1; j <= i; j++) {

        row = row + "*"
    }
    console.log(row)

}

// Activity 5
console.log("\n")
for (let i = 1; i <= 10; i++) {


    if (i === 5) {

        continue;
    }
    console.log(i)
}
console.log("\n")
for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i === 7) {

        break
    }

}