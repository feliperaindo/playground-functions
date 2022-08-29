// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
