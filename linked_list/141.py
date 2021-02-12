# -*- encoding: utf-8 -*-

"""
给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
如果 pos 是 -1，则在该链表中没有环。
注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Node():

    def __init__(self, val) -> None:
        self.next = None
        self.val = val

    def set_next(self, next):
        self.next = next

    def get_val(self):
        return self.val


class LinkList():

    def __init__(self) -> None:
        self.head = None

    def add(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node


"""
链表是否有环:
1. O(n), 空间复杂度:O(n), 遍历链表的所有node, 并使用map保存遍历过的所有节点, 如果有重复则说明有环, 遍历结束无重复则说明无环
2. O(n), 空间复杂度:O(1), 快慢指针, 快指针与慢指针相遇则说明有环
"""


def hasCycle(head: Node):
    fast = slow = head
    while slow and fast and fast.next:
        fast = fast.next.next
        slow = slow.next
        if fast is slow:
            return True
    return False


if __name__ == "__main__":

    ll = LinkList()
    ll.add(6)
    ll.add(5)
    ll.add(4)
    ll.add(3)
    ll.add(2)
    ll.add(1)

    print(hasCycle(ll.head))