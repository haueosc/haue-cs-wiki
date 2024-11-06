# 其他关键字

## 1. package、import
<h3>package关键字</h3>
为了更好的实现项目中类的管理，提供包的概念。<br/>
package将所有有关的类放在一个包类以便查找修改等，一些使用事项如下：

1. 在你的项目目录中，你需要创建相应的文件夹结构来表示包。例如：
```
src/
└── com/
    └── example/
        └── myapp/
            └── MyClass.java
```
2. 在 MyClass.java 文件的顶部，使用 package 语句来声明该类所属的包。
`示例代码`
```java
// File: src/com/example/myapp/MyClass.java 文件的位置
package com.example.myapp; // MyClass类所在包

public class MyClass {
    public void display() {
        System.out.println("Hello from MyClass in com.example.myapp!");
    }
}
```
3. 如果要在其他类中使用 MyClass，需要在文件顶部导入它：
`示例代码`
```java
package com.example.test; // TestClass类所在的包
// MyClass类跟TestClass类在不同的包
import com.example.myapp.MyClass; // 导包

public class TestClass {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.display();
    }
}
```
4. 同一个包下，不能命名同名的接口，类
5. 不同的包下，可以命名同名的接口、类。

<h3>import关键字</h3>
import是引入包的关键字，它的使用场景如下：

1. 在源文件中使用import结构导入指定包下的类或者接口
`示例代码：`
```java
import java.util.Scanner; //导入java.util包下的Scanner类，这样就可以直接使用这些类
Scanner scan = new Scanner(System.in); //创建Scanner对象

//如果不使用import导入Scanner类，创建Scanner对象就需要写出它们的全限定名，如下
java.util.Scanner scan=new java.util.Scanner(System.in);
```
2. 使用“XXX.*”的方式，可以导入xxx包下的所有类
`示例代码：`
```java
import java.util.*; //导入java.util包中的所有类，比如Scanner、ArrayList、HashMap、List等
//但不包括java.util包的子包中的类，如3所示
```
3. 如果使用子包下的类仍需要显示导入
例如：即使使用import XXX.*导入ljava.util包中的所有类，使用子包下的类仍需显式导入
`示例代码`
```java
import java.util.*;
import java.util.concurrent.Executors; //显式导入java.util.concurrent包

public class MyClass {
    List<String> list = new ArrayList<>();
    // 如果要使用Executors，则必须显式导入java.util.concurrent包
    ExecutorService service = Executors.newFixedThreadPool(10);
}
```
4. 如果需要导入多个结构，则并列写出即可
`示例代码`
```java
// 导入多个结构
import java.util.ArrayList;
import java.util.HashMap;
```
5. 使用import static导入类的静态方法或静态变量
`示例代码`
```java
import static java.lang.Math.PI; // 导入静态变量
import static java.lang.Math.sqrt; // 导入静态方法

public class MyClass {
    public void calculateCircleArea(double radius) {
        double area = PI * radius * radius;  // 直接使用PI
        // 如果没有导入，我们使用PI时就需要写成java.lang.Math.PI
    }

    public void calculateSquareRoot(double number) {
        double result = sqrt(number);  // 直接使用sqrt方法
        // 如果没有导入，我们使用sqrt时就需要写成java.lang.Math.sqrt
    }
}
```
6. 使用不同包下的同名类时，至少有一个类需要全限定名
`示例代码`
```java
import java.util.Date;

public class MyClass {
    Date utilDate = new Date();  // 来自java.util.Date
    java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());  // 来自java.sql.Date
    // 两个Data类来自不同包的重名类，有一个就必须使用全限定名，否则运行时系统容易混淆
}
```
7. 如果使用的类或java.lang包下定义的，则可以省略import结构
`示例代码`
```java
// 我们常用的String、Integer类其实是java.lang包下的类
public class MyClass {
    String name;  // 不需要导入java.lang.String类
    Integer number;  // 不需要导入java.lang.Integer类
}
```
8. 如果使用的类或接口是本包下定义的，则可以省略import结构
`示例代码`
```java
package demo1;
// 如果在demo1包中定义了ClassA类和ClassB类，当我们在ClassA中使用到ClassB，就不需要使用import导包
public class ClassA {
    // ClassB在同一个包下
    ClassB obj = new ClassB();
}
```
9. 当使用某个包的一些类时，仅需类名然后使用ctrl+shift+o或者选定类名（类或属性或方法）按住ctrl+单击 即可自动插入类所在的包。

## 2. this

在Java中，this的作用和其词义很接近，表示“当前”的意思。使用场景如下：

