function fibonacci(num) {
	 if num == 1:
        return 0
    elif num == 2:
        return 1

    a, b = 0, 1
    for _ in range(2, num):
        a, b = b, a + b
    return b
// your code here
}

module.exports = fibonacci;
