document.addEventListener('DOMContentLoaded', () => {

const btn = document.getElementById('btn');
const colors = ['red', 'blue', 'cyan', 'yellow', 'green']

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})

})