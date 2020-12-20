//5.1
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x);
console.log(y);

let soma = function soma(...param){
    return param.reduce((a, b) => a + b)
}

console.log(soma(1,2,3,4,5,6))

//5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const user2 = {...usuario, nome: 'Gabriel'}
const user3 = {...usuario, cidade: 'Lontras' }