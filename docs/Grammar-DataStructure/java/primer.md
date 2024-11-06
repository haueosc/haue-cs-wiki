# 初步体验

在这里，将带领大家通过记事本开发我们的第一个java程序`HelloWorld`，目的是为了熟悉java开发的整个流程，在实际开发中，我们可以通过idea、eclipse等工具使我们的开发流程大大简化<br>

<p style="color: red;">为保证大家初步体验的成功，请大家先严格按照事例中的内容完成</p>

## 开发步骤

Java 程序开发三步骤：**编写**、**编译**、**运行**。

- 将 Java 代码编写到扩展名为 .java 的源文件中
- 通过 javac.exe 命令对该 java 文件进行编译，生成一个或多个字节码文件
- 通过 java.exe 命令对生成的 class 文件进行运行
  <br> <br>
  <img src="\images\Grammer-DataStructure\java\hw1.png">

## 编写
1. 在自选目录下新建文本文件，<a href='#wenjianming'>完整的文件名</a>完整的文件名修改为HelloWorld.java，其中文件名为 HelloWorld，后缀名必须为.java。
<img src="\images\Grammer-DataStructure\java\hw2.png"><br>

2. 用记事本打开文件准备编写
3. 在文件中输入如下代码，并且保存：<br><br>
<img 
src="\images\Grammer-DataStructure\java\hw3.png"><br>
<h4 id = 'wenjianming'>提醒:如何查看完整的文件名：</h4><br><br>
<img 
src="\images\Grammer-DataStructure\java\hw4.png"><br>

## 编译
第一个 HelloWord 源程序就编写完成了，但是这个文件是程序员编写的，JVM是看不懂的，也就不能运行，因此我们必须将编写好的 Java 源文件 编译成JVM 可以看懂字节码文件 ，也就是.class 文件
1. 在该源程序目录中，在地址栏处输入 `cmd`<br><br>
<img 
src="\images\Grammer-DataStructure\java\hw5.png"><br>
2. 输入命令：javac Java 源文件名.后缀名 java，即 `javac HelloWorld.java`，编译成功后，命令行没有任何提示，打开文件夹，发现多了一个.class文件,该文件就是编译后的文件，是 Java 的可运行文件，称为字节码文件，有了字节码文件，就可以运行程序了。
<br><br>
<img 
src="\images\Grammer-DataStructure\java\hw6.png"><br>
## 运行
1. 再次回到源文件夹，在命令框输入`cmd`开始命令框
2. 输入命令：java 主类名字，即`java HelloWorld`,可以看到命令框打印出了HelloWorld 。
<br><br>
<img 
src="\images\Grammer-DataStructure\java\hw7.png">

## 小结
1. **Java 程序的结构与格式**
- 结构
```java
类{
  方法{
    语句;
  } 
}
```
- 格式<br>
（1）每一级缩进一个 Tab 键<br>
（2）{}的左半部分在行尾，右半部分单独一行，与和它成对的"{"的行首对齐

2. **java程序的入口**<br><br>
Java 程序的入口是 main 方法
```java
public static void main(String[] args){
 
}
```
3. **两种常见的输出语句**
- 换行输出语句：输出内容，完毕后进行换行，格式下：
`System.out.println(输出内容);`
- 直接输出语句：输出内容，完毕后不做任何处理，格式如下`System.out.print(输出内容);`

4. **源文件名和类名**<br>
（1）源文件名是否必须与类名一致？public 呢？<br>
&emsp;如果这个类不是 public，那么源文件名可以和类名不一致。但是不便于代码维护。
如果这个类是 public，那么要求源文件名必须与类名一致。否则编译报错。
我们建议大家，不管是否是 public，都与源文件名保持一致，而且一个源文件尽量只
写一个类，目的是为了好维护。<br><br>
（2）一个源文件中是否可以有多个类？public 呢？<br>
&emsp;一个源文件中可以有多个类，编译后会生成多个.class 字节码文件。
但是一个源文件只能有一个 public 的类。



