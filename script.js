window.alert('teste');

let sub = 0;
let parar = 0;
let cont = 0;
let numero = 0;

function but1() {
    numero = numero -1
    sub = document.getElementById("numero").innerHTML = numero ;
   
}

function but2() {
      parar = "0";
      parar = document.getElementById("numero").innerHTML = parar;
      sub = document.getElementById("numero").innerHTML = 0;
      cont = document.getElementById("numero").innerHTML = 0;
}

function but3() {
      numero = numero + 1;
      cont = document.getElementById("numero").innerHTML = numero;
}
