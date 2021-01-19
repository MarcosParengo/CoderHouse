var searchKey;
var searchTextInput;
var listaCarrito;
var itemsCarrito;
var HTMLcantItems
var cantidadDeItems;
var buttonSearch;
var buttonCancelSearch
var comprar
var cancelarCompra
var containerProd

function domSetup() {
    searchTextInput = document.getElementById("searchTextInput")
    searchKey = $("#searchKey")
    listaCarrito = $("#listaCarrito")
    HTMLcantItems = $("#HTMLcantItems")
    HTMLcosto = $("#HTMLcosto")
    containerProd = $("#containerProd")

    getCarrito();

    if ((costo == null)) {
        itemsCarrito = ""
        cantidadDeItems = "0"
        costo = "0"

        setCarrito();
    }

    updateCarritoHTML();
}
