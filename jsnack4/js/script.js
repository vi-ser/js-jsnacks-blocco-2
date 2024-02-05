/*
Snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

let numberUser;


let counter = 0;

do {
    numberUser = Number(prompt("Inserisci un numero intero"));
    if (isNaN(numberUser) || !Number.isInteger(numberUser)) {
        alert("Il valore inserito non è valido")
    }
    else {
        if (numberUser % 2 == 0) {
            console.log(numberUser);
        } else {
            console.log(numberUser + 1);
        }
    }

    counter++;

}
while (counter < 3);
