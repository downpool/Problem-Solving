/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let dp = Array(n).fill(Number.MAX_SAFE_INTEGER);
    dp[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--)
        for (let j = 1; j <= nums[i]; j++)
            dp[i] = Math.min(dp[i], 1 + dp[Math.min(n - 1, i + j)]);
    return dp[0];
};

//325ms, 22.13%
//41mb, 60.87%