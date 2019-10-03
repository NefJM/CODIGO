//CICLO.......

/*A menudo cuando se escribe código,se desea que el mismo bloque de código se ejecute una y otra, y otra vez 
 en forma consecutiva. En vez de agregar muchas líneas casi iguales de código,
 en JAVASCRIPT se pueden utilizar los ciclos para desempeñar una tarea como ésta.*/


//CICLO FOR
/*se utiliza cuando sabemos cuántas veces vamos a ejecutar un pedazo de código.*/

//SINTAXIS

/*for (expresion-inicial;condicion; expresionIncremento) {
    sentencia
}*/
 
       //MUESTRA EN PANATALLA LOS 10 PRIMEROS NUMEROS;
       //MUESTRA LOS DIAS DE LA SEMANA;


/*..............................*..................................... */

//CICLO WHILE
/*...se suele utilizar cuando no sabes cuántas veces tienes que repetir el bucle,
  ...mientras se cumpla la condición, ejecuta el siguiente bloque de código entre llaves*/

//SINTAXIS

/*while(condicion){
   //bloque a ejecutar MIENTRAS la condicion sea verdadera
}*/

//MUESTRA EN PANATALLA LOS 20 PRIMEROS NUMEROS;
//MUESTRA LOS DIAS DE LA SEMANA;



/*...........................................*.........................*/

//CICLO DO WHILE....obligatoriamente siempre se ejecuta al menos una vez.
//SINTAXIS

// do{
     //codigo a ejecutar
// }while();

//MUESTRA EN PANATALLA LOS 5 PRIMEROS NUMEROS;




/*.........................................*..................................*/

//BREAk......Interrumpe el bucle en que se ejecute;

// var i;

// for( i = 0 ; i<=10 ; i++){
//   if (i == 3) {
//     continue;
//   }else{
//     alert(i);
//   }
// }

//CONTINUE......Saltar hasta la siguiente iteracion del bucle;




/*.......................................*..............................*/

//While o For 
//......For tiene incluido al contador en su propia sintaxis.

// var letra = "";
//  while (letra !== "x") {
//     letra = prompt("Introduzca la letra x para salir:");
//     console.log(letra);
// }

// var letra = "";
// for( ;letra !== 'x'; ){
//     letra = prompt("Introduzca la letra x para salir:");

// }

//Si sabemos cuántas repeticiones requerirá el bucle, será mejor utilizar el  for .
// En cambio, si no conocemos el número de vueltas requeridas, utiliza el  while .‌



  
  