# 内存管理

## `new` 和 `delete`

在C++中，`new` 和 `delete` 操作符用于动态内存分配和释放。使用 `new` 分配的内存必须使用 `delete` 来释放，否则会导致内存泄漏。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *ptr = new int; // 分配一个整型变量的动态内存
    *ptr = 100; // 通过指针初始化值

    std::cout << "Value: " << *ptr << std::endl;

    delete ptr; // 释放动态分配的内存
    ptr = nullptr; // 将指针设置为 nullptr，防止悬挂指针

    return 0;
}
```

## 动态内存分配

可以为基本数据类型或对象分配动态内存。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *array = new int[10]; // 分配一个整型数组的动态内存
    for (int i = 0; i < 10; i++) {
        array[i] = i * i; // 初始化数组元素
    }

    for (int i = 0; i < 10; i++) {
        std::cout << "Element at index " << i << ": " << array[i] << std::endl;
    }

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}
```

## 内存泄漏

内存泄漏发生在分配了内存但未正确释放时。这会导致程序消耗越来越多的内存，最终可能导致程序崩溃。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *ptr = new int; // 分配动态内存
    *ptr = 50;
    std::cout << "Value: " << *ptr << std::endl;

    // 错误：忘记释放内存
    // delete ptr;

    return 0;
}
```

## 学习目标

- 理解动态内存分配和释放的重要性。
- 掌握 `new` 和 `delete` 的使用。
- 避免内存泄漏。

## 实践模拟

- **实践1：使用动态内存分配整数数组**

```cpp
#include <iostream>

// 函数声明，使用动态内存分配整数数组并初始化
int* createIntArray(int size, int initialValue);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = createIntArray(size, 0); // 分配并初始化数组

    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << array[i] << " ";
    }
    std::cout << std::endl;

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}

// 函数定义，使用动态内存分配整数数组并初始化
int* createIntArray(int size, int initialValue) {
    int* arr = new int[size]; // 分配动态内存
    for (int i = 0; i < size; i++) {
        arr[i] = initialValue; // 初始化数组元素
    }
    return arr; // 返回数组指针
}
```

- **实践2：释放动态分配的整数数组的内存**

```cpp
#include <iostream>

// 函数声明，释放动态分配的整数数组的内存
void deleteIntArray(int*& array);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = new int[size]; // 分配动态内存

    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << array[i] << " ";
    }
    std::cout << std::endl;

    deleteIntArray(array); // 释放数组内存

    return 0;
}

// 函数定义，释放动态分配的整数数组的内存
void deleteIntArray(int*& array) {
    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr
}
```

- **实践3：计算动态分配的整数数组中的最大值**

```cpp
#include <iostream>

// 函数声明，计算动态分配的整数数组中的最大值
int findMax(int* array, int size);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = new int[size]; // 分配动态内存
    for (int i = 0; i < size; i++) {
        std::cin >> array[i]; // 输入数组元素
    }

    int max = findMax(array, size); // 计算最大值

    std::cout << "Max value: " << max << std::endl;

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}

// 函数定义，计算动态分配的整数数组中的最大值
int findMax(int* array, int size) {
    int maxVal = array[0]; // 假设第一个元素是最大的
    for (int i = 1; i < size; i++) {
        if (array[i] > maxVal) { // 如果当前元素大于当前最大值
            maxVal = array[i]; // 更新最大值
        }
    }
    return maxVal; // 返回最大值
}
```
