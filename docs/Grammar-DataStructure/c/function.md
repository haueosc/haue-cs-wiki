# 函数

## (一)&nbsp;函数是什么？

函数是负责完成某项特定任务的一段代码。从用户角度看，函数分为库函数和自定义函数；从函数形式角度，分为无参函数和有参函数。这个分类乍一看很难理解，我们先往下看。

## (二)&nbsp;函数都包含什么？

通常一个函数包含：返回值的数据类型、函数名、参数列表、函数体。

例如我们要自定义一个名为 `Add` 的函数：

```c
//第一个int代表函数执行后返回的数值为int类型（如果不需要返回值的话就写void），Add是我们自己起的函数名，函数名最好能见名知意，()里面是参数列表，也就是说调用这个函数的时候你要给他传入几个什么类型的数据。
int Add(int a,int b,int c)
//大括号里面是函数体，也就是这个函数被调用是要执行的代码块
{
    int d = 7;
    return a + b + c;
}
int main(){
    int a = 3, b = 4, c = 5;
    int e = Add(a, b, c);
    printf("%d",e);
    return 0;
}
```

## (三)&nbsp;自定义函数

### 1.&nbsp;定义无参函数

格式如下：

```c
//参数列表写成void或者空着都行，表述这个函数不需要传入参数，是个无参函数
类型名 函数名(参数列表){
    函数体
}
```

例如：

```c
#include <stdio.h>
int deter(){
    int a = 5;
    int b = 7;
    return (a > b) ? a : b;
}
```

### 2.&nbsp;定义有参函数

有参函数与无参函数的区别就是有参函数的参数列表不为空，其他格式一致。我们来看个例子：

```c
#include<stdio.h>
int main(){
    int a, b, c;
    scanf("%d%d",&a,&b);
    c = mymax(a, b);//第五行
    printf("max{a, b} = %d",c);
    return 0;
}
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```

上面这段代码乍一看没什么问题，但是执行起来会直接报错。因为对程序的编译是自上而下的，在第五行，编译器还没见过我们自定义的 `mymax` 函数是什么样子。

为了让IDE能够识别我们自定义的函数，我们需要在初次使用它之前先对这个函数进行声明，声明的方式有三种：

- 一种是直接把这个函数本体放在 `main` 函数之前，这样在编译的时候编译器已经加载过我们自定义的函数，使用的时候不会再报错。例如：

```c
#include<stdio.h>
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
int main(){
    int a, b, c;
    scanf("%d%d",&a,&b);
    c = mymax(a, b);//第五行
    printf("max{a, b} = %d",c);
    return 0;
}
```

- 第二种方式就是在文件开头部分进行声明。例如：

```c
#include<stdio.h>
int mymax(int x, int y);//在这里声明函数，不需要写函数体，这种声明方式称为原型声明
int main(){
    int a, b;
    a = 9;
    b = 10;

    printf("%d和%d中最大的数是%d", a, b,mymax(a, b));
    return 0;
}
//函数定义
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```

在C语言中，函数的原型声明用于在使用函数之前告诉编译器有关函数的一些基本信息，包括函数的名称、返回类型和参数列表。函数原型的目的是提供给编译器足够的信息，以便在编译过程中进行类型检查和函数调用的正确性验证。

- 第三种方式是在使用它之前在 `main` 函数中进行声明。例如:

```c
#include<stdio.h>
int main(){
    int mymax(int x, int y);//对mymax函数进行声明
    int a, b;
    a = 9;
    b = 10;

    printf("%d和%d中最大的数是%d", a, b,mymax(a, b));
    return 0;
}
//函数定义
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```
## (四)&nbsp;库函数

有一些函数，在开发的过程中每个程序员都有可能用得到，属于比较基础、泛用的函数，比如输入 `(scanf)` 输出 `(printf)` 函数、计算开方`(sqrt())`、向下取整`(floor())`的函数等。

C语言中这些常用的函数被预先写好，放在一些头文件中，需要用到它们的时候我们只要引入头文件(比如我们前面用的 `#include <stdio.h>` )就可以使用这个头文件里面包含的函数。

下面展示几个C语言常用的库函数以及它们的用法：

:::info Tips
这些函数不用特意去记，多用几次自然就记住了，忘了就再复习复习
:::

### 1.&nbsp;输入输出函数

#### (1)&nbsp;printf()函数

