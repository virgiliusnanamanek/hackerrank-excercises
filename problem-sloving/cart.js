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
        //only add if not already in cart
        if(!this.data.includes(item)) {
            this.data.push(item);
        }
    }

    remove(item) {
        this.data = this.data.filter(i => i !== item);
    }

    count() {
        return this.data.length;
    }

}

const cart = new Cart();
cart.add('a');
cart.add('b');
cart.add('b');
cart.add('d');
cart.add('e');
cart.add('e');
console.log(cart);