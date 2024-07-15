//Activity1

let a = 20
if (a > 0) {
    console.log("positive")

}
else {

    console.log("negative")

}
console.log("\n")
let age = 15
if (age >= 18) {
    console.log("eligible to vote")

}
else {

    console.log("Not Eligible to vote")
}
console.log("\n")
// Activity 2
let x = 100;
let y = 200
let z = 30

if (x > y) {
    if (x > z) {
        console.log("x is greatest")

    }
    else {
        console.log("z is the greatest")

    }

}
else {

    if (y > z) {

        console.log("y is the greatest")
    }
    else {

        console.log("z is the greatest")

    }

}
// Activity 3
console.log("\n")
function dayOfTheWeek(number) {

    switch (number) {

        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("please enter a valid value")
            break;


    }

}
let number = 7
dayOfTheWeek(number);
function getGradeCategory(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 50) return 'D';
    return 'F';
}

function grade(score) {
    const gradeCategory = getGradeCategory(score);

    switch (gradeCategory) {
        case 'A':
            console.log("Grade A");
            break;
        case 'B':
            console.log("Grade B");
            break;
        case 'C':
            console.log("Grade C");
            break;
        case 'D':
            console.log("Grade D");
            break;
        case 'F':
            console.log("Grade F");
            break;
        default:
            console.log("Invalid score");
            break;
    }
}

let score = 85;  // Change this value to test different scores
grade(score);

console.log("\n")
num = 20;
(num % 2 === 0) ? console.log("even number") : console.log("Odd number")


let year = 2021;
((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? console.log("leap year") : console.log("not a leap year")
