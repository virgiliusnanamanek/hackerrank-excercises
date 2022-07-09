// accessory collection function

function acessoryCollection(L, A, N, D) {
    /*
     * Write your code here.
     */
    let count = 0;
    for (let i = 0; i < L.length; i++) {
        if (L[i] >= A) {
            count++;
        }
    }
    if (count >= N) {
        return D;
    } else {
        return 0;
    }

}