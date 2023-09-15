document.addEventListener('DOMContentLoaded', () => {

const arrayDisplay = document.getElementById('array-display'); 
const myArray = [ 2, 3, 4, 5, 6, 7, 8 ];

// ajout d'un élément au début et à la fin
const newArray = myArray.concat(9);
newArray.unshift(1);

// supprimer le premier élément sans affeter l'original
newArray.reverse().pop() // inverse le tableau et retire l'ancien premier élément
newArray.reverse() // l'inverse à nouveau pour qu'il soit à nouveau dans le bon ordre

arrayDisplay.textContent = `Le dernier élément du tableau est: ${newArray.reverse()[0]}`

})