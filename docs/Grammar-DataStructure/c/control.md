# 流程控制语句
## &nbsp;条件语句
### 1.&nbsp;if与if-else
```c
//如果表达式1成立，则执行语句1，并离开这个if语句块(指不用再看这一堆if-else了);否则继续向下看表达式2。如果表达式2成立，则执行语句2，并离开这个if语句块;否则继续向下判定表达式3……
if(表达式1){
    语句1;
}else if(表达式2){
    语句2;
}else if(表达式3){
    语句3;
}
```
示例：
```c
#include<stdio.h>
int main()
{
    int a = 9;
    int b = 10;
    int c = 55555;
    int d = 183443265;

    //如果a大于b，则输出a大于b
    if(a > b){
        printf("a > b");
    }
    
    //多重if-else语句
    if(a < b){
        printf("a < b"),printf("a < b"),printf("a < b");
    }else if(a == b){
        printf("a == b");
    }else{
        printf("a > b");
    }

    //else语句会与最近的那个if语句匹配，比如:
    if(a < b){
        if(c < d){
            printf("c < d");
        }else{
            //这个else语句会与if(c < d)匹配，如果c < d成立就输出c < d;否则输出
            printf("c > d");
        }
    }else{

    }
    return 0;
}
```
细心的同学可能已经发现了，在使用 `if` 语句的时候不写括号，它似乎也按照我们预想的一样。实际上并不是。编译器会默认把下一个分号之前的所有语句算成是这个 `if` 语句的内容。

<mark>为了程序的可读性，也为了方便我们后期的修改维护，强烈建议使用 if 语句的时候加上大括号。</mark>

### 2.&nbsp;switch语句

`switch` 语句是C语言中比较常用的语句，它跟 `if` 语句有点像。

光说有点抽象，我们直接看个例子：

```c
#include<stdio.h>
int main()
{
    int a = 7;
    switch(a){
        case 1:
            printf("%d\n",a + 3);
            break;
        case 2:
            printf("%d\n",a + 2);
            break;
        default:
            printf("%d\n",a + 1);
            break;
    }
    //上面这个switch语句和下面这个if语句是等价的
    if(a == 1){
        printf("%d\n",a + 3);
    }else if(a == 2){
        printf("%d\n",a + 2);
    }else {
        printf("%d\n",a + 1);
    }
}
```
::: warning
如果我们不写 `break` 的话，`switch` 语句会从符合条件的位置开始，往下一直执行下去，直到遇到 `break` 为止。就像下面这个例子展示的那样：

```c
#include<stdio.h>
int main()
{
    int a = 7;
    switch(a){
        case 1:
            printf("%d\n",a + 3);

        case 2:
            printf("%d\n",a + 2);

        default:
            printf("%d\n",a + 1);
            break;
    }
    //上面这个switch语句和下面这个if语句是等价的
    if(a == 1){
        printf("%d\n",a + 3);
        printf("%d\n",a + 2);
        printf("%d\n",a + 1);
    }else if(a == 2){
        printf("%d\n",a + 2);
        printf("%d\n",a + 1);
    }else {
        printf("%d\n",a + 1);
    }
}
```
:::

### 3.&nbsp;goto语句

作用：让程序跳转到指定的位置。<br>
程序运行时是主函数从上到下逐行执行代码，而 `goto` 语句能让程序直接跳到指定的位置，并从那个位置接着往下逐行执行代码。<br>
`goto` 语句有两部分：`goto` 和 标签名。标签的命名遵循变量命名规则。例如:

```c
#include<stdio.h>
int main(){
    int a = 7;
    double b = 9;
    float c = 11.777;
    char d = 'D';

part1:
    printf("%d,%lf,c = %f,d = %c\n",a,b,c,d);
    //%5d指打印一个整数，这个整数占五列(不够五列的话自动补空格)，不带负号默认右对齐，带负号则为左对齐
    printf("%5d\n%-5d,%1.0f",a,a,c);
    if(a >= 7){
        a -= 4;
        //当这句goto执行时，程序跳转到part1指定的位置，并从那个位置继续向下逐行执行代码
        goto part1;
    }
    return 0;
}
```
原则上，不建议在C语言中使用 `goto` 语句，我们可以使用 `if` 语句、`while` 循环等来代替它。

