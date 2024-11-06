# 数组与字符串

## 一维数组

一维数组是相同数据类型元素的集合，可以通过索引访问每个元素，并从 $0$ 开始索引。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int numbers[] = {10, 20, 30, 40, 50}; // 声明并初始化一维数组
    int size = sizeof(numbers) / sizeof(numbers[0]); // 计算数组大小

    // 遍历数组并打印每个元素
    for (int i = 0; i < size; i++) {
        std::cout << "Element at index " << i << ": " << numbers[i] << std::endl;
    }

    return 0;
}
```

## 多维数组

多维数组是数组的数组，通常用于表示表格或矩阵。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int matrix[3][2] = {
        {1, 2},
        {3, 4},
        {5, 6}
    }; // 声明并初始化二维数组

    // 遍历二维数组并打印每个元素
    for (int i = 0; i < 3; i++) { // 遍历行
        for (int j = 0; j < 2; j++) { // 遍历列
            std::cout << "Element at [" << i << "][" << j << "]: " << matrix[i][j] << std::endl;
        }
    }

    return 0;
}
```

## C 风格字符串

C 风格字符串是以空字符 `'\0'` 结尾的字符数组。

**示例代码**：

```cpp
#include <iostream>

int main() {
    char str[] = "Hello, C++"; // 声明并初始化 C 风格字符串

    // 打印字符串
    for (char *ptr = str; *ptr != '\0'; ptr++) {
        std::cout << *ptr;
    }
    std::cout << std::endl;

    return 0;
}
```

## `std::string` 类

C++ 提供了 `std::string` 类来处理字符串，它是一个更加安全和方便的字符串处理方式。

**示例代码**：

```cpp
#include <iostream>
#include <string> // 包含 string 库

int main() {
    std::string greeting = "Hello, C++"; // 使用 std::string 声明字符串

    // 打印字符串
    std::cout << greeting << std::endl;

    // 访问字符串中的字符
    std::cout << "First character: " << greeting[0] << std::endl;

    return 0;
}
```

## 学习目标

- 理解一维和多维数组的声明和使用。
- 掌握 C 风格字符串和 `std::string` 类的基本操作。

## 实践模拟

- **练习1**：编写一个函数，找出一维数组中的最大值。

```cpp
#include <iostream>

// 函数声明，找出一维数组中的最大值
int findMax(int arr[], int size);

int main() {
    int numbers[] = {34, 78, 12, 45, 67}; // 声明并初始化一维数组
    int size = sizeof(numbers) / sizeof(numbers[0]); // 计算数组大小
    int max = findMax(numbers, size); // 调用函数找出最大值

    std::cout << "Max value in the array: " << max << std::endl; // 打印最大值
    return 0;
}

// 函数定义，找出一维数组中的最大值
int findMax(int arr[], int size) {
    int maxVal = arr[0]; // 假设第一个元素是最大的
    for (int i = 1; i < size; i++) { // 从第二个元素开始比较
        if (arr[i] > maxVal) { // 如果当前元素大于当前最大值
            maxVal = arr[i]; // 更新最大值
        }
    }
    return maxVal; // 返回最大值
}
```

- **练习2**：编写一个函数，反转一个 C 风格字符串。

```cpp
#include <iostream>

// 函数声明，反转 C 风格字符串
void reverseCString(char str[]);

int main() {
    char str[] = "Hello, C++"; // 声明并初始化 C 风格字符串
    std::cout << "Original string: " << str << std::endl; // 打印原始字符串

    reverseCString(str); // 调用函数反转字符串

    std::cout << "Reversed string: " << str << std::endl; // 打印反转后的字符串
    return 0;
}

// 函数定义，反转 C 风格字符串
void reverseCString(char str[]) {
    int length = 0; // 初始化长度
    while (str[length] != '\0') { // 计算字符串长度
        length++;
    }

    int start = 0; // 起始索引
    int end = length - 1; // 结束索引

    while (start < end) { // 当起始索引小于结束索引时
        char temp = str[start]; // 交换字符
        str[start] = str[end];
        str[end] = temp;
        start++; // 移动起始索引
        end--; // 移动结束索引
    }
}
```

- **练习3**：使用 `std::string` 类编写一个函数，计算字符串中元音字母的数量。

```cpp
#include <iostream>
#include <string>

// 函数声明，计算字符串中元音字母的数量
int countVowels(const std::string& str);

int main() {
    std::string str = "Hello, C++"; // 声明并初始化字符串
    int vowelCount = countVowels(str); // 调用函数计算元音字母数量

    std::cout << "Number of vowels in the string: " << vowelCount << std::endl; // 打印元音字母数量
    return 0;
}

// 函数定义，计算字符串中元音字母的数量
int countVowels(const std::string& str) {
    int count = 0; // 初始化元音字母计数为 0
    const char* vowels = "aeiouAEIOU"; // 定义元音字母字符数组

    for (char c : str) { // 遍历字符串中的每个字符
        for (int i = 0; vowels[i] != '\0'; i++) { // 检查当前字符是否是元音
            if (c == vowels[i]) { // 如果是元音
                count++; // 增加计数
                break; // 跳出内层循环
            }
        }
    }
    return count; // 返回元音字母数量
}
```
