var producList;
var Main = /** @class */ (function () {
    function Main() {
        for (var i = 0; i < 9; i++) {
            var categoryItem = new Categorias(i, "Categoria " + i);
            var productItem = new Products(i, "Producto " + i, categoryItem);
            producList.push(productItem);
        }
    }
    Main.prototype.run = function () {
        var categoria = new Categorias(1, "Lacteos");
        var product = new Products(1, "Leche", categoria);
        console.log(product.getProductInfo());
    };
    Main.prototype.getProducs = function () {
        [].forEach.call(producList, function (producto) {
            console.log(producto);
        });
    };
    return Main;
}());
//# sourceMappingURL=Main.js.map