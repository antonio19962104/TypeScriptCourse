class Main {
    run() {
        let productList = new Array() : Products;

        let categoria = new Categorias(1, "Lacteos");
        let product = new Products(1, "Leche", categoria);
        console.log(product.getProductInfo());
    }
}