// prompt("Benvenuto nel calcolatore di prezzi dei biglietti del treno!");

let distance = prompt("Quanti kilometri vuoi percorrere?");
let age = prompt("Quanti anni hai?");
let price = distance * 0.21;

if (age < 18) {
  price = price - ((price / 100) * 20);
}
else if (age >= 65) {
  price = price - ((price / 100) * 40);
}

price = price.toFixed(2);

document.getElementById("prezzo-biglietto").innerHTML = "Il prezzo del tuo biglietto è di €" + price;