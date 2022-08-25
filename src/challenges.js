// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if(booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let wordsSentente = string.split(' ');
  return wordsSentente;
}

// Desafio 4
function concatName(array) {
  let lastAndFirst = array[array.length-1] + ", " + array[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let biggerNumber = 0;
  let repeat = 0;

  for (let i of array) {
    if (i > biggerNumber) {
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

// Desafio 7
function catAndMouse(mouse, catOne, catTwo) {
  let distanceCatOne = mouse - catOne;
  let distanceCarTwo = mouse - catTwo;

    if (Math.abs(distanceCarTwo) > Math.abs(distanceCatOne)) {
      return 'cat1';
    } else if (Math.abs(distanceCarTwo) < Math.abs(distanceCatOne)) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
