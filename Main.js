var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        var categoria = new Categorias(1, "Lacteos");
        var product = new Products(1, "Leche", categoria);
        console.log(product.getProductInfo());
    };
    return Main;
}());
//# sourceMappingURL=Main.js.map