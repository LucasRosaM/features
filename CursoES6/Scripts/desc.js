const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, idade, endereco:{ cidade } } = usuario; //Pegando informacoes sem precisar de variaveis

console.log(nome, idade, cidade)

function mostraNome(usuario){
    console.log(usuario.nome);
}

//OU

function mostraNomeD({ nome }){
    console.log(nome);
}
mostraNomeD(usuario);