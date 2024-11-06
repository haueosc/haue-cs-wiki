::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# Visual Studio Code

![vscode_icon | origional repo: https://github.com/Aikoyori/ProgrammingVTuberLogos](/images/Environment/vs-code/icon.png)

## 简介

Visual Studio Code（简称 VSCode 或 VSC）是由微软开发的开源、免费、轻量且拥有跨平台支持的代码编辑器，这意味着无论是Windows, MacOS 还是 Linux 平台上你都可以运行VScode。

除此之外，VSCode还拥有强大的代码自动补全，丰富的插件扩展和多语言支持，可自定义程度也相对较高，因此深受广大开发者喜爱。

这篇文档将带大家熟悉VSCode的安装和配置（以Windows 11家庭中文版系统为例），并在VSCode里编译运行自己的第一个程序。

## 视频教程

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112950274688145&bvid=BV17TYze7Ebd&cid=500001647384926&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 下载

### 官网下载

进入 [Visual Studio Code 下载官网](https://code.visualstudio.com/Download)，按下图的指示点击按钮下载

![vscode-download](/images/Environment/vs-code/vsc_download.png)

### 本站下载

[点击此处下载 || 密码：frbq](https://frexcheat.lanzoul.com/isxmE27ewt6b)

## 安装

### 一切的开始——安装VSCode

安装程序下载完成后，双击打开，之后按照安装程序的指引完成安装。  
在这里首先勾选 ***“我同意此协议”***

![vscode installation  | image_1-1-1](/images/Environment/vs-code/vsc1.png)

建议将VSCode安装至空间充足的磁盘上，在这里不建议直接安装至C盘。 ~~除非你的电脑只有C盘~~  

推荐的安装姿势是在你空间充足的磁盘（如D盘）内新建一个文件夹，为它起一个名字（例如：vscode），然后将VSCode安装在你新建的文件夹内，这样一来，你的VSCode安装路径应当看起来是这样的：  

`D:/vscode/`  或者  `D:/Software/vscode/`

前者或后者并没有什么区别，只取决于你个人的喜好。

**“...等一下，我的D盘里没有 `Software` 这个文件夹！？”**  
***——没有关系，新建一个就好，这并不是什么问题。***

另外需要特别注意的是，安装路径中 **最 好 不 要 出 现 中 文**，例如 `D:/VS扣得` 就是一个非常差劲的安装路径名称，使用这样的安装路径可能会导致一些意料之外的错误。

>顺带一提，我个人也不太喜欢安装路径中出现空格，所以我会把默认的安装文件夹名“Microsoft VS Code” 换成 “vscode”，实际的安装中，你可以按照自己的喜好来自由命名VSCode所安装在的文件夹。

![vscode installation | image_1-1-2](/images/Environment/vs-code/vsc2.png)

这一步会在你的开始菜单创建一个快捷方式，如果你不想要在开始菜单创建快捷方式，勾选下方的 ***“不创建开始菜单文件夹”*** 即可。

![vscode installation | image_1-1-3](/images/Environment/vs-code/vsc3.png)

接下来勾选下图中的必要选项，同样地，如果你不想在桌面上创建快捷方式，取消勾选 ***“创建桌面快捷方式”*** 即可。

![vscode installation | image_1-1-4](/images/Environment/vs-code/vsc4.png)

最后在开始正式安装前，目测检查一下安装信息是否有误

![vscode installation | image_1-1-5](/images/Environment/vs-code/vsc5.png)

如果没有什么其他问题，点击安装并耐心等待几分钟，vscode本体就在你的电脑上安装好了。

![vscode installation | image_1-1-6](/images/Environment/vs-code/vsc6_运行.png)

安装完成之后勾选 ***“运行 Visual Studio Code”*** 并点击完成，不出意外的话，你就可以看到VSCode的欢迎界面了，VSCode本体的安装也就此完成。

### ...等等，还没完呢！——下载并安装MinGW-W64


还记得我们在开头说过什么吗？VSCode只是一个**代码编辑器**而已，并不是一个完整的**IDE（集成开发环境）**，换句话说，你刚刚安装好的VSCode其实只是一个高级一点的记事本，并不具备编译和调试程序的能力等等。要想在VSCode里进行C++程序的编写，你还需要安装一些编译工具，在Windows平台上，我们一般使用 ***MinGW-W64***作为我们的编译工具集。

**“...你说得对，但是怎么安装呢？”**

首先下载[MSYS2](https://github.com/msys2/msys2-installer/releases/download/2024-05-07/msys2-x86_64-20240507.exe)的安装程序。

**“...MSYS2？那又是什么？”**

::: info :clipboard:Tips
*MSYS2* 是一个独立于操作系统的轻量级开发环境，主要用于在 Windows 上提供类似 Unix 的体验。它是 "**M**inimal **SYS**tem **2**" 的缩写，继承自 *MinGW* 和 *MSYS* 项目。
:::

上面是对MSYS2的一段简单描述，不过我们并不需要知道那么多，只需要知道它可以帮我们安装好我们需要的**MinGW-W64工具集**，这就够了。

然后双击打开安装程序，按照指引完成MSYS2的安装

![msys2 installation | image_1-2-1](/images/Environment/vs-code/msys2_1.png)

同样地，推荐安装在空间充足的磁盘（如D盘），安装路径中最好不要出现中文名称。

![msys2 installation | image_1-2-2](/images/Environment/vs-code/msys2_2.png)

在开始菜单中创建一个快捷方式，并且你不能取消这一步。 ~~是的，你没得选~~

![msys2 installation | image_1-2-3](/images/Environment/vs-code/msys2_3.png)

耐心等待，放轻松，由于大陆的特色网络环境，出现卡50%的情况是正常的，一般只需多等几分钟即可。

![msys2 installation | image_1-2-4](/images/Environment/vs-code/msys2_4_卡50.png)

安装结束后，**勾选 `Run MSYS2 now` 这个选项**，然后再点击Finish按钮，这样在关闭安装程序后会自动弹出一个MSYS2的终端窗口。

![msys2 installation | image_1-2-5](/images/Environment/vs-code/msys2_5.png)

**“完蛋了！我好像忘记勾那个框框了！”**  
*——不用太慌张，如果忘记勾选的话，直接在Windows的搜索栏里搜索 **“MSYS2 UCRT64”** 并运行即可，这同样会呼出MSYS2的终端窗口*

![msys2 installation | msys2_icon](/images/Environment/vs-code/msys2_icon.png)

在弹出的窗口中，输入下面的指令来安装MinGW-W64工具集：  
```shell
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

![msys2 installation | image_1-2-6](/images/Environment/vs-code/msys2_6.png)

然后在终端中按回车键接受默认选项

![msys2 installation | image_1-2-7](/images/Environment/vs-code/msys2_7.png)

最后在终端中输入Y并按回车键（或者直接按回车键）来确认安装

![msys2 installation | image_1-2-8](/images/Environment/vs-code/msys2_8.png)

依旧耐心等待即可。

![msys2 installation | image_1-2-9](/images/Environment/vs-code/msys2_9.png)

这是安装完成之后的样子，确认所有组件都已经安装完毕后，你就可以安全关闭终端窗口了，MINGW-W64至此也就安装完毕。

![msys2 installation | image_1-2-10](/images/Environment/vs-code/msys2_10.png)

## 配置

### 必要的准备——配置环境变量

首先让我们打开 Windows设置  
找到 ***系统->系统信息->高级系统设置*** 并点击

![env path settings](/images/Environment/vs-code/env_path_2.png)

然后点击进入 ***高级->环境变量***

![env path settings](/images/Environment/vs-code/env_path_3.png)

::: info :clipboard:Tips
或者更简单一些 你也可以直接在Windows的搜索栏中搜索 ***“编辑系统环境变量”*** 并打开，同样可以打开上图所示的窗口。

![env path settings](/images/Environment/vs-code/env_path_1.png)
:::

在下方的 ***“系统变量”*** 中找到 ***“Path”***，直接双击进入编辑，或者单击之后再点击下方的 ***“编辑”***

![env path settings](/images/Environment/vs-code/env_path_4.png)
  
然后点击 ***“新建”***，并输入你的工具集所在目录的路径，例如，如果你将MSYS2默认安装在了C盘，默认的路径应该为 `C:\msys64\ucrt64\bin\`   

![env path settings](/images/Environment/vs-code/env_path_5.png)

本教程示例中的目录是 `D:\Software\msys64\ucrt64\bin\` 如果你在安装时选择了其他的安装目录，你就需要填写你当时安装mingw64的目录  

总之，你需要输入的东西看起来应该是像 `X:\xxx\...\ucrt64\bin\` 的样子

![env path settings](/images/Environment/vs-code/env_path_6.png)

最后，点击 ***“确定”*** 来保存环境变量配置

然后打开cmd或powershell，依次输入 `gcc --version` ，`g++ --version`，`gdb --version` 来测试环境变量是否配置正常  

![env path settings](/images/Environment/vs-code/env_path_7.png)

如果你的终端里像上图所示显示了gcc，g++，gdb的版本信息，那么很好，你已经成功地把我们所需的环境变量配置完毕了。

### 同样不可或缺——配置VSCode

接下来，让我们打开先前安装好的VSCode，VSCode会自动打开一个引导教学界面，这篇文档中我们只会在这个界面中进行一些必要的设置  

::: info :clipboard:Tips
在跟随本文档配置完成后，如果还想要更进一步查看欢迎页面的其他选项，可以使用快捷键 ***“Ctrl+Shift+P”*** 打开命令面板，输入 ***“Welcome: Walkthrough”*** 来重新选择并打开VSCode的引导教学界面
:::

首先可以选择一个你喜欢的主题，VSCode目前有四种预设好的官方主题可供选择

![env vscode settings](/images/Environment/vs-code/env_vsc_1.png)

进入下一步并点击 ***“Browse Language Extentions”***

然后在左侧弹出的市场中安装 ***“C/C++ Extention Pack”*** 这个扩展

![env vscode settings](/images/Environment/vs-code/env_vsc_2.png)

::: info :clipboard:Tips
如果想要再次进入扩展市场，只需要点击左侧菜单栏的 ***“扩展”*** 图标即可

上图中左侧菜单各个图标分别为：
- **上方**
   - 资源管理器
   - 搜索
   - 源代码管理
   - 运行和调试
   - ***扩展 <-***
- **下方**
   - 账户
   - 管理
:::

VSCode默认为英文界面，如果需要中文界面，同样可以在扩展市场中安装  
在扩展市场中搜索 ***“Chinese (Simplified)”*** 来找到并安装简体中文语言包，重启VSCode后就可以将VSCode切换到中文界面

![env vscode settings](/images/Environment/vs-code/env_vsc_3.png)

接下来让我们回到扩展界面，删除搜索框中的搜索内容，此时扩展商店中会列出我们已经安装好的扩展  

然后找到 ***“C/C++”*** 这个扩展  

点击右边的齿轮图标进入扩展设置

![env vscode settings](/images/Environment/vs-code/env_vsc_4.png)

找到 ***用户*** 设置中的 ***“C_Cpp > Default: Compiler Path”***，点击 ***“在 settings.json 中编辑”***

![env vscode settings](/images/Environment/vs-code/env_vsc_5.png)

如图所示，输入你的工具集所在目录的路径

![env vscode settings](/images/Environment/vs-code/env_vsc_6.png)

::: info :clipboard:Tips
这一步所填写的路径与先前我们配置环境变量时所填写的的路径相同，只不过需要注意的是，在VSCode的配置文件中，分隔目录层级的符号为两个反斜杠 `\\` 或者一个正斜杠 `/` ，而不是一个反斜杠 `\`

也就是说，你需要填写的路径应该长这样：  
 ``D:\\Software\\msys64\\ucrt64\\bin``  
或者这样：  
``D:/Software/msys64/ucrt64/bin``  
二者都是可以的，你可以根据个人喜好选择一种方法填写。
:::

是时候喝口水，伸个懒腰，然后休息一下了

至此配置部分已经全部结束，接下来我们终于可以愉快地使用VSCode来编写我们的第一个C++程序了。

## 使用

### 记得从文件夹里开！——在VSC里编写你的第一个C++程序

在VScode中编写代码时，我们需要创建一个 ***文件夹*** 来存放我们的 ***源代码*** 和 ***项目配置文件***

让我们提前创建好一个文件夹，命名为“HelloWorld”

::: warning :construction:WARNING
在VSCode中，你的项目文件夹所在路径中 **一 定 不 能 有 中 文 存 在**，类似 `C:/Users/Documents/Code/你好世界` 或者是 `C:/Users/Documents/代码/HelloWorld` 的项目路径都会导致你的程序在VSCode中无法编译运行，在使用VSCode时请务必牢记这点
:::

![env vscode settings](/images/Environment/vs-code/env_vsc_7.png)

然后在VSCode中选择 ***打开文件夹***，找到我们新创建的项目文件夹并打开它

![env vscode settings](/images/Environment/vs-code/env_vsc_8.png)

现在，新建一个名为 ***“helloworld.cpp”*** 的文件，开始为这份C++源代码注入灵魂：

```cpp
#include<iostream>
using namespace std;
int main(){
    cout<<"Hello World!";
    return 0;
}
```

Ctrl+S 保存一下这份新鲜出炉的HelloWorld，接下来点击右上角出现的 ***“调试C/C++文件”*** 图标

![env vscode settings](/images/Environment/vs-code/env_vsc_9.png)

点击 ***C/C++: g++.exe 生成和调试活动文件***

![env vscode settings](/images/Environment/vs-code/env_vsc_10.png)

等待编译完成...然后...

庆贺罢！

![env vscode settings](/images/Environment/vs-code/env_vsc_11.png)

## 尾声

至此，这篇基础教程也告一段落了，经过以上这些配置后，你应该可以在VSCode中愉快地编写C/C++代码了。

如果想要了解更多关于使用VSCode的进阶教程或是还有其他问题，可以前往百度，必应或谷歌搜索，或者查看微软官方详尽的教程文档（英文原版）[Documentation for Visual Studio Code](https://code.visualstudio.com/docs)

***Good Luck & Have Fun***

***`:P`***


