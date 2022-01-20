/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Number.MAX_SAFE_INTEGER;
    let maxfar = -Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        maxfar = Math.max(nums[i], maxfar + nums[i]);
        max = Math.max(max, maxfar);
    }

    return max;
};

//173ms, 5.51%
//48.6mb, 84.24%
