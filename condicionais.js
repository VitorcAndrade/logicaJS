//Condicionais

//Se...Se não
// let numero = prompt("Digite um número para saber se é inteiro ou não")

// if (numero.includes(".") && !isNaN(Number(numero))) {
//   console.log(numero)
//   alert("Possui decimal")
// } else if (isNaN(Number(numero))) {
//   alert("Número inválido. Digite apenas números")
// } else {
//   alert("É número inteiro")
// }

//% -> resto

// const verificarNumero = Number(prompt("Digite um número para saber se é ímpar ou par"))

// if (verificarNumero % 2 === 0) {
//   alert("É par")
// } else if (isNaN(verificarNumero)) {
//   alert("Número inválido.")
// } else{
//   alert("É ímpar")
// }

//if sem else
const isModalOpen = false;

if (isModalOpen) {
  console.log("Mostrar modal");
}

// const verificarIdade = Number(prompt("Digite sua idade"))

// if (verificarIdade > 0 && verificarIdade < 12) {
//   alert("É criança")
// } else if (verificarIdade >= 12 && verificarIdade < 18) {
//   alert("É adolescente")
// } else if (verificarIdade >= 18 && verificarIdade < 65) {
//   alert("É adulto")
// } else if (verificarIdade >= 65 && verificarIdade <= 125) {
//   alert("É experiente")
// } else {
//   alert("Idade não é válida")
// }

//switch case (usado em situação de muitas condições)

// const verificarDia = Number(prompt("Digite o número que representa o dia da semana"))

// switch (verificarDia) {
//   case 1:
//     alert("Domingo")
//     break;
//   case 2:
//     alert("Segunda")
//     break;
//   case 3:
//     alert("Terça")
//     break;
//   case 4:
//     alert("Quarta")
//     break;
//   case 5:
//     alert("Quinta")
//     break;
//   case 6:
//     alert("Sexta")
//     break;
//   case 7:
//     alert("Sábado")
//     break;
//   default:
//     alert("Valor inválido")
//     break;
// }

// function calcularMedia () {
//   const nota1 = Number(prompt("Digite a primeira nota"))

//   if (isNaN(nota1)) {
//     alert("Digite uma nota válida")
//     return
//   }
//   const nota2 = Number(prompt("Digite a segunda nota"))
//   if (isNaN(nota2)) {
//     alert("Digite uma nota válida")
//     return
//   }
//   const nota3 = Number(prompt("Digite a terceira nota"))
//   if (isNaN(nota3)) {
//     alert("Digite uma nota válida")
//     return
//   }

//   const media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

//   if (media >= 7) {
//     alert(`Aprovado: ${media}` )
//   } else if (media < 7 && media >= 5) {
//     alert(`Recuperação: ${media}`)
//   } else {
//     alert(`Reprovado: ${media}`)
//   }
// }

// calcularMedia()

// 6. Uma empresa de estacionamento cobra seus clientes da seguinte forma:
//     - ** R$ 5,00 pela primeira hora ** de uso do estacionamento;
//     - ** R$ 2,00 por cada meia hora adicional ** (ou fração de hora).

//     Crie uma ** função chamada ** `calcularEstacionamento(horas)` que: receba como parâmetro o tempo de permanência do carro no estacionamento(em horas), calcule o valor total a ser pago de acordo com as regras acima e retorne o valor final.

//01:30
const inputHora = prompt("Digite as horas que passou no estacionamento");

function calcularEstacionamento(horas) {
  let [hora, minutos] = horas.split(":");
  hora = Number(hora);
  minutos = Number(minutos);
  let horaDecimal = hora + minutos / 60;
  let minutostotal = hora * 60 + minutos;
  let adicional = ((minutostotal - 60) / 30).toFixed();

  console.log(hora);
  console.log(minutos);
  console.log(horaDecimal);
  console.log(minutostotal);
  console.log(adicional);

  let valorFinal;
  if (horaDecimal <= 1) {
    valorFinal = 5;
  } else if (horaDecimal > 1) {
    valorFinal = 5 + adicional * 2;
  }

  alert(`valor total a ser pago: R$ ${valorFinal.toFixed(2)}`);
}

calcularEstacionamento(inputHora);
