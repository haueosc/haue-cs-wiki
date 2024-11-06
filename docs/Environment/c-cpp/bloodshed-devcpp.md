::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# Dev C++

![Devcpp-1](/images/Environment/dev_c++/dc-1.png)

## 简介

Dev-C++ 是轻量级的 C/C++ IDE 。它集成了GNU的GCC、G++编译器以及GDB调试器。

虽然 Dev-C++ 的原始版本（5.11）自2016年之后就没有再更新，但是由于其上手简单，门槛低，依然是适合初学者使用的一款工具。另外，一些算法比赛，例如蓝桥杯等，也是将 Dev-C++ 作为官方指定使用的IDE。

## 下载

### 官网下载

官网下载途径只提供到了 `4.9.9` 版本，这里我们从 Dev-C++ 的 `Sourceforge` 仓库下载最新版本 `5.11`

[点击此处下载](https://sourceforge.net/projects/orwelldevcpp/files/Setup%20Releases/Dev-Cpp%205.11%20TDM-GCC%204.9.2%20Setup.exe/download)

### 本站下载

[点击此处下载 || 密码：dx48](https://frexcheat.lanzoul.com/iGV2w27etyvi)

## 安装

打开下载好的安装程序，如果出现以下界面，请点击 `是`

![Devcpp-Install-1](/images/Environment/dev_c++/dc-i-1.png)

等待程序加载完毕，按照图中指示操作进行

![Devcpp-Install-2](/images/Environment/dev_c++/dc-i-2.png)

![Devcpp-Install-3](/images/Environment/dev_c++/dc-i-3.png)

![Devcpp-Install-4](/images/Environment/dev_c++/dc-i-4.png)

![Devcpp-Install-5](/images/Environment/dev_c++/dc-i-5.png)

:::warning :construction:WARNING
此处注意，安装路径最好不要带有中文！
:::

![Devcpp-Install-6](/images/Environment/dev_c++/dc-i-6.png)

随后等待安装完成即可

![Devcpp-Install-7](/images/Environment/dev_c++/dc-i-7.png)

安装完成后点击 `Finish` 按钮即可打开 Dev-C++

![Devcpp-Install-8](/images/Environment/dev_c++/dc-i-8.png)

打开后的界面右侧，选择 `简体中文/(Chinese)`，然后点击 `Next`

![Devcpp-Install-9](/images/Environment/dev_c++/dc-i-9.png)

接下来可以在这个界面选择你喜欢的主题颜色，以及字体

![Devcpp-Install-10](/images/Environment/dev_c++/dc-i-10.png)

个人觉得黑色（GSS Hacker）不错，但是本人有夜盲症，所以就不选黑色来演示了，选完之后点击 `OK`

![Devcpp-Install-11](/images/Environment/dev_c++/dc-i-11.png)

![Devcpp-Install-12](/images/Environment/dev_c++/dc-i-12.png)

至此，Dev-C++就可以正常使用了

![Devcpp-Install-13](/images/Environment/dev_c++/dc-i-13.png)

## 使用

你可以选择创建项目，也可以选择创建源代码。后者在保存代码的时候需要自己来命名到底是C语言文件还是C++文件

### 创建项目

按照以下图示步骤来创建项目

![Devcpp-Usage-1](/images/Environment/dev_c++/dc-u-1.png)

![Devcpp-Usage-2](/images/Environment/dev_c++/dc-u-2.png)

![Devcpp-Usage-3](/images/Environment/dev_c++/dc-u-3.png)

![Devcpp-Usage-4](/images/Environment/dev_c++/dc-u-4.png)

之后，就可以得到一个有初始代码的 `main.c` 文件了

![Devcpp-Usage-5](/images/Environment/dev_c++/dc-u-5.png)

### 运行代码

示例代码

```c
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	printf("hello,devbeginner!");
	return 0;
}
```

![Devcpp-Usage-6](/images/Environment/dev_c++/dc-u-6.png)

![Devcpp-Usage-7](/images/Environment/dev_c++/dc-u-7.png)

![Devcpp-Usage-8](/images/Environment/dev_c++/dc-u-8.png)

![Devcpp-Usage-9](/images/Environment/dev_c++/dc-u-9.png)

错误代码

```c
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	printf("hello,devbeginner!") //没有分号  // [!code focus] // [!code error]
	return 0;
}
```

![Devcpp-Usage-10](/images/Environment/dev_c++/dc-u-10.png)
