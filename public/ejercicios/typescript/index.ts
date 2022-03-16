console.log('hello, TypeScript');

// Boolean
let muted: boolean = true;
muted = false;


// Números
//let age = '6'; //No se puede ya que solo permite numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;


// Strings
let nombre: string = 'Isaac';
let saludo = `me llamo ${nombre}`;


// Arrays
let people: string[] = [];
people = ["isabel", "Nicole", "Raul"];
//people.push(9);
people.push("9000")

let peopleNumbers: Array<string | number> = [];
peopleNumbers.push("Ricardo");
peopleNumbers.push(9000);


//Enums
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Rojo;
console.log(`mi color favorito es ${colorFavorito}`);


// Any
let comodin: any = "joker";
comodin = {type: "wildcard"};


//Object
let someObjec: object = {type: "wildcard"};


//Funciones
function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4,5)

function createAdder(a: number): (number) => number{
    return function(b: number) : number{
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//function fullName(firstName: string, lastName?: string): string{
//function fullName(firstName: string, lastName: string = 'Smith'): string{
function fullName(firstName: string, lastName: string) : string{
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard', 'Molina');
console.log(richard);


// Interfaces
interface Rectangulo {
    ancho: number,
    alto: number,
    color: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 3,
    color: Color.Rojo
}
/* let rect: Rectangulo = {
    ancho: 4,
    alto: 3,
    color?: Color.Rojo // PODEMOS DEJARLO OPCIONAL '?'
} */

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}
const areaRectangulo = area(rect);
console.log(areaRectangulo);

console.log(rect.toString());
rect.toString = function(){
    return `Un rectangulo ${this.color}`;
}
console.log(rect.toString());
