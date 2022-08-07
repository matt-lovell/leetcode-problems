
/**
 * Solution to https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number) {
    // Convert the array to a map, keyed on value with value of index in the array
    let numsMap: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const remainingTarget = target - number
        if (numsMap[remainingTarget] !== undefined && numsMap[remainingTarget] !== i) {
            return [numsMap[remainingTarget], i]
        }
        numsMap[nums[i]] = i
    }
}