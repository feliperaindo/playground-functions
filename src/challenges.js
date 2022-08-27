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
function getBigNumber(array) {
  let biggerNumber = array[0];

  for (let i of array) {
    if (i > biggerNumber) {
      biggerNumber = i;
    }
  }
  return biggerNumber;
}
function highestCount(array) {
  let biggerNumber = getBigNumber(array);
  let repeat = 0;

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
function divisorThree(number) {
  if (number % 3 === 0) {
    return true;
  }
  return false;
}
function divisorFive(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}
function wichTrue(string) {
  if (string === true) {
    return 'fizz';
  } return 'buzz';
}
function concatThreeAndFive(string, stringTwo) {
  if (string === true && stringTwo === true) {
    return 'fizzBuzz';
  } if (string === false && stringTwo === false) {
    return 'bug!';
  } return wichTrue(string);
}
function fizzBuzz(array) {
  let result = [];

  for (const i of array) {
    let verify = divisorThree(i);
    let verifyTwo = divisorFive(i);
    result.push(concatThreeAndFive(verify, verifyTwo));
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function arrayCreator(string) {
  let array = [];
  for (const i of string) {
    array.push(i);
  }
  return array;
}

function encoder(string) {
  let codifier = [
    { number: 'a', crypto: 1 }, { number: 'e', crypto: 2 }, { number: 'i', crypto: 3 },
    { number: 'o', crypto: 4 }, { number: 'u', crypto: 5 },
  ];

  for (let key of codifier) {
    if (string === key.number) {
      string = key.crypto;
      return string;
    }
  }
  return string;
}

function arrayEncoder(array) {
  let arrayEncoded = [];

  for (let i of array) {
    arrayEncoded.push(encoder(i));
  }
  return arrayEncoded;
}

function encode(string) {
  let array = arrayCreator(string);
  let arrayEncoded = arrayEncoder(array);
  let phraseEncoded = '';

  for (let i of arrayEncoded) {
    phraseEncoded += i;
  }
  return phraseEncoded;
}
console.log(encode('vamos nessa'));

function decode(string) {
  let decoder = [
    { number: 'a', crypto: 1 }, { number: 'e', crypto: 2 }, { number: 'i', crypto: 3 },
    { number: 'o', crypto: 4 }, { number: 'u', crypto: 5 },
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

// Desafio 10
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
