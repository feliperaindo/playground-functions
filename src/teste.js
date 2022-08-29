// Desafio 11
function verifyRepeatPartTwo(array, i) {
  let contador = 0;

  for (const ii of array) {
    if (i === ii) {
      contador += 1;
    }
    if (contador >= 3) {
      return false;
    }
  }
  return true;
}
function verifyRepeat(array) {
  let saveResult;
  for (const i of array) {
    saveResult = verifyRepeatPartTwo(array, i);
    if (saveResult === false) {
      return false;
    }
  }
  return saveResult;
}

function verifyZeroAndNine(array) {
  for (const i of array) {
    if (i < 0 || i > 9) {
      return false;
    }
  }
  return true;
}
function phoneCreator(array) {
  let phoneNumber = '';

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      phoneNumber = '(' + array[index].toString();
    } else if (index === 2) {
      phoneNumber = phoneNumber + ') ' + array[index].toString();
    } else if (index === 7) {
      phoneNumber = phoneNumber + '-' + array[index].toString();
    } else {
      phoneNumber += array[index].toString();
    }
  }
  return phoneNumber;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let firstStep = verifyZeroAndNine(array);
  let secondStep = verifyRepeat(array);
  if (firstStep === true && secondStep === true) {
    return phoneCreator(array);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
