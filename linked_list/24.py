# -*- encoding: utf-8 -*-

# 链表交换相邻元素

class Node():

    def __init__(self, data):
        self.next = None  # type is Node
        self.data = data

    def set_next(self, next):
        self.next = next

    def get_data(self):
        return self.data

    def get_next(self):
        return self.next


class LinkList():

    def __init__(self) -> None:
        self.head = None  # type is Node

    def add(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node

    def size(self):
        count = 0
        counter = self.head
        while counter is not None:
            count += 1
            counter = counter.get_next()
        return count

    def show_all(self):
        all_vals = []
        p = self.head
        print('---------------p', p.data)
        while p is not None:
            all_vals.append(p.data)
            p = p.get_next()
        print(all_vals)


def swap(head: Node):
    if not head:
        return head  # return None
    while head and head.next:       # 1 2   3 4     None None
        b = head.next               # 2     4
        c = b.next                  # 3     None
        b.next = head               # 1     3
        head.next = swap(c)         # ?     ?(None)
        #                           # ?(4)   3.next
        #                           # b
        return b
    return head


if __name__ == "__main__":

    ll = LinkList()
    ll.add(6)
    ll.add(5)
    ll.add(4)
    ll.add(3)
    ll.add(2)
    ll.add(1)
    # check
    print(ll.size())
    ll.show_all()
    print(type(ll))

    res = swap(ll.head)
    print('--------------------res',
        res.data,
        res.next.data,
        res.next.next.data,
        res.next.next.next.data,
        res.next.next.next.next.data,
        res.next.next.next.next.next.data
    )
    print('ll head d', ll.head.data)

