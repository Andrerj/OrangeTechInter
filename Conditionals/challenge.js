/* Challenge - Faça um programa para calcular o valor gasto de combustível 
em uma viagem 

Você terá 3 variáveis:

1 - Preço do Etanol
2 - Preço da Gasolina
3 - Tipo do combustível que está no carro
4 - Gasto médio de combustível por km
5 - Distancia em KM da viagem
*/

const etanol = 3.98;
const gasolina = 5.91;
const tipoCombustivel = "Gasolina";
const kmPorLitro = 13.25;
const distViagem = 356.00;
const totalLitros = distViagem / kmPorLitro;

if (tipoCombustivel == "Etanol") 
{
    const totalGasto = totalLitros * etanol;
    console.log("O total gasto na viagem com álcool foi: " + totalGasto.toFixed(2));
} 
else
{
    const totalGasto = totalLitros * gasolina;
    console.log("O total gasto na viagem com gasolina foi: " + totalGasto.toFixed(2));
}