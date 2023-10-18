const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante'!";
const citacao = `Ju diz: "nosso lema é 'estudar bastante'!"`;

console.log(cumprimento);
console.log(citacao);
console.log(`a estudante se chama ${estudante}`);

const senha = 'SenhaSegura@123' + estudante.toUpperCase();

if (senha === 'SenhaSegura@123CAROLINE') {
  console.log('boas vindas!')
}