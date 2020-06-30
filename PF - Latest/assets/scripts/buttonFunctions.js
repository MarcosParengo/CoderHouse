buttonCancelSearch = $("#buttonCancelSearch")
comprar = $("#comprar")
cancelarCompra = $("#cancelarCompra")

buttonCancelSearch.click(function () {
    searchTextInput.value = "";
    searchKey.html("");
    fillContainer(prod);
})

comprar.click(function () {
    alert("Su compra no se ha realizado con exito ya que no se implemento ningun metodo :'c")
})

cancelarCompra.click(function deleteCarrito() {
    cantidadDeItems = "0";
    costo = "0";
    itemsCarrito = "";
    setCarrito();

    listaCarrito.hide("slow", function () {
        itemsCarrito = ""
        updateCarritoHTML();
    })

    prod.forEach(function (prod, index) {
        prod.stock=prod.defaultStock
    })
    fillContainer(results);
})

function AddItemToCart(itemId) {
    if(!(prod[itemId - 1].stock==0)){
    getCarrito();
    itemsCarrito = itemsCarrito + "<li>" + prod[itemId - 1].tittle + "</li>";
    cantidadDeItems = parseInt(cantidadDeItems) + 1
    costo = parseInt(costo) + prod[itemId - 1].price;
    setCarrito();
    updateCarritoHTML();
    listaCarrito.show()
    updateCarritoHTML();
    prod[itemId - 1].stock=prod[itemId - 1].stock-1;
    fillContainer(results);
}   
else{
    alert("no quedan mas unidades de "+ prod[itemId - 1].tittle)
}
}

