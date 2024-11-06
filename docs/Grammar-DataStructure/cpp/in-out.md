# 输入输出

## `iostream` 库

C++ 的输入输出操作是通过 `iostream` 库进行的。这个库提供了输入流 `std::cin` 和输出流 `std::cout` 。

和很多编程语言一样，C++ 对具有一定特性的功能的方法等进行封装，形成了库。当我们需要某些功能时，可以自己写，也可以从这些库中提取。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int num;
    std::cout << "Enter an integer: ";
    std::cin >> num; // 从标准输入读取一个整数

    std::cout << "You entered: " << num << std::endl; // 将整数输出到标准输出
    return 0;
}
```

## 格式化输入输出

### 设置字段宽度

使用 `std::setw()` 可以设置输出字段的宽度。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    std::cout << std::setw(10) << "Value" << std::endl; // 设置字段宽度为10
    return 0;
}
```

### 设置左对齐或右对齐

使用 `std::left` 设置左对齐，`std::right` 设置右对齐。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    std::cout << std::setw(10) << std::left << "Left aligned" << std::endl;
    std::cout << std::setw(10) << std::right << "Right aligned" << std::endl;
    return 0;
}
```

### 设置数值格式化

设置数值的小数点和千位分隔符。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    double value = 12345.6789;
    std::cout << "Default: " << value << std::endl;
    std::cout << std::fixed << std::setprecision(2) << value << std::endl; // 固定小数点并设置精度
    std::cout << std::scientific << value << std::endl; // 科学计数法
    return 0;
}
```

### 设置布尔值的输出格式

控制 `bool` 类型的输出格式。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    bool flag = true;
    std::cout << "Default: " << flag << std::endl;
    std::cout << std::boolalpha << flag << std::endl; // 以文字形式输出 true/false
    return 0;
}
```

## 输入输出操作符 (可跳过)

### 重载输入操作符

允许自定义类的输入行为。

**示例代码**：

```cpp
#include <iostream>

class Point {
public:
    int x, y;

    // 重载输入操作符
    friend std::istream& operator>>(std::istream& is, Point& p) {
        is >> p.x >> p.y;
        return is;
    }
};

int main() {
    Point p;
    std::cout << "Enter the point coordinates: ";
    std::cin >> p; // 使用重载的操作符输入 Point 对象
    std::cout << "You entered: (" << p.x << ", " << p.y << ")" << std::endl;
    return 0;
}
```

### 重载输出操作符

允许自定义类的输出行为。

**示例代码**：

```cpp
#include <iostream>

class Point {
public:
    int x, y;

    // 重载输出操作符
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
};

int main() {
    Point p{3, 4};
    std::cout << p << std::endl; // 使用重载的操作符输出 Point 对象
    return 0;
}
```

## 学习目标

- 理解 `iostream` 库的基本使用。
- 掌握格式化输入输出的方法。
- 学习如何重载输入输出操作符。

## 实践模拟

- **实践1：格式化输出浮点数**

```cpp
#include <iostream>
#include <iomanip>
#include <vector>

int main() {
    std::vector<double> numbers = {3.1415926, 2.7182818, 1.4142136}; // 浮点数列表
    std::cout << std::fixed << std::setprecision(3); // 设置小数点后固定三位

    std::cout << "Formatted floating point numbers: ";
    for (const double& num : numbers) {
        std::cout << num << " "; // 输出每个浮点数
    }
    std::cout << std::endl; // 输出换行

    return 0;
}
```

- **实践2：重载 `Student` 类的 `<<` 操作符**

```cpp
#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int id;

    // 构造函数
    Student(std::string n, int i) : name(n), id(i) {}

    // 重载输出操作符
    friend std::ostream& operator<<(std::ostream& os, const Student& s) {
        os << "Student(name: " << s.name << ", id: " << s.id << ")";
        return os;
    }
};

int main() {
    Student student("Alice", 12345);
    std::cout << student << std::endl; // 使用重载的操作符输出 Student 对象

    return 0;
}
```
