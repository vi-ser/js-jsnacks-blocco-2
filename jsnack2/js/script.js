/*
Snack 2
Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

const outputElement = document.querySelector("#output");

// genero un numero casuale intero
const randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);

let numberUser;

// ciclo finché non indovino il numero
do {
    numberUser = Number(prompt("Indovina il numero da 1 a 100"));

    // SE il numero è troppo basso
    if (numberUser < randomNumber && numberUser > 0) {
        alert("Il numero è troppo basso");
    }

    // SE il numero è troppo alto
    if (numberUser > randomNumber && numberUser <= 100) {
        alert("Il numero è troppo alto");
    }

    // SE il valore inserito non è un numero oppure è fuori dal range
    if (isNaN(numberUser) || numberUser < 1 || numberUser > 100) {
        alert("Il valore non è valido");
    }
}

while (numberUser != randomNumber);

// quando il numero viene indovinato
if (numberUser == randomNumber) {
    outputElement.innerText = `${numberUser}! Hai indovinato!`
}
