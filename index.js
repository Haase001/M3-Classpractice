//CLASE 1 

//console.log imprime en la consola la información que le pidas

//console.log('Hola desde JS!')

//Para poner una alerta que aparece en la página se usa:

/*
alert('Estás siendo espiado xD')
*/

//Usamos var para inicializar una variable y asignarle un nombre para identificarla

/*
var nombre = 'Haase' //Los string van entre comillas ya sean simples o dobles

var edad = 29

var gusto1 = 'Escuchar musica'

var gusto2 = 'Correr'
*/

//console.log(typeof nombre) //Esto va a decirte que tipo de dato esta guardado con ese nombre

//Separando por comas puedes imprimir varias variables a la vez, a esto se le llama concatenar

/*
console.log(nombre, edad, gusto1, gusto2)
*/


//Para darle un mejor formato, podemos escribir en medio de la informacion

/*
console.log('Mi nombre es:', nombre, 'tengo la edad de', edad, 'me gusta', gusto1, 'y tambien', gusto2)
*/

//Hay una manera mas de hacer lo anterior, con los template strings (``) aqui puedes llamar a la variable usando ${} sin salir de los template string

/*
console.log(`Mi nombre es ${nombre}, tengo la edad de ${edad}, me gusta ${gusto1} y tambien ${gusto2}`)
*/

//Metodos de salida

/*
console.log
alert
document.write
*/

//Metodos de entrada

/*
prompt
*/

//Solicitamos datos a los clientes y apareceran en consola

/*
var nombre = prompt('Ingresa tu nombre')

var edad = prompt('Ingresa edad')

var gusto1 = prompt('Ingresa tu pasatiempo favorito')

var gusto2 = prompt('Ingresa otra actividad que te guste')

console.log(`Mi nombre es ${nombre}, tengo la edad de ${edad}, me gusta ${gusto1} y tambien ${gusto2}`)
*/

//Prompt por defecto regresa todo dato ingresado a string, en el siguiente ejemplo solo va a concatenar los datos ingresados en lugar de sumarlos

/*

var numero1 = prompt('Ingresa un número')

var numero2 = prompt('Ingresa otro número')

var numero3 = prompt('Ingresa otro número')

console.log(numero1 + numero2 + numero3)
*/

//En este segundo ejemplo usamos el metodo number, el cual convierte un string en un numero

/*

var numero1 = number(prompt('Ingresa un número'))

var numero2 = number(prompt('Ingresa otro número'))

var numero3 = number(prompt('Ingresa otro número'))

console.log(numero1 + numero2 + numero3)
*/

//Tambien se pueden usar los metodos parseInt (para numeros enteros) o parseFloat (cuando tienes decimales)
/*

var numero1 = parseInt(prompt('Ingresa un número'))

var numero2 = parseInt(prompt('Ingresa otro número'))

var numero3 = parseInt(prompt('Ingresa otro número'))

console.log(numero1 + numero2 + numero3)


var numero4 = parseFloat(prompt('Ingresa un número'))

var numero5 = parseFloat(prompt('Ingresa otro número'))

var numero6 = parseFloat(prompt('Ingresa otro número'))

console.log(numero4 + numero5 + numero6)
*/

//O se puede usar el metodo number directamente al usar console.log

/*

var numero1 = prompt('Ingresa un número')

var numero2 = prompt('Ingresa otro número')

var numero3 = prompt('Ingresa otro número')

console.log(number(numero1) + number(numero2) + number(numero3))
*/

//CLASE 2


//Usamos let para variables que podemos modificar, para modificarlas mas adelande simplemente escribimos el nombre de la variable y su nuevo valor

/*
let nombre = 'Miguel';

console.log(nombre); //Aqui se imprime "Miguel"

nombre = 'Angel';

console.log(nombre); //Aqui se imprime "Angel"
*/

//Usamos const para variables que no van a cambiar

/*
const apellido = 'Hernández';

console.log(apellido); 
*/

//El uso de var no se recomienda ya que es muy permisivo, te deja redeclarar variables y eso puede resultar en problemas de lógica mas adelante

/*
var nombredeescuela = 'Juan Manuel';

console.log(nombredeescuela);

var nombredeescuela = 'Ramon López'; //Aqui nos permitió redeclarar y no marcó ningun error

console.log(nombredeescuela); 
*/


//Práctica de uso de if y else if

/*
if (10 > 20) {
    console.log('Diez es mayor que cinco')
}
else if (20 < 30){
    console.log('Veinte es menor que treinta')
}
else if (5 == 5) {
    console.log('Cinco es igual a cinco')
}
*/

