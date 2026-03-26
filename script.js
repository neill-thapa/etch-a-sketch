const containerDiv = document.querySelector("#container");
const sqrDiv = document.querySelectorAll(".square-divs");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");

drawGrid(12);

let mode = "erase";

sqrDiv.forEach(square => {
    square.addEventListener("mouseenter", function(event) {
        if (mode === "draw") {
            event.target.style.backgroundColor = "black";
        }
        else if (mode === "erase") {
            event.target.style.backgroundColor = "white";
        }
    });
});

startBtn.addEventListener("click", () => mode = "draw");
eraser.addEventListener("click",() => mode = "erase");

function drawGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const divSqr = document.createElement("div");
        divSqr.classList.add("square-divs");
        containerDiv.appendChild(divSqr);
    }
}