var LIMITDOWN = 10;
var LIMITUP = 18;
 
var userAge= prompt("Cuantos años tenes?");
    
if (((userAge >= LIMITDOWN && userAge <= LIMITUP) || userAge == 50)){
    console.log("sos un adolecente uwu o 50ton")
}else{
    console.log("o muy chico o muy grande")
}

