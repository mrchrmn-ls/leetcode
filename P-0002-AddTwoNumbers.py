# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def evalList(ll: ListNode, i=1, n=0):
    while ll:
        n += i * ll.val
        i *= 10
        ll = ll.next
    return n

def listFrom(n: int, i=10):
    ll = ListNode(n % i)
    cursor = ll
    while n % i != n:
        i *= 10
        cursor.next = ListNode(int((n % i) / (i / 10)))
        cursor = cursor.next
    return ll

class Solution:

    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        return listFrom(evalList(l1) + evalList(l2))