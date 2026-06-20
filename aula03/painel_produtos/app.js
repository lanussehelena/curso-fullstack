const titulo = document.querySelector('#titulo');
titulo.textContent = "Painel de produtos 🛒";
titulo.style.color = "orange";

const lista = document.querySelector("#lista");
const botao = document.querySelector("#add");

botao.addEventListener("click", () => {
    const item = document.createElement("li");
    const campo = document.querySelector("#nomeProduto");
    item.textContent = campo.value;
    lista.appendChild(item);
    campo.value = "";
})

const produtos = [
    {
        id: 1,
        nome: "Teclado mecânico",
        preco: 320
    }, 
    {
        id: 2,
        nome: "Monitor 27''",
        preco: 1450
    }, 
    {
        id: 3,
        nome: "Cadeira gamer",
        preco: 980
    }
];

produtos.forEach((produto) => {
    const item = document.createElement("li");
    item.textContent = `${produto.nome} - R$${produto.preco}`;
    lista.appendChild(item);
})