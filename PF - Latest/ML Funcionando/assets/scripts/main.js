$(document).ready(function () {
    ML("skate");

    domSetup();
    results = prod
    searchTextInput.addEventListener("input", function () {
        searchKey.html(event.target.value);
        if (event.target.value.length > 0) {
            buttonCancelSearch.attr("disabled", false)
            ML(event.target.value);
        }
        if (event.target.value.length == 0) {
            ML("skate");
            buttonCancelSearch.attr("disabled", true)
            txtResult.html("")
            cantResultados.html("")
            results = prod
        }
    })

    $("#showHideCarrito").click(function(){
        $("#listaCarrito").toggle("slow", function () {
        if($("#listaCarrito").is(":visible")){
            $("#showHideCarrito").html("( - )") 
        } else{
            $("#showHideCarrito").html("( + )")  
        }
        })
    })

})