`printf()` 用于格式化输出到屏幕。`printf()` 函数在 `stdio.h` 头文件中声明。

这是 `printf()` 函数的格式：

```cpp
printf(格式字符串, 待打印项1, 待打印项2,...);
```

格式字符串是双引号括起来的内容；`待打印项1、待打印项2` 等都是要打印的项。它们可以是变量、常量，甚至是在打印之前先要计算的表达式。

请求 `printf()` 函数打印数据的指令要与待打印数据的类型相匹配。例如，打印整数时使用 `%d`，打印字符时使用 `%c`。这些符号被称为转换说明，它们指定了如何把数据转换成可显示的形式。

下面展示一些常见的转换说明和各自对应的输出类型：

| 转换说明 | 输出                                         |
| -------- | -------------------------------------------- |
| %d       | 有符号十进制整数                             |
| %ld      | 有符号的长整数（long int）类型               |
| %lld     | 更大范围的有符号整数-长长整型(long long int) |
| %e       | 浮点数，科学计数法                           |
| %E       | 浮点数，科学计数法                           |
| %f       | 单精度浮点数(float)，十进制计数法            |
| %lf      | 双精度浮点型(double)                         |
| %p       | 输出存储地址                                 |
| %%       | 打印一个百分号                               |

由于 `printf()` 函数使用 `%` 符号来标识转换说明，因此打印 `%` 符号就成了个问题。如果单独使用一个 `%` 符号，编译器会认为漏掉了一个转换字符。解决方法很简单，使用两个 `%` 符号就行了。

在C语言里，科学计数法有专门的写法，比如 $1.2345 * 10 ^ {24}$ (1.2345乘10的24次方) 记作 $1.2345e24$ 或者 $1.2345E24$ 。如果你想要输出的结果中字母 $e$ 大写，就用 `%E`，小写就用 `%e` 即可。

到指针那一章我们再详细讲 `%p` 的使用和存储地址的讲解，这里有个印象即可。来看个例子：

```c
#include<stdio.h>
int main(){
    int a,b,c,d;
    a = 5;
    b = 6;
    c = 7;
    d = 8;

    //输出四个整数，数值分别为a、b、c、d的数值
    printf("%d%d%d%d",a,b,c,d);
    return 0;
}
```

看到这你可能会有疑惑，格式字符串是在双引号内的，那如果输出结果里面要有个双引号的话会不会乱套呢？(哪个双引号和哪个双引号匹配？)C语言中使用**转义字符**来解决这个问题：

首先我们要明确，计算机在存储我们的字符(包括但不限于字母、数字、特殊符号、不可见字符等)的时候实际存的存储的是字符的编码值(这些编码值是用二进制数字表示的)而不是这个字符本身。哪怕是空格、回车这种不可见字符也有自己对应的编码。为了让同样的编码值在不同的电脑上能翻译成相同的字符，一些比较权威的组织纷纷指定了统一编码标准，有ASCII (C语言使用的)、GB2312、GBK、UTF-8等。

ASCII码使用 $7$ 位二进制数（剩下的 $1$ 位二进制为 $0$ ）来表示所有的大写和小写字母、数字 $0$ 到 $9$ 、标点符号以及在美式英语中使用的特殊控制字符，有兴趣的同学可以去查一查 ASCII 码表。

```c
#include<stdio.h>
int main(){
    char ch1 = 'A';
    printf("%d",ch1);//输出65,这个整数65在计算机中是以二进制形式存储的，即`01000001`
    printf("%c",ch1);//输出A
    ch1++;
    printf("%d",ch1);//输出66
    printf("%c",ch1);//输出B
    return 0;
}
```

但是整天用 ASCII码 有点麻烦，我们使用转义字符来表示那些不能直接输入的字符，或者那些在源代码中具有特殊意义的字符。这里展示一些比较常用的转义字符：

| 转义字符 | 含义       |
| -------- | ---------- |
| \\n      | 换行       |
| \\t      | 制表符     |
| \\"      | 双引号     |
| \\'      | 单引号     |
| \\\\     | 一个反斜杠 |
| \\0      | 空字符     |

举个例子:

```c
#include<stdio.h>
int main(){
    printf("Hello\nWorld\n");
    printf("\'Whatever are you doing up here Bill?\'\n");
    return 0;
}
```

