/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  const rn = A.length;
  const cn = A[0].length;

  const ways = [[0,-1], [-1,0], [0,1], [1,0]];

  const visited = [];
  for (let i = 0; i < rn; i ++) {
      visited[i] = [];
      for (let j = 0; j < cn; j ++) {
          visited[i][j] = 0;
      }
  }

  // 1小岛入队, 供BFS使用
  const queue = [];

  // 将1小岛染色为2
  const dfs = (x, y) => {
      // 染色
      A[x][y] = 2;
      queue.push([x,y]);

      for (const way of ways) {
          const next_x = x + way[0];
          const next_y = y + way[1];

          if (next_x < 0 || next_x >= rn || next_y < 0 || next_y >= cn || visited[next_x][next_y]) {
              continue;
          }

          if (A[next_x][next_y] == 1) {
              visited[next_x][next_y] = 1;
              dfs(next_x, next_y);
          }
      }
  }

  let flag = false;
  for (let i = 0; i < rn; i ++) {
      for (let j = 0; j < cn; j ++) {
          if (A[i][j] == 1) {
              dfs(i,j);
              flag = true;
              break;
          }
      }
      if (flag) break;
  }

  // 清空visited
  for (let i = 0; i < rn; i ++) {
      visited[i] = [];
      for (let j = 0; j < cn; j ++) {
          visited[i][j] = 0;
      }
  }

  let count = 0;

  // BFS
  while (queue.length) {
      // 每一个1小岛都去四向探索
      const temp_q_len = queue.length;
      for (let i = 0; i < temp_q_len; i ++) {
          const head = queue.shift();
          // 四向探索
          for (const way of ways) {
              const next_x = head[0] + way[0];
              const next_y = head[1] + way[1];

              if (next_x < 0 || next_x >= rn || next_y < 0 || next_y >= cn || visited[next_x][next_y] || A[next_x][next_y] == 2) {
                  continue;
              }
              if (A[next_x][next_y] === 1) {
                  return count
              }

              queue.push([next_x, next_y]);
              visited[next_x][next_y] = 1;
          }
      }
      count += 1;
  }
};

// console.log(shortestBridge([[0,1],[1,0]]));
// console.log(shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]));
// console.log(shortestBridge([[1,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,1]]));
console.log(shortestBridge([[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]]));