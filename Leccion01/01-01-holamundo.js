var nombre = 'Ariel'
console.log(typeof nombre) ;
nombre = 7;
console.log(typeof nombre);
nombre = 12.3;
console.log(typeof nombre);
var numero =3000;
var apellido = 'Gramajo' ;
console.log(apellido);

var objeto = {
    nombre : 'Ariel',
    apellido : 'Betancud',

}
console.log(objeto);

//tipos de datos boolean funciones y symbol en js
var bandera = true;
console.log(bandera);
if (bandera != false){
    console.log("es true") ;
}

// tipo de dato funcion
function mi_funcion(){
    
}

console.log( typeof mi_funcion());

var simbolo = Symbol("mi simbolo");
console.log(simbolo);

class Persona{
    constructor(name,lastname){
    this.name = name;
    this.lastname = lastname;
    }
}
console.log( typeof Persona);

var x;
console.log(x)
x = undefined;
console.log(typeof x);

var y = null;
console.log(typeof y);