//Podemos evaluar una o mas condiciones usando && (AND) y || (OR)

/*
console.log(10 === 10 && 20 === 20)

console.log(10 ===10 && 10 === 20)

console.log(11 === 10 || 10 === 10)

console.log((10 < 9 || 15 > 5) && (20 === 21 || 20 < 15))
*/

//Hacer una app que valide si una persona es apta 
// para recibir la licencia de conducir

//Validar que la persona haya pasado el examen teórico, práctico y tenga buen vision

/*
let teorico = prompt('Pasaste el examen teórico? Si / No');

let practico = prompt('Pasaste el examen práctico? Si / No');

let vista = prompt('Que resultado obtuviste en tu examen de la vista? Apto / No apto');

if (teorico === 'Si' && practico === 'Si' && vista === 'Apto') {
    alert('Felicidades, puedes tener tu licencia');
};
else if(teorico === 'No' && practico === 'No' && vista === 'No apto') {
    alert('Necesitas repetir todos tus examenes, vuelve otro día');
};
else if(teorico === 'No' && practico === 'No' && vista === 'Apto') {
    alert('Fallaste tus examenes teorico y practico. En necesario repetirlos');
};
else if(teorico === 'No' && practico === 'Si' && vista === 'No apto') {
    alert('Fallaste tus examenes teorico y de la vista. En necesario repetirlos');
};
else if(teorico === 'Si' && practico === 'No' && vista === 'No apto') {
    alert('Fallaste tus examenes practico y de la vista. En necesario repetirlos');
};
else if(teorico === 'No') {
    alert('Fallaste tu examen teorico. Ponte a estudiar huevon!');
};
else if(practico === 'No') {
    alert('Fallaste tu examen práctico. Ponte chingón');
};
else if(vista === 'No apto') {
    alert('Fallaste tu examen de la vista. Vete a revisar los ojos');
};
else{
    alert('Contacta al admin');
};
*/

// Crea una aplicacion para validar la entrada a un parque temático
// Edad y altura, debe tener más de 12 años de edad y 140cm de altura
//Pago o pase, Debe haber hecho el pago del boleto o pase VIP
//Salud, No debe tener condiciones médicas
//Acompañante, si es menor de 16 debe estar acompañado de un adulto

/*
let edad = Number(prompt('Ingresa tu edad'));
let altura = Number(prompt('Ingresa tu altura en cm'));

if(edad >= 12 && altura >= 140){
    let pase = prompt('Tienes un pase VIP? si / no')
    let pago = prompt('Ya realizaste el pago del boleto? si / no')
    let salud = prompt('Tienes alguna condición médica? si / no')
    if (pase === 'si' || pago === 'si' && salud === 'no' && edad >= 16){
        alert('Bienvenido, puedes ingresar al parque')
    }
    else if(pase === 'si' || pago === 'si' && salud === 'no' && edad < 16){
        alert('Es necesario que te acompañe un adulto para ingresar')
        let acompañante = prompt('Te acompaña un adulto? si / no')
        if(acompañante === 'si'){
            let pagoacompañante = prompt('Tu acompañante ya realizo su pago? si / no')
            if (pagoacompañante === 'si'){
                alert('Bienvenido, pueden ingresar al parque')
            }
            else{
                alert('Es necesario que tu acompañante pague su entrada para poder ingresar')
            }
        }
        else{
            alert('Es necesario que te acompañe un adulto para ingresar')
        }
    }
    else if (pase === 'no' && pago === 'no'){
        alert('Es necesario realizar tu pago para poder ingresar')
    }
    else if(salud === 'si'){
        alert('No pueddes ingresar si no cuentas con una buena salud')
    }
}
else {
    alert('No puedes ingresar al parque')
}
*/

//CLASE 3

//Los ciclos while ejecutan un bloque de código hasta cumplir una condición
/*
let index = 1; //Aqui iniciamos una variable con el nombre index y le dimos un valor de 1

while (index <= 10) { //La condicion es, mientras index sea menor o igual a 10, ejecuta el código
    console.log(index); //Imprime el valor de index
    index++ //Suma 1 al valor actual de index
}
*/

//Los ciclos for ejecutan un bloque de código un número determinado de veces
/*
for (let index = 0; index < 10; index++) { //Iniciamos la variable, luego la condicion, y al final el incremento //Recuerda usar comas (,)
    console.log('Iteracion', index);
}

for (let index = 0; index < 10; index++) {
    console.log(`Iteracion ${index}`);
}
*/

