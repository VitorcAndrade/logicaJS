//Funções

function nomeDaFuncao() {
  //bloco de execução
}

// escopo global (soltos no arquivo)
const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));
soma();

// função sem parâmetro
function soma() {
  if (typeof num1 != "number" || isNaN(num2)) {
    alert("Digite apenas números");
    return;
  }
  alert(`O resultado da soma é igual a  ${num1 + num2}`);
}

//Execução da função

//função com retorno
function subtracao() {
  console.log("Entrei na função de subtração");
  return `O resultado da subtração é igual a  ${num1 - num2}`;
}

console.log(subtracao());

//função com parâmetro e com retorno

function multiplicacao(numero1, numero2) {
  return `O resultado da multiplicação é igual a  ${numero1 * numero2}`;
}

console.log(multiplicacao(num1, num2));
console.log(multiplicacao(100, 30));

//arrow function (função de seta) - função anônima, função reduzida
// chamar a arrow function antes de declarar dá erro: console.log(divisao(num1, num2))

const divisao = (banana, cachorro) => {
  // const operacao = banana / cachorro
  return `O resultado da divisão é igual a  ${(banana / cachorro).toFixed(2)}`;
};

console.log(divisao(num1, num2));

//hoisting - function pode ser lido mesmo que a execução seja feita antes da declaração
//arrow function não aceita hoisting (const precisa ser inicializado antes)

//função de callback

function saudacao() {
  console.log("Bom dia!");
}

function falar() {
  saudacao(); //callback
}

falar();
