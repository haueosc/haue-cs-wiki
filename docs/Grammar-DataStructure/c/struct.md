# 结构体和链表
## 一、&nbsp;结构体(struct)
结构体（Structure）是C语言中一种用户自定义的数据类型，它允许将不同类型的数据组合在一起。结构体可以看作是一个数据的集合，其中每个数据项称为成员（member）。
### (一)&nbsp;声明结构体变量
#### 1.&nbsp;先定义，后声明
```c
struct student {
    char name[20];
    int age;
    char address[50];
};
#include<stdio.h>
int main(){
    struct student stu1;
    struct student stu2.stu3;
    printf("请输入姓名、年龄、地址：");
    printf("请输入姓名、年龄、地址：");
    scanf("%s %d %c %s",stu1.name,&stu1.age,stu1.address);
    /* stu1的name成员和address成员都是数组
    数组名字本身就是指针，所以不需要加&
    stu1.age是整型，所以需要加&
    */
    //太长了，所以我分成两行写了
    /* 分号是一行语句的结尾标志，
    分不清的时候找分号即可 */
    printf("姓名：%s\n年龄：%d\n地址：%s\n",
    stu1.name,stu1.age,stu1.address);
    return 0;
}
```
#### 2.&nbsp;定义结构体的同时声明变量
```c
#include<stdio.h>
struct Person {
    char name[50];
    int age;
    float height;
} person1;
struct student {
    char name[50];
    int age;
    float height;
} stu1,stu2,stu3;
int main(){
    printf("请输入姓名、年龄、身高：");
    scanf("%s %d %f",person1.name,&person1.age,&person1.height);
    printf("姓名：%s\n年龄：%d\n身高：%.2f\n",
    person1.name,person1.age,person1.height);

    return 0;
}
```
#### 3.&nbsp;定义匿名结构体的同时声明变量
这种语法不常用，了解即可
```c
struct {
    int x;
    int y;
} a1,a2;
```

### (二)&nbsp;初始化结构体变量
#### 1.&nbsp;声明的同时初始化
```c{10,12}
#include<stdio.h>
struct student {
    char name[20];
    int age;
    char address[50];
    int score;
};
int main(){
    //方式一
    struct student stu1 = {"张三",18,"北京",98};
    //方式二
    struct student stu2 = {.age=19,.name="李四",.address="上海"};
    //如果用第二种方式的话，没赋值的成员会被初始化为0
    printf("姓名：%s\n年龄：%d\n地址：%s\n成绩：%d\n",
    stu1.name,stu1.age,stu1.address,stu1.score);
    printf("姓名：%s\n年龄：%d\n地址：%s\n成绩：%d\n",
    stu2.name,stu2.age,stu2.address,stu2.score);
    return 0;
}
```
#### 2.&nbsp;先声明的后初始化
```c
#include<stdio.h>
struct student {
    char name[20];
    int age;
    char address[50];
    int score;
};
int main(){
    struct student stu1,stu2;//声明两个student类型的结构体变量
    stu1.name = "张三";
    stu1.age = 18;
    stu1.address = "北京";
    stu1.score = 98;

    stu2.name = "李四";
    stu2.age = 19;
    stu2.address = "上海";
    stu2.score = 100;

    printf("姓名：%s\n年龄：%d\n地址：%s\n成绩：%d\n",
    stu1.name,stu1.age,stu1.address,stu1.score);
    printf("姓名：%s\n年龄：%d\n地址：%s\n成绩：%d\n",
    stu2.name,stu2.age,stu2.address,stu2.score);
    return 0;
}
```
### (三)&nbsp;访问结构体成员
刚刚的例子已经展示过，我们使用点运算符（.）来访问结构体变量的成员(如使用stu1.name来访问stu1的name成员)

### (四)&nbsp;嵌套结构体
结构体可以嵌套，即结构体的成员也可以是另一个结构体。
```c
#include <stdio.h>
#include <string.h>
struct Date {
    int day;
    int month;
    int year;
};

struct Person {
    char name[50];
    int age;
    float height;
    struct Date birthdate;  // 嵌套结构体
};
//访问嵌套的结构体成员
int main() {
    struct Person person1;

    // 赋值
    strcpy(person1.name, "Bob");
    person1.age = 25;
    person1.height = 5.9;
    /* 每个Person结构体都有一个名为birthdate的成员。
    birthdate成员是一个Date类型的结构体，
    它有day、month和year三个成员。
    因此我们要访问birthdate的成员时
    需要用两次点运算符
    */
    person1.birthdate.day = 15;
    person1.birthdate.month = 8;
    person1.birthdate.year = 1998;

    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);
    printf("Height: %.2f\n", person1.height);
    printf("Birthdate: %02d/%02d/%d\n", 
    person1.birthdate.day, person1.birthdate.month, person1.birthdate.year);

    return 0;
}

```

