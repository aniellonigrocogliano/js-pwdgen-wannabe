//Richiesta dati
let userName = prompt("Ciao utente! Qual'è il tuo nome?"); // string
let userSurname = prompt("Ciao " + userName + " Qual'è il tuo cognome?"); // string
let userColor = prompt("Scusami " + userName + " ma posso sapera anche il tuo colore preferito?"); // string
userName =  userName.split(" ").join(""); //string
userSurname =  userSurname.split(" ").join(""); //string
//verifica dati
console.log(userName, typeof userName, );
console.log(userSurname, typeof userSurname,);
console.log( userColor, typeof userColor);
//creazione della variabile costante 21
const number21 = 21; //number
console.log( number21, typeof number21);
//concatenazione dei dati
let result = userName+userSurname+userColor+number21; //string
console.log( result, typeof result);
//stampa nel codice html
document.getElementById("answer").innerHTML = result;