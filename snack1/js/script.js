//1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


const array1 = ['stringa1', 8, 'stringa2', 14, 52, 'string3'];
console.log(array1);

const array2 = [5, 42, 'stringa3', 'stringa4'];
console.log(array2);

for( let i = 0; i < array1.length; i++){
    if(array2.length < array1.length){
        array2.push(Math.floor(Math.random() * 8) +1);
    }
}

console.log(array2);