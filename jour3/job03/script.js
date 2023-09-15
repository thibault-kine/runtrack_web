document.addEventListener('DOMContentLoaded', () => {

const arrayDisplay = document.getElementById('array-display');
const myArray = ['jambon', 'voiture', 'avion', 'soleil', 'cigare'];

myArray.forEach(e => {
    arrayDisplay.innerHTML+= `<li>${e}</li>`
})

})