"""
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
"""


def isValid(s: str) -> bool:
    stack = []
    sl = list(s)
    for c in sl:
        if len(stack):
            if c in [')', ']', '}']:
                if c == ')' and stack[-1] == '(':
                    stack.pop()
                elif c == ']' and stack[-1] == '[':
                    stack.pop()
                elif c == '}' and stack[-1] == '{':
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        else:
            if c in ['(', '[', '{']:
                stack.append(c)
            else:
                return False
    if len(stack):
        return False
    return True


# Geek Time
def isValid2(s):
    stack = []
    pattern_map = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c not in pattern_map:
            stack.append(c)
        elif not stack or pattern_map[c] != stack.pop():
            return False
    return not stack


if __name__ == '__main__':
    print(isValid('({}){}[[][[]]]'))

