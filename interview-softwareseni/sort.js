// sorting array without sort() method
//console.log(sorting([2,1,4,3,1])); must return [1,1,2,3,4]

    function sorting(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    newArr.push(arr[i]);
                    newArr.push(arr[j]);
                }
            }
        }
        return newArr;
    }

    console.log(sorting([2,1,4,3,1]));