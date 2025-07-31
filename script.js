const exersiseInput = document.getElementById('exersiseInput')
const exersiseForm = document.getElementById('exersiseForm')
const pizzaForm = document.getElementById('pizzaForm')
const pizzaSlices = document.getElementById('pizzaSlices')
const pizzaPeople = document.getElementById('pizzaPeople')
const pIISocial = document.getElementById('pIISocial')

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



function ssn() {
    const pII = {
        clientName: "placeholder",
        socailSecruity: function ssN() {
            ssn: 123456
        }
    }
}


//setters set the variable that your trying to put in pizza("4")