
var veces= prompt("cuantas veces quiere repetir la fucion?")
while (isNaN(veces)) {
    veces= prompt(veces+ " no es un numero, por favor ingrese uno para determinar cuantas veces se repetite la fucion")
}
for (let index = 0; index < veces; index++) {
   Funcion();
}


function funcion(){
    var nombre = prompt('Por favor, indique su nombre');
    var mensaje = "Hola "
    mensaje = mensaje + nombre;
    alert(mensaje)
}