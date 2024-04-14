/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let max = 0;

    for (let num of nums) {
        max = Math.max(max, num);
    }

    let buckets = Array(max + 1);
    for (let num of nums) {
        buckets[num] += num;
    }

    let dp = Array(max + 1);
    dp[0] = buckets[0];
    dp[1] = buckets[1];

    for (let i = 2; i < buckets.length; i++) {
        dp[i] = Math.max(buckets[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[max];
};

//84ms, 55.27%
//41.1mb, 61.12%