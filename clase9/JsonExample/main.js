json = [	
    {
        "Nombre" : "Marki",
        "Apellido" : "Sancho"
    },
    {
        "Nombre" : "Juli",
        "Apellido" : "Perez"
    }
]

localStorage.FirstInput = prompt("Ingrese algo");
console.log(localStorage.FirstInput);
localStorage.SecondInput = prompt("Ingrese algo");
console.log(localStorage.SecondInput);

var FirstInput = localStorage.FirstInput
var SecondInput = localStorage.SecondInput
json.push({"name" : FirstInput, "apellido" : SecondInput})

localStorage.data = JSON.stringify(json)
var alo = JSON.parse(localStorage.data)
console.log(alo[2])







