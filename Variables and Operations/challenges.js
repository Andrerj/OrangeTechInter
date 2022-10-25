/* Challenge - Faça um programa para calcular o valor gasto de combustível 
em uma viagem 

Você terá 3 variáveis:

1 - Preço do combustível
2 - Valor médio de gasto do carro
3 - Distância em KM da viagem
*/

const precoCombustivel = 5.01;
let kmPorLitro = 12.45;
const distanciaViagem = 335.00;
let totalLitros = distanciaViagem / kmPorLitro;

let total = totalLitros * precoCombustivel;

console.log("O gasto total será de " + total.toFixed(2) + " reais.\n E quantidade de litros utilizade será de " + totalLitros.toFixed(2));