const secondHand = document.querySelector('[data-second]')
const minuteHand = document.querySelector('[data-minute]')
const hourHand = document.querySelector('[data-hour]')

setTime = () => {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    rotateHands(secondHand, secondsRatio)
    rotateHands(minuteHand, minutesRatio)
    rotateHands(hourHand, hoursRatio)
}

rotateHands = (element, deg) => {
    element.style.setProperty('--rotation', deg*360)
}

setTime()

setInterval(setTime, 1000)