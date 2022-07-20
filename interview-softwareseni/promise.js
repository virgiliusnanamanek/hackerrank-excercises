// generate a promise function to get the data from the API

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => {
            reject(xhr.statusText);
        }
        xhr.send();
    });
}

console.log(getData('https://jsonplaceholder.typicode.com/users'));