function fillContainer(){
    prod.forEach(function (prod, index) {
        containerProd.append(`<div class="col-4-12">
                    <article class="search-item">
                        <div class="col-4-12">
                            <img src="${prod.image}"
                            width=${prod.width}
                            height=${prod.height}>
                        </div>
                        <div class="col-8-12">
                            <h2>${prod.tittle}</h2>
                            <p>$${prod.price}</p>
                            <div>
                                <input type="button" class="btn -primary" value="Ver detalle">
                                <input type="button" class="btn -secondary"  value="Agregar al carrito" id="${index+1}" onclick="AddItemToCart(id)">
                            </div>
                        </div>
                    </article>
                </div>`)
    })
}