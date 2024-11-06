::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# 小熊猫Dev-C++

![小熊猫C++](/images/Environment/red-panda/rc-1.png)

## 简介

小熊猫编译器（RedPanda-CPP）是轻量级的 C/C++ IDE 。它集成了GNU的GCC、G++编译器以及GDB调试器。它以简洁的用户界面、多平台支持（Windows、Mac OS、Linux）和高效的代码编辑功能为特点，适合编程初学者和教育用途。

小熊猫编译器提供了代码自动补全、语法高亮、代码导航等辅助工具，允许用户根据项目需求配置编译选项。

## 下载

### 官网下载

[小熊猫官网](http://royqh.net/redpandacpp/download/)一共提供了三种下载渠道，这里只提供两种不限速的渠道：

- [官方蓝奏云 - (密码：f0tp)](https://wwe.lanzoui.com/b01os0mwd)

::: info :clipboard:Tips
蓝奏云下载方式请注意下载下图中所指示的版本

![小熊猫C++-2](/images/Environment/red-panda/rc-2.png)
:::

- [官方SourceForge仓库](https://sourceforge.net/projects/redpanda-cpp/files/v3.1/RedPanda.C%2B%2B.3.1.win64.MinGW64_11.4.Setup.exe/download)

### 本站下载

点击此处下载

## 安装

打开下载好的安装程序，等待加载完成

![下载8.png](/images/Environment/red-panda/下载8.png)

选择 `简体中文` 并点击 `OK`

![下载9.png](/images/Environment/red-panda/下载9.png)

用户协议选择 `我接受`，安装的用户选择 `只为我自己安装`

![下载10.png](/images/Environment/red-panda/下载10.png)

![下载11.png](/images/Environment/red-panda/下载11.png)

接下来的安装路径自己选择即可，没有的话默认也可以。

![下载12.png](/images/Environment/red-panda/下载12.png)

点击完成即安装结束

![安装完成.png](/images/Environment/red-panda/安装完成.png)

点击 `yes` 后开始设置主题

![使用1.png](/images/Environment/red-panda/使用1.png)

至此，我们的安装步骤完成

![使用2.png](/images/Environment/red-panda/使用2.png)

## 使用

### 创建项目

首先点击 `文件`

![使用3.png](/images/Environment/red-panda/使用3.png)

选择 `新建` 然后点击 `创建新的C/C++文件` (也可以先创建一个项目然后在项目里创建C/C++文件)。

项目相当于一个文件夹，如果有很多相同性质的C/C++文件可以放在一个项目里。

::: info :clipboard:Tips
但多说一句，项目的实际作用不止于此：它是一个完整的工程，里面会有多个完成特定功能的模块。感兴趣的同学可以在空余时间了解一下：在编程领域中，什么是项目。
:::

这里用创建项目做演示：点击OK后会提示不存在该项目（如果存在说明重名了）

![使用4.png](/images/Environment/red-panda/使用4.png)

随后创建项目文件

![使用5.png](/images/Environment/red-panda/使用5.png)

![使用6.png](/images/Environment/red-panda/使用6.png)

### 运行代码

现在就可以编写第一个程序了

![使用7.png](/images/Environment/red-panda/使用7.png)

这是源代码

```c
#include<stdio.h>//头文件，含有输入输出等函数的声明
int main(){//也可以int main(void),void是表示“空”的数据类型
	int a,b;//定义了两个整数类型
	scanf("%d,%d",&a,&b);//输入两个整数
	printf("两数之和为%d",a+b);
	return 0;//表示程序正常退出
}
```
运行结果

![使用8.png](/images/Environment/red-panda/使用8.png)

## 配置

在顶部菜单栏中，选择 `工具` - `选项`，找到窗口左侧列表中的外观

![使用9.png](/images/Environment/red-panda/使用9.png)

字体、背景、语法高亮等常见外观都可以在这里调整。

::: info :clipboard:Tips
用到这里是不是感觉 小熊猫C++ 和 Dev-C++ 很相似呢？其实这两者之间有很大的联系。你可以简单地理解为：小熊猫C++ 是在 Dev-C++ 停止更新后的接替品。
:::