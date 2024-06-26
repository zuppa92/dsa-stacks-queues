def calc(expression):
    tokens = expression.split()
    stack = []

    # Process the tokens in reverse order
    for token in reversed(tokens):
        if token in '+-*/':
            # Pop two operands from the stack
            operand1 = stack.pop()
            operand2 = stack.pop()
            
            # Perform the operation and push the result back to the stack
            if token == '+':
                stack.append(operand1 + operand2)
            elif token == '-':
                stack.append(operand1 - operand2)
            elif token == '*':
                stack.append(operand1 * operand2)
            elif token == '/':
                stack.append(operand1 / operand2)
        else:
            # Push the operand to the stack
            stack.append(int(token))
    
    # The result will be the last remaining element in the stack
    return stack[0]

# Example usage
if __name__ == "__main__":
    print(calc("+ 1 2"))           # 1 + 2 == 3
    print(calc("* 2 + 1 2"))       # 2 * (1 + 2) == 6
    print(calc("+ 9 * 2 3"))       # 9 + (2 * 3) == 15
    print(calc("- 1 2"))           # 1 - 2 == -1
    print(calc("- 9 * 2 3"))       # 9 - (2 * 3) == 3
    print(calc("/ 6 - 4 2"))       # 6 / (4 - 2) == 3
