function loadEvents() {
    document.addEventListener("mouseover",(event)=> {
        target = event.target
        if(target && target.classList.contains("pixel")){
            console.log(target.id);
            
            target.classList.add("hovered-Pixel")
        }
    })
}