看完上面这些，我们来看一些修饰符：

| 修饰符 | 含义                                       |
| ------ | ------------------------------------------ |
| 数字   | 最小字符宽度                               |
| .数字  | 精度                                       |
| +      | 右对齐                                     |
| -      | 左对齐                                     |
| 0      | 对于数值格式，用前导零代替空格填充字段宽度 |

输出的时候默认就是右对齐，所以一般用不到`+`标记。

直接看可能有点抽象，我们举个例子：

```c
#include<stdio.h>
int main(){
    int a = 5;
    double c = 77.77;

    printf("%-3.5lf\n",c);
    //输出77.77000
    //%：表示格式化字符串的起始标记。
    //-：表示左对齐输出。在这里，- 表示在输出区域内左对齐数字
    //3：表示输出区域的最小宽度为 3 个字符。如果输出的内容不足 3 个字符，会在左侧填充空格以达到最小宽度。
    //.5：表示保留小数点后5位精度。在这里，`.5`表示输出小数点后 5 位数字。
    //lf：表示输出一个双精度浮点数。
    
    int year = 2024;
    int month = 7;
    int day = 19;

    printf("今天是%02d-%02d-%02d\n",year,month,day);
    //输出2024-07-19
    //%02d：这是一个格式化说明符，用于表示一个整型数，并指定输出的宽度至少为 2 个字符，不足两位的数在左侧用零进行填充(因为默认是右对齐，所以零填充到左边)
    return 0;
}
```

有时候我们想打印很长的字符串，但是长长的一行在编译器上看着很别扭，我们可以用反斜杠（\）和Enter（或Return）键组合来断行。这使得光标移至下一行，而且字符串中不会包含换行符。例如：

```c
#include<stdio.h>
int main(){
    printf("归去来兮，田园将芜胡不归？\n既自以心为形役，奚惆怅而独悲？\n\
悟已往之不谏，知来者之可追。\n实迷途其未远，觉今是而昨非。\n舟遥遥以轻飏，\
风飘飘而吹衣。\n问征夫以前路，恨晨光之熹微。\n");
    //Tips:\n是换行，单纯在行尾写个反斜杠然后另起一行接着写的话，编译器会认为它们是同一行的内容(但是看着舒服多了，不用左右拖动鼠标)
    //注意！！！使用这种方式"换行"的话，新的一行一定要顶格写，不要为了好看专门把新的一行缩进到跟前一行对齐，否则你会发现，输出结果里面多了一堆空格
    return 0;
}
```

#### (2)&nbsp;scanf()函数

学完输出，接下来我们转至输入——学习 `scanf()` 函数。C库包含了多个输入函数，`scanf()` 是最通用的一个，因为它可以读取不同格式的数据。

`scanf()` 和 `printf()` 类似，也使用格式字符串和参数列表。`scanf()` 中的格式字符串表明字符输入流的目标数据类型。两个函数主要的区别在参数列表中。`printf()`函数使用变量、常量和表达式，而 `scanf()` 函数使用指向变量的指针。关于指针是什么咱们在后面将，现在先不必了解如何使用指针，只需记住以下两条简单的规则：

:::info Tips
如果用 `scanf()` 读取基本变量类型的值，在变量名前加上一个 `&`

如果用 `scanf()` 把字符串读入字符数组中(数组下一章讲，到时候还会提这一点，不用着急)，不要使用 `&`
:::

::: warning
特别注意，`scanf()` 的格式字符串中写转换字符以外的字符的时候一定一定要慎重，因为它会影响到程序读取数据。
:::

可能你对我刚刚提到的概念还有点懵，没关系，我们再通过一个例子理一理：

```c
#include<stdio.h>
int main(){
    int a;
    double b;
    long int c;

    scanf("%d",&a);
    scanf("%lf",&b);
    scanf("%ld",&c);
    //有些初学者喜欢在scanf的格式字符串中加一些标点等符号，但是这会改变scanf()的读取行为，导致程序运行出错，例如
    scanf("%d,%lf",&a,&b);
    /*可能这样我们看着感觉比%d%lf好看，但是要注意，这样写意味着我们要求输入者在输入a的值之后，必须专门输入一个逗号，然后再输入b的值，
    但是实际上我们希望的是，输入a的值之后(敲回车)，然后直接输入b的值，而不是在中间输入逗号，然后再输入b的值
    */
}
```

