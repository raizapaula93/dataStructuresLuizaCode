// //Inserindo um elemento no final do array push
// let numbers=[0,1,2,3,4,5,6,7,8,9]

// numbers[numbers.length] = 10;
// numbers.push(11)
// numbers.push(12,13)

// //console.log(numbers.length)//length ´w número de elementos, e não índice


// // let pulo = ['a','b','c','d','e']

// Array.prototype.insertFirstPosition = function(value) { //na classe pai Array, pelo método prototype, eu coloco a função insertFirstPosition
//     for (let i = this.length; i >= 0; i--) {//i tem o tamanho do número de elementos, ou seja, ele cria 15 posições
//     this[i] = this[i - 1];//o que está na posição 14, vai pra posição 15, qaundo eu passo o this e não o objetos atual
//     }
//     this[0] = value;
//     };
//     numbers.insertFirstPosition(-1);//unshift


// // Array.prototype.insertFirstPosition = function(value) {//na classe pai Array, pelo método prototype, eu coloco a função insertFirstPosition
// //         for (let i = this.length; i >= 0; i--) {//i tem o tamanho do número de elementos, ou seja, ele cria 15 posições
// //         this[i] = this[i - 1];//o que está na posição 14, vai pra posição 15, qaundo eu passo o this e não o objetos atuAL
// //         }//o último elemento da direita vai dar undefined(posição 0 recebe elemento da posição -1, q não é possível de ocorrer por causa da restrição)
// //         this[0] = value;//na posição 0, q está indefinida, eu coloco o valor -1
// //         };
// //         numbers.insertFirstPosition(-1);
//         numbers.unshift(-2)
//     console.log(numbers)

// Array.prototype.removeFirstPosition = function(value) { //na classe pai Array, pelo método prototype, eu coloco a função insertFirstPosition
//         for (let i = 0; i < numbers.length; i++) {//i inicia em 0 e fica menor até o último termo do tamanho atual do vetor
//         this[i] = this[i + 1];//o que está na posição 0, 
//         }
        
//         };
//         numbers.removeFirstPosition();//shift
    
    
//     // Array.prototype.insertFirstPosition = function(value) {//na classe pai Array, pelo método prototype, eu coloco a função insertFirstPosition
//     //         for (let i = this.length; i >= 0; i--) {//i tem o tamanho do número de elementos, ou seja, ele cria 15 posições
//     //         this[i] = this[i - 1];//o que está na posição 14, vai pra posição 15, qaundo eu passo o this e não o objetos atuAL
//     //         }//o último elemento da direita vai dar undefined(posição 0 recebe elemento da posição -1, q não é possível de ocorrer por causa da restrição)
//     //         this[0] = value;//na posição 0, q está indefinida, eu coloco o valor -1
//     //         };
//     //         numbers.insertFirstPosition(-1);
//             numbers.unshift(-2)
//         console.log(numbers)    
// /-----------------------------------------------------------------------------------------------------------------------

// //concat
// const zero = 0;
// const positiveNumbers = [1, 2, 3];
// const negativeNumbers = [-3, -2, -1];
// let numbers = negativeNumbers.concat(zero, positiveNumbers);
// //Os arrays serão concatenados no array especificado na ordem em
// //que os argumentos forem passados para o método.

// //every e some
// function isEven(x) {
//     // devolve true se x for múltiplo de 2.
//     console.log(x);
//     return x % 2 === 0 ? true : false;
//     }

//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//     //return (x % 2 == 0) ? true : false também pode ser representado por return
//     //(x % 2 == 0).


// //mais elegante    
// function isEven(x) {
//         // devolve true se x for múltiplo de 2.
//         console.log(x);
//         return (x % 2 == 0
//         }
    
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// //arrowFunction        
// const isEven = x => x % 2 === 0;
// //itera pelos elementos do array até que a função devolva false
// console.log(numbers.every(isEven));//só executou 1 vez e já pegou o elemento falso
// console.log(numbers.some(isEven);//executa até pegar o true
// //some

numbers.forEach(x => console.log(x % 2 === 0));
