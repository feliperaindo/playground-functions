// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
