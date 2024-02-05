/*
Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/

// creo l'array vuoto
const numbers = [];

// inizializzo la variabile somma
let sum = 0;

// inizializzo la variabile del prompt
let numberUser;

const outputElement = document.querySelector("#output");

// ciclo finché la somma dei numeri inseriti è minore di 50
while (sum < 50) {

    // controllo che il valore inserito sia un numero
    do {
        numberUser = Number(prompt("Inserisci un numero"));
        if (isNaN(numberUser)) {
            alert("Il valore inserito non è valido");
        }
    } while (isNaN(numberUser));

    console.log(numberUser);

    // incremento la somma del valore inserito dall'utente
    sum += numberUser;

    // se la somma non supera 50 aggiungo il numero inserito all'array
    if (sum < 50) {
        numbers.push(numberUser);
    }

}

// stampa array
for (let i = 0; i < numbers.length; i++) {
    outputElement.innerHTML += `${numbers[i]} <br>`;
}

if (numbers.length == 0) {
    outputElement.innerText = "L'array è vuoto";
}