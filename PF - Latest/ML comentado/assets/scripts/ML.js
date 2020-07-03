function ML(key){
var url = `https://api.mercadolibre.com/sites/MLA/search?q=${key}`
            $.ajax({method: "get",
                url: url
            }).done(function(data){
                fillContainerML(data.results)
                console.log(data.results)})
            .fail(function (error){
                console.log(error)})
}

function fillContainerML(obj) {
    containerProd.html("")
    obj.forEach(function (obj, index) {
        containerProd.append(`<div class="col-12-12">
                    <article class="search-item">
                        <div class="col-4-12">
                            <img src="${obj.thumbnail}">
                        </div>
                        <div class="col-8-12">
                            <h2>${obj.title}</h2>
                            <p>$${obj.price}</p>
                            <p>Quedan ${obj.available_quantity} unidades disponibles</p>
                            <div>
                                <input type="button" class="btn -primary" value="Ver detalle" id="detailButton${index}" onclick="algo(${index})">
                                <input type="button" class="btn -secondary"  value="Agregar al carrito" id="${index + 1}" onclick="AddItemToCart(id)">
                            </div>
                        </div>
                        <div class="col-12-12">
                            <h2 id="detail${index}" style="display: none;">Texto1</h2>
                        </div>
                    </article>
                </div>`)
    })
}