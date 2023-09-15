document.addEventListener('DOMContentLoaded', () => {

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const display = document.getElementById('val-display');


console.log(localStorage)

if(localStorage.length !== 0) {
    display.innerText = "Valeur entrée: " + localStorage.getItem('valeur')
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value !== "") {
        localStorage.setItem('valeur', input.value);
    }
})

})