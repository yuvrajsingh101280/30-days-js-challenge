// // // Activity1
// // 1
// // class person {

// //     constructor(name, age) {

// //         this.name = name
// //         this.age = age;
// //     }
// //     greet() {

// //         console.log(`hello I am ${this.name} of ${this.age} years old`)

// //     }

// // }
// // const person1 = new person("yuvraj", 20)
// // console.log(person1.greet())

// // 2

// class person {

//     constructor(name, lastNAme, age) {

//         this.name = name
//         this.lastNAme = lastNAme
//         this.age = age;
//     }
//     greet() {

//         return `hello I am ${this.name} of ${this.age} years old`

//     }
//     updateAge(newage) {
//         this.age = newage

//     }

//     static genericgreeting() {

//         console.log(`this is the  generic grreting from the person class`)

//     }
//     get fullName() {

//         return `${this.name}${this.lastNAme}`

//     }
//     set fullName(name) {

//         const [firstname, lastNAme] = name.split("")
//         this.firstname = firstname;
//         this.lastNAme = lastNAme

//     }

// }
// // const person1 = new person("yuvraj", 20)
// // console.log(person1.greet())
// // person1.updateAge(23)
// // console.log(person1.greet())

// // Activity2

// // 1

// class student extends person {
//     static count = 0;
//     constructor(name, age, Student_Id) {
//         super(name, age)
//         this.Student_Id = Student_Id
//         student.count++
//         console.log(`The total number of students: ${student.count}`)

//     }
//     returnid() {
//         return this.Student_Id
//     }
//     greet() {

//         console.log(`Hello I am ${this.name} of ${this.age} years old and my student is ${this.Student_Id}`)

//     }

// }

// // const student1 = new student("yuvraj", 20, "BCA2020")
// // console.log(student1.greet())
// // console.log(`Student ID: ${student1.returnid()}`)

// // Activity3

// // console.log(person.genericgreeting())

// // 2

// // const student1 = new student("Yuvraj", 20, "BCA2020");
// // console.log(student1.greet());

// // const student2 = new student("Amit", 21, "BCA2021");
// // console.log(student2.greet());

// // const student3 = new student("Priya", 22, "BCA2022");
// // console.log(student3.greet());


// // Activity4

// // 1
// // const person1 = new person('John', 'Doe', 30);
// // console.log(person1.fullName);
// // Create an instance of the Person class
// // const person1 = new person('John', 'Doe', 30);

// // // Log the full name using the getter
// // console.log(person1.fullName); // Output: John Doe

// // // Update the name using the setter
// // person1.fullName = 'Jane Smith';

// // // Log the updated full name
// // console.log(person1.fullName); 


// Activity5


// 1
class Account {
    // The constructor initializes the balance to zero
    constructor() {
        let _balance = 0; // Private field to store balance

        // Public method to get the current balance
        this.getBalance = function () {
            return _balance;
        };

        // Public method to deposit money
        this.deposit = function (amount) {
            if (amount > 0) {
                _balance += amount; // Increase the balance
                console.log(`Deposited: ${amount}. New Balance: ${_balance}`);
            } else {
                console.log('Deposit amount must be positive.');
            }
        };

        // Public method to withdraw money
        this.withdraw = function (amount) {
            if (amount > 0 && amount <= _balance) {
                _balance -= amount; // Decrease the balance
                console.log(`Withdrew: ${amount}. New Balance: ${_balance}`);
            } else {
                console.log('Invalid withdrawal amount.');
            }
        };
    }
}

// // Example usage
// const myAccount = new Account();
// myAccount.deposit(100);   // Deposited: 100. New Balance: 100
// myAccount.withdraw(30);   // Withdrew: 30. New Balance: 70
// console.log(myAccount.getBalance()); // 70
// myAccount.withdraw(100);  // Invalid withdrawal amount.
// // Create an instance of the Account class
const myAccount = new Account();

// Deposit 150 into the account
myAccount.deposit(150);  // Expected output: Deposited: 150. New Balance: 150
console.log(`Balance after deposit: ${myAccount.getBalance()}`); // Logs the balance after deposit

// Withdraw 50 from the account
myAccount.withdraw(50);  // Expected output: Withdrew: 50. New Balance: 100
console.log(`Balance after withdrawal: ${myAccount.getBalance()}`); // Logs the balance after withdrawal

// Attempt to withdraw more than the available balance
myAccount.withdraw(200); // Expected output: Invalid withdrawal amount.
console.log(`Balance after invalid withdrawal attempt: ${myAccount.getBalance()}`); // Logs the balance after failed withdrawal

// Deposit 100 into the account
myAccount.deposit(100);  // Expected output: Deposited: 100. New Balance: 200
console.log(`Balance after second deposit: ${myAccount.getBalance()}`); // Logs the balance after second deposit

// Withdraw 100 from the account
myAccount.withdraw(100);  // Expected output: Withdrew: 100. New Balance: 100
console.log(`Balance after second withdrawal: ${myAccount.getBalance()}`); // Logs the balance after second withdrawal

