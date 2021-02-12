import time


def func3():
    print('func3 start...')
    while 1:
        print('in func2 loop ...')
        time.sleep(2)


def func2():
    print('func2 start...')
    func3()


def func1():
    print('func1 start...')
    func2()


def main():
    func1()


if __name__ == "__main__":
    main()