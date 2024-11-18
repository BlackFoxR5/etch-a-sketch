function gridNumber() {
    let n = prompt ("Enter grid number");
    n = Number(n);
    if (n < 10 || n > 100) {
        return "Enter a value between 10 and 100";
    } else return n;
}

let container = document.querySelector(".container");
let body = document.querySelector("body");

let n = gridNumber();
for (i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.classList.add("gridsquares");
    container.appendChild(cell);
}



