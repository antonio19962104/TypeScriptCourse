class Products{
    id: number;
    name: string;
    category: Categorias

    constructor(id: number, name: string, category: Categorias){
        this.id = id;
        this.name = name;
        this.category = category;
    }

    getProductInfo(): string {
        return "Id: " + this.id + " Nombre: " + this.name + " Nombre Categoria: " + this.category.name;
    }

}