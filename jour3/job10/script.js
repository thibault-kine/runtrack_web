document.addEventListener("DOMContentLoaded", () => {

let array = [ 1, 2, 3, 4, 5 ]
array = array.map(i => i * 2).filter(i => i % 2 == 0).reduce((acc, curr) => acc + curr)

console.log(array)

})