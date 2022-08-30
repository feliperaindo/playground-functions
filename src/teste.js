function arrayCreator(string) {
  let array = [];
  for (const i of string) {
    array.push(i);
  }
  return array;
}

function encoder(string) {
let codifier = [
    { number: 'a', crypto: '1' }, { number: 'e', crypto: '2' }, { number: 'i', crypto: '3' },
    { number: 'o', crypto: '4' }, { number: 'u', crypto: '5' },
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
console.log(encode('abacaxi'));
