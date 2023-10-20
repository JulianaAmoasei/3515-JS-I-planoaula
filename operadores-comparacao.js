const notaFinal = 6;
const faltas = 5;
const advertencias = 1;
const estaAprovado = true;

if (estaAprovado === true) {
  console.log('aprovado');
}

if ('0' == 0) {
  console.log('passou na comparação');
} else {
  console.log('não passou na comparação');
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log('precisa de autorização')
} else {
  console.log('pode se matricular')
}

                         //condição                       //true                    //false
const textoAutorizacao = idadeEstudante >= idadeMinima ? 'precisa de autorização' : 'pode se matricular';

const precisaAutorizacao = idadeEstudante >= idadeMinima ? true : false;