/**
 * climbingLeaderboard has the following parameter(s):
int ranked[n]: the leaderboard renked
int player[m]: the player's scores
Returns:
int[m]: the player's rank after each new score
 */

    function climbingLeaderboard(ranked, player) {
        // your code here
        let rank = [];
        for (let i = 0; i < ranked.length; i++) {
          if (rank.length === 0) {
            rank.push(ranked[i]);
          } else {
            if (rank[rank.length - 1] === ranked[i]) {
              continue;
            }
            rank.push(ranked[i]);
          }
        }
        
        let res = [];
        let lowestRank = rank.length;
        for (let i = 0; i < player.length; i++) {
          while (player[i] >= rank[lowestRank - 1] && lowestRank > 0) {
            rank.pop;
            lowestRank--;
          }
          res.push(lowestRank + 1);
        }
        return res;
    }