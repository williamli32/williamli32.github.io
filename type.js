class Typer {
    constructor(elementList, toRotate, period) {
        this.toRotate = toRotate
        this.elements = elementList
        this.loopNum = 0
        this.period = parseInt(period, 10) || 2000
        this.txt = ''
        this.tick()
        this.isDeleting = false
    }
    
    tick() {
        let i = this.loopNum % this.toRotate.length
        let fullTxt = this.toRotate[i]

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        this.elements.innerHTML = '<span class="wrap">' + this.txt + '</span>'

        let screen = this
        let delta = 150

        if (this.isDeleting) {
            delta /= 1.3
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period
            this.isDeleting = true
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false
            this.loopNum++
            delta = this.period/1.5
        }

        setTimeout(function () {
            screen.tick()
        }, delta)
    }
}
  
  
window.onload = () => {
    let typer = document.getElementsByClassName('txt-rotate')
    for (let i=0; i<typer.length; i++) {
        let elements = typer[i].getAttribute('data-rotate')
        let period = typer[i].getAttribute('data-period')
        if (elements) {
            new Typer(typer[i], JSON.parse(elements), period)
        }
    }
}