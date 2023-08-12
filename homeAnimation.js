const [red, green, blue] = [0, 0, 0]
const body = document.querySelector('#scrollWrapper')

window.addEventListener('scroll', () => {
    let scrollChange = window.scrollY/15
    const [r, g, b] = [red+scrollChange, green+scrollChange, blue+scrollChange].map(Math.round)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})