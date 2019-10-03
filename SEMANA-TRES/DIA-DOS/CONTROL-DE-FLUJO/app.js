//IF..especifica un bloque de codigo que se ejecuta  si una condicion es cierta.
//Sintaxis:

//if(condicion){
    //las instrucciones si la condicion es verdadera
//}

var nota = 12;

if (nota > 10) {
    // console.log("Felicidades has aprobado");
}

//Else....especifica un bloque de codigo que se ejecuta si una condicion es falsa.


var nota1 = 05;
if (nota1 > 10) {
    // console.log("Felicidades usted aprobó el curso");

} else {
    // console.log("lo siento, pero usted desaprobo");
}

//Else if....especifica una nueva condicion si la primera es falsa.

var nota2 = 19;

if (nota2 < 11) {
    console.log("usted a desaprobado");

} else if (nota2 == 11) {
    console.log("usted paso a las justas");

} else if (nota2 > 11 && nota2 < 16) {
    console.log("usted esta en un promedio acepatable");
} else if (nota2 == 17 || nota2 == 18 || nota2 == 19 ){
    console.log("usted tiene un promedio excelente");
} else {
    console.log("usted e sun genio");
}


//.....................*..........................//


//switch ....Evaluan expresion e intenta comparar con el valor de la etiqueta CASE
//si encuentra una coincidencia, ejecuta el bloque de codigo.

// switch (expresion) {
//     case value:
        
//         break;

//     case value:
        
//         break;

//     default:
//         break;
// }

var estacion = prompt("¿cual es tu estacion favorita?")

switch (estacion) {
    case "primavera":
        console.log("la primavera");
        break;
    case "otoño":
        console.log("el otoño");
        break;
    case "invierno":
        console.log("el invierno");
        break;
    case "verano":
        console.log("el verano");
        break;
    default:
        console.log("el valor no es valido")
        break;
}


//............................................*............................//

//operador ternario .....nos va permitir realizar operacion, if else en una sola linea de codigo.

// (CONDICION) ? RESULTADO-CIERTO : RESULTADO-FALSO

var nota = prompt("¿cuanto es tu promedio?");
var mensaje = (nota>13)?"felicitaciones usted aprobo":"usted no aprobo";
console.log(mensaje);

