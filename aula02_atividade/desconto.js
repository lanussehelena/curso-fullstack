function aplicarDesconto(valor, percentualDesconto) {
    let valorFinal = valor - (valor * (percentualDesconto / 100));
    return `A compra de R$${valor} com o desconto de ${percentualDesconto}% ficou com o valor final de R$${valorFinal}.`
}

console.log(aplicarDesconto(47, 5));

const aplicandoDesconto = (valor, percentualDesconto) => {
    let valorFinal = valor - (valor * (percentualDesconto / 100));
    return `A compra de R$${valor} com o desconto de ${percentualDesconto}% ficou com o valor final de R$${valorFinal}.`
}

console.log(aplicandoDesconto(73, 10));