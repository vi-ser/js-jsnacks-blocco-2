/*
Snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const outputElement = document.querySelector("#output");

let numberUser;


let counter = 0;

// stampo 3 numeri
do {
    numberUser = Number(prompt("Inserisci un numero intero"));

    // controllo che l'utente abbia inserito un valore valido
    if (isNaN(numberUser) || !Number.isInteger(numberUser)) {
        alert("Il valore inserito non è valido")
    }

    else {

        // se il numero è pari lo stampo
        if (numberUser % 2 == 0) {
            outputElement.innerHTML += `${numberUser}  `;
        } else {
            // se il numero è dispari stampo quello successivo
            outputElement.innerHTML += `${numberUser + 1}  `;
        }
    }

    counter++;

}
while (counter < 3);
