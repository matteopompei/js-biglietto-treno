alert("Benvenuto nel calcolatore di prezzi dei biglietti del treno!");

let distance = prompt("Quanti kilometri vuoi percorrere?");
let age = prompt("Quanti anni hai?");
let price = distance * 0.21;

if (age <= 0) {
  alert("Forse non hai ben capito la domanda... Riproviamo!");
  location.reload();
}
else if (age < 18) {
  price = price - ((price / 100) * 20);
}
else if (age >= 65) {
  price = price - ((price / 100) * 40);
}

document.getElementById("prezzo-biglietto").innerHTML = price;

price = price.toFixed(2);