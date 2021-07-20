
const clock = '<div class="tabClock"><ul class="tabClock__table"><li class="textLeft tabClock__year">Year: <span id="year"></span> </li><li class="textLeft tabClock__month">Month: <span id="month"></span> </li><li class="textLeft tabClock__day">Day: <span id="day"></span> </li></ul><div class="tabClock__main"><div class="tabClock__number" id="hours"></div><div class="tabClock__number" id="hours"></div><span class="tabClock__quotes">:</span><div class="tabClock__number" id="minutes"></div><div class="tabClock__number" id="minutes"></div><span class="tabClock__quotes">:</span><div class="tabClock__number" id="seconds"></div><div class="tabClock__number" id="seconds"></div></div></div>'
const stopwatcha = '<div class="tabStopwatch"><div class="tabStopwatch__active"><div class="tabStopwatch__time">00:00:00</div><div class="tabStopwatch__btns"><div class="tabStopwatch__btn" style="display: none" id="tabStopwatchNote">запись</div><div class="tabStopwatch__btn" style="display: none" id="tabStopwatchStop">стоп</div><div class="tabStopwatch__btn" style="display: none" id="tabStopwatchPause">пауза</div><div class="tabStopwatch__btn" style="display: inline" id="tabStopwatchStart">начать</div></div></div><div class="tabStopwatch__note">Записи:<br /><ul class="tabStopwatch__table"></ul></div></div>'
const timer = '<div class="tabTimer"><table class="tabTimer__table"><tr><th>time</th></tr><tr><th id="tabTimer__value"><input class="tabTimer__table-time" id="timerTime" type="time"></th></tr></table><div class="tabTimer__btns"><div class="tabTimer__btn" style="display: none" id="timerBtnStop">стоп</div><div class="tabTimer__btn" style="display: none" id="timerBtnPause">пауза</div><div class="tabTimer__btn" style="display: inline" id="timerBtnStart">старт</div></div></div> '

let tabInner = document.querySelector(".header__munu");
let tabs = document.querySelectorAll("[data='tab']")
let innerContent = document.querySelector("#tabInner");
innerContent.innerHTML = clock
let blockHours = document.querySelectorAll("#hours")
let blockMinutes = document.querySelectorAll("#minutes")
let blockSeconds = document.querySelectorAll("#seconds")

let blockYear = document.querySelector("#year")
let blockMonth = document.querySelector("#month")
let blockDay = document.querySelector("#day")

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

let stopwatchInterval


function initClock(time) {
    if (tabInner && tabs && innerContent && blockHours && blockMinutes && blockSeconds && blockYear && blockMonth && blockDay) {
        tabInner = document.querySelector(".header__munu");
        tabs = document.querySelectorAll("[data='tab']")
        innerContent = document.querySelector("#tabInner");
        blockHours = document.querySelectorAll("#hours")
        blockMinutes = document.querySelectorAll("#minutes")
        blockSeconds = document.querySelectorAll("#seconds")

        blockYear = document.querySelector("#year")
        blockMonth = document.querySelector("#month")
        blockDay = document.querySelector("#day")
    }

    const date = time || new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    pasteNum(blockHours, hours)
    pasteNum(blockMinutes, minutes)
    pasteNum(blockSeconds, seconds)

    blockYear.textContent = year
    blockMonth.textContent = months[month]
    blockDay.textContent = days[day - 1]

}

function pasteNum(block, num) {
    const blockArr = block
    const numArr = inArray(addZero(num))
    if (true) {
        for (let i = 0; i < blockArr.length; i++) {
            blockArr[i].textContent = numArr[i] + ''  
        }
    }
}

function inArray(num) {
    return Array.from(num + '')
}

function addZero(num) {
    if ((num + "").length === 1) {
        return "0" + num
    } else {
        return num
    }
}

const stopwatch = {
    seconds: 0,
    minutes: 0,
    houres: 0,
}
/////////////////////////

let clockInterval = setInterval(initClock, 500)

