function loadEvents() {
    let container = document.querySelector("#container")
    let refreshButton = document.querySelector("#refresh-button")
    container.addEventListener("mouseover",(event)=> {
        target = event.target
        if(target && target.classList.contains("pixel")){            
            target.classList.add("hovered-Pixel")
        }
    })

    refreshButton.addEventListener("click",()=> {
        refreshGrid()
    })
}

