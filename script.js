const exersiseInput = document.getElementById('exersiseInput')
const exersiseForm = document.getElementById('exersiseForm')
const pizzaForm = document.getElementById('pizzaForm')
const pizzaSlices = document.getElementById('pizzaSlices')
const pizzaPeople = document.getElementById('pizzaPeople')

exersiseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (exersiseInput.value == "") {
        excersiseOfTheDay("running")
    } else {
        excersiseOfTheDay(exersiseInput.value)
    }
})

function excersiseOfTheDay(workout) {
    console.log(`Today's excersise is: ${workout}`)
}


//Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. 
// The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x 
// being a decimal in case there is no way to split the pizza evenly.

pizzaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (pizzaSlices.value == "" && pizzaPeople.value == "") {
        console.log("it works")
    } else {
        pizzaCalc(pizzaPeople.value, pizzaSlices.value)
    }
})

function pizzaCalc(a, b) {
    const pizzaSplit = parseFloat(a / b)
    console.log(pizzaSplit)
}

// Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and SSN. Only the name property should be accessible, and 
//it should be called through a public function. The SSN property should not be accessible at all. Creating private
// objects and private properties helps you control who has access to what data and helps you prevent people who 
// shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' 
// or other get methods to access data that people might need. For example, people addressing a package or email may
// need a customer's name, but they definitely shouldn't have access to their SSN. 

// const person1 = {
//     clientName: "Michael",
//     // ssn: "123-456-7890",
//     clientSsn: function () {
//         const clientSSN = "123-456-7890"
//         console.log(`Your ssn is ${clientSSN}`)
//     }
// }
function userData() {
    const PII = {
        clientName: "Michael",
        clientSSN: "123-456-7890"
    }
    return {
        getName: function () {
            return console.log(`Your name is ${PII.clientName}`)
        }
    }
}

// const ssn = "123-456-7890"
// return console.log(`Your ssn is ${ssn}`)

const userPIIData = userData()

console.log(userPIIData.getName())
console.log(userPIIData.PII)
// console.log(person1.clientName)
// console.log(person1.clientSsn())


// Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.


//create person constructor w/ name, jobm and age
//give the person an excersise method that displays a personal message
//give a fetchJob method that shows the person's name and job in a console log as a personal message
//create a construction name programmer than 



class Person {
    constructor(personName, job, age) {
        this.personName = personName,
            this.job = job,
            this.age = age,
            this.excersise = function () {
                console.log(`Bench Press is the best excersise`)
            }
        this.fetchJob = function () {
            console.log(`${personName} works as a ${job}`)
        }
    }
}

class Programmer extends Person {
    constructor(personName, job, age, languages, busy) {
        super(personName, job, age)
        this.languages = languages
        busy = true
    }
}

const person1 = new Person("michael", "apprentice", 19,)
console.log(person1)
console.log(person1.excersise())
console.log(person1.fetchJob())
