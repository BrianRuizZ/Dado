// Variables

let num = document.querySelector('.number');
let boton = document.querySelector('.boton');
let numeros = document.querySelector('.numeros');
let dado = document.querySelector('.dado')
let arrayNums = []

// Funciones

function random() {
    let numRandom = Math.random()*6 + 1
    resultado = Math.floor(numRandom)
    num.innerText = resultado;
    arrayNums.push(resultado)
    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums.length >= 2) {
            numeros.innerText = "The last number was: " + arrayNums[i-1];
        }
    }
}

boton.addEventListener('click', () => {
    random();
    boton.style.display = 'none';
    dado.classList.add('dadoActivo')
    setTimeout(()=>{
        dado.classList.remove('dadoActivo')
        boton.style.display = 'flex';
    },500);
});