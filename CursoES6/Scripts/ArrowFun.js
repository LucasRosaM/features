const arr = [1, 2, 3, 5, 6]

/*
const newArr = arr.map(function(item){
    return item * 2
});
*/

const newArr = arr.map(item => item * 2); //Se for só um parametro nao precisa do paretenses
                                          //Se for só uma linha da pra por ao lado da flecha
/*
const rstring = function(){
    return "batata";
};
*/
const rstring = () => "batata" //Uma funcao q  retorna uma string

console.log(rstring())