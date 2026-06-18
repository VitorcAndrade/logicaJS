const num1 = Number(prompt("Digite um numero"))
const num2 = Number(prompt("Digite outro numero"))
function soma () {
    if(typeof(num1) !== "number" || isNaN(num2)) {
        alert("Digite apenas numeros")
        return
    }
    alert(`o resultado da soma é igual a ${num1 + num2}`)

}
soma()

function subtracao() {
    console.log("Entrei na função de subtração")
    return `o resultado da subtração é igual a ${num1 - num2}`
}

console.log(subtracao())

function multiplicaçao(numero1, numero2) {
    return `o resultado da subtração é igual a ${numero1 - numero2}`
    
}

console.log(multiplicaçao(num1, num2))
console.log(multiplicaçao(100, 30))

const divisao = (banana, cachorro) => {
    const operaçao = banana / cachorro
    return `o resultado da divisao é igual a ${(banana / cachorro).toFixed(2)}`


}

function saudaçao () {
    console.log("Bom dia!")
}

function fala () {
    console.log(saudaçao)

}