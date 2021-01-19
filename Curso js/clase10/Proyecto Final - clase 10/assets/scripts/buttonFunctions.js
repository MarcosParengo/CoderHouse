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

