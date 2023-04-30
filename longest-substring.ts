// Solution to https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let count: number = 0
    let maxCount: number = 0
    let foundChars: Record<string, number> = Object.create(null)
    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        count ++
        const lastIndexOfChar = foundChars[char]
        if(lastIndexOfChar !== undefined) {
            if(count -1 > maxCount) maxCount = count -1
            count = i - foundChars[char]
            removePreviousIndexesFromMap(foundChars, lastIndexOfChar)
        } 
        foundChars[char] = i
    }
    if(count > maxCount) maxCount = count
    return maxCount
};

function removePreviousIndexesFromMap(map: Record<string, number>, currentIndex: number) {
    const keys = Object.keys(map)
    for(const key of keys) {
        const index = map[key]
        if(index < currentIndex)
        delete map[key]
    }
}