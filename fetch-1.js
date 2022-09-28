console.log("¡Hola Mundo!");
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
//Propiedad readyState validada
request.onreadystatechange = function( state ){
    if(request.readyState === 4) {
        //La respuesta obtiene un string
        var resp = request.response;
        //Darle formato a la cadena
        var respObj = JSON.parse(resp);
        //Resultado a consola
        console.log(respObj);
        //Obtener solo la pagina actual.
        console.log( respObj.page);
        //Obtener solo la data de los usuarios.
        console.log( respObj.data);
    }
}
