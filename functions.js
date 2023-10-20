function exibeNomeEstudante(nomeEstudante) {
  return `o nome da pessoa é ${nomeEstudante}`;
}

exibeNomeEstudante('Caroline');

const notaFinal = 10;
const faltas = 5;

function estudanteReprovou(notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

function exibeMensagemParaEstudante(nomeEstudante = 'você') {
  const estaReprovado = estudanteReprovou(notaFinal, faltas);

  if (estaReprovado) {
    return `${nomeEstudante} reprovou`;
  } else {
    return `${nomeEstudante} aprovou`;
  }
}

console.log(exibeMensagemParaEstudante('Caroline'));
console.log(exibeMensagemParaEstudante());

