//"var" --> Permite crear una variable de la manera: var variable;
//variable puede cambiar su valor a lo largo del programa y es global
//-----------Ejemplo var-------------
var variable;
variable=0;
console.log(variable);
//El tipo "var" permite crear una variable global

//"const" --> Permite crear una variable que no cambia su valor
//No se puede inicializar una variable const de la forma: const constante
//No se puede hacer constante++ o cualquier operación que cambie el contenido de constante
//Se debe asignar un valor, en la inicialización
//-----------Ejemplo const-------------
const constante=10;
console.log(constante);
//"let" --> Permite crear una variable de alcance limitado al bloque al que pertenece (scoop)
//No se puede redeclarar, es decir no se puede: let varlet; let varlet;
//-----------Ejemplo let-------------
if(true){
    let variable=5 //Cambio el valor de variable a 5, pero solo dentro de este if
    console.log(variable);
}
console.log(variable);
console.log("Fin");
