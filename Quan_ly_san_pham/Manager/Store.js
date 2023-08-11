class Store{
    listProduct;

    constructor() {
        this.listProduct = [];
    }

    add(newProduct){
        this.listProduct.push(newProduct);
    }

    findAll(){
        return this.listProduct;
    }

    remove(index){
        this.listProduct.splice(index, 1);
    }

    edit(index, newProduct){
        this.listProduct[index] = newProduct;
    }


}