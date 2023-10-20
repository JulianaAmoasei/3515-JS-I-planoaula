const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
console.log(media);

if (media >= 7) {
  media += media * 0.1;
}

console.log('média final', media.toFixed(2));

const numero = 10;
console.log(numero % 2)
console.log(numero % 3)