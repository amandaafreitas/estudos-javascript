function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//Arrow function
                     //parametro     // return
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma=(num1,num2) => num1+num2;


//Arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (num1,num2) =>{
    if(num1 || num2> 10){
        return "somente números de 1 a 9"
    }else{
        return num1+num2
    }
}
// Hosting: Arrow function se comporta como uma expressão