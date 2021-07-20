const titles = document.querySelectorAll(".accordion__title")
const titlesContent = document.querySelectorAll(".accordion__info")

titles.forEach((title, titleIndex) => {
    title.addEventListener('click', (event) => {
            if (titlesContent[titleIndex].style.height == "100px") {
                titlesContent[titleIndex].style.height = "2px"
                return
            }   
            titlesContent.forEach(elem => {
                elem.style.height = "2px"
            })
            titlesContent[titleIndex].style.height = "100px"   
    })
})