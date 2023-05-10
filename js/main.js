startButton = document.querySelector(".timer__button-start")
stopButton = document.querySelector(".timer__button-stop")
pauseButton = document.querySelector(".timer__button-pause")
sectionSeconds = document.querySelector(".timer__digits-seconds")
sectionMinutes = document.querySelector(".timer__digits-minutes")
sectionHours = document.querySelector(".timer__digits-hours")
sectionTotalTime = document.querySelector(".timer__button-total")
sectionDate = document.querySelector(".startDate")

let timerId = 0
let isPaused = false;
isStoped = true;
let totalMinutes = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let date

pauseButton.style = "display: none"

// Кнопка старт

startButton.addEventListener('click', () => {
    date = new Date().toLocaleString();
    startButton.style = "display: none"
    pauseButton.style = "display: visible"
    timerId = setInterval(() => {
        isStoped = false;
        if (isPaused != true) {
            seconds++
            sectionSeconds.textContent = seconds + " c. "

            if (seconds >= 60) {
                minutes++
                totalMinutes++
                sectionMinutes.textContent = minutes + " м. "
                seconds = 0
            } else if (minutes >= 60) {
                hours++
                totalHours++
                sectionHours.textContent = hours + " ч. "
                minutes = 0
            }
        }
    }, 10)

})

// Кнопка стоп

stopButton.addEventListener('click', () => {
    if (isStoped == false) {
        clearInterval(timerId)
        sectionTotalTime.textContent = `Всего: ${Math.floor(totalMinutes/60)} ч. ${totalMinutes%60} м.` //Обновление общего времени
        let div = document.createElement('div') //Создание записи о сессии
        div.innerHTML = sectionDate.textContent = date + " - " + hours + " ч. " + minutes + " м. " + seconds + " c. "
        document.querySelector(".sessions").appendChild(div)
        seconds = 0
        minutes = 0
        hours = 0
        sectionSeconds.textContent = "0 c."
        sectionMinutes.textContent = "0 м."
        sectionHours.textContent = "0 ч."
        startButton.style = "display: visible"
        pauseButton.style = "display: none"
        sectionDate.style = "display: none"
        isStoped = true
        
    } else {
        alert("Таймер не включен")
    }

})

// Кнопка пауза

pauseButton.addEventListener('click', () => {
    if (!isPaused && !isStoped) {
        isPaused = true;
        pauseButton.textContent = "Continue"
    } else if (isStoped) {
        alert("Таймер не включен")
    } else {
        isPaused = false;
        pauseButton.textContent = "Pause"
    }
})