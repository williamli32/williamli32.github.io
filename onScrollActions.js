const [red, green, blue] = [0, 0, 0] //black
const body = document.querySelector('#aboutBody')
const referenceElement = document.querySelector('#skillsHeaderHome')
let inProgress = false //lock; becomes true to prevent the starting of multiple animations

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('scroll', async () => {
    //detect user scroll value and divides so the value isn't too large
    //if statement is to change the color values by less if the screen is larger; allows readability
    let scrollChange = ''
    if(document.documentElement.scrollHeight<2200) {
        scrollChange = window.scrollY/15
    }
    else {
        scrollChange = window.scrollY/50
    }
    //adding values to black makes it lighter gray
    const [r, g, b] = [red+scrollChange, green+scrollChange, blue+scrollChange].map(Math.round)
    //changing CSS from JS: get an element, set its CSS value to a string
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    //detects when to start the pool ball animation
    if(window.scrollY>820) {
        document.getElementById('coverBall').style.opacity = '0'
        if(!inProgress) {
            inProgress = true
            while(inProgress) {
                //balls are ordered in backwards order so when the ball on top gets hit, the next gets cleanly revealed
                for(let i=9; i>=0; i--) {
                    startPoolAnimation(i)
                    await sleep(3200)
                }
            }
        }
    }
    
    //allows website to correct for font size
    if(window.innerWidth>=1150) {
        document.querySelector('#skillsHeaderAbout').style.fontSize = '220%'
        document.querySelector('#skillsFooterAbout').style.fontSize = '220%'
    }
    else if(window.innerWidth>=780) {
        document.querySelector('#skillsHeaderAbout').style.fontSize = '150%'
        document.querySelector('#skillsFooterAbout').style.fontSize = '150%'
    }
    else if(window.innerWidth>=400) {
        document.querySelector('#skillsHeaderAbout').style.fontSize = '75%'
        document.querySelector('#skillsFooterAbout').style.fontSize = '75%'
    }
    else {
        document.querySelector('#skillsHeaderAbout').style.fontSize = '30%'
        document.querySelector('#skillsFooterAbout').style.fontSize = '30%'
    }
    
    //allows website to correct the cue animation for changes in window size
    let poolCue = document.getElementById('poolCue')
    if(window.innerWidth<=285) {
        poolCue.style.top = '3550px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=287) {
        poolCue.style.top = '3500px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=292) {
        poolCue.style.top = '3450px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=295) {
        poolCue.style.top = '3380px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=298) {
        poolCue.style.top = '3350px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=301) {
        poolCue.style.top = '3280px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=310) {
        poolCue.style.top = '3250px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=313) {
        poolCue.style.top = '3200px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=316) {
        poolCue.style.top = '3150px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=318) {
        poolCue.style.top = '3100px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=321) {
        poolCue.style.top = '3070px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=330) {
        poolCue.style.top = '3000px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=332) {
        poolCue.style.top = '2950px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=338) {
        poolCue.style.top = '2900px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=342) {
        poolCue.style.top = '2850px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=347) {
        poolCue.style.top = '2800px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=357) {
        poolCue.style.top = '2750px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=364) {
        poolCue.style.top = '2700px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=369) {
        poolCue.style.top = '2650px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=382) {
        poolCue.style.top = '2600px'
        poolCue.style.height = '12%'
    }
    else if(window.innerWidth<=393) {
        poolCue.style.top = '2550px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=405) {
        poolCue.style.top = '2500px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=410) {
        poolCue.style.top = '2450px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=415) {
        poolCue.style.top = '2400px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=425) {
        poolCue.style.top = '2350px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=432) {
        poolCue.style.top = '2300px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=450) {
        poolCue.style.top = '2250px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=460) {
        poolCue.style.top = '2200px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=467) {
        poolCue.style.top = '2150px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=473) {
        poolCue.style.top = '2120px'
        poolCue.style.height = '15%'
    }
    else if(window.innerWidth<=500) {
        poolCue.style.top = '2035px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=515) {
        poolCue.style.top = '1950px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=525) {
        poolCue.style.top = '1900px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=550) {
        poolCue.style.top = '1850px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=555) {
        poolCue.style.top = '1800px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=575) {
        poolCue.style.top = '1750px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=610) {
        poolCue.style.top = '1700px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=645) {
        poolCue.style.top = '1650px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=660) {
        poolCue.style.top = '1600px'
        poolCue.style.height = '20%'
    }
    else if(window.innerWidth<=740) {
        poolCue.style.top = '1525px'
        poolCue.style.height = '32%'
    }
    else if(window.innerWidth<=800) {
        poolCue.style.top = '1450px'
        poolCue.style.height = '32%'
    }
    else if(window.innerWidth<=900) {
        poolCue.style.top = '1375px'
        poolCue.style.height = '32%'
    }
    else if(window.innerWidth<=1250) {
        poolCue.style.top = '1250px'
        poolCue.style.height = '32%'
    }
    else {
        poolCue.style.top = (document.documentElement.scrollHeight*0.65+(100/document.documentElement.scrollHeight)*(1929-document.documentElement.scrollHeight))+'px'
        poolCue.style.height = '32%'
    }
})

async function startPoolAnimation(ballIndex) {
    //get the elements on the page
    let currentBall = document.getElementsByClassName('poolBalls')[ballIndex]
    let poolCue = document.getElementById('poolCue')
    let nextBall = ''
    //if-else to cycle through the balls correctly
    if(ballIndex-1 === -1) {
        //ballIndex 9 is the 1 ball (yellow with Java logo)
        nextBall = document.getElementsByClassName('poolBalls')[9]
    }
    else {
        nextBall = document.getElementsByClassName('poolBalls')[ballIndex-1]
    }
    //show the current ball
    currentBall.style.opacity = '1'
    //play poolCue animation: retracts cue to hit the ball
    poolCue.style.animation = 'hitBall 1.5s'
    await sleep(575)
    //play the ball rolling animation: move left off screen. Wait 575ms so it appears that it was hit by the cue.
    currentBall.style.animation = 'ballRollSkills 0.8s'
    //if ballIndex is 0 (next ball is the 1 ball), then wait a time. This is to prevent the 1 ball overlapping the cue ball.
    if(ballIndex === 0) {
        await sleep(800)
        currentBall.style.opacity = '0'
        await sleep(1200)
        nextBall.style.opacity = '1'
        poolCue.style.animation = ''
    }
    //else, show next ball, hide the current ball after a certain time. Gives the impression of going off screen.
    else {
        nextBall.style.opacity = '1'
        await sleep(600)
        currentBall.style.opacity = '0'
    }
    //reset animations so they can be replayed
    await sleep(400)
    poolCue.style.animation = ''
    currentBall.style.animation = ''
}