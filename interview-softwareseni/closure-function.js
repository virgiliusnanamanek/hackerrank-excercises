// generate a simple closure function 

function createClosure(num) {
    return function(nums) { // return a function
        return num + nums; // return the number
    }
}

console.log(createClosure(10)(5));
console.log(createClosure(20)(7));