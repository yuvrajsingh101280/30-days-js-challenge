// Activity1
let book = {
    title: "hello world",
    author: "yuvraj",

    year: 2024,


}
console.log(book)

console.log("\n")

let auth = book.author
let title = book.title;
console.log(auth)
console.log(title)

// Activity2: Object Methods
console.log("\n")
const BOOK = {
    ...book, getDetails() {
        return `${this.title} by ${this.author}`


    },


    updateYear(year) {

        this.year = year

    }
}
BOOK.updateYear(2025)
console.log(BOOK)
console.log("\n")
// Activity3
const library = {
    lib1: [

        { name: "Science", tilte: "sci" },
        { name: "sst", title: "sst" }

    ],
    lib2: [

        { name: "math", tile: "mg" },
        { name: "hindi", title: "hin" }

    ]

}
console.log(library.lib1[0].name)


// activity 4


const newbook = {
    ...BOOK, getyeardetails() {

        return `${this.title} released on ${this.year}`

    }
}
console.log(newbook.getyeardetails())
console.log("\n")


for (const key in book) {
    console.log(`${key}:${book[key]}`)
}
console.log("\n")

const keys = Object.keys(book);//object.key returns an array of object's own enumerable property names
console.log("keys:")
keys.forEach((key) => { console.log(key) })

console.log("\n")


const value = Object.values(book)//object.values() to get an array of property values
value.forEach((value) => { console.log(value) })
