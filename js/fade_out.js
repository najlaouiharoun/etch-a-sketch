function fadeOut(element) {
    console.log()
    if(element.style.opacity ===""){
        element.style.opacity = 0.9
        return
    }
    if (element.style.opacity == 0) {
        return
    }
    element.style.opacity -= 0.1
}