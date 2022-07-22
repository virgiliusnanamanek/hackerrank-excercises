/**
 * towerBreakers has the following paramter(s):
int n: the number of towers
int m: the height of each tower
Returns:    
int: the winner of the game
 */

    function towerBreakers(n, m){
        let winner = 0;
        let max = 0;
        for(let i=0; i<n; i++){
            if(m[i] > max){
                max = m[i];
                winner = i;
            }
        }
        return winner;
    }
    console.log(towerBreakers(3, [1,2,3]));
    // try another round of towerBreakers
    console.log(towerBreakers(4, [1,2,3,4]));