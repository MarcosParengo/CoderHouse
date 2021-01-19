var number1;
var number2;
var signo;
var res;

number1 = getNumber();
signo = getSigno();
number2 = getNumber();

res = sumNumbers(number1, number2,signo); // number1 toma el valor de 12, number2 toma el valor de 23
mostrarNum(res);

function sumNumbers(number1, number2,signo){
number1 = number1 || 0;//si no le llega un valor como parametro toma el valor despues de ||
number2 = number2 || 0;//si no le llega un valor como parametro toma el valor despues de ||
if (signo == "+"){
    return parseInt(number1)+parseInt(number2);
}
if (signo == "/"){
    return parseInt(number1)/parseInt(number2);
}
if (signo == "*"){
    return parseInt(number1)*parseInt(number2);
}
if (signo == "-"){
    return parseInt(number1)-parseInt(number2);
}
else{
    return "no se pudo hacer la suma"
}
}

function mostrarNum(number){
    console.log(number);
}
function getNumber(numero){
  var number1 = prompt("ingrese un numero");	
  return number1;
}
function getSigno(numero){
    var number1 = prompt("ingrese un signo");	
    return number1;
  }
