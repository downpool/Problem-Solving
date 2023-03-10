/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ans = [-1, -1];
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                ans[0] = i;
                ans[1] = j;
                return ans;
            }
        }
    }
};

// 198ms, 16.98%
// 39.1mb, 94.73%
