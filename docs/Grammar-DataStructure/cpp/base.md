# 基本语法

:::info Tips
本版块的部分 C++ 语法与 C语言 类似，将不再过多叙述。
:::

## 变量与数据类型

在 C++ 中，变量是存储数据的容器。变量需要先声明后使用，声明时需要指定数据类型。C++ 支持多种基本数据类型，如 `int`, `float`, `double`, `char` 等。

**示例代码**：

```cpp
int age = 25;      // 整型变量
float height = 1.75; // 浮点型变量
char initial = 'A'; // 字符型变量
```

## 运算符

C++ 提供了丰富的运算符，包括算术运算符（如 `+`, `-`, `*`, `/`），关系运算符（如 `>`, `<`, `==`），逻辑运算符（如 `&&`, `||`），位运算符等。

**示例代码**：

```cpp
int a = 10;
int b = 20;
int sum = a + b;    // 算术运算符
bool isGreater = a < b; // 关系运算符
```

## 控制结构

控制结构用于控制程序的执行流程。主要的控制结构有：

- **if 语句**：用于条件判断。
- **switch 语句**：用于多条件判断。
- **循环语句**：包括 `for`, `while`, `do-while`。

**示例代码**：

```cpp
if (age > 18) {
    std::cout << "You are an adult." << std::endl;
}

for (int i = 0; i < 10; i++) {
    std::cout << "Hello, C++!" << std::endl;
}
```

## 学习目标

- 理解 C++ 的基本特性。
- 掌握基本的数据类型和变量声明。
- 熟练使用运算符进行表达式计算。
- 理解并能够使用控制结构控制程序流程。

## 实践模拟

- **练习1**：编写一个程序，声明并初始化不同类型的变量，并计算它们的和。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    int age = 25;      // 声明一个整型变量 age 并初始化为 25
    float height = 1.75; // 声明一个浮点型变量 height 并初始化为 1.75
    char initial = 'A'; // 声明一个字符型变量 initial 并初始化为 'A'

    int sum = age + static_cast<int>(height); // 将 height 转换为整数并加到 age 上，得到和

    std::cout << "Age: " << age << std::endl; // 输出 age 的值
    std::cout << "Height: " << height << std::endl; // 输出 height 的值
    std::cout << "Initial: " << initial << std::endl; // 输出 initial 的值
    std::cout << "Sum: " << sum << std::endl; // 输出计算的和

    return 0; // 程序正常结束
}
```

- **练习2**：使用 `if` 语句判断一个数是否为偶数。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    int number = 10; // 声明一个整型变量 number 并初始化为 10

    if (number % 2 == 0) { // 使用取模运算符 % 判断 number 是否为偶数
        std::cout << "The number is even." << std::endl; // 如果是偶数，输出相应的消息
    } else {
        std::cout << "The number is odd." << std::endl; // 如果不是偶数，输出相应的消息
    }

    return 0; // 程序正常结束
}
```

- **练习3**：编写一个循环程序，打印从 $1$ 到 $10$ 的数字。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    for (int i = 1; i <= 10; i++) { // 初始化循环变量 i 为 1，循环直到 i 大于 10
        std::cout << i << std::endl; // 每次循环输出 i 的值
    }

    return 0; // 程序正常结束
}
```
