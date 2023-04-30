// Solution to https://leetcode.com/problems/add-two-numbers/

class ListNode {
    constructor(public val: number, public next: ListNode | undefined){}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return recursiveSum(l1, l2)
    
    function recursiveSum(l1: ListNode | null, l2: ListNode | null, previousNode: ListNode | null = null, excess: number = 0): ListNode {
        let sum: number = (l1?.val || 0) + (l2?.val || 0)
        sum += excess
        let newExcess: number = 0
        if(sum > 9) {
            newExcess = 1
            sum -= 10
        }
        const newNode = new ListNode(sum, undefined)
        if(previousNode) previousNode.next = newNode
        if(l1?.next || l2?.next || newExcess > 0) {
            recursiveSum(l1?.next || null, l2?.next || null, newNode, newExcess)
        }
        return newNode
    }
};