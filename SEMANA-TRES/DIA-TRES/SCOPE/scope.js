//SCOPE:....Es lo que termina la accesibilidad de nuestro codigo.

//GLOBAL:....Podemos acceder a ellas desde cualquier parte del codigo.

var variableGlobal = "soy una variable global"

function nombrar(){
    function nombrar1(){
        alert(variableGlobal);
    }
    nombrar1();  
}

nombrar();
console.log(variableGlobal);


/*.........................*.................................. */
//LOCAL:.
      /*Variables creadas dentro de una funcion, y solo pueden ser accedidas 
      desde su propia funcion o una funcion anidad*/

function apellido (){
    var variableLocal = "soy una variable local";

  function apellido2(){
       console.log(variableLocal);
  }

  apellido2();
}

apellido();
console.log(variableLocal);