//variables and declarations

const changeGrid=document.querySelector("#change-grid")
changeGrid.addEventListener("click", () => {
    let size = prompt("Teste botão");
    createCanvas(size);
})

const display = document.querySelector("#display")
function createCanvas(canvasSize){  
    const newCanvas = document.createElement("div");
    newCanvas.classList.add("canvas")
    display.replaceChildren(newCanvas)
    let minWidth = 768/canvasSize;
    canvasSize = canvasSize**2;
    for(i=0;i<canvasSize;i++){
        const square=document.createElement("div");
        square.style.minWidth=`${minWidth}px`;
        square.classList.add("square");
        newCanvas.appendChild(square);
    }
}

createCanvas(16);

function changeBackgroundColor(event) {
    const target = event.target;
    if (target.classList.contains("square")) {
        target.style.backgroundColor = "black";
    }
}

document.addEventListener("mouseover", changeBackgroundColor);
document.addEventListener("mouseout", event => {
    const target = event.target;
    if (target.classList.contains("square")) {
        target.style.backgroundColor = "";
    }
});

document.addEventListener("mousedown", event => {
    const target = event.target;
    if (target.classList.contains("square")){
        target.classList.remove("square");
        target.classList.add("painted");
        target.style.backgroundColor = randomColor();
    }
}
)

function randomColor(){   
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

const maxClicks = 10;

function darkenBackgroundColor(event) {
    const target = event.target;
    if (target.classList.contains("painted")) {
        const currentClicks = parseInt(target.dataset.clicks) || 0;

        if (currentClicks < maxClicks) {
            const currentColor = getComputedStyle(target).backgroundColor;
            const [r, g, b] = currentColor.match(/\d+/g); // Extrai os componentes de cor
            const newR = Math.floor(r * 0.9);
            const newG = Math.floor(g * 0.9);
            const newB = Math.floor(b * 0.9);
            target.style.backgroundColor = `rgb(${newR},${newG},${newB})`;
            
            target.dataset.clicks = currentClicks + 1;
        } else {
            target.style.backgroundColor = "black";
            target.removeEventListener("click", darkenBackgroundColor);
        }
    }
}

const paintedElements = document.querySelectorAll(".painted");
paintedElements.forEach(element => {
    element.style.backgroundColor = randomColor(); // Defina a cor desejada aqui
});

document.addEventListener("click", darkenBackgroundColor);