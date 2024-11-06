# 指针与引用

## 指针

指针是一个变量，它存储了另一个变量的内存地址。这是C++中非常强大的一个特性。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int var = 10; // 声明一个整型变量
    int *ptr = &var; // 声明一个整型指针并指向 var 的地址

    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Address of var: " << &var << std::endl;
    std::cout << "Value of ptr: " << ptr << std::endl; // 打印指针变量的值（内存地址）
    std::cout << "Value pointed by ptr: " << *ptr << std::endl; // 通过指针访问其指向的值
    return 0;
}
```

## 引用

引用是另一个名字，用于访问同一个变量。一旦引用被初始化，它就不能被改变指向另一个变量。

**示例代码**：

```cpp
#include <iostream>

void increment(int &ref) {
    ref += 1; // 通过引用直接修改原始变量的值
}

int main() {
    int value = 5;
    std::cout << "Original value: " << value << std::endl;
    increment(value);
    std::cout << "Incremented value: " << value << std::endl;
    return 0;
}
```

## 指针与数组

指针和数组紧密相关，数组名本身就是一个指向数组首元素的指针。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr; // 让指针 p 指向数组的第一个元素

    for (int i = 0; i < 5; i++) {
        std::cout << "Element " << i << ": " << p[i] << std::endl;
    }

    return 0;
}
```

## 学习目标

- 理解指针的基本概念和用法。
- 掌握引用的概念以及如何使用引用作为函数参数。
- 理解指针与数组之间的关系。

## 实践模拟

- **实践1：使用指针交换两个变量的值**

```cpp
#include <iostream>

// 函数声明，使用指针交换两个变量的值
void swap(int *x, int *y);

int main() {
    int a = 10, b = 20;
    std::cout << "Before swap: a = " << a << ", b = " << b << std::endl;

    swap(&a, &b); // 通过地址传递变量

    std::cout << "After swap: a = " << a << ", b = " << b << std::endl;
    return 0;
}

// 函数定义，使用指针交换两个变量的值
void swap(int *x, int *y) {
    int temp = *x; // 保存 x 的值
    *x = *y;       // 将 y 的值赋给 x
    *y = temp;     // 将 x 的原始值赋给 y
}
```

- **实践2：找出整型数组中的最大值和最小值**

```cpp
#include <iostream>

// 函数声明，找出整型数组中的最大值和最小值
void findMaxMin(int arr[], int size, int *max, int *min);

int main() {
    int arr[] = {50, 20, 10, 40, 30};
    int size = sizeof(arr) / sizeof(arr[0]);
    int maxVal, minVal;

    findMaxMin(arr, size, &maxVal, &minVal);

    std::cout << "Max value: " << maxVal << std::endl;
    std::cout << "Min value: " << minVal << std::endl;
    return 0;
}

// 函数定义，找出整型数组中的最大值和最小值
void findMaxMin(int arr[], int size, int *max, int *min) {
    *max = arr[0];
    *min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > *max) *max = arr[i];
        if (arr[i] < *min) *min = arr[i];
    }
}
```

- **实践3：使用引用更新数组中所有元素的值**

```cpp
#include <iostream>

// 函数声明，使用引用更新数组中所有元素的值
void updateArray(int arr[], int size, int updateValue);

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int updateValue = 10;

    std::cout << "Array before update: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    updateArray(arr, size, updateValue);

    std::cout << "Array after update: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}

// 函数定义，使用引用更新数组中所有元素的值
void updateArray(int arr[], int size, int updateValue) {
    for (int i = 0; i < size; i++) {
        arr[i] += updateValue; // 将更新值加到数组的每个元素上
    }
}
```
