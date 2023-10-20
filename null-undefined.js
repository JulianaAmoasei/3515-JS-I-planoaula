let x;
console.log(typeof x);

let nomeEstudante = 'Caroline';
let telefoneEstudante = null;

function pegaTelefone(telefone) {
  if (telefone === null) {
    console.log('estudante sem telefone');
  } else {
    console.log(telefone);
  }
}

pegaTelefone(telefoneEstudante);

let notasEstudante;
console.log(notasEstudante + 3);

console.log(typeof null);
console.log(telefoneEstudante === null);