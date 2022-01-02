/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();
    let arr = new Set(nums);
    if (arr.size == nums.length) {
        return false;
    } else {
        return true;
    }
};

// 192ms, 18.48%
// 49.4mb, 6.63%
