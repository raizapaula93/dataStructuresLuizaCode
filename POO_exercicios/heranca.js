/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

 class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    
    }

    verificaNacionalidade(nacionalidade) {
        if (nacionalidade != 'Brasileira') {
          return 'Estrangeiro';
        } else {
          return 'Brasileira';//como acessar aqui sem getter/setters?
        }
      }

    verificaMaioridade(idade) {
      if (idade < 18) {
        console.log('esta pessoa é menor de idade');
      } else {
        console.log('esta pessoa pode beber');
      }
    }
  }
  
  class Pfisica extends Pessoa {
    constructor(nome, sobrenome, cpf,nacionalidade) {
      super(nome, sobrenome); 
      this.cpf = cpf;
    }
  
    tirarCpf() {
      if(nacionalidade!='Brasileira'){
          return 'Precisa tirar RNE!'
      }
    }
  }
  
  let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471','Brasileira');
  console.log(pessoa.verificaMaioridade(20));//não consegui identificar o undefined
  console.log(pessoa.verificaNacionalidade('Angolana'));
  
  class PJuridica extends Pessoa {
    constructor(nome, sobrenome, cnpj) {
      super(nome, sobrenome);
      this.cnpj = cnpj;
    }
  }
  
  let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10');
  console.log(empresa);
  
  class PJuridica2 extends Pessoa {
    constructor(nome, sobrenome,endereco) {
      super(nome, sobrenome);
      this.endereco = endereco
    }
  
    setCnpj(cnpj) {
      this.cnpj = cnpj;
    }
  
    getCnpj() {
      return this.cnpj;
    }
    
    verificarSituacaoCadastral(pagou){
        if(pagou != 'sim'){
        return "regular"
        } else {
            return "irregular"
    }
  }}
  
  empresa = new PJuridica2('Magalu', 'LTDA','Rua Maria Prestes,300');
  empresa.setCnpj('121213212/0001-10');
  console.log(empresa.getCnpj());