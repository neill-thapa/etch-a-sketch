const defaultGridSize = 12;
const containerDiv = document.querySelector("#container");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");
const reset = document.querySelector("#reset");
const gridSizeBtn = document.querySelector("#sizeGrid");
const input = document.querySelector("input");
const errorMessage = document.querySelector("#error-message");
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

// allow enter key to generate the grid
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        gridSizeBtn.click();
    }
})

gridSizeBtn.addEventListener("click", () => { // dynamic grid
    let value = input.value.trim();

    if (value === "") {
        errorMessage.textContent = "Please enter a grid size";
        return;
    }

    let size = parseInt(value);

    if (isNaN(size) || size <= 0 || size > 100) {
        errorMessage.textContent = "Enter a valid number between 1 and 100!";
        return;
    }

    errorMessage.textContent = "";
    drawGrid(size);
    input.value = "";
    input.focus();
});

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