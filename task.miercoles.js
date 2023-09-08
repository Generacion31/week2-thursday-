const arrayPar = [2, 3, 4, 5]//length = 4
const arrayImpar = [1, 3, 4] //length = 3


function obtenerMitad(array) {
  let solution = null

  let indice = Math.floor(array.length / 2)

  if (array.length % 2 === 0) {
    solution = [array[indice - 1], array[indice]]
    return solution
  }
  solution = array[indice]
  return solution

}

console.log(obtenerMitad(arrayPar));
console.log(obtenerMitad(arrayImpar));