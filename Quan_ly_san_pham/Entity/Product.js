class Product{
    _id;
    _name;
    _quantity;
    _price;

    constructor(id, name, quantity, price) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}