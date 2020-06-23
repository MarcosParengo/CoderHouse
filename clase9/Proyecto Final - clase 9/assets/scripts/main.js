var searchKey;
var searchTextInput;
var listaCarrito;
var itemsCarrito;
var HTMLcantItems
var cantidadDeItems;
var buttonSearch;

window.onload= function(){
    buttonSearch = document.getElementById("buttonSearch")
    searchTextInput = document.getElementById("searchTextInput")
    searchKey = document.getElementById("searchKey")
    listaCarrito = document.getElementById("listaCarrito")
    HTMLcantItems = document.getElementById("HTMLcantItems")
    HTMLcosto = document.getElementById("HTMLcosto")

    itemsCarrito = localStorage.getItem("carrito")
    cantidadDeItems = localStorage.getItem("cantItems")
    costo = localStorage.getItem("costo")

    if((costo==null)){
        itemsCarrito = ""
        localStorage.setItem("carrito", itemsCarrito)
        
        cantidadDeItems = "0"
        localStorage.setItem("cantItems", cantidadDeItems)

        costo = "0"
        localStorage.setItem("costo", costo)
    }

    HTMLcosto.innerHTML = "($"+costo+")"
    HTMLcantItems.innerHTML = "("+cantidadDeItems+")"
    listaCarrito.innerHTML = itemsCarrito;

    buttonSearch.addEventListener("click", function mostrarAlert(event){
        alert(event.target.value);
        searchKey.innerHTML = searchTextInput.value;
    })

    searchTextInput.addEventListener("input", function algo(event){
        searchKey.innerHTML = event.target.value;
        var algo = "sas"
        if (event.target.value.length > 0){
            buttonSearch.disabled=false;
            console.log("si")
        }
        else{
            console.log(algo.length)
            buttonSearch.disabled=true;
            console.log("no")
        }
    })
    
} 

function AddItemToCart(itemId){

    itemsCarrito = localStorage.getItem("carrito")
    itemsCarrito = itemsCarrito + "<li>"+prod[itemId-1].tittle+"</li>";
    localStorage.setItem("carrito", itemsCarrito)
    listaCarrito.innerHTML = itemsCarrito;

    cantidadDeItems = localStorage.getItem("cantItems")
    cantidadDeItems = parseInt(cantidadDeItems)+1
    localStorage.setItem("cantItems", cantidadDeItems)
    HTMLcantItems.innerHTML = "("+cantidadDeItems+")";

    costo = localStorage.getItem("costo")
    costo = parseInt(costo)+prod[itemId-1].price;
    localStorage.setItem("costo", costo)
    HTMLcosto.innerHTML = "($"+costo+")"
}

function deleteCarrito(){ 
    itemsCarrito = ""
    localStorage.setItem("carrito", itemsCarrito)
    listaCarrito.innerHTML = itemsCarrito;

    cantidadDeItems = "0"
    localStorage.setItem("cantItems", cantidadDeItems)
    HTMLcantItems.innerHTML = "("+cantidadDeItems+")";

    costo = "0"
    localStorage.setItem("costo", costo)
    HTMLcosto.innerHTML = "($"+costo+")";
}

function comprar(){ 
    alert("Su compra no se ha realizado con exito ya que no se implemento ningun metodo :'c")
}

function Product(tittle,price, stock, brand){
    this.tittle=tittle;
    this.price=price;
    this.stock=stock;
    this.brand=brand;
}

var Tabla = new Product("Tabla element sections",5000,10,"Element")
var Rueda = new Product("Ruedas Bones OF 54mm",5000,10,"Bones")
var Lija = new Product("Lija Grizzly OG black microperforada",1000,10,"Grizzly")
var Rulemanes = new Product("Rulemanes Red Bones",4000,8,"RedBones")
var Truck = new Product("Truck Independent X BAKER 4 LIFE hollow", 5000, 20, "Independent")

var prod = [Tabla, Rueda, Lija, Rulemanes, Truck];

//----------------------------------------------cosas viejas que no se si en algun momento usare ----------------------------------------------------------------
 
/* var selectedProduct = productSelector();
    var units = unitsWantedToAdd();
    addToCart(selectedProduct, units);
    console.log(carrito) */
/*
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
        carrito.cantidadDeProductos = parseInt(carrito.cantidadDeProductos)+parseInt(units)
        carrito.costoAcumulado = carrito.costoAcumulado + ( prod[parseInt(productToAdd)-1].price* units )
    },
	get : function() {
        return carrito.producto;
    }

}
*/

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