// primer archivo TS omg :ooooooooo
//TS es una extensión de JS para que la programación sea mucho más restrictiva ante problemas y más limpia. No es un lenguaje de programación

console.log("Estoy en typescript :p");

/* Para poder programar en TS debo de hacer un proceso para transformarlo de TS  a JS, proceso llamado Traspilación.
Detraspilar es pasar de JS a TS. Tmb se conoce como Compilación.

Los lenguajes compilados hacen una interpretación de TODO el código instantáneamente, no procesa línea por línea. 

Compilación es el procesar datos más cercanos al lenguaje del PC, es decir 0s y 1s.

Lenguaje de alto nivel = Lenguaje natural.
Lenguajes de bajo nivel = instrucciones matemáticas.

Traspilación: pasar info de un lenguaje de alto nivel a otro lenguaje de alto nievl.

Para ejecutar un archivo de TS en un navegador, tenemos que pasarlo a JS.

Parámetro: La aplicación solo puede ejecutarse si no hay errores.

Podemos usar comandos como -noEmit para evitar que el tsc genere el archivo JS.

Tmb existe el comando -noEmitOnError que sirve para que el programa no genere este archivo cuando detecte errores, de lo contrario si lo generará.


let varA = 1000;
varA = "Hola !" Esto en TS no es válido y aparecerá error.

*/

//ts es el compilador que revisa los errores del código y que pasa la info a JS.

//Verificar Tipos de dato JS

const age = 10; //const no permite asignarse un valor diferente al especificado, con let su valor si puede cambiar.

let nameUser = "Laura Riascos"

let isAuthenticated : boolean = true; //se especifica mucho más el tipo de dato de la variable. 

let user = {
    nameUser,
    age,
}

// user.height = 200 en TS no siempre es estático, si una propiedad no está definida, no la podemos agregar.

//en TS nos muestra que tipo de datos son las propiedades de nuestro objeto.

console.log(age.toString().toLocaleLowerCase());

//cuando no hemos especificado un tipo de dato en una variable, el valor por defecto será any.

//especificar un objeto 

let varA: {
    name: string,
    age: number
}; // asignamos los tipos de datos que queremos que sean ingresados en las propiedades.

varA = {
    name: "Sofía",
    age: 18
} //si una de las propiedades no corresponde al tipo de dato declarado, aparecerá error.


type Role = "ADMIN" | "USER";

type User = {
    name: string,
    age: number,
    password: string,
    state: "Activated" | "Inactive" | "Pending"; // ponemos explícitamente los datos que queremos que sean ingreasados.
    roles: Role[], //especificamos que es una LISTA de strings. tmb se puede representar con Array<Role>
}


type UserLogged = User & {
    addedProducts: string[]
}

//el símbolo & representa unión. Equivale al extends.

let laura: UserLogged = {
    name: "Sofía",
    age: 18,
    password: "12345",
    state: "Inactive",
    roles: ["USER", "ADMIN"], //especificando una lista dentro de un objeto.
    addedProducts: ["Producto1", "Producto2"]
};


/* Diferencia entre interface o type

La diferencia principal es que interface es para definir la forma de objetos y contratos de clase, y permite la extensión y fusión de declaraciones (declaration merging), mientras que type es más versátil, permitiendo definir uniones (|), intersecciones (&), tipos primitivos, y alias de tipos más complejos. Aunque ambas definen la estructura de datos, interface se usa más para la estructura de objetos y clases, y type para uniones, intersecciones y alias de tipos más flexibles.

*/