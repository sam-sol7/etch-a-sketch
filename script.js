const container = document.getElementById("canvas-container");
const resetButton = document.getElementById("reset-button");

let gridFunc = function () {
    this.style.backgroundColor = "black";
}

function createFirstGrid() {
    container.style.height = "540px";
    container.style.width = "540px";
    container.style["background-color"] = "grey";

    let gridsPerLine = 48;
    let sizeOfGrids = 540/gridsPerLine;
    let numberOfGrids = gridsPerLine ** 2;
    for (let i = 0; i < numberOfGrids; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grids");
        grid.style.height = `${sizeOfGrids}px`;
        grid.style.width = `${sizeOfGrids}px`;
        grid.addEventListener("mouseover", gridFunc);
        container.appendChild(grid);
    }
};

function createNewGrid() {
    let x = window.prompt("Insert the width you would like for the new grid!");
    while (x >= 90) {
        x = window.prompt("Insert a number lower than 90!");
    }
    let gridsPerLine = x;
    let sizeOfGrids = 540/gridsPerLine;
    let numberOfGrids = gridsPerLine ** 2;
    for (let i = 0; i < numberOfGrids; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grids");
        grid.style.height = `${sizeOfGrids}px`;
        grid.style.width = `${sizeOfGrids}px`;
        grid.addEventListener("mouseover", gridFunc);
        container.appendChild(grid);
    }
};

resetButton.addEventListener("click", () => {
    let allGrids = document.querySelectorAll(".grids");
    for (i = 0; i < allGrids.length; i++) {
        container.removeChild(allGrids[i]);
    }
    createNewGrid();
});

createFirstGrid();