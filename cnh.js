const idade = 15;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; //E, ANDA
console.log('pode viajar sozinho?', podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH; //OU, OR
console.log('pode viajar sozinho?', podeViajarSozinho);

const precisaDeAcompanhante = !maiorIdade;
console.log('precisa de acompanhante?', precisaDeAcompanhante);
