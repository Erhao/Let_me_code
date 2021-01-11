""" 收藏清单 """

"""
给你一个数组 favoriteCompanies ，其中 favoriteCompanies[i] 是第 i 名用户收藏的公司清单（下标从 0 开始）。

请找出不是其他任何人收藏的公司清单的子集的收藏清单，并返回该清单下标。下标需要按升序排列。



示例 1：

输入：favoriteCompanies = [["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]]
输出：[0,1,4]
解释：
favoriteCompanies[2]=["google","facebook"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 的子集。
favoriteCompanies[3]=["google"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 和 favoriteCompanies[1]=["google","microsoft"] 的子集。
其余的收藏清单均不是其他任何人收藏的公司清单的子集，因此，答案为 [0,1,4] 。
示例 2：

输入：favoriteCompanies = [["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]]
输出：[0,1]
解释：favoriteCompanies[2]=["facebook","google"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 的子集，因此，答案为 [0,1] 。
示例 3：

输入：favoriteCompanies = [["leetcode"],["google"],["facebook"],["amazon"]]
输出：[0,1,2,3]

提示：

1 <= favoriteCompanies.length <= 100
1 <= favoriteCompanies[i].length <= 500
1 <= favoriteCompanies[i][j].length <= 20
favoriteCompanies[i] 中的所有字符串 各不相同 。
用户收藏的公司清单也 各不相同 ，也就是说，即便我们按字母顺序排序每个清单， favoriteCompanies[i] != favoriteCompanies[j] 仍然成立。
所有字符串仅包含小写英文字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""

from typing import List


class Solution:

    def check_is_sub_list(self, l1, l2):
        """
            returns:
                1 - l2是l1的子集
                2 - l1是l2的子集
                3 - l1与l2没有子集关系
        """
        # 长度相同则两个公司清单没有父子列表关系
        if len(l1) == len(l2):
            return 3
        # l2可能是l1的子集
        elif len(l1) > len(l2):
            if set(l2).issubset(set(l1)):
                return 1
        # l1可能是l2的子集
        else:
            if set(l1).issubset(set(l2)):
                return 2
        return 3

    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:
        un_sub_fcs_idxes = [0]
        for idx, fc in enumerate(favoriteCompanies):
            for un_sub_fc_idx in un_sub_fcs_idxes:
                print('==========', idx, fc, un_sub_fc_idx)
                is_sub = self.check_is_sub_list(favoriteCompanies[un_sub_fc_idx], fc)
                if is_sub == 1:
                    continue
                elif is_sub == 2:
                    un_sub_fcs_idxes.remove(un_sub_fc_idx)
                    un_sub_fcs_idxes.append(idx)
                else:
                    un_sub_fcs_idxes.append(idx)
                print('===', un_sub_fcs_idxes)
        print('----------------', un_sub_fcs_idxes)


s = Solution()
s.peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]])
