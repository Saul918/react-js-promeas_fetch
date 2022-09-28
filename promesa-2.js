console.log('¡Hola Mundo!');

/*
//Funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
  return promesa;
} */

/*
//Llamar funcion y promesa
fcnSumarUno(5).then( function(nuevoNumero){
    console.log(nuevoNumero);
}) */

/*
//Llamar funcion y promesa (funcion flecha)
fcnSumarUno(5).then( nuevoNumero=>{
    console.log(nuevoNumero);
}); */

/*
//Llamar funcion y promesa
//Forma recursiva de manera encadenada.
fcnSumarUno(5).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
}); */

//Funcion que recibe un nuemero y le suma uno.
//Con if de valor mayor a 7
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        if (numero >= 7 ){
            reject('Numero muy alto');
        }
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
  return promesa;
}

//Llamar las promesas de manera optimizada
//Con catch
fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
})
.catch(error =>{
    console.log('Error en la promesa',error);
});