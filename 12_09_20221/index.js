const names = [
    { name: "Nik"},
    { name: "Sara"},
    { name: "Fred"},
    { name: "Tom"}
]
const input = document.querySelector(".input")


render(names)

function render(names) {
    const list  = document.querySelector(".list")
    list.innerHTML = ""
    for (let i = 0; i < names.length; i++) {
        list.innerHTML += `
        <li>${names[i].name}</li>
        `
    }
}

input.addEventListener(('keyup'), () => {
    const value = input.value
    
    const newNames = names.filter((item) => {

        return item.name.includes(value)
    })

    render(newNames)
})

