// class of HashTable

class HashTable {
    constructor(size) {
        this.size = size; // size of the hash table
        this.buckets = new Array(size); // array of buckets
        this.keys = new Array(size); // array of keys
        this.values = new Array(size); // array of values
    }
    
    hash(key) {
        return key.split('').reduce((a, b) => { // return the sum of the ASCII values of the characters in the key
        return a + b.charCodeAt(0); // add the ASCII value of the current character to the sum
        }, 0) % this.size; // return the modulus of the sum of the ASCII values of the characters in the key divided by the size of the hash table
    }
    
    set(key, value) {
        const index = this.hash(key); // get the index of the bucket where the key should be stored
        if (!this.buckets[index]) { // if the bucket is empty
        this.buckets[index] = []; // create an empty array for the bucket
        this.keys[index] = []; // create an empty array for the keys
        this.values[index] = []; // create an empty array for the values
        }
        this.buckets[index].push(key); // add the key to the bucket
        this.keys[index].push(key); // add the key to the keys array
        this.values[index].push(value); // add the value to the values array
    }
    
    get(key) { // get the value of the key
        const index = this.hash(key); // get the index of the bucket where the key should be stored
        if (!this.buckets[index]) { // if the bucket is empty
        return null; // return null
        }
        const keys = this.keys[index]; // get the keys array
        const values = this.values[index]; // get the values array
        const indexOfKey = keys.indexOf(key); // get the index of the key
        if (indexOfKey === -1) { // if the key is not found
        return null; // return null
        }
        return values[indexOfKey]; // return the value of the key
    }
    
    delete(key) { // delete the key and its value
        const index = this.hash(key); // get the hash of the key
        if (!this.buckets[index]) { // if the bucket is empty
        return null; // return null
        }
        const keys = this.keys[index]; // get the keys array
        const values = this.values[index]; // get the values array
        const indexOfKey = keys.indexOf(key); // get the index of the key
        if (indexOfKey === -1) { // if the key is not found
        return null; // return null
        }
        keys.splice(indexOfKey, 1); // remove the key from the keys array
        values.splice(indexOfKey, 1); // remove the value from the values array
    }
}

const hashTable = new HashTable(10);
hashTable.set('greeting', 'hello');
hashTable.set('name', 'john');
hashTable.set('age', '30');
console.log(hashTable.get('name'));
console.log(hashTable.get('age'));
console.log(hashTable.get('greeting'));
hashTable.delete('name');
console.log(hashTable.get('name'));