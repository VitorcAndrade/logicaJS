//eslint - é uma biblioteca que trabalha com regras (estudo extra)


//Tipos de dados 
"String"
'String'
"Texto 'outro'"

10 //Number
12.5 //Number
NaN //Number

//método que verifica qual o tipo de dado primitivo
typeof("30.5") //output: String

//tipo boolean
true
false

//undefined: é um dado válido porém sem valor definido
//null: nulo


//variáveis JS
const nome = "Zenith"
console.log(nome)

//const nome = "Nayara"
//Erro: não é possível declarar constante mais de 1x

//Declaração - é quando determinamos o tipo de variável
//Atribuição - é o que vem após o sinal de "=" (recebe)

const idade = 31

let profissao //Declaração da variável sem atribuir valor 

//Reatribuindo valor:
profissao = "Desenvolvedor"

// var //depreciado - não se usa mais pois permite redeclaração e reatribuição, podendo gerar erro no código.



//função

//() -> parâmetro da função caso necessário
//{} -> dentro das chaves tem o que a função irá executar

function nomeFuncao () {
  //bloco de construção
}

//Formas de escrita de texto composto
// camelCase - declaração de variaveis, funções..
// snake_case - usado mais no banco de dados 
// PascalCase - usado na declaração de componente de React

//Objeto 
let pessoa = {
  nome: "Nayara",
  idade: 31,
  profissao: "Desenvolvedora"
}

//Array - lista

let frutas = ["Banana", "Maçã", "Uva"]

//Array de objeto
let produtos = [
  {
    id: 1,
    nome: "blusa",
    genero: "masculino",
    marca: "nike",
    valor: 199.99,
  },
  {
    id: 2,
    nome: "blusa",
    genero: "masculino",
    marca: "adidas",
    valor: 199.99,
  },
  {
    id: 3,
    nome: "blusa",
    genero: "masculino",
    marca: "fila",
    valor: 199.99,
  }
]


//template string - possibilidade de trazer um texto com js

const mostrarProduto1 = `o valor do produto ${produtos[0].nome} é ${produtos[0].valor}`
console.log(mostrarProduto1)

//concatenação

const mostrarProduto2 = "o valor do produto " + produtos[0].nome + " "+ "é" + " " + produtos[0].valor
console.log(mostrarProduto2)

let subtracao = "100" - 5
console.log(subtracao)

let soma = 100 + "5"
console.log(soma)

//Conversão 
Number("120")  //output: 120
parseInt("3.24") // output: 3
parseFloat("2.33")  //output: 2.33
String(20)  //output: "20"
// subtracao.toFixed(2)  //output: 1005.00
// pessoa.nome.toUpperCase() // output: "NAYARA" 
// pessoa.nome.toLowerCase() // output: "nayara"

//Métodos de saída
console.log("Registra uma informação no console do navegador")
alert("Estou mostrando uma informação para o usuário")

//Método de entrada
const nomeCompleto = prompt("Digite seu nome completo")
const notificacoes = confirm("Aceita receber notificações?")


// -----------------
alert(nomeCompleto)

//Operadores

//Operadores aritméticos
5 + 5            //10
10 + Number("5") // 15
3 - 2            //1
3 * 2            //6
10 / 2           //5
10++             //11
2--              //1 

//Operadores atribuição
2 += 2           //4
10 -= 2          //8
10 *= 2          //20
10 /= 10         //1

//Operadores de comparação (output sempre booleano)
2 == "2"         //true  - igual em valor
2 === "2"        //false - igual em valor e tipo
2 != "2"         //false - diferente em valor
2 !== "2"        //true - diferente em valor e tipo
5 > 2            //true
10 < 1           //false
5 >= 5           //true
13 <= 15         //true

//Operadores lógicos (output sempre booleano)

true && true     //true |   AND - as duas operações verdadeiras
false || true    //true |   OR - apenas uma precisa ser verdadeira
!false           //true |   negação - oposto do tipo natural
!!true           //true |   dupla negação - mostra o valor natural da expressão


