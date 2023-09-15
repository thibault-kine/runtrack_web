document.addEventListener("DOMContentLoaded", () => {

const calcBtn = document.getElementById('calc-btn');
const stringBtn = document.getElementById('string-btn');


calcBtn.addEventListener('click', () => {
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    
    let calcRes = document.getElementById('calc-res');

    calcRes.innerText = 
    `Résultats :
    ${n1.value} + ${n2.value} = ${parseInt(n1.value) + parseInt(n2.value)}
    ${n1.value} - ${n2.value} = ${parseInt(n1.value) - parseInt(n2.value)}
    ${n1.value} * ${n2.value} = ${parseInt(n1.value) * parseInt(n2.value)}
    ${n1.value} / ${n2.value} = ${parseInt(n1.value) / parseInt(n2.value)}
    `;
})

stringBtn.addEventListener('click', () => {
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');

    let stringRes = document.getElementById('string-res');

    if(s1.value === "" || s2.value === "") {
        stringRes.innerText = 'Veuillez entrer une chaîne non-vide.';
    }
    else {
        stringRes.innerText = `Chaînes concaténées : ${s1.value + s2.value}`;
    }
})

});