const qntCurtidas = document.querySelector("#placar");
const botao = document.querySelector("#curtir");

let contador = 0

botao.addEventListener("click", () => {
    contador ++;
    qntCurtidas.textContent = `Curtidas: ${contador}`
})