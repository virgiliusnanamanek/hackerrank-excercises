//generate class called Cart
//it should return true if data is empty
//it should return items
//it can add new items 
//it can remove items
//it should return total item
//it should unique data

class Cart {
    constructor() {
        this.data = []; // initialize data to an empty array
    }

    isEmpty() {
        return this.data.length === 0; // return true if data is empty
    }

    add(item) {
        //only add if not already in cart
        if(!this.data.includes(item)) { // if already in cart, do not add
            this.data.push(item); // add item to the end of the array
        }
    }

    remove(item) {
        this.data = this.data.filter(i => i !== item); // remove item from the array
    }

    count() {
        return this.data.length; // return the length of the array
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