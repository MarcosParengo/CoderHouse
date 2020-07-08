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
    results = prod
    fillContainer(results);
})

comprar.click(function () {
    alert("Su compra no se ha realizado con exito ya que no se implemento ningun metodo :'c")
})

cancelarCompra.click(function deleteCarrito() {
    cantidadDeItems = "0";
    costo = "0";
    itemsCarrito = "";
    console.log(results)
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
    if (!(results[itemId - 1].stock == 0)) {
        getCarrito();
        itemsCarrito = itemsCarrito + "<li>" + results[itemId - 1].tittle + "</li>";
        cantidadDeItems = parseInt(cantidadDeItems) + 1
        costo = parseInt(costo) + results[itemId - 1].price;
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

function toggleDetails(itemId) {
    imageClass = $(`#imageClass${itemId}`)
    detail = $(`#detail${itemId}`)
    detailButton = $(`#detailButton${itemId}`)

    if (imageClass.is(":visible")) {
        imageClass.toggle("slow", function () {
            detail.toggle("slow")
        })
        detailButton.removeClass("btn -primary")
        detailButton.addClass("btn -secondary")
    } else {
        detail.toggle("slow", function () {
            imageClass.toggle("slow")
        })
        detailButton.removeClass("btn -secondary")
        detailButton.addClass("btn -primary")
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

function imageclick(itemId) {
    image = $(`#image${itemId}`)
    elseDiv = $(`#else${itemId}`)
    if (elseDiv.is(":visible")) {
        elseDiv.toggle("slow", function () {
            image.animate({
                height: "270px",
                width: (results[itemId].width * 270)/results[itemId].height
            })
        })
    }
    else {
        image.animate({
            height: results[itemId].height,
            width: results[itemId].width
        }, function () {
            elseDiv.toggle("slow")
        })
    }
}

