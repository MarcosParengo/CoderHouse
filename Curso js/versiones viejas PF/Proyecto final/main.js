function Product(tittle,price, stock, brand){
    this.tittle=tittle;
    this.price=price;
    this.stock=stock;
    this.brand=brand;
}
var carrito = {
    cantidadDeProductos: 0,
    costoAcumulado: 0,
    producto: []
  }

var Tabla = new Product("Tabla",4000,10,"Element")
var Rueda = new Product("Rueda",5000,10,"Bones")
var Lija = new Product("Lija",1000,10,"Grizzly")
var Rulemanes = new Product("Rulemanes",4000,8,"RedBones")
var Truck = new Product("Truck", 5000, 20, "Independent")


var prod = [Tabla, Rueda, Lija, Rulemanes, Truck];

var selectedProduct = productSelector();
var units = unitsWantedToAdd();
addToCart(selectedProduct, units);
console.log(carrito)

function addToCart(selectedProduct, units){
if (!isNaN(units) && selectedProduct <= 5 && selectedProduct >= 1 && units <= prod[parseInt(selectedProduct)-1].stock){
    if (units==1){
        carrito.producto.push( prod[parseInt(selectedProduct)-1] )
        carrito.cantidadDeProductos = carrito.cantidadDeProductos+units
        carrito.costoAcumulado = carrito.costoAcumulado + ( prod[parseInt(selectedProduct)-1].price* units )
        alert("se agrego "+units+" "+ prod[parseInt(selectedProduct)-1].tittle +" a tu carrito")
        prod[parseInt(selectedProduct)-1].stock=prod[parseInt(selectedProduct)-1].price-units
    }
    if (units>1){
        carrito.producto.push(prod[parseInt(selectedProduct)-1])
        carrito.cantidadDeProductos = carrito.cantidadDeProductos+units
        carrito.costoAcumulado = carrito.costoAcumulado + ( prod[parseInt(selectedProduct)-1].price * units )
        alert("se agregaron "+units+" "+ prod[parseInt(selectedProduct)-1].tittle +"s a tu carrito")
        prod[parseInt(selectedProduct)-1].stock=prod[parseInt(selectedProduct)-1].price-units
    }    
    //TODO: lista de Objeto producto(nombre del producto en carrito, cantidad y precio) (ArrayList js ?? matriz)
    //TODO: acumulador de precio
}
else{
    alert("Error: el producto ingresado no esta entre los productos"+
    "disponibles(1-5) o la cantidad ingresada no es un número");
}
}

function productSelector(){
    return (prompt("¿Qué producto desea agregar al carrito? ("+"1 = "+prod[0].tittle+", 2 = "+
    prod[1].tittle + ", 3 = "+prod[2].tittle + ", 4 = "+prod[3].tittle + ", 5 = "+prod[4].tittle+")"));
}

function unitsWantedToAdd(){
    return (prompt("¿Cuántas unidades de ese producto desea añadir al carrito?"));
}