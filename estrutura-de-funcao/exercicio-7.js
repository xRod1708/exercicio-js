/*
    7 - Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
*/

function valorPagamento(n1, n2) {
    let pagamento = parseInt(n1)
    let atraso = parseInt(n2)
    if (n2 === 0) {
        return pagamento
    } else {
        pagamento = parseInt(pagamento + (pagamento * 0.03) + (atraso * 0.1))
        return pagamento
    }
}
console.log(valorPagamento(45, 50))

// Como armazenar os pagamentos(pensei em array)
// Como rodar ate o N1 ser 0 (precisaria de outra funcao)