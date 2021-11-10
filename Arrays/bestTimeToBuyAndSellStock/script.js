console.log("Best Time to Buy and Sell Stock");

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//         console.log(
//           `iteration: i:${i}, j:${j}, ${profit}`,
//           prices[j] - prices[i]
//         );
//       if (prices[j] - prices[i] > profit) {
//         profit = prices[j] - prices[i];
//       }
//     }
//   }

//   return profit;
// };

// O(1) Space O(n)
var maxProfit = function (prices) {
  let profit = 0;
  let min = Infinity;
  prices.forEach((price) => {
    console.log(`Price: ${price}, Min: ${min}, Profit: ${profit}`);
    price < min ? (min = price) : (profit = Math.max(profit, price - min));
  });
  // prices.forEach((price) =>
  //   price < min ? min = price : profit = Math.max(profit, price - min)
  // );

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
