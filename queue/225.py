# -*- encoding: utf-8 -*-


class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.in_queue = []
        self.out_queue = []

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.in_queue.insert(0, x)

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        while self.in_queue:
            self.out_queue.insert(0, self.in_queue.pop())
        return self.out_queue.pop(0)

    def top(self) -> int:
        """
        Get the top element.
        """
        while self.in_queue:
            self.out_queue.insert(0, self.in_queue.pop())
        return self.out_queue[0]

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not bool(self.in_queue or self.out_queue)


if __name__ == "__main__":
    s = MyStack()
    s.push(1)
    s.push(2)
    print(s.top())
    s.push(3)
    print(s.top())

# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()