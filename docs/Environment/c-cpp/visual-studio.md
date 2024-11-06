# Visual Studio

![Visual Studio](/images/Environment/visual-studio/vs-1.png)

## 简介

Visual Studio 是微软开发的一款专用于在Windows平台下开发C/C++或.NET现代应用程序的IDE。与普通代码编辑器的区别在于，Visual Studio 集成了代码编辑器、MSVC编译器[^1]、MSVC运行库[^2]、Windows SDK[^3]、代码调试器以及许多丰富的功能和拓展插件，不需要像 Visual Studio Code 那样单独为C/C++配置编译器。

## 下载

Visual Studio 分为**社区版**、**专业版**、**企业版**。作为初学者或者普通用户，使用免费的社区版就可以满足我们大部分的开发需求了。**目前官方的最新版本为 2022**

### 官网下载

本站提供官方2022社区版的下载链接：[点击此处直接下载](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false)

### 本站下载

[点击此处下载 || 密码：b5e0](https://frexcheat.lanzoul.com/iAA0H27evdcf)

## 安装

Visual Studio 是一款集成了许多开发工具的IDE，所以也就注定了它安装后的大小会很大，而且安装过程会比较慢（主要取决于你的网速和电脑硬盘性能）。它的安装方式比较特殊：即官方提供下载的并不是最后要安装的全部东西，而是一个小型安装器，名为 `Visual Studio Installer` ；在这个安装器里，你可以配置 Visual Studio 的安装路径，选择你要安装的组件等。选择完毕后它会自动下载你所选择的组件到你的电脑上，并自动安装 Visual Studio 。

为什么还要选择要安装的组件呢？因为 Visual Studio 不仅可以单纯地开发C/C++应用，同时也支持开发.NET应用、安卓应用以及Web应用等，所以需要你选择你要用到的开发组件，而不是全部安装（除非你觉得这些东西你都能学会并且你的电脑硬盘空间很大）。即使在后期你需要用到 Visual Studio 的其他组件，你也可以继续打开 `Visual Studio Installer` 来为你的 Visual Studio 添加组件。

***

打开下载好的 Visual Studio 安装程序，如果出现以下弹窗，请点击 `是`

![VS-Installer-1](/images/Environment/visual-studio/vs-i-1.png)

出现以下内容时点击 `继续`

![VS-Installer-2](/images/Environment/visual-studio/vs-i-2.png)

随后等待安装程序走完进度条

![VS-Installer-3](/images/Environment/visual-studio/vs-i-3.png)

进入以下界面后，下拉找到 `使用C++的桌面开发` 选项并勾选

![VS-Installer-4](/images/Environment/visual-studio/vs-i-4.png)

接下来按照以下步骤更改安装路径，推荐不要安装在C盘（如果你的C盘剩余大小小于60GB）

![VS-Installer-5](/images/Environment/visual-studio/vs-i-5.png)

![VS-Installer-6](/images/Environment/visual-studio/vs-i-6.png)

![VS-Installer-7](/images/Environment/visual-studio/vs-i-7.png)

随后就进入了漫长的下载安装过程，这个过程持续的时间取决于你的网速和电脑的硬盘读写性能，或许水一会儿群就好了呢？

![VS-Installer-8](/images/Environment/visual-studio/vs-i-8.png)

安装好后如果提示你需要重启，请及时重启一次

![VS-Installer-9](/images/Environment/visual-studio/vs-i-9.png)

如果没有提示，关闭安装程序

![VS-Installer-10](/images/Environment/visual-studio/vs-i-10.png)

这时你会发现，Visual Studio 并没有给你在桌面上创建快捷方式，那我们该如何启动呢？下面我们来看看如何给 Visual Studio 创建桌面快捷方式。

首先在键盘上按一下开始键或者直接在任务栏中点击开始按钮，唤出开始菜单，并在上方搜索栏搜索 `Visual Studio 2022`，找到之后对它点击鼠标右键，并选择 `打开文件位置`

![VS-Installer-15](/images/Environment/visual-studio/vs-i-15.png)

打开之后，对其点击鼠标右键，将其复制到桌面上即可

![VS-Installer-16](/images/Environment/visual-studio/vs-i-16.png)

![VS-Installer-17](/images/Environment/visual-studio/vs-i-17.png)

最后，我们就得到了 Visual Studio 的桌面快捷方式

![VS-Installer-18](/images/Environment/visual-studio/vs-i-18.png)

双击打开，即可看到期待已久的 Visual Studio 启动界面

![VS-Installer-11](/images/Environment/visual-studio/vs-i-11.png)

初次打开，要求我们登录微软账号，我们首次先不登录，点击 `暂时跳过此项`

![VS-Installer-12](/images/Environment/visual-studio/vs-i-12.png)

选择你喜欢的主题颜色，然后点击 `启动 Visual Studio`

![VS-Installer-13](/images/Environment/visual-studio/vs-i-13.png)

至此，Visual Studio 就安装完成了

![VS-Installer-14](/images/Environment/visual-studio/vs-i-14.png)

## 使用

不推荐刚入门的小白使用 Visual Studio 这种项目格式规范的IDE[^4]。

### 创建项目

打开 Visual Studio 后点击 `创建新项目`，随后点击 `控制台应用程序` （这里以与前面几个IDE相似的方式来演示，所以才使用 “控制台应用程序”）

![VS-Usage-1](/images/Environment/visual-studio/vs-u-1.png)

![VS-Usage-2](/images/Environment/visual-studio/vs-u-2.png)

配置项目名称、保存路径，创建项目

![VS-Usage-3](/images/Environment/visual-studio/vs-u-3.png)

### 运行项目

进入项目工作界面

![VS-Usage-4](/images/Environment/visual-studio/vs-u-4.png)

![VS-Usage-5](/images/Environment/visual-studio/vs-u-5.png)

![VS-Usage-6](/images/Environment/visual-studio/vs-u-6.png)

下次如何打开项目？找到上次创建项目时保存的路径，打开其中的 `.sln` 文件即可

![VS-Usage-7](/images/Environment/visual-studio/vs-u-7.png)

[^1]: MSVC全称为 Microsoft Visual C++ ，是微软专门为 Windows 平台设计的一款 C++ 开发工具集合，其中包含了代码调试器、代码编译器、以及微软 C++ 运行库。
[^2]: 运行库，顾名思义是指程序在运行时所需要用到的各种依赖文件；那么MSVC运行库自然就是指 Windows 平台软件在运行时所需要的依赖文件咯。其中包含了lib静态库文件以及各种dll动态链接库文件。这里不多赘述，感兴趣的可以自己在后期了解一下什么是lib和dll。
[^3]: SDK 全称为 Software development kit，即软件开发工具。那么 Windows SDK 自然就是指 Windows 软件开发工具咯，其中包含了在开发 Windows 平台软件时所需要的头文件、说明文档以及库文件。
[^4]: 原因为 Visual Studio 的默认标准语法是C++11 ~ C++20，对于刚入门学习C语言的同学，其中某些语法与C语言不同，会引起某些同学的困惑。其次，Visual Studio 是以项目为单位区分代码的，一个项目里的所有代码都有所关联，并不是相互独立的；另外，一个项目里不能出现多个 `main` 函数，这对于刚入学打算法的同学并不友好。
