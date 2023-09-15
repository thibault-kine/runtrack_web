document.addEventListener('DOMContentLoaded', () => {

const operation = 8 / 0;

try {
    if(operation === Infinity) throw new Error("Pauvre fou ! On ne peut pas diviser par zéro !")
    else console.log(operation)
}
catch(err) {
    console.log(err)
}

})