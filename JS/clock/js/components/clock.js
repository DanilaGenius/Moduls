const blockHours = document.querySelectorAll("#hours")
const blockMinutes = document.querySelectorAll("#minutes")
const blockSeconds = document.querySelectorAll("#seconds")

const blockYear = document.querySelector("#year")
const blockMonth = document.querySelector("#month")
const blockDay = document.querySelector("#day")

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']


function initClock(time) {
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

// setInterval(initClock, 1000)









