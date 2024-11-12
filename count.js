let myTimeInSec = 7200

let countdownDisplay = document.getElementById("counting")
let stopdisplay = document .getElementById("stopco")

function counting() {
    myTimeInSec -= 1;
    hrs = Math.floor(myTimeInSec / (60 * 60));
    mins = Math.floor((myTimeInSec % (60 * 60)) / 60);
    sec = Math.floor(myTimeInSec % 60);



    let mywa = document.getElementById('wa')
    let myodu = document.getElementById('odu')
    let myuni = document.getElementById('uni')

    hrs<10 ? hrs = `0${hrs}` : hrs
    mins<10 ? mins = `0${mins}` : mins
    sec<10 ? sec = `0${sec}` : sec

    mywa.innerText = hrs;
    myodu.innerText = mins;
    myuni.innerText = sec;

}

function lazz() {
    let countdownDisplay = setInterval(() => {
        counting()

    }, 100);

    stopdisplay.addEventListener("click",() =>{
        clearInterval(countdownDisplay)
    })
}