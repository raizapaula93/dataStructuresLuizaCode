//CONTEÚDO DE PASSAGEM POR REFERÊNCIA E PASSAGEM POR VALOR


let a = 5;
let b = a; //passagem por valor -> tipos PRIMITIVOS são passados por valor(uma cópia do valor para cada variável)

a++ //a tem uma cópia de um valor
b--// b fez um cópia do valor de a, então as alterações as variáveis não se alteram

console.log(a, b)

let a = { nome: 'Ana'};
let b = a; //passagem por referência(não é um tipo primitivo, as duas apontam para o mesmo local de memória)

b.nome = 'Gui';//b está referenciado em a, então a alteração de b afeta a
console.log(a)//como está organizado por referÊncia, se eles estão apontando pro mesmo canto, então vai dar 'Gui'

const a = { nome: 'Ana'}//o a não pode apontar pra outro objeto//o valor da referência não muda, mas os atributos podem mudar 
const b = a//o b não pode apontar pra outro objeto, está apontando para a

//a = { nome: 'Jose'}//aqui dá erro porque não posso apontar para outro objeto

function mudar(obj){
    obj.nome = 'Gui'
}

mudar(b)
console.log(a)

let a = 3
//a = { nome: 'Jose'}

function mudar(valor){
    valor++
}

mudar(a)//não vai mudar orque tipos primitivos sempre são passados uma cópia; se fosse um objeto/array/função mudava
console.log(a)//

/////////
let array1 = []//passando um objeto vazio

function preencher_array(valor){ //construindo uma função onde eu passo um valor na hora q eu chamo ela
    array1.push(valor)//dentro da função eu pego esse valor e jogo dentro do objeto

}

preencher_array('b')//chamoa função e passo o parâmetro b
console.log(array1)//o array mudou pq a função paassou a referência onde estava o array

//----------------------------------------------------------------------------


let array2 = {nome:'Carlos'}//criei um objeto que tem um par chave valor
let troca = array2//passei referencia desse objeto em uma variável

function trocar_genero(troca){//passei um variável de referência("um apelido") como referência para uma função
    troca.nome ='Carlinha'//o apelido, que tem um atributo nome(pq tá herdando/polimorfando o atributo de array2, e tá recebendo um outro valor dentro desse atributo)
};

trocar_genero(troca)//passando o alias, pq eu sei que dentro da função qualquer alias q eu passar vai atingir o atributo q eu quero
console.log(troca)//imprimido o objeto pai, eu vi que tive o nome alterado; se chamar o objeto filho tb altera


--------------------------------------------------------------------------------
let variavel_numerica = [0]//criei um objeto vazio

function troca_var (valor){//chamei uma função, onde eu vou passar um valor que será alterado
    valor++//valor q eu pasei vai ganhar +1
    variavel_numerica.push(valor)//esse valor somado vai cair dentro do array lá
};

troca_var(2)//passei um valor que será alterado
console.log(variavel_numerica)//imprimindo o objeto variável numérica