// Desafio 10 (não passou)
// function techList(array, string) {
//   let result = [];

//   if (array.length > 0) {
//     for (const key in array) {
//       result.push({
//         tech: array[key],
//         name: string,
//       });
//     }
//   } else {
//     return 'Vazio!';
//   }

//   if (result.length === 5) {
//     return result.sort;
//   } else {
//     return result;
//   }
// }

// Desafio 6 (não passou)
function highestCount(array) {
  let biggerNumber;
  let repeat = 0;

  for (let i of array) {
    if (biggerNumber === undefined) {
      biggerNumber = i;
    } else if (i > biggerNumber) {
      biggerNumber = i;
    }
  }
  for (let ii of array) {
    if (ii === biggerNumber) {
      repeat += 1;
    }
  }
  return repeat;
}
console.log(highestCount([-2, -2, -1]));
