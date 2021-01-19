function LoadJson(url){
    $.ajax({method: "get",
        url: url,
        dataType : "json"
    }).done(function(data){
        prod = data
        domSetup();
        fillContainer(prod);
        results = prod
    })
    .fail(function (error){
        console.log(error)})
}