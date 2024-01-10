const input = document.querySelector("#input")
const addBtn = document.querySelector("#addBtn")
const container = document.querySelector("#container")
const array = []
let inputValue = input.value

const reset = () => {
    container.innerHTML = ""
}


const list = (el) => {
    el.forEach((listElements, index) => {
        const div = document.createElement("div")
        // div.class = 
        let inputCheckbox = document.createElement("input")
        inputCheckbox.type = 'checkbox'
        inputCheckbox.id = `checkbox-${listElements.title}` //Hier kommt noch das Problem auf, dass ich durch das resetten der innerHTML immer noch einmal für alle Elemente eine leere Id erhalte
        console.log(inputCheckbox);
        const label = document.createElement("label")
        label.for = `checkbox-${listElements.title}`
        const button = document.createElement("button")
        button.id = `button-${listElements.title}`
        button.textContent = 'x'
        

        label.textContent = listElements.title
        container.appendChild(div)
        div.appendChild(inputCheckbox)
        div.appendChild(label)
        div.appendChild(button)

        input.value = ""
        
        inputCheckbox.addEventListener("change", () => {
            if (inputCheckbox.checked) {
                label.style.textDecoration = 'line-through'
                listElements.done = true
            } else {
                label.style.textDecoration = 'none'
            }
        })

        document.querySelector(`#button-${listElements.title}`).addEventListener("click", () => {
            if (inputCheckbox.checked) {
                div.remove()
                array.splice(index, 1)
                console.log(array);
                console.log(inputValue);
            } else {
                alert ("Are you sure you've finished this task?")
            }
        })

    })
    console.log(array);
}   

const arrayPush = () => {
    reset()
    let toDoArray = {
        title: input.value,
        done: false
    }
    array.push(toDoArray)
    list(array)
}

addBtn.addEventListener("click", arrayPush)