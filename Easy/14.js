/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
*/

var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let minLength = Infinity;
  strs.forEach(str => minLength = Math.min(minLength, str.length));
  if (!minLength) return '';
  for (let i = 0; i < strs[0].length; i++) {
    const base = strs[0][i];
    for (const str of strs) {
      if (str[i] !== base) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));