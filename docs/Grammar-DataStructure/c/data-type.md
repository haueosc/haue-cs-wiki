# 基本数据类型

## 1.&nbsp;整型（Integer）

### 1.1&nbsp;基本整型类型

`int`<br>
通常表示一个标准的整型变量，大小和范围依赖于具体的编译器和平台。<br>
`short`<br>
表示较短的整型变量，通常占用 $2$ 个字节。范围是 $-32,768$ 到 $32,767$ 。<br>
`long`<br>
表示较长的整型变量，通常占用 $4$ 个字节或更多。范围依赖于具体的编译器和平台。<br>
`long long`<br>
表示更长的整型变量，通常占用 $8$ 个字节。范围依赖于具体的编译器和平台。<br>
### 1.2&nbsp;无符号整型类型
`unsigned int`<br>
无符号整型，表示非负整数，范围从 $0$ 到最大正值。<br>
`unsigned short`<br>
无符号短整型。<br>
`unsigned long`<br>
无符号长整型。<br>
`unsigned long long`<br>
无符号更长整型。

## 2.&nbsp;字符型（Character）

`char`<br>
用于储存字符（如，字母或标点符号），但是 `char` 也是整数类型，因为计算机是根据这个整数值，去编码表中找对应的字符。<br>
`unsigned char`<br>
无符号字符类型，范围是 $0$ 到 $255$ 。<br>
`signed char`<br>
明确表示带符号的字符类型。<br>
```c
//示例
#include<stdio.h>
int main(void)
{
    char c = 'A';

    //使用%c来输出char类型的字符
    printf("%c",c);
    return 0;
}
```
## 3.&nbsp;浮点型（Floating Point）

`float`<br>
单精度浮点数，通常占用 $4$ 个字节，精度约为 $6-7$ 位小数。<br>
`double`<br>
双精度浮点数，通常占用 $8$ 个字节，精度约为 $15-16$ 位小数。<br>
`long double`<br>
扩展精度浮点数，通常占用 $12$ 个字节或更多，具体取决于编译器和平台。

## 4.&nbsp;布尔型（Boolean）

`bool`<br>
在C99标准中引入，表示布尔类型，值为 `true` 或 `false` 。需要加上头文件 `#include <stdbool.h>`<br>
这是c语言专门的用来表示真和假的类型：`true` 为真，`false` 为假<br>
在c语言中，有时也用 $0$ 表示假，非 $0$ 的数值表示真。

## 5.&nbsp;数据类型的修饰符

C语言还提供了一些修饰符，用于改变基本数据类型的属性：<br>
`signed`<br>
明确表示带符号类型，可用于整型和字符型。<br>
`unsigned`<br>
明确表示无符号类型，可用于整型和字符型。<br>
`short`<br>
表示较短的整型。<br>
`long`<br>
表示较长的整型或双精度浮点型。

## 6.&nbsp;代码示例
```c
#include<stdio.h>
int main(void)
{
    //声明一个整型变量num
    int num;
    //给num变量赋值为10
    num = 10;
    //输出一个整型变量的值，\n表示换行
    printf("%d\n",num);
    //输出多个整型变量的值(前后按顺序一一对应)
    printf("%d %d\n %d %d",num,num+1,num+2,num+3);
    //可以使用sizeof函数来查看一个变量占用的字节数
    printf("在我的电脑上,int类型的变量占%d个字节",sizeof(num));
    //其他整型实例
    short num2 = 133;
    long num3 = 61111;
    long long num4 = 12345678910111;

    /*
    打印char或short或int类型的变量，使用%d
    打印long类型的变量，使用%ld
    打印long long类型的变量，使用%lld
    */
    printf("%d %ld %lld",num2,num3,num4);
    return 0;
}
```

## 7.&nbsp;数据溢出与截断

**数据溢出** 是指将一个超出变量所能表示范围的值赋给该变量。在进行运算的时候，有可能会发生溢出或者截断，比如下面这个：<br>
```c
#include <stdio.h>

int main() {
    int largeNumber = 300;
    char smallNumber = largeNumber; // 截断

    printf("%d\n", smallNumber); // 输出44（假设char是有符号的）
    return 0;
}
```

在这个例子中，`largeNumber` 的值是 $300$，而 `char` 类型只能表示 $-128$ 到 $127$ 的范围。因此，$300$ 会被截断，并且结果可能是奇怪的值。

**数据截断** 发生在一个值被赋给一个比它小的类型变量时，超出的部分会被丢弃。(这里的`小`是指范围小)

```c
#include <stdio.h>

int main() {
    //将一个浮点数1.5赋值给a,因为1.5是浮点数，但是它被赋值给一个整型变量，所以它被自动转换成整数，然后输出
    int a = 5.5;

    printf("%d\n", a);
    return 0;
}
```
## 8.&nbsp;自动类型提升

自动类型提升是指在表达式中，取值范围小（或容量小）的类型会被自动提升为取值范围大（或容量大）的类型。例如，当 `int` 和 `float` 一起参与运算时，`int` 会被升级为 `float`。

```c
#include<stdio.h>
int main()
{
    double a = 7;//7本来是int类型，当把7赋值给double类型的a的时候，7自动提升为double类型
    double c = 5 + 7.7;//当存储范围小的数据类型与存储范围大的数据类型变量一起混合运算时，会按照其中最大的类型运算。

    return 0;
}
```