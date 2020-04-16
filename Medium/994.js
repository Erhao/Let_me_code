/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rn = grid.length;
  const cn = grid[0].length;

  const ways = [[0,-1],[-1,0],[0,1],[1,0]];

  const queue = [];

  let one_count = 0; // 记录1的个数, 用以判断bfs之后是否全部的1都被染色

  const visited = [];
  for (let i = 0; i < rn; i ++) {
    visited[i] = [];
    for (let j = 0; j < cn; j ++) {
      visited[i][j] = 0;
      if (grid[i][j] === 2) queue.push([i,j]);
      else if (grid[i][j] === 1) one_count += 1;
    }
  }

  if (!queue.length) {
    if (!one_count) return 0;
    return -1;
  }

  let count = 0;
  let dyeing_count = 0; // 记录被染色的1的个数

  // bfs
  while (queue.length) {
    // 当前每个2都四向探索
    const queue_len = queue.length;
    for (let i = 0; i < queue_len; i ++) {
      const head = queue.shift();

      // 四向探索
      for (const way of ways) {
        const next_x = head[0] + way[0];
        const next_y = head[1] + way[1];

        // 边界检测
        if (next_x < 0 || next_x >= rn || next_y < 0 || next_y >= cn || visited[next_x][next_y] || grid[next_x][next_y] !== 1) {
          continue;
        }

        // 染色
        if (grid[next_x][next_y] === 1) {
          grid[next_x][next_y] = 2;
          dyeing_count += 1;
        }

        // 标记为已访问
        visited[next_x][next_y] = 1;

        // 入队
        queue.push([next_x, next_y]);
      }
    }

    count += 1;
  }
  if (one_count !== dyeing_count) return -1;
  return count - 1;
};

// console.log(orangesRotting([[2,1,1],[0,1,1],[0,1,1]]));
// console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
// console.log(orangesRotting([[0,2]]));
// console.log(orangesRotting([[2,2,1,0,0],[1,1,1,1,1],[1,1,0,1,1],[0,2,1,2,2]]));
// console.log(orangesRotting([[0,0,0,2],[1,1,0,1],[0,0,0,1]]));
// console.log(orangesRotting([[2,2,1,0,0],[0,1,0,2,1],[1,1,0,1,1],[0,0,0,1,1],[1,1,1,1,1]]));
// console.log(orangesRotting([[0]]));
// console.log(orangesRotting([[0,0,0],[0,0,0],[0,0,0]]));
// console.log(orangesRotting([[1,1,1],[1,1,1],[1,1,1]]));
console.log(orangesRotting([[1,1,1],[1,1,1],[1,1,0]]));