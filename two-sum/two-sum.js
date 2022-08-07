/**
 * Solution to https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Convert the array to a map, keyed on value with value of index in the array
    var numsMap = {};
    for (var i = 0; i < nums.length; i++) {
        var number = nums[i];
        var remainingTarget = target - number;
        if (numsMap[remainingTarget] !== undefined && numsMap[remainingTarget] !== i) {
            return [numsMap[remainingTarget], i];
        }
        numsMap[nums[i]] = i;
    }
};