//Los array son una manera de almacenar datos bajo el nombre de una sola variable, no olvides usar la comas (,)
//Los arrays se declaran entre []
/*
const emojis = ['👌', '💕', '🤮', '🤧', '😡', '🤬', '💀']; //Para poner emojis Win + .

console.log(emojis); //De esta manera imprimes toda el array

console.log(emojis[3]); //Asi accedes a la posicion 3 dentro del array, cabe recordar que en el array las posicions comienzan desde el 0

//Con los diferentes metodos puedes modificar los arrays

emojis.push('Soy Nuevo'); //El metodo .push() agrega un elemento al final del array

console.log(emojis);

emojis.pop(); //El metodo .pop() elimina el último elemento del array

console.log(emojis);

emojis.unshift(41); //El metodo .unshift agrega un elemento al inicio del array

console.log(emojis);

emojis.shift(); //El metodo .shift elimina el primer elemento de un array

console.log(emojis);

//Iterar un array significa recorrer cada uno de los elementos del array para hacer algo con ellos
//En este caso el ejemplo de mostrarlos

for (let index = 0; index < emojis.length; index++) { //El método .length devuelve la cantidad total de elementos
    console.log(emojis[index]);
}
*/

//Los objetos nos ayudan a guardar caracteristicas de un elemento
//Los objetos se declaran entre {}
/*
const auto = {
    marca: 'Chevrolet',
    modelo: 'chevy',
    color: 'Rojo',
    año: '2008'
}

console.log(auto); // Aqui se imprimen todas las caracteristicas
console.log(auto.marca); //Aqui accedemos solo a la información de la llave que se pide
*/

//Dentro de un array podemos guardar multiples objetos
/*
const autos = [
    {marca: 'Honda', modelo: 'Civic', color: 'verde'}, // No olvides las comas (,) para separar cada objeto
    {marca: 'Chevrolet', modelo: 'Spark', color: 'azul'},
    {marca: 'Volkswagen', modelo: 'Platina', color: 'guinda'},
    {marca: 'Toyota', modelo: 'Corolla', color: 'blanco'},
    {marca: 'Subaru', modelo: 'WXR', color: 'gris'},
    {marca: 'Tesla', modelo: 'Model 3', color: 'rojo'},
    {marca: 'Ford', modelo: 'Mustang', color: 'negro'},
    {marca: 'BMW', modelo: 'M4', color: 'azul'},
    {marca: 'Renault', modelo: 'Clio', color: 'gris'},
]

console.log(autos); //Aqui me imprime el array completo con cada uno de sus caracteristecas
console.log(autos[1].marca); //Aqui me imprime la marca de la posicion 1 del array de carros
console.log(autos[2]['marca']); //Curiosamente esto tambien funciona

//Vamos a hacer una aplicacion que busque la informacion de un auto por marca

let autobuscado = null; //Creamos una variable con valor nulo que podremos usar despues
let busquedausuario = prompt('Que marca buscas?')

for (let index = 0; index < autos.length; index++) { //Creamos nuestro ciclo para que recorra el array
    if (autos[index].marca === busquedausuario) { //Aqui le decimos que si marca de alguna posicion (index) del array de autos es igual al que buscamos, entonces
        autobuscado = autos[index];         //cambie el valor de la variable autobuscado por la informacion del auto que esta en la posicion que hizo match
        break; //Aqui le decimos que al cumplirse la condicion, cierre el ciclo
    }
    
}

if (autobuscado) { //Aqui le decimos que si el valor de autobuscado cambia a true, ejecute el codigo
    console.log('Auto encontrado', autobuscado); //En este caso que imprima la info del auto que buscamos
} else {
    console.log('Auto no encontrado'); //En caso contrario, imprimira esto
    
}

//Vamos a filtrar por color

const colordeautos = []  //Creamos un array vacio donde podamos mandar la información despues
let busquedacolor = prompt('Que color de auto buscas?') //Creamos un prompt para que el usuario busque su color

for (let index = 0; index < autos.length; index++) { //Recorremos el array de autos
    if (autos[index].color === busquedacolor) { //Aqui le decimos que si el color buscado hace match con el color de algun elemento de la lista,
        colordeautos.push(autos[index])         //entonces agregue esa informacion al arreglo vacio
    }  // No agregamos un break por que queremos que mande la informacion de todos los autos que cumplieron la condicion
}

console.log('Lista de autos del color buscado', colordeautos); //Aqui nadamas imprime la informacion mandada al array
*/

