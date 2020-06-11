from typing import List


class Solution:

    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        search = s
        for char in t:
            index_in_search = search.find(char)
            if index_in_search == -1:
                return False
            else:
                search = ''.join([search[:index_in_search], search[index_in_search+1:]])
        return True

    def firstUniqChar(self, s: str) -> int:
        """Given a string, find the first non-repeating character in it
        and return it's index. If it doesn't exist, return -1."""

        if s == "":
            return -1

        import string
        # assume the string contain only lowercase English letters.
        full = string.ascii_lowercase

        for i in range(len(s)):
            if s.rfind(s[i]) == i and s[i] in full:
                return i
            # for checked character, replace it with empty string
            full = full.replace(s[i], '')

        # If reaching this line, found none
        return -1

    def isValidSudoku(self, board: List[List[str]]) -> bool:
        helper = Helper()
        length = len(board)

        for i in range(length):
            # check row
            row = board[i]
            check_row = helper.checkValidSudokuList(row)
            if check_row == False:
                return check_row

            # check col
            col = []
            for j in range(length):
                col.append(board[j][i])
            check_col = helper.checkValidSudokuList(col)
            if check_col == False:
                return check_col

            # check grid
            if i % 3 == 0:
                for j in range(0, length, 3):
                    grid = []
                    grid.append(board[i][j])
                    grid.append(board[i+1][j+1])
                    grid.append(board[i+2][j+2])

                    grid.append(board[i+1][j])
                    grid.append(board[i+2][j])

                    grid.append(board[i][j+1])
                    grid.append(board[i][j+2])

                    grid.append(board[i+2][j+1])
                    grid.append(board[i+1][j+2])

                    check_grid = helper.checkValidSudokuList(grid)
                    if check_grid == False:
                        return check_grid

        # If reaching this line, found valid sudoku board
        return True

    def isValidSudokuV2(self, board: List[List[str]]) -> bool:
        """Faster version"""
        column_set = [set() for i in range(9)]
        grid_set = [set() for i in range(9)]
        for i in range(9):
            row_set = set()
            for j in range(9):
                num = board[i][j]
                if num != ".":
                    # print(i, j)
                    if num in row_set:
                        return False
                    else:
                        row_set.add(num)
                    if num in column_set[j]:
                        return False
                    else:
                        column_set[j].add(num)
                    if num in grid_set[int(i//3*3+j//3)]:
                        return False
                    else:
                        grid_set[int(i//3*3+j//3)].add(num)
        return True


class Helper:
    def checkValidSudokuList(self, arr: List) -> bool:
        filter_arr = list(filter(lambda item: item != ".", arr))
        if len(filter_arr) != len(set(filter_arr)):
            return False
        return True
