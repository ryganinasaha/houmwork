const container = document.querySelector('.container')
const blocks = container.querySelectorAll(".block")

container.addEventListener("click", (event) => {
    const target = event.target

    const isBlockel = target.classList.contains("block")

    if (!isBlockel) {
        
        retern
    }

    for (let i = 0; i < blocks.length; i++){
        blocks[i].classList.remove("red")
    }

    target.classList.toggle("red")
})



/*
основное решение
 
const perent = target.parentElement
    const blocks = perent.querySelectorAll(".block")

    for (let i = 0; i < blocks.length; i++){
        blocks[i].classList.remove("red")
    }

    target.classList.toggle("red")
*/