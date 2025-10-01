//Execução síncrona(bloqueante)
//Execução assícrona( não bloqueante)

//------- Chamada síncrona ------//
/*
console.log('Eu primeiro...')
console.log('Agora eu ...')
console.log('Sempre serie o último ...:(')
*/
/*
const a = 2 + 2
const b = 5
console.log(a + b)
*/

//CPU-BOUND: Operações realizadas pela CPU
//IO-BOUND: Operações realizada para entrada e saída
/*
function demorada (){
    const atualMais2 = new Date().getTime()+7000
    while(new Date().getTime() <= atualMais2);
    const d = 8 + 4
    return d
}
function demorada2 (){
    const atualMais2 = new Date().getTime()+3000
    while(new Date().getTime() <= atualMais2);
    const f = 12 + 6 
    return f
}
const a = 2 + 3
const b = 5 + 9
setTimeout( () => {
    const d = demorada()
    console.log(`Valor de d: ${d}`)
}, 1000)
setTimeout( () => {
    const f = demorada2()
    console.log(`Valor de f: ${f}`)
}, 0)
const e = 2 + a - b 
console.log(`Valor de e: ${e}`)
*/

// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     //callbacl: define, mas não chama
//     function exibirConteudo(erro, conteudo)
//     {
//         if(erro){
//             console.log(`Erro: ${erro}`)
//         }
//         else{
//             console.log(
//                 `Conteúdo: ${conteudo.toString()}`
//             )
//             const dobro = Number(conteudo.toString()) * 2
//             const salvarArquivo = (erro) => {
//                 if(erro){
//                     console.log(`Erro: ${erro}`)
//                 }
//                 else{
//                     console.log('Arquivo salva ok')
//                 }
//                 console.log('D')
//             }
//             fs.writeFile(
//                 'dobro.txt',
//                 dobro.toString(),
//                 salvarArquivo
//             )
//         }
//         console.log('C')
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('B')
// }
// abrirArquivo('arquivo.txt')
// console.log('A')

// // //1 + 2 + 3 + .... + n-2 + n-1 + n
// //async/await
// const fatorial = (n) => {
//   //n * (n-1) * (n-2) * ... * 3 * 2 * 1
//   if(n < 0)
//     return Promise.reject("Negativos não")
//   if(n === 0)
//     return Promise.resolve(1)
//   let ac = 1
//   for(let i = 2; i <= n; i++)
//     ac *= i
//   return Promise.resolve(ac)
// }

// function chamadaComThenECatch(){
//   const n1 = 5
//   const n2 = -1
//   fatorial(n1)
//   .then(res => console.log(`Res: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))

//   fatorial(n2)
//   .then(res => console.log(`Res: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))
// }
// chamadaComThenECatch()

// //async function chamadaComAsyncAwait(){}
// const chamadaComAsyncAwait = async () => {
//   const n1 = 5
//   const n2 = -1
//   try{
//     const res1 = await fatorial(n1)
//     console.log(res1)
//   }
//   catch(err){
//     console.log(`Erro: ${err}`)
//   }
//   try{
//     const res2  = await fatorial(n2)
//     console.log(res2)
//     const res3 = await fatorial(res2)
//     console.log(res3)
//     const res4 = await fatorial(res3)
//     console.log(res4)
//   }
//   catch(err){
//     console.log(`Erro: ${err}`)
//   }
// }
// console.log('Terminando...')

// async function hello(nome){
//   return `Olá ${nome}`
// }
// const res = hello('Ana')
// res.then(r => console.log(`Resultado: ${r}`))
// const desafio = (n) => {
//   //se o valor for negativo, devolver uma promise no estado rejected. neste caso, o erro deve ser "Não use valores negativos"

//   //caso contrário, devolver uma promise no estado fullfilled
//   //use um operador ternário
//   return n >= 0 ? 
//     Promise.resolve((n / 2) * (n + 1)) : 
//     Promise.reject('Não use valores negativos')
// }

// desafio(-10)
// .then(res => {
//   console.log(`Resultado: ${res}`)
//   desafio(res).then(res2 => {
//     desafio(res2).then(res3 => {
//       desafio.then(res3 => {

//       })
//     })  
//   })
// })
// .catch(erro => {console.log(`Erro: ${erro}`)})

// // const calculoRapidinho = (n) => {
// //   //return Promise.resolve((n / 2) * (n + 1))
// //   //refaça construindo a promise com new
// //   //você quer devolver uma promise já fullfilled, porém, vc quer que ela seja construída com new
// //   return new Promise(function(resolve, reject){
// //     resolve((n / 2) * (n + 1))
// //   })
// // }
// // const p = calculoRapidinho(10)

// // p.then((r) => {
// //   console.log(`Resultado ${r}`)
// // })

// // const calculoDemorado = (n) => {
// //   const p = new Promise((resolve, reject) => {
// //     let ac = 0
// //     for(let i = 1; i <= n; i++) ac += i
// //     resolve(ac)
// //   })
// //   return p
// // }
// // const minhaPromise = calculoDemorado(10)
// // //then/catch
// // minhaPromise.then((res) => {
// //   console.log(`Resultado: ${res}`)
// // })
// // console.log('Terminando...')


// // const res = calculoDemorado(10)
// // console.log(res)