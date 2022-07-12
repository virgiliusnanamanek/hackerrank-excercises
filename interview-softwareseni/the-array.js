const subjects = ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS'];
console.log(subjects);
subjects.push('Python'); // add item to the end of the array
console.log(subjects);
subjects.unshift('Python'); // add item to the beginning of the array
console.log(subjects);
subjects.pop(); // remove item from the end of the array
console.log(subjects);
subjects.shift(); // remove item from the beginning of the array
console.log(subjects);
subjects.splice(2, 1); // remove item from the array
console.log(subjects);
subjects.splice(2, 0, 'Python'); // add item to the array
console.log(subjects);
subjects.splice(2, 0, 'JavaScript'); // add item to the array
console.log(subjects);
subjects.splice(2, 0, 'NodeJS'); // add item to the array
console.log(subjects);
subjects.slice(2, 4); // remove item from the array
console.log(subjects);
subjects.sort(); // sort the array
console.log(subjects);
subjects.reverse(); // reverse the array
console.log(subjects);