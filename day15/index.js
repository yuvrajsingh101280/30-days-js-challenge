// /Activity 1

// 1

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {

//         return `outer vairable:${outerVariable} , Inner Variable : ${innerVariable}`;

//     }

// }

// const newFunction = outerFunction("outside")
// console.log(newFunction)
// const result = newFunction("Inside")
// console.log(result)
// 2

// function createCounter() {
//     let count = 0;// private counter variable

//     return {

//         increment: function () {
//             count++;

//         },
//         getValue: function () {
//             return count

//         }

//     }


// }
// const count = createCounter()
// console.log(count)

// // count.increment()
// // console.log(count.getValue())

// // count.increment()
// // console.log(count.getValue())

// // count.increment()
// // console.log(count.getValue())


// // Activity2
// // 1
// function generateRandomId() {

//     let Id = 0;
//     return function () {

//         Id++;
//         return Id


//     }

// }
// const generateId = generateRandomId()
// console.log(generateId())
// console.log(generateId())
// console.log(generateId())
// console.log(generateId())

// 2

// const captureName = (name) => {
//     return function () {

//         console.log(`hello ${name}`)

//     }

// }
// const name = captureName("yuvraj")
// console.log(name())//In javscrupt if a function does not return a value explicitly , it implictily returns undefined


// Activity 3

// function createFunctinoArray() {

//     let functions = []

//     for (let i = 0; i <= 10; i++) {

//         functions.push((function (index) {

//             return function () {
//                 console.log(index)

//             }

//         })(i))

//     }

//     return functions;
// }

// const functionArray = createFunctinoArray();

// functionArray[0](); // Output: 0
// functionArray[1](); // Output: 1
// functionArray[2](); // Output: 

// Activity4
// const ItemManager = () => {
//     let Items = []


//     return {

//         addItem: function (item) {

//             Items.push(item)
//             console.log(`${item} added`)
//         },
//         removeItem: function (item) {
//             let index = Items.indexOf(item)


//             if (index !== -1) {

//                 Items.splice(index, 1)
//                 console.log(`${item} removed`)
//             }
//             else {

//                 console.log(`Item not found`)

//             }
//         },
//         listItems: function () {

//             console.log("Items:", Items.join(","))


//         }


//     }

// }
// const itemManagers = ItemManager()

// itemManagers.addItem("Apple");    // Output: Apple added.
// itemManagers.addItem("Banana");   // Output: Banana added.
// itemManagers.listItems()         // Output: Items: Apple, Banana

// itemManagers.removeItem("Apple"); // Output: Apple removed.
// itemManagers.listItems();         // Output: Items: Banana

// itemManagers.removeItem("Grapes"); // Output: Grapes not found.
// itemManagers.listItems();          

// // /Acitvity5
// // 1

// function memoize(fn) {
//     let cache = {}//This object will store the results of previous computations

//     return function (...args) {
//         const key = JSON.stringify(args)

//         if (cache[key]) {

//             console.log(`Fething from cache for agruments:`, args)
//             return cache[key]

//         }


//         const result = fn(...args)
//         cache[key] = result;

//         console.log("computing result for arguments: ", args)
//         return result



//     }
//     return cache

// }

// // usage example

// const slowfunction = (num) => {
//     for (let i = 0; i < 1e6; i++)
//         return num * 2

// }

// const memoizedSlowFunction = memoize(slowfunction)
// console.log(memoize())
// console.time("First call with 5");
// console.log(memoizedSlowFunction(7)); // Output: 10, should be slower (computing)
// console.timeEnd("First call with 5");

// console.time("Second call with 5");
// console.log(memoizedSlowFunction(7)); // Output: 10, should be faster (cache)
// console.timeEnd("Second call with 5"); // Output: Fetching from cache for arguments: [10], Result: 20

// 2


function memoize(fn) {
    const cache = {}; // Object to store cached results

    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key

        if (cache[key]) {
            console.log(`Fetching from cache for arguments: ${args}`);
            return cache[key]; // Return cached result if present
        }

        const result = fn(...args); // Call the original function with the spread arguments
        cache[key] = result; // Store the result in the cache

        console.log(`Computing result for arguments: ${args}`);
        return result; // Return the computed result
    };
}

// Factorial function
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

// Usage example with timing
console.time("First call with 5");
console.log(memoizedFactorial(5)); // Computes and returns 120
console.timeEnd("First call with 5");

console.time("Second call with 5");
console.log(memoizedFactorial(5)); // Fetches from cache and returns 120
console.timeEnd("Second call with 5");

console.time("First call with 6");
console.log(memoizedFactorial(6)); // Computes and returns 720 (uses cached value for factorial(5))
console.timeEnd("First call with 6");

console.time("Second call with 6");
console.log(memoizedFactorial(6)); // Fetches from cache and returns 720
console.timeEnd("Second call with 6");
