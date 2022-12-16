const editor = document.querySelector(".wrapper")
let line = document.querySelectorAll(".line")

editor.addEventListener("keydown", e => {
    if (e.target.className = "line") {
        let content = e.target.innerHTML
        let prevLine = e.target.previousElementSibling
        let nextLine = e.target.nextElementSibling

        console.log(content)

        e.target.addEventListener("selectstart", e => {
            console.log("Selection")
        })
        // const lines = content.split(/\r?\n/)

        if (e.key === "Tab") {

            e.target.previousElementSibling.focus()
            // e.target.value = "    " + content
        }

        if (e.key === "Enter") {
            const newLine = document.createElement("p")
            newLine.className = "line"
            newLine.setAttribute("contenteditable", "")

            editor.insertBefore(newLine, nextLine)
            e.target.nextElementSibling.focus()
        }

        if (e.key === "Backspace") {
            if (content == "<br>") {
                if (e.target.previousElementSibling !== null) {
                    e.target.previousElementSibling.focus()
                    e.target.remove()
                }
            }
        }
    }
})