// Activity 1

const arr = [1, 2, 3, 4, 5]
console.log(arr)

console.log("\n")

let element1 = arr[0]
let element2 = arr[4]
console.log(element1, element2)
console.log("\n")

arr.push(10)  //add the element at the last of  the array
console.log(arr)
console.log("\n")
arr.pop() //remove the last  element from the array
console.log(arr)
console.log("\n")
arr.shift()//remove the first element from the array
console.log(arr)
console.log("\n")
arr.unshift(23)//add a new number to the begining of the array
console.log(arr)
console.log("\n")

// // Activity 3 : Array methods (Intermediate)
// const newarr = arr.map((item) => item * 2)
// console.log(newarr)

const filterArr = arr.filter((item) => item % 2 == 0)
console.log(filterArr)

console.log("\n")
const reducearr = arr.reduce((sum, curr) => sum + curr, 0)
console.log(reducearr)
console.log("\n")

// Activity 4

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])

}


console.log("\n")

arr.forEach((item) => {
    console.log(item)

})
console.log("\n")

const twodimensionalArr = [[1, 2, 3], [5, 6, 7], [10, 23, 45]]
console.log(twodimensionalArr)

console.log("\n")

const element = twodimensionalArr[1][1]
console.log(element)