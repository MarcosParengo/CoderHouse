var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (var i = 1; i <= 7; i++) {
    if (i%2 === 0) {
       console.log(dias[i-1]+" es par");
       //el array tiene 7 posiciones empezando del 0, y yo inicialice mi i en 1,por lo que si quiero imprimir el 
       //correspondiente a esta vuelta debo indicar que es el valor del array de la posicion [i-1]
    }
    if (i == 7){
        console.log("NOOOO es " + dias[i-1]);
    }
}


