function Product(tittle,price, stock, brand){
    this.tittle=tittle;
    this.price=price;
    this.stock=stock;
    this.brand=brand;
}
var carrito = {
    cantidadDeProductos: 0,
    costoAcumulado: 0,
    producto: [],
    addProduct : function(productToAdd) {
		carrito.producto.push( prod[parseInt(productToAdd)-1] )
    },
    updateStock : function(units, productToAdd)
    {
        prod[parseInt(productToAdd)-1].stock=prod[parseInt(productToAdd)-1].stock-units
    },
    updateCostAndUnitsToShop : function(units, productToAdd)
    {
        carrito.cantidadDeProductos = carrito.cantidadDeProductos+units
        carrito.costoAcumulado = carrito.costoAcumulado + ( prod[parseInt(productToAdd)-1].price* units )
    },
	get : function() {
        return carrito.producto;
    }

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
            carrito.addProduct(selectedProduct);
            carrito.updateStock(units, selectedProduct);
            carrito.updateCostAndUnitsToShop(units,selectedProduct)
            alert("se agrego "+units+" "+ prod[parseInt(selectedProduct)-1].tittle +" a tu carrito")
            
        }
        if (units>1){
            carrito.addProduct(selectedProduct);
            carrito.updateStock(units, selectedProduct);
            carrito.updateCostAndUnitsToShop(units,selectedProduct)
            alert("se agregaron "+units+" "+ prod[parseInt(selectedProduct)-1].tittle +"s a tu carrito")
        }    
    }
    if(selectedProduct > 5 || selectedProduct < 1 ) {
        alert("Debe ingresar un producto entre el 1 y el 5");
    }
    if(units > prod[parseInt(selectedProduct)-1].stock){
        alert("Actualmente no poseemos esa cantidad de "+prod[parseInt(selectedProduct)-1].tittle+"s"); 
    }
    if(isNaN(units)) {
        alert("Debe ingresar cuantas unidades desea adquirir");
    } 
}

function productSelector(){
    return (prompt("¿Qué producto desea agregar al carrito? ("+"1 = "+prod[0].tittle+", 2 = "+
    prod[1].tittle + ", 3 = "+prod[2].tittle + ", 4 = "+prod[3].tittle + ", 5 = "+prod[4].tittle+")"));
}

function unitsWantedToAdd(){
    return (prompt("¿Cuántas unidades de ese producto desea añadir al carrito?"));
}