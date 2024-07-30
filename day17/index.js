// Activity1
// 1


// class node {

//     constructor(value) {

//         this.value = value;
//         this.next = null

//     }

// }
// let node1 = new node(10)
// let node2 = new node(20)
// let node3 = new node(30)

// node1.next = node2;
// node2.next = node3;
// let currnode = node1
// while (currnode !== null) {


//     console.log(currnode.value)
//     currnode = currnode.next
// }


// 2

// class node {

//     constructor(value) {

//         this.value = value;
//         this.next = null
//     }
// }
// class LinkedList {

//     constructor() {
//         this.head = null //Intially ,  the list is empty so the head is null

//     }
//     // method to add the node at the end
//     add(value) {
//         const newNode = new node(value)
//         if (this.head === null) {

//             this.head = newNode//If the list is empty the new node becomes the head

//         }
//         else {

//             let current = this.head
//             while (current.next !== null) {

//                 current = current.next

//             }
//             current.next = newNode
//         }



//     }
//     // remove the element from the last 
//     remove() {
//         if (this.head === null) {

//             console.log("List is empty")
//             return
//         }
//         if (this.head.next === null) {//If there is only one node in the list

//             this.head = null
//         }
//         else {

//             let current = this.head;
//             while (current.next.next !== null) {
//                 current = current.next


//             }
//             current.next = null//remove the last node
//         }


//     }


//     display() {

//         if (this.head === null) {

//             console.log("List is empty")
//         }
//         else {
//             let current = this.head
//             while (current.next !== null) {
//                 console.log(current.value)
//                 current = current.next

//             }


//         }

//     }

// }
// const list = new LinkedList()
// list.add(2)
// list.add(20)
// list.add(24)
// list.add(24)

// list.display()
// list.remove()
// console.log("\n")
// list.display()
// console.log("\n")

// list.remove()
// console.log("\n")
// list.display()
// Activity2

// Stack

class stack {



    constructor() {


        this.items = []

    }
    // Method to add an element to the stack



    push(element) {

        this.items.push(element)


    }
    pop() {

        if (this.isEmpty()) {

            return "Stack is empty"
        }
        return this.items.pop()
    }
    peek() {

        if (this.isEmpty()) {

            return "Stack is empty"

        }
        return this.items[this.items.length - 1]



    }
    // Method to check if the stack is empty

    isEmpty() {

        return this.items.length === 0

    }

    size() {

        return this.items.length

    }
    clear() {

        this.items = []

    }
    reverseString() {

        let reversed = ""
        while (!this.isEmpty) {

            reversed += this.pop()

        }
        return reversed

    }
}
const Stack = new stack()
// // Stack.push(10)
// // Stack.push(20)
// // Stack.push(30)

// // // console.log(Stack.peek())
// // console.log(Stack.pop())
// // console.log("\n")
// // console.log(Stack.peek())
// // console.log(Stack.size())

// Stack.push("H")
// Stack.push("E")
// Stack.push("L")
// Stack.push("L")
// Stack.push("O")
// console.log(Stack.reverseString())


function reverseStringUsingStack(str) {

    for (let ch in str) {

        Stack.push(ch)

    }

    return Stack.reverseString()


}
const originalString = "HELLO";
const reversedString = reverseStringUsingStack(originalString);
console.log(reversedString); // Outputs: "OLLEH"




