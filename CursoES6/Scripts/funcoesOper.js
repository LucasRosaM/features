const arr = [1, 2, ,3 ,5 ,7];

const newArr = arr.map(function(item, index){//Item vai receber o valor e o index o indice
    return item + index
});

console.log(newArr);

const sum = arr.reduce(function(total, next){//O next vai receber sempre o proximo numero do arr, o total armazena
    return total+next
})

console.log(sum);

const filter = arr.filter(function(item){//O return tem que ser Boleano, se nao, nao dá
    return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function(item){//se for true ele retorna o item
    return item === 3;
});

console.log(find);