1. this关键字可以用来修饰、调用：属性、方法、构造器。
2. this关键字只能在方法内部使用。
3. 它在方法内部使用，即这个方法所属对象的引用。<br/>
**this引用指向当前对象(成员方法运行时调用该成员方法的对象)，在成员方法中所有成员变量的操作**，都是通过该引用去访问。只不过所有的操作对用户是透明的，即用户不需要来传递，编译器自动完成。<br/>
this引用的特性<br/>
- - this的类型：对应类类型引用，即哪个对象调用就是哪个对象的引用类型
- - this只能在"成员方法"中使用
- - 在"成员方法"中，this只能引用当前对象，不能再引用其他对象
- - this是“成员方法”第一个隐藏的参数，编译器会自动传递，在成员方法执行时，编译器会负责将调用成员方法
- - 对象的引用传递给该成员方法，this负责来接收。
在代码层面来简单演示--->注意：下图右侧中的Date类也是可以通过编译的
<img src="\images\Grammer-DataStructure\java\关键字2.png" >

4. 在类的方法中，我们可以使用this.属性或this.方法的方式，调用当前对象属性或方法。但是，通常情况下，我们都选择省略this.。特殊情况下，如果方法的形参和类的属性同名时，我们必须显式的使用this.变量的方式，表明此变量是属性，而非形参。
`举例如下`<br/>
当我们实例化一个类时，可能会出现传入参数和这个类中的成员名相同，此时会引起歧义。`代码示例`
```java
public class Date {
    public int year;
    public int month;
    public int day;
    public void setDate(int year,int month,int day) {
        year = year; // 产生歧义
        month = month;
        day = day;
    }
 }
```
当我们使用this引用后默认为此类的变量名。`代码示例`
```java
public class Date {
    public int year;
    public int month;
    public int day;
    public void setDate(int year,int month,int day) {
        this.year = year; // this引用，表示当前对象的属性
        this.month = month;
        this.day = day;
    }
 }
```
5. 使用this访问属性和方法时，如果在本类中未找到，会从父类中查找。`代码示例`
```java
class father{
    public int add(int a, int b){
        return a + b;
    }
}
public class demo2 extends father{
    private int a;
    private int b;
    public void test(){
        System.out.println(this.add(a, b));// this调用父类方法
    }
    public demo2(int a, int b) {
        this.a = a;
        this.b = b;
    }
    public static void main(String[] args) {
        demo2 demo2=new demo2(1,2);
        demo2.test();// 输出结果3
    }
}
```
```java
class father{
    public int add(int a, int b){
        return a + b;
    }
}
public class demo2 extends father{
    private int a;
    private int b;
    public void test(){
        System.out.println(this.add(a, b));// 先找本类的add方法
    }
    public int add(int a, int b){
        return a+b+1;
    }
    public demo2(int a, int b) {
        this.a = a;
        this.b = b;
    }
    public static void main(String[] args) {
        demo2 demo2=new demo2(1,2);
        demo2.test();// 输出结果4
    }
}
```
6. 在类的构造方法中，可以使用`this(形参)`的方式来调用本类其他构造方法。使用时`必须声明在当前构造方法的首行，且只能有一个`。`代码示例`
```java
public class demo3 {
    private int a;
    private int b;
    public demo3(int a){
        this.a=a;
    }
    public demo3(int a, int b){
        this(a);
        this.b=b;
    }
}
```

## 3. super
super理解为：父类的。下面是一些使用场景：
1. super可用于访问父类中定义的属性和成员方法。`代码示例`
```java
class test{
    public int a = 20;
    public int b = 10;
    public int add(int a, int b){
        return a+b;
    }
}
public class demo4 extends test{
    public void fac(){
        System.out.println(super.a);
        System.out.println(super.add(a, b));
    }
    public static void main(String[] args) {
        demo4 demo4=new demo4();
        demo4.fac();
    }
}
```
2. super可用于在子类构造器中调用父类的构造器。`代码示例`
```java
class test{
    public int a;
    public int b;
    public test(int a, int b) {
        this.a = a;
        this.b = b;
    }
}
public class demo4 extends test{
    public demo4(int a, int b) {
        super(a, b);
    }
}
```
3. 当子父类出现同名成员时，可以用super表明调用的是父类中的成员，super的追溯不仅限于直接父类。`代码示例`
```java
class test{
    public int a = 10;
    public int b = 20;
}
public class demo4 extends test{
    public int a = 30;
    public void fac(){
        System.out.println(a); // 打印30
        System.out.println(super.a); // 打印10
    }
    public static void main(String[] args) {
        demo4 demo4=new demo4();
        demo4.fac();
    }
}
```
4. super和this的用法相像，this代表本类对象的引用，super代表父类的内存空间的标识。

## 4. super和this的区别
1. 相同点
- 1. 都是Java中的关键字
- 2. 只能在类的非静态方法中使用，用来访问非静态成员方法和字段
- 3. 在构造方法中调用时，必须是构造方法中的第一条语句，并且不能同时存在。
2. 不同点
- 1. this是当前对象的引用，当前对象即调用实例方法的对象，super相当于是子类对象中从父类继承下来部分成员的引用
- 2. 在非静态成员方法中，this用来访问本类的方法和属性，super用来访问父类继承下来的方法和属性
- 3. 在构造方法中：this(…)用于调用本类构造方法，super(…)用于调用父类构造方法，两种调用不能同时在构造方法中出现
- 4. 构造方法中一定会存在super(…)的调用，用户没有写编译器也会增加，但是this(…)用户不写则没有

## 5. static


## 6. final





