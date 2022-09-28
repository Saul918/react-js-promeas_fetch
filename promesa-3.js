
/*
//Funcion normal que regresa una promesa
//el resultado se obtiene con retardo.
function fcnSumarLento( numero ){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

//Forma optimizada de definir de funcion
//pero de tipo arrow (flecha)
//Se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

//Llamar funcion sumar lento y su promesa.
fcnSumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta:', respuesta);
});
//Llamar funcion sumar rapido y su promesa.
fcnSumarRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
});

//Llamar de las 2 funciones y sus respectivas promesas al mismo tiempo.
Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
});
*/

// ----------------------------

//Funcion normal que regresa una promesa
//Resultado con retardo.
function fcnSumarLento( numero ){
    return new Promise(function(resolve, reject){
        /*if(numero >= 5 ){
            reject('Sumar Lento Fallo');
        }*/
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola...!'];

//Llamar as 2 funciones y sus respectivas promesas al mismo tiempo.
Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas: ", error);
});