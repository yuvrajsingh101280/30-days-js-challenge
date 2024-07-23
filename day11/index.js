// activtiy1
// 1

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is a message after a 2-second timeout.");
//         // reject("the operation is rejected")
//     }, 2000);
// });

// promise
//     .then((message) => {//then method is used to handled the resolved promise
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// console.log("\n")

// 2


// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("This is the error message after 2 second"))

//     }, 2000)


// })

// mypromise.catch((error) => { ///catch method is used to handle the reject promise
//     console.log(error.message)

// })

// Activity2

// function fetchData() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             fetch("https://uselessfacts.jsph.pl/random.json?language=en").then((response) => {
//                 if (!response.ok) {

//                     throw new Error("failed to fetch the error")
//                 }
//                 return response.json()

//             }).then((data) => {

//                 resolve(`Fetched radom facts: ${data.text}`)


//             }).catch((error) => {
//                 reject(error)


//             })
//         }, Math.random() * 2000);


//     })

// }


// fetchData().then((message1) => {

//     console.log(message1)
//     return fetchData()

// }).then((message2) => {

//     console.log(message2)

//     return fetchData()
// }).catch((error) => {

//     console.log(error)

// })

// console.log("\n")


// Activity3


// 1.
// function fetchData2() {



//     return new Promise((resolve) => {

//         setTimeout(() => {

//             resolve("hello guys")
//         }, 2000)

//     })



// }
// async function logResolveValue() {

//     try {
//         const result = await fetchData2()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }



// }
// logResolveValue()

// console.log("\n")

// 2

// function fetchData3() {

//     return new Promise((reject) => {


//         setTimeout(() => {

//             reject(new Error("Error after 3 second "))

//         }, 3000)

//     })

// }
// async function handleFetchData3() {

//     try {
//         const result = await fetchData3()
//         console.log(result)
//     } catch (error) {
//         console.log("Error message:", error.message)
//     }


// }
// handleFetchData3()

// Activity4

// 1
// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {

//     if (!response.ok) {

//         throw new Error("Network response was not ok", response.statusText)

//     }
//     return response.json()

// }).then((data) => {

//     console.log(data.body)

// }).then((error) => {


//     console.log("Error in fetchin data: ", error)
// // })
// console.log("\n")
// // 2


// async function fetchData4() {
//     try {
//         const response = await fetch("http://numbersapi.com/random/trivia?json");
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         const data = await response.json(); // Use response.json() to parse the response body
//         console.log(data); // Log the data to the console
//     } catch (error) {
//         console.error("There was an error fetching the data:", error);
//     }
// }

// fetchData4();


// Activity 5

// 1

// async function fetchMultipleData() {
//     const urls = [
//         'http://numbersapi.com/random/trivia?json',
//         'http://numbersapi.com/random/year?json',
//         'http://numbersapi.com/random/date?json'
//     ];

//     try {
//         const promises = urls.map((url) => {
//             return fetch(url).then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Network response was not ok: ${response.statusText}`);
//                 }
//                 return response.json(); // Ensure we call the function to parse JSON
//             });
//         });

//         const results = await Promise.all(promises);
//         console.log(results);
//     } catch (error) {
//         console.error('There was an error fetching the data:', error);
//     }
// }

// fetchMultipleData();

// 2

// Define two public APIs
const api1 = 'https://api.thecatapi.com/v1/images/search'; // API that returns a cat image
const api2 = 'https://api.thedogapi.com/v1/images/search'; // API that returns a dog image

// Create promises for each API call
const fetchCat = fetch(api1)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    });

const fetchDog = fetch(api2)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    });

// Use Promise.race to get the result from the first API that responds
Promise.race([fetchCat, fetchDog])
    .then(result => {
        // Log the result from the first API that responded
        if (result && result[0] && result[0].url) {
            console.log('First API response URL:', result[0].url);
        } else {
            console.log('Unexpected result structure:', result);
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
