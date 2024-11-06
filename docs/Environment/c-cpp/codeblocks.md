::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# Codeblocks

![CodeBlocks](/images/Environment/codeblocks/cdb-1.png)

CodeBlocks又称为Code::Blocks，是一款开源的跨平台C/C++集成开发环境，软件占用空间小，安装方便，满足了多数编程者C语言开发的基本需要。

::: info :sound:INFO
<mark>优点</mark>：软件占用内存空间小，安装快捷，可以开箱即用，也可以个性化定制自己的配置。

<mark>缺点</mark>：对中文支持不友好，界面观赏性不高，软件独立性不高，卸载后残留相关配置文件。
:::

## 下载

我们介绍两种下载CodeBlocks的方式，请根据自身的情况任选一种。

### 官网

进入 [CodeBlocks官网下载页](https://www.codeblocks.org/downloads/binaries/)，在右侧找到 `Windows` 下载选项里的 `codeblocks-20.03mingw-setup.exe` ；在其右侧有两个选项：`FossHUB` `Sourceforge.net` ：前者点击之后会跳转到一个新的页面，等待5秒钟左右后会自动开始下载；后者点击后会自动开始下载。

如果其中一个无法下载，请尝试更换另外一个。<mark>**记住，这里请务必选择带有 “mingw” 字样的选项，否则你将要手动配置MinGW编译器！**</mark>

![CodeBlocksDownload](/images/Environment/codeblocks/download/cdb-2.png)

### Sourceforge

进入 [Sourceforge-CodeBlocks-Windows版镜像站](https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/)，找到 `Windows` 下载选项里的 `codeblocks-20.03mingw-setup.exe` ，点击之后会进入下载页面，等待5秒倒计时结束，会自动开始下载。

![Sourceforge-download1](/images/Environment/codeblocks/download/cdb-3.png)

![Sourceforge-download2](/images/Environment/codeblocks/download/cdb-4.png)

### 群内下载

[点击此处加入群聊](https://qm.qq.com/q/tY8pIKOT6w)

## 安装

找到刚才下载的文件并打开，如果出现以下弹窗请点击 `是`

![CodeBlocksInstall-1](/images/Environment/codeblocks/install/cdb-i-1.png)

按照以下图片中的指示进行安装

![CodeBlocksInstall-2](/images/Environment/codeblocks/install/cdb-i-2.png)

![CodeBlocksInstall-3](/images/Environment/codeblocks/install/cdb-i-3.png)

![CodeBlocksInstall-4](/images/Environment/codeblocks/install/cdb-i-4.png)

此处需要你选择你的安装路径，也可以选择使用默认路径，但是一定要**保证路径里没有中文！！！**

![CodeBlocksInstall-5](/images/Environment/codeblocks/install/cdb-i-5.png)

开始安装后需要等待1-2分钟，或许追一集番剧就安装好了呢？

![CodeBlocksInstall-6](/images/Environment/codeblocks/install/cdb-i-6.png)

这里请你自行选择是否立即打开CodeBlocks

![CodeBlocksInstall-7](/images/Environment/codeblocks/install/cdb-i-7.png)

安装完毕后点击 `Next> `

![CodeBlocksInstall-8](/images/Environment/codeblocks/install/cdb-i-8.png)

![CodeBlocksInstall-9](/images/Environment/codeblocks/install/cdb-i-9.png)

至此，CodeBlocks的安装部分就结束了。

![CodeBlocksInstall-10](/images/Environment/codeblocks/install/cdb-i-10.png)

## 启动

安装完成后，打开CodeBlocks，按照下图操作

![CodeBlocksUsage-1](/images/Environment/codeblocks/usage/cdb-u-1.png)

![CodeBlocksUsage-2](/images/Environment/codeblocks/usage/cdb-u-2.png)

至此，CodeBlocks首次启动完成

![CodeBlocksUsage-3](/images/Environment/codeblocks/usage/cdb-u-3.png)

## 汉化

::: info :clipboard:Tips
CodeBlocks界面默认只有英文版本，如果你的英文水平足够好，此步你可以省略，直接进入下一部分；如果你的英文水平不够好，请跟随教程为CodeBlocks的界面添加中文语言。
:::

### 下载汉化包

点击此处直接下载

### 安装汉化包

将CodeBlocks关闭，并将下载的汉化包解压

![CodeBlocksUsage-4](/images/Environment/codeblocks/usage/cdb-u-4.png)

打开CodeBlocks的安装目录，并将汉化包内的 `share` 文件夹拖入其中

![CodeBlocksUsage-5](/images/Environment/codeblocks/usage/cdb-u-5.png)

![CodeBlocksUsage-6](/images/Environment/codeblocks/usage/cdb-u-6.png)

如果出现下图提示，请按图示操作

![CodeBlocksUsage-7](/images/Environment/codeblocks/usage/cdb-u-7.png)

再次打开CodeBlocks，按照下图操作进行

![CodeBlocksUsage-8](/images/Environment/codeblocks/usage/cdb-u-8.png)

![CodeBlocksUsage-9](/images/Environment/codeblocks/usage/cdb-u-9.png)

关闭CodeBlocks，在弹出的窗口中点击 `Yes`

![CodeBlocksUsage-10](/images/Environment/codeblocks/usage/cdb-u-10.png)

再次打开CodeBlocks，即可看到汉化后的界面

![CodeBlocksUsage-11](/images/Environment/codeblocks/usage/cdb-u-11.png)

## 使用

### 创建文件

此处我们以创建C语言代码文件为例，请按照下图操作

![CodeBlocksUsage-12](/images/Environment/codeblocks/usage/cdb-u-12.png)

![CodeBlocksUsage-13](/images/Environment/codeblocks/usage/cdb-u-13.png)

![CodeBlocksUsage-14](/images/Environment/codeblocks/usage/cdb-u-14.png)

![CodeBlocksUsage-15](/images/Environment/codeblocks/usage/cdb-u-15.png)

![CodeBlocksUsage-16](/images/Environment/codeblocks/usage/cdb-u-16.png)

以上步骤完成后，我们就可以得到一个空的代码文件，在右侧的编辑界面，我们可以编写C语言代码

![CodeBlocksUsage-17](/images/Environment/codeblocks/usage/cdb-u-17.png)

### 编译运行

因为CodeBlocks默认不开启语法检查，所以当我们写完代码后，要自己初步检查一遍是否有语法错误，之后再编译和运行。

![CodeBlocksUsage-18](/images/Environment/codeblocks/usage/cdb-u-18.png)

![CodeBlocksUsage-19](/images/Environment/codeblocks/usage/cdb-u-19.png)

如果我们的代码出现了错误，则编译器会在底部信息栏中提示错误信息，在代码编辑器里，相应错误的行左侧也会被打上红色矩形标记。

![CodeBlocksUsage-20](/images/Environment/codeblocks/usage/cdb-u-20.png)
