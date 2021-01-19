buttonCancelSearch = $("#buttonCancelSearch")
comprar = $("#comprar")
cancelarCompra = $("#cancelarCompra")
showHideCarrito = $("#showHideCarrito")
searchTextInput = document.getElementById("searchTextInput")

buttonCancelSearch.click(function () {
    searchTextInput.value = "";
    searchKey.html("");
    txtResult.html("")
    cantResultados.html("")
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
    $("#showHideCarrito").html("( + )")
    prod.forEach(function (prod, index) {
        prod.stock = prod.defaultStock
    })
    fillContainer(results);
})

function AddItemToCart(itemId) {
    if (!(prod[itemId - 1].stock == 0)) {
        getCarrito();
        itemsCarrito = itemsCarrito + "<li>" + prod[itemId - 1].tittle + "</li>";
        cantidadDeItems = parseInt(cantidadDeItems) + 1
        costo = parseInt(costo) + prod[itemId - 1].price;
        setCarrito();
        updateCarritoHTML();
        updateCarritoHTML();
        prod[itemId - 1].stock = prod[itemId - 1].stock - 1;
        fillContainer(results);
    }
    else {
        alert("no quedan mas unidades de " + prod[itemId - 1].tittle)
    }
}

function algo(itemId) {
    if ($(`#detail${itemId}`).is(":visible")) {
        $(`#detail${itemId}`).hide("slow")
        $(`#detailButton${itemId}`).removeClass("btn -primary")
        $(`#detailButton${itemId}`).addClass("btn -secondary")
        console.log("Algo")
    } else {
        $(`#detail${itemId}`).show("slow")
        $(`#detailButton${itemId}`).removeClass("btn -secondary")
        $(`#detailButton${itemId}`).addClass("btn -primary")
    }
}

showHideCarrito.click(function () {
    $("#listaCarrito").toggle("slow", function () {
        if ($("#listaCarrito").is(":visible")) {
            $("#showHideCarrito").html("( - )")
        } else {
            $("#showHideCarrito").html("( + )")
        }
    })
})

searchTextInput.addEventListener("input", function () {
    searchKey.html(event.target.value);
    if (event.target.value.length > 0) {
        buttonCancelSearch.attr("disabled", false)
        search(event.target.value)
    }
    if (event.target.value.length == 0) {
        buttonCancelSearch.attr("disabled", true)
        fillContainer(prod);
        txtResult.html("")
        cantResultados.html("")
        results = prod
    }
})

