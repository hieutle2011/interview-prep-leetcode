import unittest

from python.module_strings.easy import Solution
solution = Solution()


class TestIsAnagram(unittest.TestCase):
    def test_is_anagram_1(self):
        s = "anagram"
        t = "nagaram"
        result = solution.isAnagram(s, t)
        self.assertEqual(result, True)

    def test_is_anagram_2(self):
        s = "rat"
        t = "car"
        result = solution.isAnagram(s, t)
        self.assertEqual(result, False)


class TestFirstUniqueChar(unittest.TestCase):
    def test_first_unique(self):
        s = "leetcode"
        result = solution.firstUniqChar(s)
        self.assertEqual(result, 0)

    def test_first_unique_2(self):
        s = "loveleetcode"
        result = solution.firstUniqChar(s)
        self.assertEqual(result, 2)

    def test_first_unique_3(self):
        s = ""
        result = solution.firstUniqChar(s)
        self.assertEqual(result, -1)

    def test_first_unique_4(self):
        s = "abcabc"
        result = solution.firstUniqChar(s)
        self.assertEqual(result, -1)


class TestValidSudoku(unittest.TestCase):
    def test_invalid_board(self):
        board = [
            ["8", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]
        result = solution.isValidSudokuV2(board)
        self.assertEqual(result, False)

    def test_valid_boardself(self):
        board = [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]
        result = solution.isValidSudokuV2(board)
        self.assertEqual(result, True)


if __name__ == '__main__':
    unittest.main()
