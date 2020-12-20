class Matematica{
    static soma(a, b){ //Metodos estaticos só trabalham com os parametros recebidos, isolado do restante da classe
        return a + b;
    }
} 

console.log(Matematica.soma(1 , 2));