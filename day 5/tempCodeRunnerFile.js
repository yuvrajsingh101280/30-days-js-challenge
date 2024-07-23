console.log("\n")

const greet = (name, age = 18) => {

    console.log("hello", name, age)

}
greet("raju");


console.log("\n")

//High -order function 

const repeatfunction = (func, times) => {

    for (let i = 0; i < times; i++) {

        func()

    }
}

const hello = () => {

    console.log("hello world")

}
console.log(repeatfunction(hello, 4))
