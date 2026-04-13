//lista de frutas - array

const frutas = ["maça", "banana", "uva", "manga",];
//índice frutas    0         1      2        2 

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "morango"; //alterar o valor do elemento
frutas.push("pessego"); //adiciona um item elemento no final
frutas.unshift("pera");
console.log(frutas);
console.log(frutas.at.length)