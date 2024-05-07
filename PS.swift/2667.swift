import Foundation

var grid: [[Int]]

func dfs(i: Int, j: Int, maxi: Int, maxj: Int) {
    if i < 0 || i >= maxi || j < 0 || j >= maxj || grid[i][j] != "1" {
        return
    }

    grid[i][j] = "0"

    dfs(i: i + 1, j: j, maxi: maxi, maxj: maxj)
    dfs(i: i, j: j + 1, maxi: maxi, maxj: maxj)
    dfs(i: i, j: j - 1, maxi: maxi, maxj: maxj)
    dfs(i: i - 1, j: j, maxi: maxi, maxj: maxj)
}