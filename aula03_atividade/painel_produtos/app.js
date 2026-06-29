const titulo = document.querySelector("#titulo");
const lista = document.querySelector("#lista");
const botao = document.querySelector("#adicionar");

titulo.textContent = "Painel de produtos 🛒";
titulo.style.color = "teal";

botao.addEventListener("click", () => {
    const item = document.createElement("li");
    const nome = document.querySelector("#nome");
    item.textContent = nome.value;
    lista.appendChild(item);
    nome.value = "";
});

const produtos = [
    {
        id: 1,
        nome: "Laranja",
        preco: 12

    },
    {
        id: 2,
        nome: "pera",
        preco: 21

    },
    {
        id: 3,
        nome: "maçã",
        preco: 13

    },
    {
        id: 4,
        nome: "uva",
        preco: 10
    }
]

produtos.forEach((produto) => {
    const item = document.createElement("li");
    item.textContent = `${produto.nome} - R$ ${produto.preco} kg`;
    lista.appendChild(item);
})