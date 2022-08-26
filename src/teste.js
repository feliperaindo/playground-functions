// eslint-disable-next-line padded-blocks
function arrayCreator(string) {

  let array = [];
  for (const i of string) {
    array.push(i);
  }
  return array;
}
function arrayEncoder(array) {
  let encoder = [
    { number: 'a', crypto: 1 }, { number: 'e', crypto: 2 }, { number: 'i', crypto: 3 },
    { number: 'o', crypto: 4 }, { number: 'u', crypto: 5 },
  ];

  for (let i of array) {
    for (let key of encoder) {
      if (i === key.number) {
        i = key.crypto;
      }
    }
  }
  return array;
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
