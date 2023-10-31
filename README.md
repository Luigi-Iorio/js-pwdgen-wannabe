# Password Generator

Questo progetto è un esempio di interazione con l'utente in JavaScript. Attraverso il metodo **prompt** di JS chiedo all'utente di inserire il suo nome, cognome e colore preferito, mentre con la proprietà **innerHTML** visualizzo queste informazioni sulla pagina web, insieme a un numero casuale generato da uno script.

### Numero casuale

Per ottenere un numero casuale intero ho utilizzato i metodi **Math.floor** e **Math.random**

```js
Math.floor(Math.random() * 100) + 1;
```
