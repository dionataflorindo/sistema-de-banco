//classe mãe
function Conta(agencia,conta,saldo){
this.agencia = agencia ;
this.conta = conta;
this.saldo = saldo ;

}

Conta.prototype.sacar = function (valor){
    if(valor > this.saldo){
    console.log(`Saldo insuficiente. Saldo: R$: ${this.saldo}`)
    return;
    }
    this.saldo -= valor;
    this.verSaldo()
};
Conta.prototype.depositar = function (valor){
    this.saldo +=valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c:${this.agencia}/${this.conta} | ` + `Saldo: R$ ${this.saldo.toFixed(2)}`
    
    );
};


function CC(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
    this.saldo = saldo
    this.verSaldo();
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor){
    if(valor > (this.saldo + this.limite)){
    console.log(`Operação negada. Seu limite é de R$: ${this.limite}`)
    return;
    }
    this.saldo -= valor;
    this.verSaldo()

};

CC.prototype.depositar = function (valor){
    this.saldo +=valor;
    this.verSaldo();
};

CC.prototype.verSaldo = function (){
    console.log(`Seu saldo é de ${this.saldo}`)

};

const cc = new CC(2898, '07976-5', 100, 100)
const contap = new Conta(2898, '07976-5', 1500)

cc.sacar(10)
cc.sacar(30)

console.log(cc)