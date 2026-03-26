const containerDiv = document.querySelector("#container");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");

drawGrid(12);
const sqrDiv = document.querySelectorAll(".square-divs"); // select the divs for grid

let mode = "erase";

startBtn.addEventListener("click", () => mode = "draw");
eraser.addEventListener("click",() => mode = "erase");

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
}