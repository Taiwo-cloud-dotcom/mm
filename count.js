let myTimeInSec = 7200

let countdownDisplay = document.getElementById("counting")

function counting() {
    myTimeInSec -= 1;
    hrs = Math.floor(myTimeInSec / (60 * 60));
    mins = Math.floor((myTimeInSec % (60 * 60)) / 60);
    sec = Math.floor(myTimeInSec % 60);



    let mywa = document.getElementById('wa')
    let myodu = document.getElementById('odu')
    let myuni = document.getElementById('uni')

    mywa.innerText = hrs;
    myodu.innerText = mins;
    myuni.innerText = sec;

}

function lazz() {
    setInterval(() => {
        counting()

    }, 1000);
}