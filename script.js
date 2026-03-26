const containerDiv = document.querySelector("#container");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");
const reset = document.querySelector("#reset");
let mode = "erase";

let gridSize = drawGrid(12);
const sqrDiv = document.querySelectorAll(".square-divs"); // select after grid is drawn to the screen

startBtn.addEventListener("click", () => mode = "draw");
eraser.addEventListener("click",() => mode = "erase");
reset.addEventListener("click", () => {
    sqrDiv.forEach(square => {
        square.style.backgroundColor = "white";
    });
    mode = "erase";
});

function drawGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const divSqr = document.createElement("div");
        divSqr.classList.add("square-divs");

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

    return size * size;
}