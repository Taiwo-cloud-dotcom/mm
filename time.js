let myDate = new Date()

console.log(myDate);

console.log("current year", myDate.getFullYear());
console.log("current month", myDate.getMonth() + 1);
console.log("current day", myDate.getDay() + 1);
console.log("current date", myDate.getDate());
console.log("current hours", myDate.getHours());
console.log("current minuites", myDate.getMinutes());
console.log("current seconds", myDate.getSeconds());
console.log("current time", myDate.getTime());

let greetbtn = document.getElementById("greetbtn")

let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATURDAY"]

let theDay = myDate.getDay()


greetbtn.addEventListener("click", () => {
    let askname = prompt("What Is Your Name").toUpperCase()
    let thegreetings = document.getElementById("greetings")

    if (askname != "" && askname != null) {
        if (myDate.getHours() < 12) {
            thegreetings.innerText = `Good Morning ${askname},Today Is ${daysOfWeek[theDay]}`
        }

        else if (myDate.getHours() >= 12 && myDate.getHours() <= 16) {
            thegreetings.innerText = `Good Afternoon ${askname},Today Is ${daysOfWeek[theDay]}`
        }


        else {
            thegreetings.innerText = `Good Evening ${askname},Today Is ${daysOfWeek[theDay]}`
        }
    }
    else {
        thegreetings.innerText = ""
    }

})