我们再举一个例子，输入一组数，求它们的和，并输出小于0的数：

```c
#include<stdio.h>
int main(){
    //输入一组数，求和，并输出小于0的数的个数
    int cnt = 0;
    int sum = 0;
    int temp1;
    //scanf()函数的返回值是成功读取的项目数，可以通过这个来判断scanf是否正确运行。
    /*另外，EOF是文件的结束符(通常是按 Ctrl+D 或 Ctrl+Z)，
    scanf遇到EOF会停止读取并返回-1
    像下面的写法可以做到不断读取整数输入，直到遇到文件结束标志（EOF）
    */
    while(scanf("%d",&temp1) != EOF){
        if(temp1 < 0){
            cnt++;
        }
        sum += temp1;
    }
    printf("这些数的和为%d,小于零的数有%d个\n",sum,cnt);
    //如果发现输入一直没结束，按下ctrl + Z(在有些系统上需要按ctrl + D)即可结束输入(有可能需要再敲下回车)
}
```

### 2.&nbsp;绝对值函数

使用下面这三个函数的时候都需要先引入头文件 `math.h`

#### (1)&nbsp;整型取绝对值

```c
#include<stdio.h>
#include<math.h>
int main(){
    int n = -28;
    //取n的绝对值
    n = abs(n);
    printf("%d\n",n);
    return 0;
}
```

#### (2)&nbsp;双精度浮点型取绝对值

```c
#include<stdio.h>
#include<math.h>
int main(){
    double n = -3.14159;
    //取n的绝对值
    n = fabs(n);
    printf("%lf\n",n);
    return 0;
}
```

#### (3)&nbsp;长整型取绝对值

```c
#include<stdio.h>
#include<math.h>
int main(){
    long n = -1234567891;
    //取n的绝对值
    n = labs(n);
    printf("%ld\n",n);
    return 0;
}
```

#### (4)&nbsp;判断两个浮点数是否相等

因为计算机存储浮点数是

```c
#include<stdio.h>
#include<math.h>
int main(){
    double a = 1.1;
    double b = 2.3;
    char myequal = "相等";

    if(fabs(b - a) <= 1e-6){
        //打印一个字符串类型的变量，使用%s
        printf("%s",myequal);
    }
    else{
        printf("不相等\n")
    }
    return 0;
}
```

### 3.&nbsp;指、对函数

#### (1)&nbsp;指数函数

在C语言中，可以使用 `pow` 函数来计算指数函数。`pow` 函数的定义为：`double pow(double base, double exp)`，第一个 `double` 表明函数返回值的数据类型，`base` 是底数，`exp` 是指数。

```c
#include<stdio.h>
#include<math.h>
int main(){
    //计算3的5次方
    printf("%d",(int)pow(3,5));
    return 0;
}
```

#### (2)&nbsp;对数函数

`log()` 是 C 标准库 `<math.h>` 中的一个函数，用于计算一个浮点数的自然对数（以 $e$ 为底）。在这里 `log()` 函数其实跟我们高中学过的 $ln$ 一个意思，都是代表计算以 $e$ 为底，某个数的对数。

```c
#include<stdio.h>
#include<math.h>
int main(){
    //计算以e为底，77.3的对数
    printf("log(%lf) = %lf",77.3 ,log(77.3));
    return 0;
}
```

### 4.&nbsp;其他函数

库函数还有很多很多，在实际开发中我们可以按照需要去相关的网站查阅，这里推荐两个网站：

