var product = [{
    "name": "algu",
    "apellido": "sancho",
    "hermanos" : 2
}, {
    "name": "marki",
    "apellido": "sancho",
    "hermanos" : 2
}, {
    "name": "juli",
    "apellido": "parengo",
    "hermanos" : 4
}, {
    "name": "agus",
    "apellido": "Coran",
    "hermanos" : 3
}]

var order = []

function renderProduct() {
    product.forEach(function (product, index) {
        productContainer.append(`<li class="listGroupItem" data-id="${index}">${index} - ${product.name}</li>`)
    })
    var listGroupItem = $('.listGroupItem')
    listGroupItem.click(function (event) {
        var indexSelection = $(event.target).data("id")
        if (indexSelection==1){
            alguito.hide("slow")
        }
        if (indexSelection==2){
            alguito.show("slow")
        }
        addOrder(indexSelection)
    })

}
function addOrder(index) {
    order.push(product[index])
    renderOrder()
}

function renderOrder() {
    var total = 0;
    orderContainer.empty()
    order.forEach(function (order, index) {
        orderContainer.append(`<li class="listGroupItemOrder" data-id="${index}">${index} - ${order.name}</li>`)
        total = total + order.hermanos
    })
    console.log(total)
}

$(document).ready(() => {
    orderContainer = $("#orderContainer")
    productContainer = $("#productContainer")
    alguito = $("#alguito")
    renderProduct();
})

