//REST

const usuario = {
    nome: 'Diogo',
    idade: 23,
    empresa: 'Rocket'
};

const {nome, ...resto} = usuario;//Com os tres pontos é possivel pegar os atributos restantes e atribuir a uma variavel
                                 //Da pra usar com array tambem [a, b, ...c] = arr
console.log(nome, resto);
 

function soma(...param){//O param se torna um array
    return param;
}

console.log(soma(1, 3, 5))

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]//Junta os dois

const user1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rockt'
};

const user2 = {...user1, nome: 'Gabriel'}//Duplicando o usuario, porem, atualizando uma informacao