### (五)&nbsp;typedef
typedef是c语言中的一种关键字，作用是为现有数据类型或我们定义的结构体和指针添加别名，从而方便我们使用。<br>
每次声明一个结构体变量都需要 struct 结构体名称 变量名；有点麻烦<br>
我们可以用typedef来简化<br>
```c
#include<stdio.h>
typedef struct student {
    char name[20];
    int score;
    char address[50];
} Student;
/* 创建一个名为student的结构体
并使用typedef为它添加别名Student
*/
int main(){
    /* 有了别名之后我们可以直接用别名来声明变量
    就像我们之前用int来声明变量一样
    */
    Student stu1,stu2;

    stu1.name="张三";
    stu1.score=98;
    stu1.address="北京";

    stu2.name="李四";
    stu2.score=100;
    stu2.address="上海";

    printf("姓名：%s\n成绩：%d\n地址：%s\n",
    stu1.name,stu1.score,stu1.address);
    printf("姓名：%s\n成绩：%d\n地址：%s\n",
    stu2.name,stu2.score,stu2.address);
    return 0;
}
```
要注意typedef并不是创建了一个新的数据类型，而是给现有类型添加了一个别名。<br>
用typedef创建别名时，可以省略该结构体的标签<br>
```c
typedef struct student {
    char name[20];
    int score;
    char address[50];
} Student;
//上面的写法和下面这种基本上是等价的
typedef struct {
    char name[20];
    int score;
    char address[50];
} Student;
/* 省略标签的话就不能用结构体加标签名来声明一个结构体变量了，
只能用别名声明一个结构体变量 */
```

### (六)&nbsp;结构体数组
先前我们讲过，一维数组就像一排小格子，每个格子里面都放了一个元素，这个元素可以是任意数据类型的变量。<br>
我们我们也可以把结构体当成一个元素来存放在数组中。<br>
#### 1.&nbsp;先声明，后初始化
```c
#include<stdio.h>
#include<string.h>
typedef struct student {
    char name[20];
    int score;
    char address[50];
} Student;
int main(){
    //创建结构体数组
    Student stu[2];

    /* 访问结构体数组的方式如下
    先通过数组名字加下标访问指定位置的结构体，
    然后通过点运算符访问这个结构体的成员
     */
    stu[1].score = 18;
    stu[1].name = "张三";// [!code error]
    /* 在C语言中，字符串是字符数组，
    而字符数组不能直接使用赋值运算符将一个字符串赋给另一个字符串数组。
    你需要使用字符串库中的函数来进行字符串的复制操作。
    所以正确的写法是： 
    */
    strcpy(stu[1].name, "张三");
    printf("%s %d\n",stu[1].name,stu[1].score);
    
    return 0;
}
```
![BinImg3](/images/Grammer-DataStructure/c/Arrays_of_structures.png)
#### 2.&nbsp;声明的同时初始化
```c
#include<stdio.h>
typedef struct{
    int day;
    int month;
    int year;
} myDate;
int main(){
    myDate dates[] = {
        {15,8,1998},
        {23,7,2024},
        {12,12,2023},
        {1,1,2023}
    };
    for(int i = 0; i < 4; i++){
        printf("Time is %.2i:%.2i:%.2i\n",
        dates[i].year,dates[i].month,dates[i].day);
    }
    
    return 0;
}
```

### (七)&nbsp;结构体指针
我们可以创建指向整型、浮点型、数组等的指针，同样，我们也可以创建一个指向结构体的指针<br>
```c
#include<stdio.h>
typedef struct{
    int day;
    int month;
    int year;
} myDate;
int main(){
    myDate myday1;
    /* 创建一个指向myDate结构体类型变量的指针 */
    myDate *p = &myday1;
    //通过指针修改myday1结构体的成员
    //方式一：
    (*p).month = 8;
    //方式二：
    p->month = 11;

    //从键盘输入一个整数，赋值给指针指向的成员
    scanf("%d",&p->year);

    printf("%d/%d/%d\n",p->day,p->month,p->year);
    return 0;
}
```

### (八)&nbsp;结构体与函数
结构体可以作为函数的参数，也可以作为函数的返回值。<br>
当我们把数组当参数传入函数的时候，实际上传入了一个地址，我们在那个函数中可以通过传入的地址来修改数组中的元素<br>、
但是结构体不同，当我们把结构体当参数传入函数的时候，实际上传入的是一个结构体变量的拷贝，也就是我们把要传入的结构体复制了的一份副本传给函数，所以在函数中修改这个副本并不能对外部结构体变量产生影响。当这个函数执行完毕，这个副本的生命周期也就结束了。<br>
所以我们可以选择传入一个指向结构体的指针作为参数，这样我们就可以修改外部结构体变量了。<br>
