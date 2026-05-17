function randomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function generateColors() {

    let container = document.getElementById("colors");

    container.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        let color = randomColor();

        let box = document.createElement("div");

        box.classList.add("colorBox");

        box.style.backgroundColor = color;

        box.innerText = color;

        container.appendChild(box);
    }
}