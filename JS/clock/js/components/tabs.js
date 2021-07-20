

const tabInner = document.querySelector(".header__munu");
const tabs = document.querySelectorAll("[data='tab']")
const innerContent = document.querySelector("#tabInner");


const clock = '<div class="tabClock"><ul class="tabClock__table"><li class="textLeft tabClock__year">Year: <span id="year"></span> </li><li class="textLeft tabClock__month">Month: <span id="month"></span> </li><li class="textLeft tabClock__day">Day: <span id="day"></span> </li></ul><div class="tabClock__main"><div class="tabClock__number" id="hours"></div><div class="tabClock__number" id="hours"></div><span class="tabClock__quotes">:</span><div class="tabClock__number" id="minutes"></div><div class="tabClock__number" id="minutes"></div><span class="tabClock__quotes">:</span><div class="tabClock__number" id="seconds"></div><div class="tabClock__number" id="seconds"></div></div></div>'
const stopwatch = '<ul class="header__munu"><li id="tab" data-tab="clock" class="header__munu-elem header__munu-elem-active"><div class="">Часы</div></li><li id="tab" data-tab="stopwatch" class="header__munu-elem"><div class="">Секундомер</div></li><li id="tab" data-tab="timer" class="header__munu-elem"><div class="">Таймер</div></li></ul>'
const timer = "123"

innerContent.innerHTML = clock
setInterval(initClock, 1000)

tabInner.addEventListener("click", (event) => {
    const target = event.target
    console.log(target)
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
                setInterval(initClock, 1000)
                break;
            case "stopwatch":
                innerContent.innerHTML = stopwatch
                clearInterval(initClock, 1000)
                break;
            case "timer":
                innerContent.innerHTML = timer
                clearInterval(initClock, 1000)
                break;
            default:
                break;
        }
    }
})