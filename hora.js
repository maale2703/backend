// Valores iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log('Apos hora extra (horastrabalhadas++): ${horastrabalhadas}h');

horasTrabalhadas--;
console.log('Apos saida antecipada (horastrabalhadas++): ${horastrabalhadas}h');