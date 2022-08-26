// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  }
  return false;
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
  let lastAndFirst = `${array[array.length - 1]}, ${array[0]}`;
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
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

// Desafio 7
function catAndMouse(mouse, catOne, catTwo) {
  let distanceCatOne = mouse - catOne;
  let distanceCarTwo = mouse - catTwo;

  if (Math.abs(distanceCarTwo) > Math.abs(distanceCatOne)) {
    return 'cat1';
  } if (Math.abs(distanceCarTwo) < Math.abs(distanceCatOne)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let i of array) {
    switch (true) {
    case (i % 3 === 0) && (i % 5 === 0):
      result.push('fizzBuzz');
      break;
    case (i % 3 === 0):
      result.push('fizz');
      break;
    case (i % 5 === 0):
      result.push('buzz');
      break;
    default: result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let encoder = [
    { number: 'a', crypto: 1 },
    { number: 'e', crypto: 2 },
    { number: 'i', crypto: 3 },
    { number: 'o', crypto: 4 },
    { number: 'u', crypto: 5 },
  ];
  let phraseEncoded = '';
  let arrayEncoded = [];

  for (const i in string) {
    arrayEncoded.push(string[i]);
    for (let ii in encoder) {
      if (string[i] === encoder[ii].number) {
        arrayEncoded[i] = encoder[ii].crypto;
      }
    }
    phraseEncoded += arrayEncoded[i];
  }
  return phraseEncoded;
}

function decode(string) {
  let decoder = [
    { number: 'a', crypto: 1 },
    { number: 'e', crypto: 2 },
    { number: 'i', crypto: 3 },
    { number: 'o', crypto: 4 },
    { number: 'u', crypto: 5 },
  ];
  let phraseDecoded = '';
  let arrayDecoded = [];

  for (const i in string) {
    arrayDecoded.push(string[i]);
    for (let ii in decoder) {
      if (string[i] == decoder[ii].crypto) {
        arrayDecoded[i] = decoder[ii].number;
      }
    }
    phraseDecoded += arrayDecoded[i];
  }
  return phraseDecoded;
}

// Desafio 10 (não passou)
function techList(array, string) {
  let result = [];

  if (array.length === 5) {
    array.sort();
  }
  if (array.length > 0) {
    for (const key in array) {
      result.push({
        tech: array[key],
        name: string,
      });
    }
  } else {
    return 'Vazio!';
  }
  return result;
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