- 文档推荐&nbsp;[C标准库之字符函数库](https://www.runoob.com/cprogramming/c-standard-library-ctype-h.html)

- 英文不错的同学可以看看这个(多看看英文文档没坏处)&nbsp;[C/C++库函数](https://cplusplus.com/reference/)

## (五)&nbsp;作用域与生命周期

### 1.&nbsp;作用域

&emsp;&emsp;在C语言中，作用域是程序中定义的变量所存在的区域，超过该区域变量就不能被访问。

### 2.&nbsp;局部变量与全局变量

&emsp;&emsp;在函数或语句块内部声明的变量称为局部变量，在函数或语句块外部声明的变量称为全局变量。例如：

```c
#include<stdio.h>
//a和b是全局变量，在整个文件中都可以访问
int a = 20;
int b;
int main(){
    int mycalculate1(int a, int b);
    int outtest1();

    //c和d是局部变量，只能在main函数中访问
    int c,d;

    for(int i = 0;i < 10;i++){
        //i是在这个for循环代码块(一对大括号)内定义的，只能在这个for循环代码块中访问
        printf("%d\n",i);
    }
    //printf("%d\n",i);在这里试图打印变量i会报错，因为i的作用域只在上面那个for循环代码块中
    //换句话说，i已经“死掉了”，不能再被访问了
    
    {
        int temp1 = 90;
        printf("%d",temp1);
    }
    b = 7;//给全局变量赋值，因为b是全局变量，作用域是当前文件，所以在当前源文件中访问b，如果不修改它的值，它就等于7

    c = 12;
    d = 33;
    printf("%d\n",mycalculate1(c,d));//输出45
    outtest1();
    return 0;
}
//函数的参数叫形式参数，被当作该函数内的局部变量，如果与全局变量同名它们会优先使用。这里的a和b是形式参数，作用域只在这个mycalculate1函数中
//此时a、b的数值等于传入的数的数值，与全局变量a、b无关
int mycalculate1(int a,int b){
    printf("b = %d\n",b);//b = 33
    return a + b;
}
int outtest1(){
    printf("全局变量b = %d\n",b);//b = 7
}
```

那如果希望定义的变量能在其他源文件(一个 .c 文件称为一个源文件)被直接访问要怎么做呢？很简单，在声明变量的时候直接加上 `extern` 关键字，例如：

```c
//在test1.c文件中定义全局变量a
#include<stdio.h>
extern int a;
int main(){
    a = 90;
    printf("%d\n",a);//输出90
    return 0;
}
```
```c
//在test2.c文件中引用test1.c文件中定义的a
#include<stdio.h>
int main(){
    a = 20;
    printf("%d\n",a);
    return 0;
}

```

在C语言中，`extern` 关键字用于声明一个变量或函数，该变量或函数在其他文件中定义。使用 `extern` 可以在多个源文件之间共享全局变量或函数。`extern` 声明的变量本身并不分配内存，而只是告诉编译器该变量在其他地方定义，编译器应在链接阶段找到其定义。

### 3.&nbsp;多文件编程

在同一个文件中，可以定义多个函数，但是随着我们自定义的函数越来越多，代码行数也越来越长，这时再把所有的代码都放进一个文件中显得有些臃肿。我们可以将不同的函数分别放进不同的源文件中，主函数 `main函数` 那边只需要直接调取函数即可。

一般我们采用两种方式来进行多文件编程：

- 将函数体放到不同的文件中，然后只在主函数中保留原型声明。例如：

```c
//在main.c文件中(名字随便，但是尽量见名知意，下同)
#include<stdio.h>
int mymax(int x, int y);
int myAdd(int x, int y);
int main(){
    printf("%d\n",mymax(10,20));
    printf("%d\n",myAdd(10,20));
    return 0;
}
```
```c
//在mymax.c文件中
#include<stdio.h>
int mymax(int x, int y){
    return (x > y) ? x : y;
}
```
```c
//在myAdd.c文件中
#include<stdio.h>
int myAdd(int x, int y){
    return x + y;
}
```

- 自定义头文件，这种方法更直接，把全局变量、函数声明都放到一个自定义的头文件中，然后在主函数中直接引用。例如：

```c
//在myfunc.h文件中
//使用#include引入头文件，在编译时IDE会直接把头文件的内容复制到当前源文件中，所以你甚至可以直接把其他头文件也写进来
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include <math.h>

// 全局变量声明
	extern int cou_1_scorenumber;
	extern int cou_2_scorenumber;

// 函数声明
    extern int mymax(int x, int y);
    // 1.新增学生信息
    extern int new_stu_information(int student_number1);
    // 2.新增课程信息
    extern int new_cou_information(int course_number1);

```
```c
//在主函数所在的源文件main.c中
#include <stdio.h>
#include"mystruct.h"//引入自定义头文件，注意是用双引号而不是用<>
int main(){
    right = 2;
    cou_1_scorenumber = 1;
    cou_2_scorenumber = 2;
    printf("%d\n",mymax(cou_1_scorenumber,cou_2_scorenumber));
    return 0;
}
```

之后再分别在其他源文件中写函数体即可，这里与方法一类似，不再赘述。
