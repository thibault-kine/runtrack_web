document.addEventListener('DOMContentLoaded', () => {

function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        return null;
    }

    return a + b;
}

const getLength = (str) => {
    if(str === "") {
        return null;
    }

    return str.length;
}

})