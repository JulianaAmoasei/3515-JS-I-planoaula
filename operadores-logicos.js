const notaFinal = 6;
const faltas = 5;
const advertencias = 1;

function estudanteReprovou(notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

console.log(estudanteReprovou(notaFinal, faltas));

function recebeBonusNaNota(faltas, advertencias) {
  if (faltas <= 2 && !advertencias) {
    return true;
  } else {
    return false;
  }
}

console.log(recebeBonusNaNota(faltas, advertencias));

const reprovado = faltas > 4 && notaFinal < 7;
console.log(reprovado);

const condicoes = advertencias && faltas;
console.log(condicoes); //0
