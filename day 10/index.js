// Activity1

// const btn = document.querySelector(".btn")
// const para = document.querySelector(".para")

// btn.addEventListener("click", () => {

//     para.textContent = "content changed"


// })

// -----------------------------------------------------------------------------




// const img = document.querySelector(".dogesh")
// img.addEventListener("dblclick", () => {

//     img.classList.toggle("hidden")

// })


// Activity2

// const box = document.querySelector(".box")
// box.addEventListener("mouseover", () => {

//     box.style.backgroundColor = "blue"

// })

// box.addEventListener("mouseout", () => {

//     box.style.backgroundColor = "red"

// })

// Activity 3


// const input = document.querySelector(".in")
// input.addEventListener("keydown", (e) => {

//     console.log(e.key)

// })


// const input2 = document.querySelector(".in2")
// input2.addEventListener("keyup", (e) => {

//     console.log(e.key)

// })

// const form = document.querySelector(".form")
// form.addEventListener("submit", (e) => {

//     e.preventDefault()
//     const name = e.target.name.value
//     const age = e.target.age.value

//     console.log("name", name)
//     console.log("age", age)

// })

// // ----------------------------.
// const select = document.querySelector("#options")

// const displayParagraph = document.querySelector("#paragraph")

// select.addEventListener("change", (event) => {
//     console.log(event)

//     const selectedOptions = event.target.options[event.target.selectedIndex]
//     const selectedText = selectedOptions.text



//     displayParagraph.textContent = `selected: ${selectedText}`


// })


// Activity5



// const list = document.querySelector(".mylist")

// list.addEventListener("click", (event) => {

//     if (event.target && event.target.tagName === "LI") {
//         console.log(event.target.textContent)

//     }

// })



const list = document.querySelector(".list")

const btn = document.querySelector("#addItem")


list.addEventListener("click", (event) => {

    if (event.target && event.target.tagName === "LI") {

        console.log("clicked ITem:", event.target.textContent)

    }

})


function addListItem(text) {


    const newItem = document.createElement("li")
    newItem.textContent = text
    list.appendChild(newItem)
}



btn.addEventListener("click", () => {


    const newItemText = `Item ${list.children.length + 1}`
    addListItem(newItemText)

})
