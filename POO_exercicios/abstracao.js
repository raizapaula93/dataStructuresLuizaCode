// /**
//  * Abstração - Exemplos
//  * Exercicio 1 - Exemplos de abstração no dia a dia, se quiser implementar pode.
//  */
//  class FazerCafe {
//     constructor(quantidade_acucar, quantidade_po) {
//       this.quantidade_acucar = quantidade_acucar;
//       this.quantidade_po = quantidade_po;
//     }
  
//     ferverAgua() {
//       return "Agua está fervida";
//     }
  
//     adicionarAcucar() {
//       return 'Colocou ' + this.quantidade_acucar + 'colheres de açucar';
//     }
  
//     adicionarPo() {
//       return 'Colocou ' + this.quantidade_po + 'colheres de café';
//     }
  
//     coarCafe() {
//       return 'Coou o café';
//     }
  
//     servirCafe() {
//       return 'café pronto!';
//     }
//   }
  
  
//   let cafe = new FazerCafe(6, 3).adicionarAcucar();
//   console.log(cafe);

  //Meu exercício

  class FazerExercicio{
      constructor(tempoDeExercicio,intensidade){//No JS a classe funciona como uma função, então os parâmetros precisam ser passados no construtor
        this.tempoDeExercicio = tempoDeExercicio
        this.instensidade = intensidade
      }

      aquecer() {
          return 'Preparando o corpo para o exercício '
      }
       
      correr() {
        return `Correndo na esteira em ${this.instensidade} intensidade`
    }
      pegarPeso(){
          return `Pegando 10kg no supino`
      }
      
      fazerFlexao(){
        return `Fazendo 12 flexões`
    }

        terminarExercício() {
            return `Treino pago em ${this.tempoDeExercicio} minutos`
       }
    }

    let treino = new FazerExercicio(45,'média')
        console.log(treino.aquecer())
        console.log(treino.correr())
        console.log(treino.fazerFlexao())
        console.log(treino.terminarExercício())
    
    
        
    
  
  
   
