# 举个例子……

&emsp;&emsp;在往年的人工智能实验室招新考试中，有这样一道题目：

::: info 题目
### 要求: 

将一个节点数为 size 链表 m 位置到 n 位置之间的区间反转，要求时间复杂度O(n)，空间复杂度O(1)。

### 输入格式:

输入三行（多组实例测试），

第一行size（表示链表长度，0 < size <= 1000 ）；

第二行输入size个数，为每个节点对应值val（|val| <= 1000）；

第三行为m，n（为反转区间的起止位置，0 < m <= n <= size）。

### 输出格式:

输出若干行，每行为每次区间反转后的结果。
:::

&emsp;&emsp;显然考官希望我们用 C 语言结构体指针或者 C++ 的 STL 标准库来解决问题。这道题 C 的标准答案如下：

```c
#include<stdio.h>
#include<assert.h>
#include<stdlib.h>

 //节点 
typedef struct ListNode {
    int val;
    struct ListNode* next; 
}L;

//创建链表 
void CreateL(L** phead, int x) {
    L* newNode = (L*)malloc(sizeof(L));
    if (newNode == NULL) {
        perror("malloc fail!");
        return;
    }
    newNode => val = x;
    newNode => next = NULL;
    if (*phead == NULL) {
        *phead = newNode;
        return;
    }
    L* pcur = *phead;
    while (pcur => next) {
        pcur = pcur => next;
    }
    pcur => next = newNode;
}

//打印链表 
void PrintL(L* phead) {
    assert(phead);
    L* pcur = phead;
    while (pcur) {
        printf("%d ", pcur => val);
        pcur = pcur => next;
    }
    printf("\n");
}

//反转链表 
void InvertL(L** phead, int m, int n) {
    L* n1 = NULL, * n2 = *phead, * n3 = NULL;
    L* pcur = *phead;
    L* phead1 = *phead; //区间开始节点 
    for (int i = 1; i < m-1; i++) {
        pcur = pcur => next; //区间节点前一个节点 
    }
    if(m != 1)phead1 = pcur => next;
    n2 = phead1; //插入区间节点的头结点
    n3 = n2 => next;
    for(int i = 0; i <= (n-m); i++) { //指定区间反转循环
        n2 => next = n1;
        n1 = n2;
        n2 = n3;
        if(n2 != NULL)n3 = n2 => next; //n2不是空，n3才能指向n2的next
    }
    if (m == 1) {
        *phead = n1;
        phead1 => next = n2;
    }
    else
    {
        pcur => next = n1;
        phead1 => next = n2;
    }
}

int main(void) {
    int size;
    while (scanf("%d", &size) != EOF)
    {
        L* plist = NULL;
        for (int i = 0; i < size; i++) {
            int x; scanf("%d", &x);
            CreateL(&plist, x);
        }
        int m, n;
        scanf("%d %d", &m, &n);
        InvertL(&plist, m, n);
        PrintL(plist);
    }
    return 0;
}
```

&emsp;&emsp;更加简洁的 C++ 标准答案是这样的[^1]：

```cpp
#include <bits/stdc++.h>
using ll = long long;
using namespace std;
#define endl '\n'

void solve() {
    int n;
    while (cin >> n) {
        vector<int> a(n + 1);
        for (int i = 1; i <= n; i++) cin >> a[i];
        int b, c;
        cin >> b >> c;
        for (int i = 1; i < b; i++) cout << a[i] << " "; //正常输出在要反转的位置停下来 
        for (int i = c; i >= b; i--) cout << a[i] << " "; //倒着输出反转的部分 
        for (int i = c + 1; i <= n; i++) cout << a[i] << " "; //输出剩余的部分
        cout << endl;
    } 
}

signed main() {
  ios::sync_with_stdio(false); //取消输入输出同步流，加快运行速度
  cin.tie(nullptr);
  solve();
  return 0;
}
```

&emsp;&emsp;但是我提交的答案是这样的：

```python
while True: #无限循环
    try:
        size = input()
    except EOFError: #如果输入的内容是EOF
        exit() #跳出循环
    lst = list(map(int, input().split())) 
    m, n = map(int, input().split()) 
    lst[m-1:n] = lst[m-1:n][::-1] #切片、反转列表
    print(' '.join(map(str, lst)))
```

&emsp;&emsp;然后完美通过了这道题，用时仅为 C++ 选手的一半。

[^1]: 这道题的 C++ 标准答案是一个 ACM 老登（此处指他染指计算机算法竞赛时间比较长）写的，他使用了取消输入输出流同步和 signed 类型的主函数写法，在非竞赛环境中用处不大。
