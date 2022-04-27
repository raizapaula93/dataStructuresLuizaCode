/**
 * Polimorfismo - Exemplos
 * 
 * Exercicio 1 - Quero que vocês tentem dar novas funcionalidades para a conta poupança.
 */
 class Conta {
    constructor(numero, titular) {
      this.numero = numero;
      this.titular = titular;
      this.saldo = 0; // A MINHA CONTA :(
    }
  
    deposita(valor) {
      // this.saldo = this.saldo + valor;
      this.saldo += valor;
    }
  
    saque(valor) {
      if (this.saldo > 0 && this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        console.log("Saque não é permitido");
      }
    }
  
    getSaldo() {
      return this.saldo;
    }
  }
  
  class ContaCorrente extends Conta {
    constructor(numero, titular) {
      super(numero, titular);
    }
  
    deposita(valor) {
      this.valor += valor - 1;
    }
  }
  
  class ContaPoupanca extends Conta {
     constructor(numero, titular) {
      super(numero, titular);
      this.mesesGuardados = 0
    }

    depositaP(valor){
        this.saldo += valor
    };

    renderSaldo(mesesGuardados) {
        this.saldo += (valor*Math.pow(0.9,this.mesesGuardados));
       
    getSaldo() {//será que dá pra usar recursividade aqui?
            return this.saldo +renderSaldo();
          }     

      }
  
//   let jose = new ContaCorrente(321, 'Jose Jr');
//   console.log('OBJETO', jose);
//   jose.deposita(200);
//   jose.saque(50);
//   jose.deposita(100);
//   console.log(jose.getSaldo());


let maria = new ContaPoupanca (321,'Maria Auxiliadora')
//console.log('OBJETO', maria)//transforma em objeto -par chave/valor
maria.depositaP(1000)
//maria.renderSaldo(2)
console.log(maria)



