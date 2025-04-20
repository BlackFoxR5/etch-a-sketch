function gridNumber() {
    let n = prompt ("Enter grid number");
    n = Number(n);
    if (n < 1|| n > 50) {
        return "Enter a value between 1 and 50";
    } else return n;
}

const container = document.querySelector(".container");
let n = gridNumber();

let squareSize = 500 / n;

for(let i = 1; i <= n * n; i ++) {
    const gridsquares = document.createElement("div");
    gridsquares.classList.add("gridsquares");
    gridsquares.style.width = `${squareSize}px`;
    gridsquares.style.height = `${squareSize}px`;
    gridsquares.style.flexBasis = `${squareSize}px`;
    gridsquares.style.boxSizing = "border-box";
    container.appendChild(gridsquares);
};