//FizzBuzz
//Es un ejercicio clásico de la programación que ayuda a mejorar el pensamiento lógico y la estructura de los bucles condicionales.
//La tarea consiste en escribir un programa en JS que recorra los número del 1 al 100 y siga las siguientes reglas
//Si un número es múltiplo de 3, imprime Fizz
//Si un número es múltiplo de 5, imprime Buzz
//Si un número es múltiplo de 3 y 5 imprime FizzBuzz
//Si un número no es múltiplo de 3 o 5, simplemente imprime el número
/*
for(let index = 1; index <= 100; index ++) {
    if (index%3 === 0 && index%5 ===0) {
        console.log('FizzBuzz')
    }
    else if (index%3 === 0) {
        console.log('Fizz')
    }
    else if (index%5 === 0) {
        console.log('Buzz');
        
    }
    else {
    console.log(index);
    }
}
*/

//CLASE 4

//Las funciones son bloques de codigo que pueden ser reutilizadas para evitar repetir el codigo
//Su estructura basica es 
/*
function saludar () {
    console.log('Hola a todos! Soy una funcion');
}

//El código no se va a ejecutar a menos que lo mandemos a llamar

saludar ();

//Los parametros son datos que la funcion espera para poder ejecutar el codigo de manera correcta, van dentro de los ()

function sumar (numero1, numero2) {  //Aqui le decimos a la funcion que espere dor datos, numero1 y numero2
    console.log(numero1 + numero2);  //El codigo es imprimir una simple suma con los parámetros
}

//Los argumentos son los valores que le asignamos a los parámetros

sumar (10, 20) //Aqui mandamos a llamar a la funcion para ejecutar el codigo dentro de ella y asignamos valores a los parametros
sumar (50, 60) //Podemos mandar llamar a la funcion varias veces con valores diferentes

//Podemos agregar los parametros que gustemos, es importante saber que al llamar a los parametros, el orden en que los escribas sera el orden que tomaran los argumentos

function saludarDiferente(nombre, apellido, edad, pasatiempo) {
    console.log(`Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años y me gusta ${pasatiempo}`);
}

saludarDiferente('Haase', 'Hernández', 29, 'Escuchar música') // Recuerda separar con (,) cada valor
saludarDiferente(23, 'patinar', true, 'Pedro') //Si el orden no es el que asignaste en la funcion, no funcionará como quieres

//Las funciones pueden guardar datos con la palabra clave "return"

function restar (a, b) {
    console.log(a - b); //Se imprime en consola el resultado pero no se guarda en memoria
}

let resultado = restar(50, 20)
console.log(resultado); //Imprime undefined, ya que no se guarda el valor


function restar2 (a, b) {
    console.log(a - b);
    return (a-b);
}

let resultado2 = restar2(60, 20)
console.log(resultado2); //Imprime 40, ya que return guardó el valor, este valor lo podemos usar mas adelante
*/

//Podemos declarar funciones de distintas maneras
/*
//Las Arrow function son una forma mas concisa de escribir una funcion, estas heredarán el noombre de la variable en la que se encuentren

const hola = (L1, L2) => {
    console.log(L1 + L2);
} //La sintaxis es básicamente (parametros) => {codigo a ejecutar}

hola ('💀', '❤️')

//Las funciones anonimas también heredan el nombre de la variable que las contiene

const hola2 = function () { //importante usar la palabra reservada function en lugar de =>
    console.log('Soy una función anónima');
}

hola2 ()

// setTimeout es una funcion que ejecuta un código que dura una determinada cantidad de tiempo en iniciar

setTimeout(() => {
    alert('Soy una arrow function')
}, 3000) //La funcion espera dos parametros, funcion a ejecutar y tiempo en milesimas de segundo
*/

//Alcance de las variables (global y local)
//Las variables globales son las que se declaran fuera de cualquier funcion
/*
let global = 'Soy una variable global';

//Las variables locales son las que se declaran dentro de una funcion y solo viven dentro de ella

function scope () {
    let local = 'Soy una variable local'
    console.log(global);
    console.log(local); //Imprime la variable ya que esta dentro de la funcion
}

scope ()

console.log(global);
console.log(local); //Imprime un error, ya que esta variable solo vive dentro de la funcion
*/

