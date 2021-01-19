
var num1= prompt("numero1")
while (isNaN(num1)) {
    num1= prompt(num1+ " no es un numero")
}
var num2= prompt("numero2")
while (isNaN(num2)) {
    num2= prompt(num2+ " no es un numero")
}

num1=parseInt(num1)
num2=parseInt(num2)

var miFuncion = (numero1,numero2) => numero1+numero2;

alert(miFuncion(num1,num2)+" es el resultado");