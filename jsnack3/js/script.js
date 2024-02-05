/*
Snack 3
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5
*/


const outputDavideElement = document.querySelector("#output-davide");
const outputDanieleElement = document.querySelector("#output-daniele");

// creo i due array
const davideTickets = ["Roberto", "Alessio", "Miriam", "Emanuele", "Christian", "Arianna"];
const danieleTickets = ["Luca", "Salvatore", "Alan"];


// ciclo finché i tutor non hanno lo stesso numero di ticket
while (davideTickets.length != danieleTickets.length) {

    const newTicket = prompt("Inserisci il nome dello studente per distribuire i ticket");

    // controllo che il campo non sia vuoto
    if (newTicket === "") {
        alert("Non hai inserito nulla!")
    }

    else {
        // SE Davide ha più ticket assegno il nuovo ticket a Daniele
        if (davideTickets.length > danieleTickets.length) {
            danieleTickets.push(newTicket);
        }
        // SE Daniele ha più ticket assegno il nuovo ticket a Davide
        else if (davideTickets.length < danieleTickets.length) {
            davideTickets.push(newTicket);
        }
    }

}

// stampa dei due array
for (let i = 0; i < davideTickets.length; i++) {

    outputDavideElement.innerText = davideTickets.join(', ');

}

for (let j = 0; j < danieleTickets.length; j++) {

    outputDanieleElement.innerText = danieleTickets.join(', ');

}
