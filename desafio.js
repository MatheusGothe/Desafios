
const num = (num) => {
    if(num < 0){
        console.log('Número Inválido,informe um número positivo')
        return
    }
    let soma = 0;

    for(let i = 0; i < num;i++){
        if(i % 3 == 0 || i % 5 == 0){
            soma =soma + i;
        }
    }
    console.log('A soma é', soma)
}

num(10) // 23
num(11) // 33
