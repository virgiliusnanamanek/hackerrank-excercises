//generate class called Cart
//it should return true if data is empty
//it should return items
//it can add new items 
//it can remove items
//it should return total item
//it should unique data

class Cart {
    constructor() {
        this.data = [];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    add(item) {
        this.data.push(item);
    }

    remove(item) {
        this.data = this.data.filter(i => i !== item);
    }

    total() {
        return this.data.length;
    }

    unique() {
        return [...new Set(this.data)];
    }
}

const cart = new Cart();
console.log(cart.isEmpty());