// Activity1

// let newtext = document.getElementById("hello")
// const newtext2 = document.getElementByClasss("hello2")
// newtext.textContent = "this is the new text"
// newtext2.textContent = "this is the new text of the second elemetn"

// Activity2


// let newDiv = document.createElement("div")
// newDiv.textContent = "this is the new div"

// document.body.appendChild(newDiv)

// const ul = document.getElementById("items")
// const li = document.createElement("li")

// li.textContent = "new list"
// ul.appendChild(li)

// Activity3


// let removeElement = document.querySelector(".removelement")

// removeElement.remove()






// let parent = document.querySelector(".list")

// parent.removeChild(parent.lastElementChild)


// Actiivty4

// let img = document.querySelector(".image")
// img.src = "new.jpg"


// const element = document.querySelector("#myElement")

// const addbtn = document.querySelector(".addClass")
// const removebtn = document.querySelector(".removeClass")


// addbtn.addEventListener("click", () => {

//     element.classList.add("text-red")

// })
// removebtn.addEventListener("click", () => {

//     element.classList.remove("text-red")

// })


// Activity5


let text = document.querySelector(".text")
let origianlText = text.textContent
let btn = document.querySelector(".changetext")
let textChanges = false

btn.addEventListener("click", () => {

    if (!textChanges) {

        text.textContent = "text changed"
        textChanges = true

    }
    else {

        text.textContent = origianlText
        textChanges = false
    }
})



text.addEventListener("mouseover", () => {

    text.style.borderColor = "red"

})

text.addEventListener("mouseout", () => {
    text.style.borderColor = "black"


})