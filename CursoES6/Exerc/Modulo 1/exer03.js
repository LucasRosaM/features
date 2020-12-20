// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

const arr2 = arr.map(item => item+10);

console.log(arr2)

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}

const user = (usuario => usuario.idade);
console.log(user(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}

const mostraARR = (nome = 'Diego', idade = 18) => ({ nome, idade})

console.log(mostraARR(nome, idade));
console.log(mostraARR(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}

const promise2 = () => {
    return new promise2 = (resolve, reject) => resolve;
}
