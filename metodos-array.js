//METODOS PARA ARRAY

const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon', 'Pera']
//                  0        1       2           3         4        5

/**
 * Los metodos, indexOf, lastIndexOf, includes son utuilizados en array , y tienen la misma sintaxis basicamente. Pero en lugar de trabajar con caracteres, trabajaresmos con elementos. La busqueda es de izquierda a derecha
 *
 */

//indexOf(searchValue, index?)
// El indexOf , recibe como parametro el valor a buscar, y como segundo parametro opcional a partir de que indice deseo buscar. En caso de encontrar el elmento nos lo retorna. De no ser obtendremos -1
console.log(frutas.indexOf('Melon')); //4
console.log(frutas.indexOf('Tomates')); //-1
console.log(frutas.indexOf('Pera')); //1
console.log(frutas.indexOf('Pera', 2)); //5


//lastInedexOf(searchValue, index?)
// A diferencia del indexOf, la busqueda es de derecha a izquierda

console.log(frutas.lastIndexOf('Melon')); // 4
console.log(frutas.lastIndexOf('Pera')); //5
console.log(frutas.lastIndexOf('Pera', 4)); //1
console.log(frutas.lastIndexOf('Banana')); //-1


//Include
//.includes(searchValue, index?)
// Recibe un elemento para buscarlo, si lo encuentra retornara true, caso contrario retornara false. Tambien puedo indicar desde que indice quiero lanzar la busqueda

console.log(frutas.includes('Bananas')); //false
console.log(frutas.includes('Pera')); //true
console.log(frutas.includes('Manzana', 3)); //false
console.log(frutas.includes('manzana')); //false


//toString()
// Convierte un array en string. ⚠️ No puedo elegir su separador
console.log(frutas.toString());// 'Manzana,Pera,Naranja,Sandia,Melon,Pera'


//join
//Convertir un array en string, eligiendo con el caracter que quiero separar los elementos del array

console.log(frutas.join('')); // 'ManzanaPeraNaranjaSandiaMelonPera'
console.log(frutas.join(' ')); //Manzana Pera Naranja Sandia Melon Pera
console.log(frutas.join('-----')); //'Manzana-----Pera-----Naranja-----Sandia-----Melon-----Pera'




//.pop()
// Extrae el último elemento del array y nos lo devuelve. Modifica el array original
const ultimoElementoArray = frutas.pop()
console.log(ultimoElementoArray);//Pera
console.log(frutas);

// .shift()
const primerElemetoArray = frutas.shift()
console.log(primerElemetoArray);//Manzana
console.log(frutas); //[ 'Pera', 'Naranja', 'Sandia', 'Melon' ]

// .push()
//Inserta un elemento al final del array 
frutas.push('Uvas', 'Mango')
console.log(frutas);//[ 'Pera', 'Naranja', 'Sandia', 'Melon', 'Uvas', 'Mango' ]


//.unshift()
//Inserta elementos al comienzo del array
frutas.unshift('Kiwi', 'aguacate')
console.log(frutas); //[ 'Kiwi',   'aguacate','Pera', 'Naranja', 'Sandia', 'Melon', 'Uvas', 'Mango' ]


//OTROS METODOS - ADICIONALES


const g1 = ['Cristian', 'Issac', 'Oscar']
const g2 = ['Santiago', 'Robert', 'Andres']

//concat
//Nos devuelve un arreglo con todos los elementos de los array, si agrego elementos tambien los obtendre dentro del nuevo array

const nuevoGrupo1 = g1.concat(g2)
console.log(nuevoGrupo1);// [ 'Cristian', 'Issac', 'Oscar', 'Santiago', 'Robert', 'Andres' ]

const nuevoGrupo2 = g1.concat(g2, 'Jack')
console.log(nuevoGrupo2);['Cristian', 'Issac', 'Oscar', 'Santiago', 'Robert', 'Andres', 'Jack']

// Spread operator (...) - ECMAScript6 - > 2015
const nuevoGrupo3 = [...g1, ...g2]
console.log(nuevoGrupo3); // [ 'Cristian', 'Issac', 'Oscar', 'Santiago', 'Robert', 'Andres' ]

