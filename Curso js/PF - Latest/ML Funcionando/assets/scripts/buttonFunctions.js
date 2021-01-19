buttonCancelSearch = $("#buttonCancelSearch")
comprar = $("#comprar")
cancelarCompra = $("#cancelarCompra")

buttonCancelSearch.click(function () {
    searchTextInput.value = "";
    searchKey.html("");
    txtResult.html("")
    cantResultados.html("")
    ML("skate");
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
    $("#showHideCarrito").html("( + )") 
})

function AddItemToCart(itemId) {
    if(!productos[itemId].available_quantity==0){
    getCarrito();
    itemsCarrito = itemsCarrito + "<li>" + productos[itemId].title + "</li>";
    cantidadDeItems = parseInt(cantidadDeItems) + 1
    costo = parseInt(costo) + productos[itemId].price;
    setCarrito();
    updateCarritoHTML();
    updateCarritoHTML();
}   
else{
    alert("no quedan mas unidades de "+ prod[itemId - 1].tittle)
}
}

function toggleDetails(itemId){
    if($(`#detail${itemId}`).is(":visible")){
        $(`#detail${itemId}`).hide("slow")
        $(`#detailButton${itemId}`).removeClass("btn -primary")
        $(`#detailButton${itemId}`).addClass("btn -secondary")
        console.log("Algo")
    }else{
        $(`#detail${itemId}`).show("slow")
        $(`#detailButton${itemId}`).removeClass("btn -secondary")
        $(`#detailButton${itemId}`).addClass("btn -primary")
    }
}


