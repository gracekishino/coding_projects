def factorial(n):   
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
    
def get_factorial_input():
    """ 
    Prompts the user for a non-negative integer and returns it. 
    Keeps prompting until a valid non-negative integer is provided. 
    """ 
    while True: 
        try: 
            n = int(input("Enter a non-negative integer: ")) 
            if n >= 0: 
                return n 
            else: 
                print("That was a negative integer. Try again.") 
        except ValueError: 
            print("That was not an integer. Try again.")



def test_factorial():
    assert factorial(0) == 1
    assert factorial(1) == 1
    assert factorial(2) == 2
    assert factorial(5) == 120
    assert factorial(10) == 3628800
    assert factorial(20) == 2432902008176640000
    print("Passed all tests!")


test_factorial()
number = get_factorial_input() 
print(f"The factorial of {number} is {factorial(number)}") 

        

    
    