const notaFinal = 10;
const faltas = 5;

// function estudanteReprovou (notaFinal, faltas) {
//   if (notaFinal < 7 && faltas > 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

console.log(estudanteReprovou(notaFinal, faltas));

const exibeNome = nome => nome;

console.log(exibeNome('Caroline'));