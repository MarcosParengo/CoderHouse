function fillContainer(obj) {
    containerProd.html("")
    obj.forEach(function (obj, index) {
        containerProd.append(`<div class="col-4-12">
                    <article class="search-item">
                        <div class="col-4-12">
                            <img src="${obj.image}"
                            width=${obj.width}
                            height=${obj.height}>
                        </div>
                        <div class="col-8-12">
                            <h2>${obj.tittle}</h2>
                            <p>$${obj.price}</p>
                            <p>Quedan ${obj.stock} unidades disponibles</p>
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

search = function (key) {
    results = [];
    prod.forEach((prod) => {
        if (prod.tittle.toLowerCase().includes(key.toLowerCase())) {
            this.results.push(prod);
        }
    });
    cantResultados.html(results.length)
    fillContainer(results)
    txtResult.html(" resultados para la busqueda ")
}