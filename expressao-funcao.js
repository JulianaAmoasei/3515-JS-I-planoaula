const notaFinal = 10;
const faltas = 5;

// function estudanteReprovou (notaFinal, faltas) {
//   if (notaFinal < 7 && faltas > 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

const estudanteReprovou = function (notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

console.log(estudanteReprovou(notaFinal, faltas));


// function exibeNome (nome) {
  //   return nome;
  // }
  
console.log(exibeNome('Caroline'));
const exibeNome = function (nome) { return nome };
