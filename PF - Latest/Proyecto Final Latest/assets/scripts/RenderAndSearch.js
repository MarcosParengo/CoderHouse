function fillContainer(obj) {
    containerProd.html("")
    obj.forEach(function (obj, index) {
        containerProd.append(`<div class="col-4-12">
                    <article class="search-item" >
                        <div class="col-4-12" id = "imageClass${index}" onclick="imageclick(${index})">
                            <img src="${obj.image}"
                            width=${obj.width}
                            height=${obj.height} id = "image${index}">
                        </div>
                        <div class="col-6-12" id = "detail${index}" style="display: none;">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Luctus venenatis lectus 
                        magna fringilla urna porttitor. Eu mi bibendum neque egestas. Netus et malesuada fames ac. 
                        Sit amet tellus cras adipiscing enim eu 
                        </p>
                        </div>
                        <div class="col-6-12" id="else${index}">
                            <h2>${obj.tittle}</h2>
                            <p>$${obj.price}</p>
                            <p>Quedan ${obj.stock} unidades disponibles</p>
                            <div>
                                <input type="button" class="btn -primary" value="Ver detalle" id="detailButton${index}" onclick="toggleDetails(${index})">
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
var results = []
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