// sorting array without sort() method
//console.log(sorting([2,1,4,3,1])); must return [1,1,2,3,4]

function sorting(arr){
    var temp;
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

console.log(sorting([2,1,4,3,1]));