// // activty 1

// // 1
// function generateError() {

//     throw new Error("THis is an error")

// }
// try {

//     generateError()
// } catch (error) {
//     console.log(error)

// }

// 2
// function divide(a, b) {

//     const result = a / b

//     if (b === 0) {

//         throw new Error("Denominator is zero")

//     }
//     return result;
// }
// try {
//     let res = divide(4, 0)
//     console.log(res)

// } catch (error) {
//     console.log("An error occured: ", error)

// }

// Activity2

// function demo() {


//     throw new Error("this is an intentiona error")

// }

// try {

//     demo();

// } catch (error) {
//     console.log(error)

// } finally {


//     console.log("error checked successfullyu")

// }

// Activity 3

// class customError extends Error {

//     constructor(message) {
//         super(message)
//         this.name = "customError"

//     }



// }
// function throwErrorFunction() {



//     throw new customError("This is a custom error!")

// }
// try {
//     throwErrorFunction()
// } catch (error) {


//     if (error instanceof customError) {

//         console.error("CustomError Caught: " + error.message)

//     }
//     else {

//         console.error("An unexpected error occurred: " + error.message)

//     }

// }
// finally {

//     console.log("Enterning finally block......")

// }

// 2

// function validateInput(input) {

//     if (!input || input.trim() === "") {

//         throw { name: "Validation Error", message: "Input cannot be empty" }

//     }
//     return true

// }
// function processUSerInput(input) {



//     try {


//         validateInput(input)
//         console.log("Input is valid:", input)



//     } catch (error) {
//         if (error.name === "validationError") {

//             console.error("Validation error" + error.message)

//         }
//         else {
//             console.error("An unexpected error occured: " + error.message)


//         }
//     }


// }
// processUSerInput("")
// processUSerInput("valid input")

// Activity 4

// function randomResolveReject() {


//     return new Promise((resolve, reject) => {

//         const random = Math.floor(Math.random() * 10)
//         if (random > 5) {


//             resolve("the matter is resolve")
//         }
//         else {
//             reject("Failure!!!!!!!!!")


//         }

//     })

// }



// randomResolveReject().then((message) => {
//     console.log(message)

// }).catch((error) => {

//     console.log(error)

// })

// // 2
// const randomerror = () => {

//     return new Promise((resolve, reject) => {

//         const random = Math.floor(Math.random() * 10)
//         if (random > 5) {
//             resolve("Success ! The promise is resolved")
//         }
//         else {

//             reject("Failure! The promise reject")

//         }


//     })
// }
// async function handleError() {

//     try {
//         const message = await randomerror()
//         console.log(message)
//     } catch (error) {
//         console.log(error)
//     }

// }
// handleError()

// Activity -5
// 1
// fetch("https://invalid-url.example.com").then((response) => {

//     if (!response.ok) {
//         throw new Error(`Http error ! status :${response.status}`)

//     }
//     return response.json()

// }).then((data) => {

//     console.log("Data receiveds", data)

// }).catch((error) => {
//     console.log("Error", error.message)
// })
// 2

async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.example.com');

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // or response.text() if not JSON
        console.log("Data received:", data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Example usage:
fetchData();