## &nbsp;循环语句

### 1.&nbsp;while循环

`while` 循环是C语言中比较常用的循环语句，它跟 `if` 语句有点像。

```c
#include<stdio.h>
int main(){
    int a = 7;
    //先进行判断，如果条件成立就执行循环体，否则跳出循环
    //while所属的大括号及其内部的代码称为循环体
    while(a <= 10) {
        printf("%d ",a);
        a++;
    }

    return 0;
}
```
### 2.&nbsp;do-while循环

`do-while` 循环跟 `while`循环很像，不同的是 `do-while` 循环会先执行一次循环体，再进行判断，如果条件成立就继续执行循环体，否则跳出循环。

```c
#include<stdio.h>
int main(){
    int b = 9;
    //先进行判断，如果条件成立就执行循环体，否则跳出循环
    //while所属的大括号及其内部的代码称为循环体
    do {
        printf("%d ",b);
        b++;
    }while(b <= 15);

    return 0;
}
```
### 3.&nbsp;for循环

`for` 循环用于在满足特定条件的情况下重复执行一段代码。`for` 循环通常用在已经知道循环次数的地方。

```c
for (initialization; condition; increment) {
    // 循环体
}
```

:::info initialization
初始化部分，在循环开始前执行一次，用于初始化循环控制变量。
:::

:::info condition
条件部分，在每次迭代开始前进行测试。如果条件为真（非零），则执行循环体；如果条件为假（零），则终止循环。
:::

:::info increment
增量部分，在每次循环体执行完毕后执行，用于更新循环控制变量。
:::

```c
#include<stdio.h>
int main(){
    for (int i = 0; i < 10; i++) {
        printf("%d ",i);
    }
    return 0;
}
```
`for` 循环的初始化部分、条件部分、增量部分都是可省略的，例如:

```c
#include<stdio.h>
int main(){
    int i = 3;
    for (;i < 7;) {
        printf("%d ",i++);
    }
    for(;;){
        if(i == 17){
            printf("循环终止\n");
            break;
        }
        i++;
    }
    return 0;
}
```

::: warning
一定要检查有没有写合适的循环终止条件，避免出现死循环。
:::

### 4.&nbsp;break和continue

刚才我们提过，`break` 用来跳出一层循环，例如：

```c
#include<stdio.h>
int main(){
    for(int i = 0;i < 10;i++){
        printf("%d ",i);
    }
    //上面那个for循环和下面这个for循环是等价的
    for(int i = 0;;i++){
        if(i >= 10){
            break;
        } else {
            printf("%d ",i);
        }
    }
    return 0;
}
```
你可能注意到我强调了**一层**循环，因为我们有时候可能会用到嵌套的循环，例如：

```c
#include<stdio.h>
int main(){
    for(int i = 0; i < 10; i++){
        for(int j = 0; j < 10; j++){
            printf("%d ",i);
            break;//在这里加break，它会跳出内层循环，但是跳出后外层循环还会执行下一次循环，所以外层的for循环依然会执行十次，但是每轮循环中，内层循环只会执行一次
        }
    }
    //输出0 1 2 3 4 5 6 7 8 9
    return 0;
}
```

`continue` 的作用是用来跳过本次循环，继续下一次循环。

```c
#include<stdio.h>
int main(){
    for(int i = 0; i < 10; i++){
        for(int j = 0; j < 10; j++){
            printf("%d ",i);
            continue;//在这里加continue，它会跳过本次循环还未执行的代码，直接进入下一次循环，但是不会跳出当前层次的循环。所以内外层的for循环都会执行十次，但是每轮循环中打印j的值的语句不会被执行
            printf("%d ",j);
        }
    }
}
```
