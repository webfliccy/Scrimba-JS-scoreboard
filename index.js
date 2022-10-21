//assign variables
let homeScore = 0
let guestScore = 0
let homeOutput = document.getElementById("homeScore")
let guestOutput = document.getElementById("guestScore")

//enter initial values
homeOutput.textContent = homeScore
guestOutput.textContent = guestScore

//highlight leader
function highlight(teamOutput) {
    //remove class from both scores
    guestOutput.classList.remove("leader")
    homeOutput.classList.remove("leader")
    //if a team is in lead add in class
    if (teamOutput) {
      teamOutput.classList.add("leader")  
    }
}


//add scores
function addHomeScore(n) {
    homeScore += n
    homeOutput.textContent = homeScore
    if (homeScore > guestScore) {
        highlight(homeOutput)
    } 
    if (guestScore == homeScore) {
        //scores equal
        highlight()
    }
}
function addGuestScore(n) {
    guestScore += n
    guestOutput.textContent = guestScore
    if (guestScore > homeScore) {
        highlight(guestOutput)
    } 
    if (guestScore == homeScore){
        //scores equal
        highlight()
    }
}

//new game button
function reset() {
    guestScore = homeScore = 0
    guestOutput.textContent = guestScore
    homeOutput.textContent = homeScore
    highlight()
}



