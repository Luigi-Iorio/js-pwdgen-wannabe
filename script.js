// dichiarazione/assegnazione variabile per la pwd finale
const pwd = document.getElementById("pwd");

// richieste all'utente - assegnazione variabile
const nome = prompt("scrivi il tuo nome");
const cognome = prompt("scrivi il tuo cognome");
const colore = prompt("scrivi il tuo colore preferito");

// inserimento dati in html
pwd.innerHTML = `${nome}${cognome}${colore}21`;
