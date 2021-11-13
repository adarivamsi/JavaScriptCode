console.clear();
console.log("Coin Change");

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let a = 1; a < amount + 1; a++) {
    for (let coin of coins) {
      console.log(`i: ${a} coin: ${coin} dp: ${dp}`);
      if (a - coin >= 0) {
        console.log("chnaged");
        dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
      }
    }
    console.log("");
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};

// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 3, 4, 5], 7));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([1], 1));
// console.log(coinChange([1], 2));
