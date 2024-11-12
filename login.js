let lowerPattern = /^[a-z]+$/
let upperPattern = /^[A-Z]+$/
let numberPattern = /^[0-9]+$/
let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
let userNamePattern = /^[0-9a-zA-Z]+$/
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
let symbolPattern = /^(?=.[0-9]+$)/

let symbolValue = "@)&%$"
let upperValue = "TAIWO"
let lowerValue = "taiwo"
let numberValue = "24568"
let emailValue = "taiwo24@Gmail.com"
let passwordValue = "qwerrASDDF76@@@"


console.log(symbolPattern.test(symbolValue));
console.log(lowerPattern.test(lowerValue));
console.log(numberPattern.test(numberValue));
console.log(upperPattern.test(upperValue));
console.log(emailPattern.test(emailValue));
console.log(passwordPattern.test(passwordValue));


let myfor = document.getElementById("myfor")

let emailerror = document.getElementById("emailerror")

let passworderror = document.getElementById("passworderror")



emailerror.style.color = "red"
myfor.addEventListener("submit", (stopsubmit) => {

    stopsubmit.preventDefault()

    let isCorrect = true

    let taiwo = document.getElementById("mal")
    let pass = document.getElementById("pass")



    if (!emailPattern.test(taiwo.value)) {
        console.log("it is not a valid email")
        emailerror.innerText = " it is not a valid email"
        isCorrect = false
    }
    else {
        emailerror.style.color = "green"
        emailerror.innerText = " Email valid"
    }


    if (!upperPattern.test(pass.value)) {
        console.log("uppercase required")
        uppererror.innerText = " uppercase required"
        isCorrect = false
        uppererror.style.color = "red"
    }
    else {
        uppererror.style.color = "green"
        uppererror.innerText = " uppercase correct "
    }
    if (!lowerPattern.test(pass.value)) {
        console.log("lowercase required")
        lowererror.innerText = " lowercase required"
        isCorrect = false
        lowererror.style.color = "red"
    }
    else {
        lowererror.style.color = "green"
        lowererror.innerText = " lowercase correct"
    }
    if (!numberPattern.test(pass.value)) {
        console.log("number required")
        numbererror.innerText = " number required"
        isCorrect = false
        numbererror.style.color = "red"
    }
    else {
        numbererror.style.color = "green"
        numbererror.innerText = "number correct"
    }

    if (!symbolPattern.test(pass.value)) {
        console.log("symbol required")
        symbolerror.innerText = "symbol required"
        isCorrect = false
        symbolerror.style.color = "red"
    }

    else {
        symbolerror.style.color = "green"
        symbolerror.innerText = " symbol correct"
    }
})