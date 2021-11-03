class Main {
    constructor() {
        let producList: Products[];
        for (var i = 0; i < 9; i++) {
            let categoryItem = new Categorias(i, "Categoria " + i);
            let productItem = new Products(i, "Producto " + i, categoryItem);
            producList.push(productItem);
        }
    }
    run() {
        let categoria = new Categorias(1, "Lacteos");
        let product = new Products(1, "Leche", categoria);
        console.log(product.getProductInfo());
    }
    getProducs() {
        [].forEach.call(prod)
    }
}