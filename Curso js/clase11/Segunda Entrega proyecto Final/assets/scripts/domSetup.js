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

function domSetup() {
    searchTextInput = document.getElementById("searchTextInput")
    searchKey = $("#searchKey")
    listaCarrito = $("#listaCarrito")
    HTMLcantItems = $("#HTMLcantItems")
    HTMLcosto = $("#HTMLcosto")

    getCarrito();

    if ((costo == null)) {
        itemsCarrito = ""
        cantidadDeItems = "0"
        costo = "0"

        setCarrito();
    }

    updateCarritoHTML();
}
