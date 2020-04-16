/*
二维数组地图的寻路最短步数

（下标从1开始）

0 0 1 0

0 0 0 0

0 0 1 0

0 1 0 0

0 0 0 1

这样的一个4*5的矩阵，1代表路障，0可以走，从（1，1）出发，到（4，3）的位置
*/


#include "stdafx.h"
#include "iostream"
using namespace std;
int map[6][5] = { 0 };
bool visited[6][5] = { false };
int min = 999999;
void DFS(int x, int y, int step)
{
	int tx=0, ty=0;
	int next[4][2] = { {0,1},{1,0},{0,-1},{-1,0} };
	if (x == 4 && y == 3)    //如果到达目标位置，输出回溯
	{
		if (step < min)
			min = step;
		return;
	}
	for (int k = 0;k < 4;k++)    //对四个方向都尝试一下
	{
		tx = x+next[k][0];   //tx ty代表下一次要走的位置
		ty = y+next[k][1];
		if (tx < 1 || tx>5 || ty < 1 || ty>4)  //如果坐标越界，返回
			continue;
		if (visited[tx][ty] == false && map[tx][ty] == 0)   //如果这个坐标可以走，没有障碍没有访问过
		{
			visited[tx][ty] = true;
			DFS(tx, ty, step + 1);
			visited[tx][ty] = false;
		}
	}
	return;
}

void main()
{
	map[1][3] = 1;
	map[3][3] = 1;
	map[4][2] = 1;
	map[5][4] = 1;
	visited[1][1] = true;
	DFS(1, 1, 0);
	cout << min;
}