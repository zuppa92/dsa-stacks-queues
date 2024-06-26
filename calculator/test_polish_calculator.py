import unittest
from polish_calculator import calc

class TestPolishCalculator(unittest.TestCase):

    def test_addition(self):
        self.assertEqual(calc("+ 1 2"), 3)
    
    def test_multiplication_with_addition(self):
        self.assertEqual(calc("* 2 + 1 2"), 6)

    def test_nested_operations(self):
        self.assertEqual(calc("+ 9 * 2 3"), 15)
    
    def test_subtraction(self):
        self.assertEqual(calc("- 1 2"), -1)
    
    def test_combined_operations(self):
        self.assertEqual(calc("- 9 * 2 3"), 3)
        self.assertEqual(calc("/ 6 - 4 2"), 3)

if __name__ == "__main__":
    unittest.main()
