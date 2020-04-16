// 这种递归实现会爆栈
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const rn = grid.length;
  const cn = grid[0].length;

  const directions = [null, [1,3], [2,4], [1,4], [3,4], [1,2], [2,3]];

  // 每种direction对应的street
  const d2s = [null, [1,4,6], [2,3,4], [1,3,5], [2,5,6]];

  const visited = [];
  for (let i = 0; i < rn; i ++) {
      visited[i] = [];
      for (let j = 0; j < cn; j ++) {
          visited[i][j] = 0;
      }
  }

  function dfs(row, col) {
    const strict_n = grid[row][col];
    // 走到最后一个
    if (row == rn - 1 && col == cn - 1) {
      return true;
    }

    // 探测
    for (const d of directions[strict_n]) {
      let next_row = row;
      let next_col = col;
      if (d == 1) {
        next_col -= 1;
      } else if (d == 2) {
        next_row -= 1;
      } else if (d == 3) {
        next_col += 1;
      } else if (d == 4) {
        next_row += 1;
      }
      // 边界判断
      if (next_row < 0 || next_row >= rn || next_col < 0 ||
        next_col >= cn || visited[next_row][next_col]) {
          continue;
        }
      // 通路判断
      if (!d2s[d].includes(grid[next_row][next_col])) {
        return false;
      }
      visited[row][col] = 1; // 走过的路标记一下
      if (dfs(next_row, next_col)) return true;
      visited[row][col] = 0; // 回溯
    }
    // 某个点所有的路都堵了
    return false;
  }
  return dfs(0,0)
};