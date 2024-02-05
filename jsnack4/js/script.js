/*
Snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const outputElement = document.querySelector("#output");

let numberUser;



// chiedo l'inserimento di numeri finché non viene inserito 0
do {
    numberUser = Number(prompt("Inserisci un numero intero (inserisci 0 per terminare"));

    // controllo che l'utente abbia inserito un valore valido
    if (isNaN(numberUser) || !Number.isInteger(numberUser)) {
        alert("Il valore inserito non è valido")
    }

    // interrompo l'inserimento di numeri
    else if (numberUser == 0) {
        break;
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


}
while (numberUser != 0);
