const lista = document.querySelector("#lista");

const produtos = fetch("https://fakestoreapi.com/products")
    .then((resposta) => resposta.json())
    .then((produtos) => {
        produtos.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = `${produto.title} - US$ ${produto.price}`;
        lista.appendChild(item);

        if(produto.price >= 500) {
            item.classList.add("caro");
        }
});
});




