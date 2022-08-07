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
        // On each pass, check if the remaining value is already in the map.
        if (numsMap[remainingTarget] !== undefined) {
            // If so, return as we have found the solution.
            return [numsMap[remainingTarget], i];
        }
        // If not, add the value to the map
        numsMap[nums[i]] = i;
    }
};
