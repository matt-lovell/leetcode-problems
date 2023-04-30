//Solution to https://leetcode.com/problems/two-sum/

var twoSum = function (nums: number[], target: number) {
    // Convert the array to a map, keyed on value with value of index in the array
    let numsMap: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const remainingTarget = target - number
        // On each pass, check if the remaining value is already in the map.
        if (numsMap[remainingTarget] !== undefined) {
            // If so, return as we have found the solution.
            return [numsMap[remainingTarget], i]
        }
        // If not, add the value to the map
        numsMap[nums[i]] = i
    }
}