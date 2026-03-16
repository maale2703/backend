// Valores iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log('Apos hora extra (horastrabalhadas++): ${horastrabalhadas}h');

//No dia seguinte ele precisou sair uma hora mais cedo para ir ao médico
horasTrabalhadas--;
console.log('Apos saida antecipada (horastrabalhadas--): ${horastrabalhadas}h');

//calculo final 
let taxaSistema = 15;
let pagamentoTotal = (horasTrabalhadas * valorPorHora) - taxaSistema;