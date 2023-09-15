document.addEventListener('DOMContentLoaded', () => {

const me = {
    fname: "Thibault",
    lname: "Kine",
    age: 21,
    birthday: "21/02",
    birthplace: "Aurillac",
    city: "Gardanne",
    studiesAt: "Marseille",
    likes: ["les pizzas", " les jeux vidéos", "coder"],
    dislikes: ["les joueurs mono-black"]
};

const displayBio = document.getElementById('bio');

displayBio.innerText = 
`${me.fname} ${me.lname} a ${me.age} ans. Il est né le ${me.birthday} à ${me.birthplace}.
Il réside à ${me.city} et étudie à ${me.studiesAt}.
Il aime ${me.likes.join(', ')} et n'aime pas ${me.dislikes.join(', ')}.
`

})