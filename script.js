// dichiarazione/assegnazione variabile per la pwd finale
const pwd = document.getElementById("pwd");

// richieste all'utente - assegnazione variabile
const nome = prompt("scrivi il tuo nome");
// visualizzazione in console
console.log(nome);

const cognome = prompt("scrivi il tuo cognome");
// visualizzazione in console
console.log(cognome);

const colore = prompt("scrivi il tuo colore preferito");
// visualizzazione in console
console.log(colore);

// inserimento dati in html
pwd.innerHTML = `${nome}${cognome}${colore}21`;
// visualizzazione in console
console.log(pwd.innerHTML);
