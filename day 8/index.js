// Activity1
const name = "yuvraj"
const age = 20
const string = `${name} of  age ${age}`
console.log(string)
console.log("\n")

// Multi line string

const multilinestring = `hey my name is yuvraj.
I am 20 years old.
I have learned html ,css , js , react , and currently learning node jjs
`
console.log(multilinestring)

console.log("\n")


// activity2

const number = [12, 44, 21, 12, 4543, 55]
const [first, second, third] = number//Array destructuring 
console.log(second)

console.log("\n")

const book = {

    title: "abc",
    author: "yuvi"

}

const { title, author } = book
console.log(title)

console.log("\n")

// activitty3

const newArr = [...number, 7]
console.log(newArr)


console.log("\n")

const sum = (...numbers) => {
    return numbers.reduce((accumulator, currval) => accumulator + currval, 0)

}
console.log(sum(1, 2, 3, 4, 5))

console.log("\n")


// ACtivity4

const product = (a, b = 2) => {

    return a * b

}
console.log(product(2))
console.log(product(3, 3))

console.log("\n")

// Activity5


const Name = "yuvraj"
const Age = 20


const person = {

    Name,
    Age,


    greet() {

        console.log(`Hey my name is ${this.Name} of ${this.Age} years old`)

    },
    incrementAge() {


        this.Age += 1;
        console.log(`I am now ${Age} years old`)

    }

}
console.log(person)
person.greet()
person.incrementAge()

console.log("\n")


// Computed property names in JavaScript allow you to dynamically create property names using expressions enclosed in square brackets.
const PropName1 = "firstName"
const PropName2 = "SecodnName"
const PropName3 = "Age"

const Person = {


    [PropName1]: "yuvraj",
    [PropName2]: "singh",
    [PropName3]: 20



}
console.log(Person)