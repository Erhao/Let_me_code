/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const click_x = click[0];
  const click_y = click[1];

  // 挖到雷
  if (board[click_x][click_y] == 'M') {
      board[click_x][click_y] = 'X';
      return board;
  }

  const rn = board.length;
  const cn = board[0].length;

  const visited = [];
  for (let i = 0; i < rn; i ++) {
      visited[i] = [];
      for (let j = 0; j < cn; j ++) {
          visited[i][j] = 0;
      }
  }

  const ways = [[0,-1], [-1,0], [0,1], [1,0], [-1,-1], [-1,1], [1,1], [1,-1]];

  const dfs = (x, y) => {
      let M_count = 0;
      // 八向探索
      for (const way of ways) {
          const next_x = x + way[0];
          const next_y = y + way[1];

          // 边界检测
          if (next_x < 0 || next_x >= rn ||
              next_y < 0 || next_y >= cn ||
              visited[next_x][next_y]) continue;

          if (board[next_x][next_y] == 'M') {
              M_count += 1;
          }
      }
      if (M_count) {
          board[x][y] = M_count + '';
          visited[x][y] = 1;
      } else { // 八周无雷
          board[x][y] = 'B';
          visited[x][y] = 1;
          // 递归揭露相邻方块
          for (const way of ways) {
              const next_x = x + way[0];
              const next_y = y + way[1];

              // 边界检测
              if (next_x < 0 || next_x >= rn ||
                  next_y < 0 || next_y >= cn ||
                  visited[next_x][next_y]) continue;

              dfs(next_x, next_y)
          }
      }
      return;
  }
  dfs(click_x, click_y);
  console.log(board);
  return board;
};

updateBoard([
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'E', 'E', 'E']], [3,0]);

updateBoard([
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'E', 'M', 'E']], [3,0]);

updateBoard([
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'M', 'E'],
['E', 'E', 'E', 'M', 'E']],
[3,0]);

updateBoard([
['E', 'E', 'E', 'E', 'E']],
[0,0]);

updateBoard([
['E', 'E', 'M', 'E', 'E']],
[0,0]); // [ [ 'B', '1', 'M', 'E', 'E' ] ]

updateBoard([
['E', 'M', 'E', 'E', 'E']],
[0,0]); // [ [ '1', 'M', 'E', 'E', 'E' ] ]

updateBoard([
['E', 'M', 'E', 'E', 'E']],
[0,4]);