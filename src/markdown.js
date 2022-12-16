// No declare "editor". Already declared in editor.js
const text = document.querySelectorAll(".text")

const toMarkup = element => {
    const chars = element.value

    if (chars.startsWith("# ")) {
        element.classList.contains("h1") ?
            null : element.classList.add("h1")
    } else element.classList.remove("h1")

    if (chars.startsWith("## ")) {
        element.classList.contains("h2") ?
            null : element.classList.add("h2")
    } else element.classList.remove("h2")

    if (chars.startsWith("### ")) {
        element.classList.contains("h3") ?
            null : element.classList.add("h3")
    } else element.classList.remove("h3")
}


text.forEach(element => {
    toMarkup(element)
})




editor.addEventListener("keyup", element => {
    let content = element.target.value
    let target = element.target

    toMarkup(target)

    if (target.classList.contains("text")) {
        console.log(content)

        // if (content.startsWith("# ")) {
        //     target.classList.contains("h1") ?
        //         null : target.classList.add("h1")
        // } else target.classList.remove("h1")
    }
})

