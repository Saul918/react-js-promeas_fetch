console.log('Hola Mundo!!');

/* 
//Funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    return numero + 1;
}

//Llamar funcion SumarUno
let Resultado = fcnSumarUno(5);

//Desplegar el resultado en la consola 
console.log("Resultado", Resultado);
*/

//Funcion que recibe un numero y le suma uno.
function fcnSumarUno( numero, fcnResultadoCallBack ){
    setTimeout(function(){
      fcnResultadoCallBack( numero + 1 );
    }, 800);
}

//Llamar la funcion .
fcnSumarUno (5, function(nuevoValor1){
    //Resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});