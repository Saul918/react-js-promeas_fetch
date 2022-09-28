//Funcion normal que regresa una promesa
//Resultado con retardo.
function fcnSumarLento( numero ){
    return new Promise(function(resolve, reject){
      /*if(numero >= 5 ){
            reject('Sumar Lento Fallo');
        } */
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

//Evaluacion de errores agregada (reject)
//Retardando respuesta para que funcion lenta termine antes
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve( numero + 1 );
            reject('Error en la promesa de la funcion SR')
            }, 1000);
    });
}

//Promise.race
//Con catch
Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuestas:', respuesta);
    })
    .catch(error=>{
        console.log("Error en la respuesta de la promesa", error);
    });
