const NUMBER_OF_BOXES = 256;

const containerDiv = document.querySelector("#container");

for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    const divSqr = document.createElement("div");
    divSqr.classList.add("square-divs");
    containerDiv.appendChild(divSqr);
}

const sqrDiv = document.querySelectorAll(".square-divs");
const startBtn = document.querySelector("#start");
const eraser = document.querySelector("#erase");

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