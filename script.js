const container = document.getElementById("canvas-container");

let gridFunc = function () {
    this.style.backgroundColor = "black";
}

function createFirstGrid() {
    container.style.height = "540px";
    container.style.width = "540px"
    container.style["background-color"] = "grey";

    let gridsPerLine = 48;
    let sizeOfGrids = 540/gridsPerLine;
    let numberOfGrids = gridsPerLine*gridsPerLine;
    for (let i = 0; i < numberOfGrids; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grids");
        grid.style.height = `${sizeOfGrids}px`;
        grid.style.width = `${sizeOfGrids}px`;
        grid.addEventListener("mouseover", gridFunc);
        container.appendChild(grid);
    }
};

createFirstGrid();