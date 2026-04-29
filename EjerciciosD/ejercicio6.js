let minutos = Number(prompt("Ingrese la cantidad de minutos:"));

let horas = (minutos - (minutos % 60)) / 60;
let minutosRestantes = minutos % 60;

alert(minutos + " minutos son: " + horas + " horas y " + minutosRestantes + " minutos");