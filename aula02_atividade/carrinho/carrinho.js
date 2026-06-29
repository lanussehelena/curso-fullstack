const carrinho = [
    {
        nome: "Pão frances",
        preco: 15
    },
    {
        nome: "Quejo coalho",
        preco: 40
    },
    {
        nome: "Café São Brás",
        preco: 15
    }
]


function total(carrinho) {
    let totalCompra = 0;
    carrinho.forEach(item => {
        totalCompra += item.preco
    });
    return `O total do carrinho de compras é de R$${totalCompra}`;
}

console.log(total(carrinho))