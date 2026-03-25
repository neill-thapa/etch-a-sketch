const NUMBER_OF_BOXES = 256;

const containerDiv = document.querySelector("#container");

for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    const divSqr = document.createElement("div");
    divSqr.setAttribute("id", "square-divs");
    containerDiv.appendChild(divSqr);
}

const sqrDiv = document.querySelectorAll("#square-divs");

sqrDiv.forEach(square => {
    square.addEventListener("mouseenter", function(event) {
    console.log("Mouse is inside the div!");
    event.target.style.backgroundColor = "black";
});
});
