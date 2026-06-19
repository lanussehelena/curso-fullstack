function aluno(nome, curso) {
    return `${nome} cursa ${curso}`
}

console.log(aluno("Maria", "Sistemas para internet"))


function cidade(idade, cidade) {
    return `Tem ${idade} anos e mora em ${cidade}`
}

console.log(cidade(25, "João Pessoa"))

const notas = [7, 10, 8];
const media = (notas[0] + notas[1] + notas[2]) / 3;

console.log(`Média: ${media}`);

if(media >= 7) {
        console.log("Aprovada!")
} else {
        console.log("Recuperação!")
}

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
        if(media >= 7) {
        console.log("Aprovada!")
    } else {
        console.log("Recuepração!")
    }
    return `A média do(a) aluno(a) foi de ${media.toFixed(2)}`
}

console.log(calcularMedia(7, 10, 8));

const calcularMedia2 = (notas) => (notas[0] + notas[1] + notas[2]) / 3;

const aluna = {
    nome: "Maria",
    curso: "Sistemas para internet",
    notas: [9, 10, 8]
}

function boletim(aluna) {
    const media = calcularMedia2(aluna.notas);
    return `Nome: ${aluna.nome}, Curso: ${aluna.curso}, Média: ${media}`
}

console.log(boletim(aluna));