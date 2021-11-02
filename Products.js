var Products = /** @class */ (function () {
    function Products(id, name, category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
    Products.prototype.getProductInfo = function () {
        return "Id: " + this.id + " Nombre: " + this.name + " Nombre Categoria: " + this.category.name;
    };
    return Products;
}());
//# sourceMappingURL=Products.js.map