//Ejemplo Práctico
//Crea una funcion que reciba un array de numeros que retorne cuantos son pares
/*
const numerosA = [];

for (let index = 0; index < 10; index++) {
    numerosA.push(prompt('Escribe un número'));
}

console.log(numerosA);


function contadordenumeros (numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            console.log(numeros[i]);
            contador++
        }
    }
    return contador;
}

console.log('Hay', contadordenumeros(numerosA), 'números pares')
*/

//CLASE 5
//Los objetos son estructuras de datos que agrupan informacion relacionada

//Crea un objeto de estudiantes con nombre, edad y un array con sus calificaciones
/*
const Estudiante = { //Abre el objeto con llaves
        nombre: 'Juan', //Dentro del objeto ingresamos datos en pares de clave-valor, estos se llaman métodos que deben ir seguidos de : para asignales un valor
        edad: 23, //Los datos pueden ser de cualquier tipo, incluso puede haber arrays u otros objetos
        calificaciones: [9, 10, 6, 7, 8, 9, 10], //No olvidar poner una , para separar cada método
} 

function promedio (calificaciones) {
    let suma = 0;
    for (let index = 0; index < calificaciones.length; index++) {
        suma += calificaciones[index];
    }
    return suma/calificaciones.length;
}

console.log(promedio(Estudiante.calificaciones));

//Crear un array de objetos con estudiantes, y crear una funcion que retorne un nuevo array con los nombres y promedios de los estudiantes

const estudiantes = [
    {nombre: 'Miguel', edad: 18, calificaciones: [6, 8, 7, 10, 6]},
    {nombre: 'Natalia', edad: 18, calificaciones: [9, 9, 9, 10, 10]},
    {nombre: 'José', edad: 19, calificaciones: [8, 8, 7, 10, 8]},
    {nombre: 'Lucresia', edad: 18, calificaciones: [6, 8, 6, 9, 7]},
    {nombre: 'María', edad: 17, calificaciones: [10, 10, 10, 10, 9]},
]

function generarReporte (estudiantes) {
    let reporte = []
    for (let index = 0; index < estudiantes.length; index++) {
        let suma = 0;
        for (let i = 0; i < estudiantes[index].calificaciones.length; i++) {
            suma += estudiantes[index].calificaciones[i];
        }
        let promedio = suma / estudiantes[index].calificaciones.length;
        reporte.push({nombre: estudiantes[index].nombre, promedio: promedio})
    }
    return reporte;
}

console.log(generarReporte (estudiantes));
*/

//Dentro de los objetos también podemos incluir funciones que podemos llamar mas adelante
/*
const personas = {
    nombre: 'Miguel',
    edad: 29,
    profesion: 'desarrollador',
    saludar: function () {
        return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años, actualmente trabajo como ${this.profesion}`
    } //Usando this. haces referencia a la informacion que esta dentro del mismo objeto
}

console.log(personas.nombre); //Imprime 'Miguel'
console.log(personas.saludar); //Imprime toda la funcion como un string
console.log(personas.saludar()); //Es importante llamar a la funcion para que solo aparezca el resultado
*/

//Crear un objeto con una libreria

const libreria = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupery',
    publicacion: 1943,
    capitulos: ['Introducción', 'El encuentro con el zorro', 'El asteroide B-612'],

    //Funcion para mostrar la información del libro
    mostrarinfo: function () {
        return `Libro: ${this.titulo} de ${this.autor} publicado en ${this.publicacion}`;        
    },

    //Funcion para listar capitulos
    listarcapitulos: function () {   //Creamos la funcion a mostrar
        console.log('Capitulos de', this.titulo, ':'); //Hacemos una impresion en consola de el titulo del libro
        this.capitulos.forEach((capitulo, index) => { //.forEach funciona como una funcion que por cada elemento del array ejecuta el código, dentro ejecutamos una arrow function
            // Dentro de .forEach el primer parámetro siempre hace referencia al array y el segundo que puede o no estar, hace referencia a un contador
            console.log(`${index + 1}. ${capitulo}`); 
        })
    },

    //Funcion para agregar un nuevo capitulo
    agregarCapitulo: function(nuevoCapitulo) {
        this.capitulos.push(nuevoCapitulo)
        console.log(`Nuevo capitulos ${nuevoCapitulo} agregado.`);
    }
}

console.log(libreria.mostrarinfo()); //Aqui ponemos console.log ya que en la función no hay indicación de que imprima en consola
libreria.listarcapitulos(); //Aqui no ponemos el console.log ya que dentro de la función lo pedimos que imprima en la consola
agregarCapitulo()
