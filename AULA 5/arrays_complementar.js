// Acessando elementos e fazendo uma iteração em um array
// Para acessar uma posição em particular do array, podemos também usar
// colchetes, passando o índice da posição que gostaríamos de acessar. Por
// exemplo, vamos supor que queremos exibir todos os elementos do array
// daysOfWeek. Para isso, precisamos percorrer o array com um laço e exibir
// os elementos, começando do índice 0, assim:


// let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
// 'Friday', 'Saturday'];//arrays daysOfWeek

// for (let i = 0; i < daysOfWeek.length; i++) {//criamos um contador no espaço desse laço, q irá representar os índices do array nesse caso
// console.log(daysOfWeek[i]);//aqui a função irá imprimir o item do array correspondente com o índice da variável contadora
//não deixa de ser uma passagem por referência tb
//pq eu tô pegando o i, q está sendo um alias neste modelo ao ao índice que está dentro do array daysOfweek, e imprimindo cada elemtno q está ocupando este índice


// Vamos analisar outro exemplo. Suponha que queremos descobrir quais são
// os 20 primeiros números da sequência de Fibonacci. Os dois primeiros
// números da sequência são 1 e 2, e cada número subsequente é a soma dos
// dois números anteriores:

// const fibonacci = []; // {1} Na linha {1}, declaramos e criamos um array.
// fibonacci[1] = 1; // {2} dois primeiros números da sequência de fibonacci
// fibonacci[2] = 1; // {3} dois primeiros números da sequÊncia de fibonacci
// for (let i = 3; i <= 6; i++) {
// fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
// }
// console.log(fibonacci)



// for (let i = 1; i < fibonacci.length; i++) { // {5}
// console.log(fibonacci[i]); // {6}
// }


// Em seguida, tudo que temos de fazer é criar do terceiro ao vigésimo
// número da sequência (pois já sabemos quais são os dois primeiros
// números). Para isso, podemos usar um laço e atribuir a soma das duas
// posições anteriores do array à posição atual (linha {4}, começando pelo
// índice 3 do array, até o décimo nono índice).

const fib = [];
fib[6] = 8;
fib[5] = 5;

for(i = 4;i>=1;i--){
    fib[i] = fib[i+2] - fib[i+1]
}

//console.log(fib)//consegui preencher todos os termos, mas ele ainda percorre da esquerda pra direita

for(i=6;i>fib.length-6;i--){
    console.log(fib[i])
}    