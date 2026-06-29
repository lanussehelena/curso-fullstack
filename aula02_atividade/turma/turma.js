const turma = [
    {
        nome: "José",
        curso: "Contabilidade",
        notas: [10, 9, 7]
    },
    {
        nome: "Silvia",
        curso: "Fisioterapia",
        notas: [9, 10, 8]},
    {
        nome: "Rayssa",
        curso: "Matemática",
        notas: [10, 10, 9]
    }
]

const calcularMedia = (notas) => (notas[0] + notas[1] + notas[2]) / 3;

function boletim(aluna) {
    const media = calcularMedia(aluna.notas);
    return `Nome: ${aluna.nome}, Curso: ${aluna.curso}, Média: ${media.toFixed(2)}`
}

turma.forEach(aluno => {
    console.log(boletim(aluno))
});