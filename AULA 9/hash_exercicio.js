/**
 * implementem hash usando outra funcao hash da criatividade de vcs
 */

 let arrayHash = new Array();//instanciando arrayHash como objeto array - 1
 // Luiza, Maria, Luna, Gabi
 let words = ["Luiza", "Luna", "Bia", "Luana"];//declarando um array chamado words  - 2
 
 
 //console.log("Criando o hash");
 
 // funcao de espalhamento para array
 function hash(word){//passo uma palavra para entrar no array - 3
       hashmap = word.length;//o tamanho da palavra passada eu jogo dentro de "hashmap" - 4
 
       // colisao
       while(arrayHash[hashmap] !== undefined){//enquanto o tamanho da palavra passada dentro de arrayhash for diferente de indefinido
             hashmap++;//o hashmap aumenta = tamanho da palavra aumenta??
       }
 
       //console.log("hashmap:"+hashmap)
       return hashmap; //o par chave valor
 }
 
 
 words.forEach(function(value, index, list){//dentro da função forEach, no qual eu passo 3 parâmetros
       //console.log("");
       //console.log(value, index);
       let index_hash = hash(value);//a variável index_hash recebeu a função hash(que recebeu uma palavra como parâmetro)
       arrayHash[index_hash] = value;//dentro de arrayHash
       //console.log(arrayHash);
 })
 
 // [, , , Bia,Luna, Luiza, Luana]
 console.log("Encontrando elemento atraves do hash \n\n");
 
 
 // funcao de busca de um index
 function findHash(word){//recebe uma palavra de parâmetro
       hashmap = word.length;//idem lá em cima
 
       //colisao
       while(arrayHash[hashmap] !== word){//
             hashmap++;
       }
       console.log(`hashmap encontrado: ${word} -> ${hashmap}`);
       return hashmap;
 }
 
 
 // console.log(findHash("Luana"));
 // console.log(arrayHash[6]);
 
 words.forEach(function(value, index, list){
       index = findHash(value);
       console.log(arrayHash[index]);
 })

 console.log(words);