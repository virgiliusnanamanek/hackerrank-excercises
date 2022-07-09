// function addA(a){
//     return function(b){
//         return a+b;
//     }
// }

// console.log(addA(1)(2)); // 3

// const sentence = "hello world";
// sentence.split('').reverse().join('');
// console.log(sentence);

// let fo = [];
// fo.push(1);
// fo.push(2);
// console.log(fo.length);

let fo = {n:1};
let bar = fo;
fo.x = fo = {n:2};
console.log(fo.x);