tabInner.addEventListener("click", (event) => {
    clearInterval(clearInterval)
    const target = event.target
    if (target.id === 'clock' || 
        target.id === 'stopwatch' || 
        target.id === 'timer') {
        
        tabs.forEach(elem => {
            elem.classList.remove('header__munu-elem-active')
            if (elem == target) {
                target.classList.add('header__munu-elem-active')
            }
        })

        switch (target.id) {
            case "clock":
                innerContent.innerHTML = clock
                clockInterval = setInterval(initClock, 100)
                clearInterval(stopwatchInterval)
                break;
            case "stopwatch":
                clearInterval(clockInterval)
                innerContent.innerHTML = stopwatcha
                const stopwatchTime = document.querySelector(".tabStopwatch__time");
                const stopwatchBtnNote = document.querySelector("#tabStopwatchNote");
                const stopwatchBtnStop = document.querySelector("#tabStopwatchStop");
                const stopwatchBtnPause = document.querySelector("#tabStopwatchPause");
                const stopwatchBtnStart = document.querySelector("#tabStopwatchStart");
                const stopwatchTable = document.querySelector(".tabStopwatch__table");

                // stopwatchTime.textContent = `${addZero(stopwatch.houres)}:${addZero(stopwatch.minutes)}:${addZero(stopwatch.seconds)}`
                
                
                function stopwatchStart() {
                    stopwatch.seconds++
                    if (stopwatch.seconds >= 60) {
                        stopwatch.minutes++
                        stopwatch.seconds = 0
                
                        if (stopwatch.minutes >= 60) {
                            stopwatch.minutes = 0
                            stopwatch.seconds = 0
                            stopwatch.houres++
                        }
                    }
                    stopwatchTime.textContent = `${addZero(stopwatch.houres)}:${addZero(stopwatch.minutes)}:${addZero(stopwatch.seconds)}`
                }
                stopwatchBtnStart.addEventListener('click', () => {
                    if (stopwatch.status === 'start') return
                    stopwatch.status = 'start'
                    stopwatchBtnStart.style.display = "none"
                    stopwatchBtnPause.style.display = "inline"
                    stopwatchBtnNote.style.display = "inline"
                    stopwatchBtnStop.style.display = "none"
                    stopwatchInterval = setInterval(stopwatchStart, 1000)
                })
                stopwatchBtnPause.addEventListener('click', () => {
                    clearInterval(stopwatchInterval)
                    stopwatch.status = 'pause'
                    stopwatchBtnStart.style.display = "inline"
                    stopwatchBtnPause.style.display = "none"
                    stopwatchBtnNote.style.display = "none"
                    stopwatchBtnStop.style.display = "inline"
                })
                stopwatchBtnStop.addEventListener('click', () => {
                    stopwatch.status = ''
                    stopwatchBtnStart.style.display = "inline"
                    stopwatchBtnPause.style.display = "none"
                    stopwatchBtnNote.style.display = "none"
                    stopwatchBtnStop.style.display = "none"

                    stopwatch.seconds = 0;
                    stopwatch.minutes = 0;
                    stopwatch.houres = 0;
                    stopwatchTime.textContent = `${addZero(stopwatch.houres)}:${addZero(stopwatch.minutes)}:${addZero(stopwatch.seconds)}`
                })
                stopwatchBtnNote.addEventListener('click', () => {
                    stopwatchTable.innerHTML += `<li class="tabStopwatch__table-item">${addZero(stopwatch.houres)}:${addZero(stopwatch.minutes)}:${addZero(stopwatch.seconds)}</li>`
                })
                break;
            case "timer":
                clearInterval(clockInterval)
                clearInterval(stopwatchInterval)
                innerContent.innerHTML = timer

                
                const timerBtnStart = document.querySelector("#timerBtnStart")
                const timerBtnStop = document.querySelector("#timerBtnStop")
                const timerBtnPause = document.querySelector("#timerBtnPause")
                const tabTimerValue = document.querySelector("#tabTimer__value")

                const timerObj = {
                    minutes: '',
                    seconds: '',
                }

                let timerInterval
                
                timerBtnStart.addEventListener('click', () => {
                    timerStart()
                    timerBtnStart.style.display = "none"
                    timerBtnStop.style.display = "block"
                    timerBtnPause.style.display = "block"
                    // setInterval(timerStart,5000)
                    
                    
                    
                    
                })

                timerBtnStop.addEventListener('click', () => {
                    timerBtnStart.style.display = "block"
                    timerBtnStop.style.display = "none"
                    timerBtnPause.style.display = "none"
                    tabTimerValue.innerHTML = '<input class="tabTimer__table-time" id="timerTime" type="time" maxlength="2" min="0" max="24" value="0"></input>'
                    clearInterval(timerInterval)
                })

                timerBtnPause.addEventListener('click', () => {
                    timerBtnStart.style.display = "block"
                    timerBtnStop.style.display = "block"
                    timerBtnPause.style.display = "none"
                    tabTimerValue.innerHTML = '<input class="tabTimer__table-time" id="timerTime" type="time" maxlength="2" min="0" max="24" value="0"></input>'
                    document.querySelector("#timerTime").value = addZero(timerObj.minutes) + ":" + addZero(timerObj.seconds)
                    clearInterval(timerInterval)
                })

                function timerStart() {
                    const timerTime = document.querySelector("#timerTime")
                    const timeInArr = timerTime.value.split(':') 
                    timerObj.minutes = +timeInArr[0] || '00'
                    timerObj.seconds = +timeInArr[1] || '00'
                    tabTimerValue.innerHTML = `<div class="tabTimer__table-time-value" id="timerTimeValue">${addZero(timerObj.minutes) || '00'}:${addZero(timerObj.seconds) || '00'}</div>`
                    

                    

                    timerInterval = setInterval(timeMinus, 1000)
                }
                
                function timeMinus() {
                    if ((timerObj.minutes === 0 || timerObj.minutes === '00') && (timerObj.seconds === 0 || timerObj.seconds === '00')) {
                        clearInterval(timerInterval)
                        tabTimerValue.innerHTML = '<input class="tabTimer__table-time" id="timerTime" type="time" maxlength="2" min="0" max="24" value="0"></input>'
                        timerBtnStart.style.display = "block"
                        timerBtnStop.style.display = "none"
                        timerBtnPause.style.display = "none"
                        timerObj.minutes = ""
                        timerObj.seconds = ""
                        return
                    }
                    
                    timerObj.seconds--
                    if (timerObj.seconds === -1) {
                        timerObj.minutes--
                        timerObj.seconds = 59
                    }
                    
                    tabTimerValue.innerHTML = `<div class="tabTimer__table-time-value" id="timerTimeValue">${addZero(timerObj.minutes) || '00'}:${addZero(timerObj.seconds) || '00'}</div>`
                }
                break;
            default:
                break;
        }
    }
})

///////////////////////// timer






