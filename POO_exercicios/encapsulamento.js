/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */
 class Pessoa {
       #idade

    constructor(idade) {
      this.#idade = idade;//eu não consigo  encapsular um parâmetro que eu tenhoq eu passar sem ?
    }
  
    // atribuiIdade(idade) { somente comentado, sem dúvidas
    //   this.#idade = idade;  
    // }
  
    _verificaIdade() {
      if (this.#idade > 18) {
        console.log('Maior de Idade');
      } else {
        console.log('Menor de Idade')
      }
    }

        getAnoDeNascimento(){
        return (2021 - this.#idade)
    }
  }
  
  let pessoa = new Pessoa(15);
  console.log(pessoa._verificaIdade());//o que está dando undefined?
  console.log(pessoa.getAnoDeNascimento())
  
  //SEM Encapsular
  // const idade = 34;
  
  // function _verificaIdade() {
  //   if (idade > 18) {
  //     console.log("Maior de Idade");
  //   } else {
  //     console.log("Menor de Idade");
  //   }
  // }
  // function AtribuiIdade(idade) {
  //   idade = idade;
  // }
  
  // let default_pessoa = _verificaIdade();
  // console.log(default_pessoa);