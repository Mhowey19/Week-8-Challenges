const exersiseInput = document.getElementById('exersiseInput')
const exersiseForm = document.getElementById('exersiseForm')
const pizzaForm = document.getElementById('pizzaForm')
const pizzaSlices = document.getElementById('pizzaSlices')
const pizzaPeople = document.getElementById('pizzaPeople')

//EASY
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


//MEDIUM
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


//HARD
function userData() {
    const PII = {
        clientName: "Michael",
        clientSSN: "123-45-6789"
    }
    return {
        getName: function () {
            return console.log(`Your name is ${PII.clientName}`)
        }
    }
}
const userInfo = userData()
console.log(userInfo.getName())



//VERY HARD
class Person {
    constructor(personName, job, age) {//Gives the constructor parameters of personalName, job, and age
        this.personName = personName,
            this.job = job,
            this.age = age,
            this.excersise = function () { //The exersise method when called it will console log the template literal 
                console.log(`Bench Press is the best excersise`)
            }
        this.fetchJob = function () {
            console.log(`${this.personName} works as a ${this.job}`) //fetchJob function when called it will grab the information from personName and job property and input's it into the template literal
        }
    }
}

class Programmer extends Person { //programmer inherets person's values
    constructor(personName, job, age, languages) {
        super(personName, job, age), //Inherits the values of Person's "personName" "job" "age"
            this.languages = languages,
            this.busy = true
        this.completeTask = function () { //Sets busy to false
            this.busy = false
        }
        this.acceptNewTask = function () {//Sets busy to true
            this.busy = true
        }
        this.offerNewTask = function () { //if statement that displays a message in the console if the user busy 
            if (this.busy == true) {
                console.log(`${personName} is busy.${personName} cannot take new tasks at the moment `)
            } else {
                console.log(`${personName} is not busy. ${personName}can take new tasks`)
            }
        }
        //learnLanugage and listLanguages methods that list all the languages the pogrammer knows
        this.learnLanguage = function () {
            for (let i = 0; i < languages.length; i++) { //Iterates over the language length until i is greater than the length of the array
                console.log(`${languages[i]}`)//Console logs the index value of the languages array
            }
            this.listLanguage = function () {
                console.log(`Your known languages are ${this.languages}`)//Console logs the languages array values
            }
        }
    }
}
const person1 = new Programmer("Michael", "apprentice", 19, ["HTML", "Javascript", "CSS", "English", "C++"])
const person2 = new Programmer("Haile", "CEO", 21, ["TypeScript", "Javascript", "English", "Spanish"])
console.log(person1)
console.log(person1.excersise())
console.log(person1.fetchJob())

console.log(person1.offerNewTask())
person1.acceptNewTask()
console.log(person1.offerNewTask())
person1.completeTask()
console.log(person1.offerNewTask())

console.log(person1.learnLanguage())
console.log(person1.listLanguage())


console.log(person2)