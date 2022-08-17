const items = document.querySelectorAll(".item")

items.forEach((item) => {
    item.addEventListener("click", ()=>{
        removeActiveClasses()
        item.classList.add("active")
    })
})

function removeActiveClasses(){
    items.forEach((items) => {
        items.classList.remove("active")
    })
}