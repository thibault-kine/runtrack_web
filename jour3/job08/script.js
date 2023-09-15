document.addEventListener('DOMContentLoaded', () => {

const url = "https://reseau-mirabel.info/api/";
const infoDisplay = document.getElementById('info-display');

const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}   

fetch(url + "revues/3221", init)
.then(res => res.json())
.then(data => {
    console.log(data)
    infoDisplay.innerHTML += "<h2>Données de la revue :</h2>"
    data.titres.forEach(e => {
        infoDisplay.innerHTML += 
        `<ul>
        <li><b>identifiant:</b> ${e.id}</li>
        <li><b>titre:</b> ${e.prefixe !== null ? e.prefixe + e.titre : e.titre}</li>
        <li><b>début de parution:</b> ${e.datedebut}</li>
        </ul>`
    });
})
.catch((err) => console.log(err))

})