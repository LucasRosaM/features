const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
//2.1
const newarr = usuarios.map(item => item.idade)

console.log(newarr)

//2.2
const newarr2 = usuarios.filter(item => item.empresa == "Rocketseat" && item.idade > 18)

console.log(newarr2)

//2.3
const newarr3 = usuarios.find(item => item.empresa === "Google")

console.log(newarr3);

//2.4
const newarr4 = usuarios.reduce(function(total, next){
    if ((next.idade ) <= 50 ) return total+next
    

})

