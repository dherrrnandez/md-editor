const editor = document.querySelector(".wrapper")
let line = document.querySelectorAll(".line")

editor.addEventListener("keydown", e => {
    if (e.target.className = "line") {
        let content = e.target.value
        let prevLine = e.target.previousElementSibling
        let nextLine = e.target.nextElementSibling

        // const lines = content.split(/\r?\n/)

        if (e.key === "Tab") {
            e.target.previousElementSibling.focus()
            e.target.value = "    " + content
        }

        if (e.key === "Enter") {
            if (nextLine == null) {
                const newLine = document.createElement("input")

                newLine.className = "line"
                editor.appendChild(newLine)
                e.target.nextElementSibling.focus()
            } else {
                e.target.nextElementSibling.focus()
            }
        }

        if (e.key === "Backspace") {
            if (content == "") {
                if (prevLine !== null) {
                    prevLine.focus()
                    e.target.remove()
                }
            }
        }
    }
})