# 函数

## 定义与调用

函数是一段具有特定功能的代码块，可以被重复调用。在 C++ 中，函数定义通常包括返回类型、函数名、参数列表和函数体。

**示例代码**：

```cpp
// 函数定义
int add(int a, int b) {
    return a + b; // 返回两个参数的和
}

// 函数调用
int main() {
    int result = add(5, 10); // 调用函数并接收返回值
    std::cout << "Sum: " << result << std::endl;
    return 0;
}
```

## 参数传递

函数可以通过值传递（pass by value）或引用传递（pass by reference）来接收参数。

- **值传递**：将参数的值复制给函数的形参。
- **引用传递**：将参数的内存地址传递给函数的形参。

**示例代码**：

```cpp
void swap(int &a, int &b) { // 引用传递
    int temp = a;
    a = b;
    b = temp;
}

void printArray(int arr[], int size) { // 数组作为参数（实际上是指针传递）
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}
```

## 作用域

作用域决定了变量的可见性和生命周期。局部变量的作用域限于其定义的函数或代码块内。

**示例代码**：

```cpp
void exampleFunction() {
    int localVariable = 42; // 只在 exampleFunction 内可见
}

int globalVariable = 100; // 全局变量，在整个程序中可见

int main() {
    int mainVariable = 37; // 只在主函数(main)中可见
    exampleFunction(); // localVariable 在主函数(main)中不可见
    return 0;
}
```

## 学习目标

- 理解函数的定义、调用和作用域。
- 掌握参数的值传递和引用传递。
- 能够编写和使用自定义函数。

## 实践模拟

- **练习1**：编写一个函数，计算两个数的最大值。

```cpp
#include <iostream>

// 函数声明，用于计算两个数的乘积
int multiply(int a, int b);

int main() {
    int num1 = 6, num2 = 7;
    int product = multiply(num1, num2); // 调用函数并接收返回值
    std::cout << "Product: " << product << std::endl; // 打印乘积
    return 0;
}

// 函数定义，接收两个整数参数并返回它们的乘积
int multiply(int a, int b) {
    return a * b; // 计算并返回乘积
}
```

- **练习2**：使用引用传递编写一个函数，交换两个数的值。

```cpp
#include <iostream>

// 函数声明，使用指针参数来交换两个数
void swapUsingPointers(int *a, int *b);

int main() {
    int x = 30, y = 40;
    std::cout << "Before swap: x = " << x << ", y = " << y << std::endl;
    swapUsingPointers(&x, &y); // 传递 x 和 y 的地址
    std::cout << "After swap: x = " << x << ", y = " << y << std::endl;
    return 0;
}

// 函数定义，使用指针参数来交换两个数的值
void swapUsingPointers(int *pa, int *pb) {
    int temp = *pa; // 使用指针访问值
    *pa = *pb;      // 交换值
    *pb = temp;
}
```

- **练习3**：编写一个函数，打印一个整数数组的所有元素。

```cpp
#include <iostream>

// 函数声明，计算数组所有元素的总和
int sumArray(int arr[], int size);

int main() {
    int arr[] = {1, 2, 3, 4, 5}; // 定义并初始化数组
    int size = sizeof(arr) / sizeof(arr[0]); // 计算数组元素个数
    int sum = sumArray(arr, size); // 调用函数计算总和
    std::cout << "Sum of array elements: " << sum << std::endl; // 打印总和
    return 0;
}

// 函数定义，接收一个整数数组和数组大小，返回所有元素的总和
int sumArray(int arr[], int size) {
    int total = 0; // 初始化总和为 0
    for (int i = 0; i < size; i++) {
        total += arr[i]; // 累加数组元素
    }
    return total; // 返回总和
}
```
