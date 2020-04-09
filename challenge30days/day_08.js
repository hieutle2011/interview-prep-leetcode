/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slowPtr = head
  let fastPtr = head

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next
    fastPtr = fastPtr.next.next
  }
  return slowPtr
};
