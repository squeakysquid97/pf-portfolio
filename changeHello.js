const hellos = ["Hello", "Hola", "Salve", "Guten Tag","Zdravstvuyte", "Olá"]

const textToChange = document.getElementById('hello')

let counter = 0

function changeText() {
    textToChange.textContent = hellos[counter]
    counter = (counter + 1 ) % hellos.length
}

setInterval(changeText, 5000);