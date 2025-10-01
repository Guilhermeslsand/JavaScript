//Objetos Javacript (JSON)
//----------- JavaScript Object Notation -----------
//Uma pessoa que se chama João tem 17 anos
//const pessoa = {
//    nome: "João",
//    idade: 17
//}
//Alternativa
//console.log(pessoa['nome'])

//console.log(pessoa.nome)
//console.log(pessoa.idade)

//Uma pessoa que se chama maria tem 21 anos e mora na rua abc numero 200, bairro Vila J.
//const pessoa = {
//    nome: 'Maria',
//    idade: 21,
//    endereco: {
//        logradouro: 'Abc',
//        numero: 200,
//        bairro: 'Vila J'
//    }
//}

//console.log(`Nome: ${pessoa.nome}`) 
//console.log(`idade: ${pessoa.idade}`) 
//console.log(`Logradouro: ${pessoa.endereco.logradouro}`) 
//console.log(`Numero: ${pessoa.endereco.numero}`)
//console.log(`Bairro: ${pessoa.endereco.bairro}`)

/*
const concessionario = {
    cnpj: '13123',
    endereco: {
        estado: {
            sigla: 'SP',
            nome: 'São Paulo',
        },
        cidade: 'São Paulo',
        bairro: 'Vila M'
    },
    veiculos: [
        {
            placa: 'ABC-1234',
            marca: 'Ford',
            placa: 'Fiesta',
        },
        {
            placa: 'ABC-4321',
            marca: 'Chevrolet',
            placa: 'Onix',
        },
    ]
}
*/

//Calculadora -> tem marca e modelo. Soma e Sub. 
// A faz com arrow fuction sem usar return e a sub faz com fuction regular
/*
const calculadora = {
    marca: 'HP',
    modelo: 'V2',
    operacoes:{
        somar: (a,b) => a + b,
        subtrair: function(a,b){return a - b}
    }
}
for(let operacao of Object.keys(calculadora.operacoes)){
    console.log(`${operacao}: ${calculadora.operacoes[operacao](2,3)}`)
}
*/
