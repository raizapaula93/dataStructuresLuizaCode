//Função hash - mapeamento de dados grandes em dados de tamanho menor
//json - Javascript Object Notation

let pessoa = {
    "nome": "Luiza do Magalu",
    "idade": 22,
    "empresa": "Magazine Luiza"

}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.empresa)

pessoa["idade"] = 26

console.log(pessoa.idade)
console.log(pessoa)
