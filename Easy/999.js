/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  if (board.length == 0 || board[0].length == 0) return 0;
  const ways = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const rn = board.length;
  const cn = board[0].length
  // find where are the R and Bs
  let rx, ry;
  for (let x = 0; x < rn; x ++) {
      for (let y = 0; y < cn; y ++) {
          if (board[x][y] == 'R') {
              rx = x;
              ry = y;
          }
      }
  }
  const dfs = (x, y, direction) => {
      // 找到p
      if (board[x][y] == 'p') {
          return true;
      }
      // 单向探测
      const way = ways[direction];
      const nx = x + way[0];
      const ny = y + way[1];
      // 边界判断
      if (
        (direction == 0 && nx < 0) ||
        (direction == 1 && nx >= rn) ||
        (direction == 2 && ny < 0) ||
        (direction == 3 && ny >= cn) ||
        board[nx][ny] == 'B') {
          return false;
      }
      return dfs (nx, ny, direction);
  }
  let ps = 0;
  for (let i = 0; i < ways.length; i ++) {
      if (dfs(rx, ry, i)) ps += 1;
  }
  console.log('---------ps', ps);
  return ps;
};

// numRookCaptures([
//   [".",".",".",".",".",".",".","."],
//   [".",".",".","p",".",".",".","."],
//   [".",".",".","R",".",".",".","p"],
//   [".",".",".",".",".",".",".","."],
//   [".",".",".",".",".",".",".","."],
//   [".",".",".","p",".",".",".","."],
//   [".",".",".",".",".",".",".","."],
//   [".",".",".",".",".",".",".","."]
// ]);

numRookCaptures([[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]);

numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]);