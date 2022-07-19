/**
 * dynamicArray has the following parameters:
- int n: the number of empty arrays to initialize in arr
- string queries[q]: query strings that contain 3 space-separated integers
Returns:
int[]: the results of each type 2 query in the order they are presented
 */

//convert this code bellow to javascript:
/**
 * def dynamicArray(n, queries):
    lastAnswer=0
    answer=[]
    arr=[[] for i in range(n)]
    for i in queries:
        idx=((i[1] ^ lastAnswer) % n)
        if i[0] == 1:
            arr[idx].append(i[2])
        if i[0] == 2:
            lastAnswer=arr[idx][i[2] % len(arr[idx])]
            answer.append(lastAnswer)
    return answer
 */

   function dynamicArray(n, queries) {
    let lastAnswer = 0; // initialize lastAnswer to 0
    let answer = []; // initialize answer to empty array
    let arr = []; // initialize arr to empty array
    for (let i = 0; i < n; i++) { // loop through n times
        arr[i] = []; // initialize each element of arr to empty array
    }
    for (let i = 0; i < queries.length; i++) { // loop through queries length times
        let idx = ((queries[i][1] ^ lastAnswer) % n); // calculate idx
        if (queries[i][0] === 1) { // if queries[i][0] is 1
            arr[idx].push(queries[i][2]); // append queries[i][2] to arr[idx]
        }
        if (queries[i][0] === 2) { // if queries[i][0] is 2
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length]; // calculate lastAnswer
            answer.push(lastAnswer); // append lastAnswer to answer
        }
    }
    return answer; // return answer
}

console.log(dynamicArray(5, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]));