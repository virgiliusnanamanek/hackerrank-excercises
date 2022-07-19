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
        this.data = this.data.filter(i => i !== item); // remove the item from the array if it is in the array.
    }

    count() {
        return this.data.length; // return the length of the array
    }

}

/**
 * If we consider the above snippet, the returned value is i !== item because if the id matches, i !== item will evaluate to false and returning false will remove the item.
 * So, we will filter and return the array, which does not include the item valued object. This is because we are using the filter method to remove the item.
 */

const cart = new Cart();
cart.add('a');
cart.add('b');
cart.add('b');
cart.add('d');
cart.add('e');
cart.add('e');
cart.remove('b');
cart.remove('e');
console.log(cart.count());
console.log(cart.isEmpty());
console.log(cart.data);
