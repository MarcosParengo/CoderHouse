$(document).ready(function () {
    
    domSetup();
    fillContainer(prod);
    results = prod
    searchTextInput.addEventListener("input", function () {
        searchKey.html(event.target.value);
        if (event.target.value.length > 0) {
            buttonCancelSearch.attr("disabled", false)
            search(event.target.value)
            //ML(event.target.value);
        }
        if (event.target.value.length == 0) {
            buttonCancelSearch.attr("disabled", true)
            fillContainer(prod);
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