/*
Snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const outputElement = document.querySelector("#output");

let userChoice = prompt("Inserisci un numero oppure digita 'exit");



// chiedo l'inserimento di numeri finché non viene inserito 'exit'

while (userChoice != "exit") {

    if (!isNaN(userChoice)) { // se il testo inserito è un numero

        // converto il testo in numero
        const userNumber = Number(userChoice);

        // faccio il controllo
        if (userNumber % 2 == 0) { // pari

            outputElement.innerHTML += `${userNumber}  `;

        } else { // dispari

            outputElement.innerHTML += `${userNumber + 1}  `;
        }

    } else {

        alert("Inserisci un numero");
    }

    userChoice = prompt("Scegli un altro numero, o digita 'exit'");
}

console.log("uscita");