const nuevoGrupo4 = [...g1, ...g2, 'Tomates', 'Dayana']
console.log(nuevoGrupo4); //[ 'Cristian', 'Issac', 'Oscar', 'Santiago', 'Robert', 'Andres','Tomates',  'Dayana' ]

//reverse -> Ordena el array de forma inversa
const number = [1, 2, 3, 4, 5]
console.log(number.reverse()); //[ 5, 4, 3, 2, 1 ]

//Ordenar los elementos
const arrayDesordenado = [2, 4, 5, 80, 34, 1]

//sort es el metodo nativo de js, para ordenar un array. Nativamente ordena de menor a mayor

// menor a mayor 
console.log(arrayDesordenado.sort((a, b) => a - b)); //[ 1, 2, 4, 5, 34, 80 ]

//de mayor a menor
//console.log(arrayDesordenado.sort((a, b) => a - b).reverse()); //[ 80, 34, 5, 4, 2, 1 ]
console.log(arrayDesordenado.sort((a, b) => b - a)); //[ 80, 34, 5, 4, 2, 1 ]
const abc = ['a', 'i', 'u', 'o', 'e']

//menor a mayor
console.log(abc.sort()); // [ 'a', 'e', 'i', 'o', 'u' ]

//mayor a menor
console.log(abc.sort().reverse()); //[ 'u', 'o', 'i', 'e', 'a' ]



//SPLICE
// .splice(desde,cuantos) - desde(la posicion) cuantos(los que deseo recortar/extraer/eliminar). Y tambien si deseo puedo agregar elementos con el metodo. Modifica el array original


/**
 * El primer argumento recibe de donde voy a empezar a trabajar.
 * Tambien recibe indices negativos, como primer argumento
 * El segundo argumneto indica cuantos elemntos recortare/ elimare/extreré
 * Luego los siguimientos idicaran los elementos que agregare al array que estoy operando
 * ¿QUE RETORNA SPLICE? 
 * es un array con elementos recortados. En caso que haya indicado que recortare 0 elemntos, recibire un array vacio.
 */

const estudiantes = ['Nelson', 'Oscar', 'Johan', 'Cristian', 'Santiago']
//                    0         1         2          3         4
//                    -5        -4        -3         -2        -1                         

console.log('--------------------------------');

console.log(estudiantes.splice(2, 2)); //[ 'Johan', 'Cristian' ]

console.log(estudiantes); //[ 'Nelson', 'Oscar', 'Santiago' ]
//                               0        1          2
console.log(estudiantes.splice(0, 0, 'Critian', 'Cristyan')) //[]
console.log(estudiantes); //[ 'Critian', 'Cristyan', 'Nelson', 'Oscar', 'Santiago' ]
//                               0             1        2         3         4
console.log(estudiantes.splice(2, 0, 'Karla'));// []
console.log(estudiantes); //[ 'Critian', 'Cristyan', 'Karla', 'Nelson', 'Oscar', 'Santiago' ]
//                                0           1         2          3      4          5

const test = estudiantes.splice(-1, 1, 'Bramndhom')
console.log(test);// ['Santiago']
console.log(estudiantes); //[ 'Critian', 'Cristyan', 'Karla', 'Nelson', 'Oscar', 'Bramndhom' ]


console.log('--------------------------------');

//SLICE
// El slice se utilza para hacer coipias de array, y en si la sintaxis es la siguiente:
// .slice(indiceIncial, indiceFinal)
// Es muy importante recordar que no incluira al elemento del ultimo indice
// Tambien recibe numeros negativos
// El slice no necesariamente debe llevar argumentos

const color = ['Rojo', 'Verde', 'Azul', 'Amarillo']
//               0        1        2        3

console.log(color.slice(1, 3)); //[ 'Verde', 'Azul' ]
console.log(color.slice(0)); //[ 'Rojo', 'Verde', 'Azul', 'Amarillo' ]
console.log(color.slice(-3, -1)); //[ 'Verde', 'Azul' ]
console.log(color.slice()); //[ 'Rojo', 'Verde', 'Azul', 'Amarillo' ]
console.log(color.slice(-2, -1)); //[ 'Azul' ]
console.log(color.slice(-2)); //[ 'Azul', 'Amarillo' ]
console.log(color.slice(1)); //[ 'Verde', 'Azul', 'Amarillo' ]
console.log(color.slice(-1)); //[ 'Amarillo' ]