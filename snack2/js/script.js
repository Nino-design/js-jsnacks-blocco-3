//2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const arraySomma = [];
let counter = 0;
maxNum = 50;

for(let i = 0; i < maxNum; i++){
    let userNumbers = parseInt(prompt('Inserisci numeri a piacere'));
    if((counter + userNumbers)  < maxNum){
        arraySomma.push(counter)
        counter += userNumbers;
    }else{
        break;
    }
}

console.log(arraySomma);