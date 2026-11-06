function refreshGrid() {
        let gridLength = 16
        do {
            gridLength = window.prompt("how many pixels? choose a number between 1 and 100!",)

        } while (!gridLength|| Number(gridLength) < 0 || Number(gridLength) > 100 || isNaN(+gridLength));
        let container = document.querySelector("#container")
        container.replaceChildren()
        generateGrid(gridLength)   
}