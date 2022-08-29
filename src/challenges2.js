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

// Desafio 12
function checkSom(valueOne, valueTwo, valueThree) {
  let sideCheckSom = true;

  switch (true) {
  case (Math.abs(valueOne) + Math.abs(valueTwo)) < Math.abs(valueThree):
    sideCheckSom = false;
    break;
  case (Math.abs(valueTwo) + Math.abs(valueThree)) < Math.abs(valueOne):
    sideCheckSom = false;
    break;
  case (Math.abs(valueThree) + Math.abs(valueOne)) < Math.abs(valueTwo):
    sideCheckSom = false;
    break;
  default: sideCheckSom = true;
  }
  return sideCheckSom;
}
function checkMinus(valueOne, valueTwo, valueThree) {
  let sideCheckMinus = true;
  switch (true) {
  case (Math.abs(valueOne) - Math.abs(valueTwo)) > Math.abs(valueThree):
    sideCheckMinus = false;
    break;
  case (Math.abs(valueTwo) - Math.abs(valueThree)) > Math.abs(valueOne):
    sideCheckMinus = false;
    break;
  case (Math.abs(valueThree) - Math.abs(valueOne)) > Math.abs(valueTwo):
    sideCheckMinus = false;
    break;
  default: sideCheckMinus = true;
  }
  return sideCheckMinus;
}
function triangleCheck(lineA, lineB, lineC) {
  let sideCheckSom = checkSom(lineA, lineB, lineC);
  let sideCheckMinus = checkMinus(lineA, lineB, lineC);

  if (sideCheckSom && sideCheckMinus === true) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let arrayNumbers = string.match(/\d+/g);
  let result = 0;

  for (const i of arrayNumbers) {
    result += parseInt(i, 0);
  }
  if (result > 1) {
    return `${result} copos de água`;
  }
  return `${result} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
