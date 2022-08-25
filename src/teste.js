function encode(string) {
    let encoder = [
      {number:'a', crypto: 1,},
      {number:'e', crypto: 2,},
      {number:'i', crypto: 3,},
      {number:'o', crypto: 4,},
      {number:'u', crypto: 5,},
    ]
    let phraseEncoded = '';
    let arrayEncoded = []
  
      for (const i in string) {
        arrayEncoded.push(string[i]);
        for (let ii in encoder) {
          if (string[i] === encoder[ii].number) {
            arrayEncoded[i] = encoder[ii].crypto;
          }
        }
        phraseEncoded += arrayEncoded[i]
      }
      return phraseEncoded;
}
console.log(encode('vamo que vamo.'));

function decode(string) {
    let decoder = [
      {number:'a', crypto: 1,},
      {number:'e', crypto: 2,},
      {number:'i', crypto: 3,},
      {number:'o', crypto: 4,},
      {number:'u', crypto: 5,},
    ]
    let phraseDecoded = "";
    let arrayDecoded = []
  
      for (const i in string) {
        arrayDecoded.push(string[i]);
        for (let ii in decoder) {
          if (string[i] == decoder[ii].crypto) {
            arrayDecoded[i] = decoder[ii].number;
          }
        }
        phraseDecoded += arrayDecoded[i]
      }
      return phraseDecoded;
}
console.log(decode('v1m4 q52 v1m4.'));