//convert python code to javascript
/**
 * def findZigZagSequence(a, n):
    a.sort()
    mid = int(n / 2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return
 */

    function findZigZagSequence(a, n){
        a.sort();
        var mid = Math.floor(n/2);
        a[mid] = a[n-1];
        a[n-1] = a[mid];

        var st = mid + 1;
        var ed = n - 2;
        while(st <= ed){
            a[st] = a[ed];
            st = st + 1;
            ed = ed - 1;
        }

        for(var i=0; i<n; i++){
            if(i == n-1){
                console.log(a[i]);
            }
            else{
                console.log(a[i] + " ");
            }
        }
    }