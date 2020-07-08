function updateCarritoHTML() {

    HTMLcosto.html("($" + costo + ")")
    HTMLcantItems.html("(" + cantidadDeItems + ")")
    listaCarrito.html(itemsCarrito);

};

function getCarrito() {
    itemsCarrito = localStorage.getItem("carrito")
    cantidadDeItems = localStorage.getItem("cantItems")
    costo = localStorage.getItem("costo")
}

function setCarrito() {
    localStorage.setItem("carrito", itemsCarrito)
    localStorage.setItem("cantItems", cantidadDeItems)
    localStorage.setItem("costo", costo)
}