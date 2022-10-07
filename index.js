const players = document.querySelectorAll(".slider-single")
const slider = document.querySelector(".slider-group")
console.log(players.length)
const playersWidth = 222 * players.length
slider.style.width = `${playersWidth}px`

var clientX = 0
var deltaX
var countTouches = 0
var slideChange = 0
slider.addEventListener("touchstart", function (e) {
    clientX = e.touches[0].clientX
})
slider.addEventListener('touchend', function (e) {
    deltaX = e.changedTouches[0].clientX - clientX
    if (deltaX < 0 && slideChange < 222 * players.length) {
        slideChange = slideChange + 222
    }
    else if (deltaX > 0 && slideChange > 0) {
        slideChange = slideChange - 222
    }
    slider.style.transform = `translateX(-${slideChange}px)`
})