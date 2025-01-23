let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeHolder = 0
let guestHolder = 0

function addHome(points){
        homeHolder += points
        homeScore.textContent = homeHolder
        if (homeHolder > guestHolder) {
            document.getElementById("home-tag").style.color = "yellow"
            document.getElementById("guest-tag").style.color = "white"
    } 
}

function addGuest(points){
        guestHolder += points
        guestScore.textContent = guestHolder
        if (guestHolder > homeHolder) {
            document.getElementById("guest-tag").style.color = "yellow"
            document.getElementById("home-tag").style.color = "white"
    }
}
