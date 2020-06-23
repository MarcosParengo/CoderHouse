var searchKey;
var searchTextInput;
var listaCarrito;
var itemsCarrito;
var HTMLcantItems
var cantidadDeItems;
var buttonSearch;

function domSetup(){
buttonCancelSearch = document.getElementById("buttonCancelSearch")
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

buttonCancelSearch.addEventListener("click", function mostrarAlert(event){
    searchTextInput.value = "";
    searchKey.innerHTML = searchTextInput.value;
})

}
