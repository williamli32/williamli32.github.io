const [red, green, blue] = [0, 0, 0] //black
const body = document.querySelector('#scrollWrapper')
let inProgress = false //lock; becomes true to prevent the starting of multiple animations

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('scroll', async () => {
    //detect user scroll value and divides so the value isn't too large
    let scrollChange = window.scrollY/15
    //adding values to black makes it lighter gray
    const [r, g, b] = [red+scrollChange, green+scrollChange, blue+scrollChange].map(Math.round)
    //changing CSS from JS: get an element, set its CSS value to a string
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    //detects when to start the pool ball animation
    console.log(window.scrollY)
    if(window.scrollY>300) {
        if(!inProgress) {
            inProgress = true
            while(inProgress) {
                //balls are ordered in backwards order so when the ball on top gets hit, the next gets cleanly revealed
                for(let i=8; i>=0; i--) {
                    startPoolAnimation(i)
                    await sleep(3000)
                }
            }
        }
    }
})

async function startPoolAnimation(ballIndex) {
    //get the elements on the page
    let currentBall = document.getElementsByClassName('poolBalls')[ballIndex]
    let poolCue = document.getElementById('poolCue')
    let nextBall = ''
    //if-else to cycle through the balls correctly
    if(ballIndex-1 === -1) {
        //ballIndex 8 is the 1 ball (yellow with Java logo)
        nextBall = document.getElementsByClassName('poolBalls')[8]
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
    }
    //else, show next ball, hide the current ball after a certain time. Gives the impression of going off screen.
    else {
        nextBall.style.opacity = '1'
        await sleep(800)
        currentBall.style.opacity = '0'
    }
    //reset animations so they can be replayed
    poolCue.style.animation = ''
    currentBall.style.animation = ''
}