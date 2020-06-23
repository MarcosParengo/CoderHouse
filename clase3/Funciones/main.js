var number1;
var number2;
var res;
var i = 0;
function sumNumbers(){
    number1 = prompt("ingrese el primer numero");
    number2 = prompt("ingrese el segundo numero");
    res = parseInt(number1) + parseInt(number2);
}

vueltas = prompt("¿Cuantas sumas quiere hacer?");
while(i < vueltas)
{
    sumNumbers();
    console.log(res);
    i++;
}

