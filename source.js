const container = document.querySelector(".container");
const gridsize = document.querySelector(".size");
const reset = document.querySelector(".reset");

let n = 10;

function createGrid(n) {
    container.textContent = "";

    let squareSize = 500 / n;
    
    //creates grid
    for(let i = 1; i <= n * n; i ++) {
        const gridsquares = document.createElement("div");
        gridsquares.classList.add("gridsquares");
        gridsquares.style.width = `${squareSize}px`;
        gridsquares.style.height = `${squareSize}px`;
        gridsquares.style.flexBasis = `${squareSize}px`;
        gridsquares.style.boxSizing = "border-box";
        container.appendChild(gridsquares);
    };

    //hover effect
    document.querySelectorAll(".gridsquares").forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "hotpink";
        });
    });    
}

createGrid(n); //default grid of size 10

gridsize.addEventListener("click", () => {
    let size = Number(prompt ("Enter grid number"));
    if(!isNaN(size) && size > 0 && size < 100) {
        n = size;
        createGrid(n);
    } else {
        alert("Enter digit between 0 and 50")
    }
    console.log(n);
});

reset.addEventListener("click", () => {
    document.querySelectorAll(".gridsquares").forEach(item => {
        item.style.backgroundColor = "lightblue";
    }); 
});