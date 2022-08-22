for(let i=0; i<=41;i++){
    const box = document.createElement("div")
    box.classList.add('box')
    document.querySelector(".container").appendChild(box)
}

let button = document.querySelector(".button")
let boxes = document.querySelectorAll(".box")

function randomColor(){
    let chars = "0123456789abcdef"
    let colorLength = 6
    let color = ""

    for(let i=0;i<colorLength;i++){
        var randomColor = Math.floor(Math.random()*chars.length)
        color += chars.substring(randomColor, randomColor+1)
    }

    return "#"+color;
}

function generateColor(){
    boxes.forEach(box =>{
        var newColor = randomColor()
        box.style.backgroundColor = newColor
        box.innerHTML = newColor
    })
}

button.addEventListener("click", () =>{
    generateColor()
})

generateColor()