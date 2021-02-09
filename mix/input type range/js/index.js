const range = document.querySelectorAll('.range')

range.forEach(line => {
    if (line.value >= 100) {
        line.style.opacity = '1'
  } else {
       line.style.opacity = '0.8'
  }
    line.addEventListener('input', () => {
        if (line.value >= 100) {
            line.style.opacity = '1'
      } else {
           line.style.opacity = '0.8'
      }
    })
})


