const defaultGridSize = 12;
const containerDiv = document.querySelector("#container");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");
const reset = document.querySelector("#reset");
const gridSizeBtn = document.querySelector("#sizeGrid");
let mode = "erase";

drawGrid(defaultGridSize); // default grid

startBtn.addEventListener("click", () => mode = "draw");
eraser.addEventListener("click",() => mode = "erase");

reset.addEventListener("click", () => {
    const sqrDiv = document.querySelectorAll(".square-divs"); // select after grid is drawn to the screen

    sqrDiv.forEach(square => {
        square.style.backgroundColor = "white";
    });
    mode = "erase";
});

gridSizeBtn.addEventListener("click", () => { // dynamic grid
    let size = parseInt(prompt("Enter the grid size (max 100)"));

    if (size === null) {
        return;
    }

    size = parseInt(size);

    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100!");
        return;
    }

    drawGrid(size);
})

function drawGrid(size) {
    containerDiv.innerHTML = "";
    
    const containerSize = containerDiv.clientWidth;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const divSqr = document.createElement("div");
        divSqr.classList.add("square-divs");

        // dynamic resizing of grid squares to fit the fixed canvas
        divSqr.style.width = `${squareSize}px`;
        divSqr.style.height = `${squareSize}px`;

        divSqr.addEventListener("mouseenter", function(event) {
            if (mode === "draw") {
                event.target.style.backgroundColor = "black";
            }
            else if (mode === "erase") {
                event.target.style.backgroundColor = "white";
            }
        })

        containerDiv.appendChild(divSqr);
    }
}