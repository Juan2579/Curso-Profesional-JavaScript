//Boolean
let muted: boolean = false;
muted = false

//Number
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//String
let nombre: string = "Richard"
let saludo = `Me llamo ${nombre}`

//arreglos
let people: string[] = []
people = ["Maria", "Nicol", "Raul"]
//people.push(900) => error

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(10)

//Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}
let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = "Joker"
comodin = {type: "WildCard"}

//Object
let someObject: object = {type: "WildCard"}



// ------------------------------------------------------------ //

//functions
function add(a: number, b: number): number  {
    return a + b
}
const sum = add(4, 3);

function createAdder(a:number): (number) => number {
    return function(b: number){
        return b + a
    }
}
const addFour = createAdder(4)
console.log(addFour)
const fourPlus6 = addFour(6)
console.log(fourPlus6)

function fullName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`
}

const richard = fullName('richard')
console.log(richard)