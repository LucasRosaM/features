function teste(x){
    let y = 2;

    if(x > 5) {
        console.log(x,y);//Aqui o Y é possivel pois esta dentro do escopo
    }
}

console.log(y);//Aqui o Y é esta fora do escopo, ERRO

teste(10);