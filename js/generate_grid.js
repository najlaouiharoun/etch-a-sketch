function generateGrid(gridLength = 16) {
    let container = document.querySelector("#container")
    for (let i = 0; i < gridLength; i++) {
        let row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < gridLength; j++) {
            let pixel = document.createElement("div")
            pixel.classList.add("pixel")
            row.appendChild(pixel)
        }
        container.appendChild(row)
    }
}
