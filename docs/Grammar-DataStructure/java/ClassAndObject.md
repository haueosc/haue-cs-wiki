# 类与对象
## 1.概述
1. 类的定义
<br>
类：具有相同特征的事物的抽象描述，是抽象的、概念上的定义。

2. 对象的定义
<br>
对象：实际存在的该类事物的每个个体 ，是具体的 ，因而也称为实例(instance) 。

3. 辅助理解
<br>
手机是一种东西，是抽象的，可以理解为类，而手机又有很多品牌，很多型号，具体到某一特定的品牌和型号后，就是具体的，可以理解为对象。

4. 类的成员
<br>
类是一组相关`属性`和`行为`的集合，分别对应类中的`成员变量`和`成员方法`。

## 2. 类的成员-变量

### 2.1 成员变量的声明
`语法格式`
```java 
[修饰符] class 类名{
[修饰符] 数据类型 成员变量名 [= 初始化值];
}
```
<h3>介绍</h3> <br>
- 位置要求：必须在类中，方法外
- 修饰符：
    - 权限修饰符有：private、缺省、protected、public
    - 其他修饰符：static、final
- 数据类型:任何基本数据类型或任何引用数据类型。
- 成员变量名:属于标识符，符合命名规则和规范即可。
- 初始化值:根据情况，可以显式赋值；也可以不赋值，使用默认值。

### 2.2 成员变量&局部变量

<h3>2.2.1 定义</h3> <br>

- 成员变量：在方法体外，类体内声明的变量
- 局部变量：在方法体内部等位置声明的变量
<h3>2.2.1 对比</h3> <br>

- 相同点
    - 变量声明的格式相同： 数据类型 变量名 = 初始化值
    - 变量必须先声明、后初始化、再使用。
    - 变量都有其对应的作用域。只在其作用域内是有效的
- 不同点
    1. 声明位置和方式 
        - 实例变量：在类中方法外 
        - 局部变量：在方法体{}中或方法的形参列表、代码块中
    2. 在内存中存储的位置不同 
        - 实例变量：堆 
        - 局部变量：栈
    3. 生命周期 
        - 实例变量：和对象的生命周期一样，随着对象的创建而存在，随着对象被GC回收而消亡， 而且每一个对象的实例变量是独立的。 
        - 局部变量：和方法调用的生命周期一样，每一次方法被调用而在存在，随着方法执行的结束而消亡， 而且每一次方法调用都是独立。
    4. 作用域 
        - 实例变量：通过对象就可以使用，本类中直接调用，其他类中“对象.实例变量” 
        - 局部变量：出了作用域就不能使用
    5. 修饰符（后面来讲） 
        - 实例变量：public,protected,private,final,volatile,transient等 
        - 局部变量：final
    6. 默认值 
        - 实例变量：有默认值 
        - 局部变量：没有，必须手动初始化。其中的形参比较特殊，靠实参给它初始化。

## 3. 类的成员-方法

### 3.1 什么是方法

- 方法是类或对象行为特征的抽象，用来完成某个功能操作。
- 将功能封装为方法的目的是，可以实现代码重用，减少冗余，简化代码。
- Java里的方法 不能独立存在 ，所有的方法必须定义在类里。

### 3.2 方法的声明
`语法格式`
```java
[修饰符] 返回值类型 方法名([形参列表])[throws 异常列表]{
    方法体的功能代码
}
```
<h3>关于方法体中return语句的说明</h3> <br>

- return语句的作用是结束方法的执行，并将方法的结果返回去
- 如果返回值类型不是void，方法体中必须保证一定有 return 返回值; 语句，并且要求该返回值结果的类型与声明的返回值类型一致或兼容。
- 如果返回值类型为void时，方法体中可以没有return语句，如果要用return语句提前结束方法的执行，那么return后面不能跟返回值，直接写`return ;`就可以。
- return语句后面就不能再写其他代码了，否则会报错：`Unreachable code`

`示例`

```java
package com.zzuli_52hertz.method;
/**
* 方法定义案例演示
*/
public class MethodDefineDemo {
    /**
    * 无参无返回值方法的演示
    */
    public void sayHello(){
        System.out.println("hello");
    }
    /**
    * 有参无返回值方法的演示
    * @param length int 第一个参数，表示矩形的长
    * @param width int 第二个参数，表示矩形的宽
    * @param sign char 第三个参数，表示填充矩形图形的符号
    */
    public void printRectangle(int length, int width, char sign){
        for (int i = 1; i <= length ; i++) {
            for(int j=1; j <= width; j++){
                System.out.print(sign);
            }
            System.out.println();
        }
    }
    /**
    * 无参有返回值方法的演示
    * @return
    */
    public int getIntBetweenOneToHundred(){
        return (int)(Math.random()*100+1);
    }
    /**
    * 有参有返回值方法的演示
    * @param a int 第一个参数，要比较大小的整数之一
    * @param b int 第二个参数，要比较大小的整数之二
    * @return int 比较大小的两个整数中较大者的值
    */
    public int max(int a, int b){
        return a > b ? a : b;
    }
}

```

### 3.3 方法的调用
`语法格式`
```java
对象.方法名([实参列表])
```
<h3>关于方法体中return语句的说明</h3> <br>

`示例`

```java
package com.zzuli_52hertz.method;
/**
* 方法调用案例演示
*/
public class MethodInvokeDemo {
    public static void main(String[] args) {
        //创建对象

        MethodDefineDemo md = new MethodDefineDemo();
        System.out.println("-----------------------方法调用演示-------------------------
        ");
        //调用MethodDefineDemo类中无参无返回值的方法sayHello
        md.sayHello();
        md.sayHello();
        md.sayHello();
        //调用一次，执行一次，不调用不执行
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中有参无返回值的方法printRectangle
        md.printRectangle(5,10,'@');
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中无参有返回值的方法getIntBetweenOneToHundred
        md.getIntBetweenOneToHundred();//语法没问题，就是结果丢失
        int num = md.getIntBetweenOneToHundred();
        System.out.println("num = " + num);
        System.out.println(md.getIntBetweenOneToHundred());
        //上面的代码调用了getIntBetweenOneToHundred三次，这个方法执行了三次
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中有参有返回值的方法max
        md.max(3,6);//语法没问题，就是结果丢失
        int bigger = md.max(5,6);
        System.out.println("bigger = " + bigger);
        System.out.println("8,3中较大者是：" + md.max(8,9));
    }
}
```

## 4.Object类
### 4.1 Object类的概述
**类 `java.lang.Object`是类层次结构的根类，即所有其它类的父类。每个类都使用 `Object` 作为超类。**

- Object类型的变量与除Object以外的任意引用数据类型的对象都存在多态引用
- 所有对象（包括数组）都实现这个类的方法。
- 如果一个类没有特别指定父类，那么默认则继承自Object类。

### 4.2 Object类的方法

1. *equals()
    - 只能比较引用类型，Object类源码中equals()的作用与“==”相同：比较是否指向同一个对象。	
    - 格式:obj1.equals(obj2)
    - 当自定义使用equals()时，可以重写。用于比较两个对象的“内容”是否都相等
    - `重写示例`
    ```java
    class User{
        private String host;
        private String username;
        private String password;
        public User(String host, String username, String password) {
            super();
            this.host = host;
            this.username = username;
            this.password = password;
        }
        public User() {
            super();
        }
        public String getHost() {
            return host;
        }
        public void setHost(String host) {
            this.host = host;
        }
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        @Override
        public String toString() {
            return "User [host=" + host + ", username=" + username + ", password=" + password + "]";
        }
        @Override
        public boolean equals(Object obj) {
            if (this == obj)
                return true;
            if (obj == null)
                return false;
            if (getClass() != obj.getClass())
                return false;
            User other = (User) obj;
            if (host == null) {
                if (other.host != null)
                    return false;
            } else if (!host.equals(other.host))
                return false;
            if (password == null) {
                if (other.password != null)
                    return false;
            } else if (!password.equals(other.password))
                return false;
            if (username == null) {
                if (other.username != null)
                    return false;
            } else if (!username.equals(other.username))
                return false;
            return true;
        }
    }
    ```

2. *toString()

- 默认情况下，toString()返回的是“对象的运行时类型 @ 对象的hashCode值的十六进制形式”。
- 在进行String与其它类型数据的连接操作时，自动调用toString()方法
- 如果我们直接System.out.println(对象)，默认会自动调用这个对象的toString()
- 可以根据需要在用户自定义类型中重写toString()方法
- `重写示例`
```java
public class Person {  
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}

```

3. getClass()
- public final Class<?> getClass()：获取对象的运行时类型
- 因为Java有多态现象，所以一个引用数据类型的变量的编译时类型与运行时类型可能不一致，因此如果需要查看这个变量实际指向的对象的类型，需要用getClass()方法

4. hashCode()
- public int hashCode()：返回每个对象的hash值。

## 5.类的成员-构造器
**构造器（构造方法）是用于创建对象时初始化类的特殊方法。**

`语法格式`
```java
[修饰符] class 类名{
    [修饰符] 构造器名(){
    // 实例初始化代码
    }
    [修饰符] 构造器名(参数列表){
    // 实例初始化代码
    }
}
```
<h3>说明</h3> <br>

- 构造器名必须与它所在的类名必须相同。
- 它没有返回值，所以不需要返回值类型，也不需要void。
- 构造器的修饰符只能是权限修饰符，不能被其他任何修饰。比如，不能被static、final、synchronized、abstract、native修饰，不能有return语句返回值。

<h3>注意</h3> <br>

- 当我们没有显式的声明类中的构造器时，系统会默认提供一个无参的构造器并且该构造器的修饰符默认与类的修饰符相同
- 当我们显式的定义类的构造器以后，系统就不再提供默认的无参的构造器了。
- 在类中，至少会存在一个构造器。
- 构造器是可以重载的。

`代码示例`
```java
public class Student {
    private String name;
    private int age;
    // 无参构造
    public Student() {}
    // 有参构造
    public Student(String n,int a) {
        name = n;
        age = a;
    }
    public String getName() {
        return name;
    }
    public void setName(String n) {
        name = n;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int a) {
        age = a;
    }
    public String getInfo(){
        return "姓名：" + name +"，年龄：" + age;
    }
}
```

```java
public class TestStudent {
    public static void main(String[] args) {
        //调用无参构造创建学生对象
        Student s1 = new Student();
        //调用有参构造创建学生对象
        Student s2 = new Student("张三",23);
        System.out.println(s1.getInfo());
        System.out.println(s2.getInfo());
    }
}
```

## 6.匿名对象
- 我们也可以不定义对象的句柄，而直接调用这个对象的方法。这样的对象叫做匿名对象。如`new Person().shout();`
- 使用场景：
    - 如果一个对象只需要进行一次方法调用，那么就可以使用匿名对象。
    - 我们经常将匿名对象作为实参传递给一个方法调用。

## 7.类的成员-代码块
- 代码块的作用：对Java类或对象进行初始化
- 代码块的分类：
    - 一个类中代码块若有修饰符，则只能被static修饰，称为静态代码块(static block)
    - 没有使用static修饰的，为非静态代码块。

### 7.1 语法格式
```java
[修饰符] class 类名{ 
    [static] {
        // [静态]代码块
    }
}
```

### 7.2 静态代码块的特点
1. 可以有输出语句。

  2. 可以对类的属性、类的声明进行初始化操作。

  3. 不可以对非静态的属性初始化。即：不可以调用非静态的属性和方法。

  4. 若有多个静态的代码块，那么按照从上到下的顺序依次执行。

  5. 静态代码块的执行要先于非静态代码块。

  6. 静态代码块随着类的加载而加载，且只执行一次。

### 7.2 非静态代码块的特点
1. 可以有输出语句。

  2. 可以对类的属性、类的声明进行初始化操作。

  3. 除了调用非静态的结构外，还可以调用静态的变量或方法。

  4. 若有多个非静态的代码块，那么按照从上到下的顺序依次执行。

  5. 每次创建对象的时候，都会执行一次。且先于构造器执行。

## 8. 抽象类与抽象方法
- 抽象类：被abstract修饰的类。
- 抽象方法：被abstract修饰的没有方法体的方法。

### 8.1 语法格式
```java
// 抽象类
[权限修饰符] abstract class 类名{
    
}
[权限修饰符] abstract class 类名 extends 父类{
    
}

// 抽象方法
[其他修饰符] abstract 返回值类型 方法名([形参列表]);
/**
 * 抽象方法没有方法体
 */
```

### 8.2 抽象类的特点
1. 抽象类**不能创建对象**，如果创建，编译无法通过而报错。只能创建其非抽象子类的对象。
2. 抽象类中，也有构造方法，是供子类创建对象时，初始化父类成员变量使用的。
3. 抽象类中，不一定包含抽象方法，但是有抽象方法的类必定是抽象类。
4. 抽象类的子类，必须重写抽象父类中**所有的**抽象方法，否则，编译无法通过而报错。除非该子类也是抽象类。

## 9. 枚举类

### 9.1 枚举类概述
- 枚举类型本质上也是一种类，只不过是这个类的对象是有限的、固定的几个，不能让用户随意创建。
- 枚举类的例子：
    - `星期`：Monday(星期一)......Sunday(星期天)
    - `性别`：Man(男)、Woman(女)
    - `月份`：January(1月)......December(12月)
    - `季节`：Spring(春节)......Winter(冬天)
    - `三原色`：red(红色)、green(绿色)、blue(蓝色)
    - `支付方式`：Cash（现金）、WeChatPay（微信）、Alipay(支付宝)、BankCard(银行卡)、CreditCard(信用卡)
    - `就职状态`：Busy(忙碌)、Free(空闲)、Vocation(休假)、Dimission(离职)
    - `订单状态`：Nonpayment（未付款）、Paid（已付款）、Fulfilled（已配货）、Delivered（已发货）、Checked（已确认收货）、Return（退货）、Exchange（换货）、Cancel（取消）
    - `线程状态`：创建、就绪、运行、阻塞、死亡
### 9.2 语法格式
`使用enum关键字进行声明`
```java
【修饰符】 enum 枚举类名{
    常量对象列表
}

【修饰符】 enum 枚举类名{
    常量对象列表;
    
    对象的实例变量列表;
}
```

### 9.3 枚举类的特点
* 枚举类的常量对象列表必须在枚举类的首行，因为是常量，所以建议大写。
* 列出的实例系统会自动添加 public static final 修饰。
* 如果常量对象列表后面没有其他代码，那么“；”可以省略，否则不可以省略“；”。
* 编译器给枚举类默认提供的是private的无参构造，如果枚举类需要的是无参构造，就不需要声明，写常量对象列表时也不用加参数
* 如果枚举类需要的是有参构造，需要手动定义，有参构造的private可以省略，调用有参构造的方法就是在常量对象名后面加(实参列表)就可以。
* 枚举类默认继承的是java.lang.Enum类，因此不能再继承其他的类型。
- 枚举类和普通java类一样，可以实现一个或多个接口

## 10. 包装类
**包装类是Java语言中用来封装基本数据类型的类。**

- Java针对八种基本数据类型定义了相应的引用类型：包装类（封装类）。有了类的特点，才能调用类中的方法。
-  <table>
            <thead>
                <tr>
                    <th>基本数据类型</th>
                    <th>对应包装类</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>byte</td>
                    <td>Byte</td>
                </tr>
                <tr>
                    <td>short</td>
                    <td>Short</td>
                </tr>
                <tr>
                    <td>int</td>
                    <td>Integer</td>
                </tr>
                <tr>
                    <td>long</td>
                    <td>Long</td>
                </tr>
                <tr>
                    <td>float</td>
                    <td>Float</td>
                </tr>
                <tr>
                    <td>double</td>
                    <td>Double</td>
                </tr>
                <tr>
                    <td>char</td>
                    <td>Character</td>
                </tr>
                <tr>
                    <td>boolean</td>
                    <td>Boolean</td>
                </tr>
            </tbody>
        </table>

### 10.1 包装类与基本数据类型间的转换

1. 装箱（把基本数据类型转为包装类对象）
```java
Integer obj1 = new Integer(4);//使用构造函数函数
Float f = new Float(“4.56”);
Long l = new Long(“asdf”);  //NumberFormatException

Integer obj2 = Integer.valueOf(4);//使用包装类中的valueOf方法
```
2. 拆箱（把包装类对象转为基本数据类型）
```java
Integer obj = new Integer(4);
int num1 = obj.intValue();
```

3. 自动装箱与拆箱：
- 由于我们经常要做基本类型与包装类之间的转换，从`JDK5.0 `开始，基本类型与包装类的装箱、拆箱动作可以自动完成。

### 10.2 基本数据类型、包装类与字符串间的转换
1. 基本数据类型转为字符串
```java
//调用字符串重载的valueOf()方法
int a = 10;
//String str = a;//错误的

String str = String.valueOf(a);

//---------------------------------

// 直接转换
int a = 10;

String str = a + "";
```

### 10.3字符串转为基本数据类型

**方式1**：除了Character类之外，其他所有包装类都具有parseXxx静态方法可以将字符串参数转换为对应的基本类型，例如：

* `public static int parseInt(String s)`：将字符串参数转换为对应的int基本类型。
* `public static long parseLong(String s)`：将字符串参数转换为对应的long基本类型。
* `public static double parseDouble(String s)`：将字符串参数转换为对应的double基本类型。

**方式2**：字符串转为包装类，然后可以自动拆箱为基本数据类型

* ```public static Integer valueOf(String s)```：将字符串参数转换为对应的Integer包装类，然后可以自动拆箱为int基本类型
* ```public static Long valueOf(String s)```：将字符串参数转换为对应的Long包装类，然后可以自动拆箱为long基本类型
* ```public static Double valueOf(String s)```：将字符串参数转换为对应的Double包装类，然后可以自动拆箱为double基本类型

### 10.4 包装类的其它API

1. 数据类型的最大最小值

```java
Integer.MAX_VALUE和Integer.MIN_VALUE
    
Long.MAX_VALUE和Long.MIN_VALUE
    
Double.MAX_VALUE和Double.MIN_VALUE
```

2. 字符转大小写

```java
Character.toUpperCase('x');

Character.toLowerCase('X');
```

3. 整数转进制

```java
Integer.toBinaryString(int i) 
    
Integer.toHexString(int i)
    
Integer.toOctalString(int i)
```

4. 比较的方法

```java
Double.compare(double d1, double d2)
    
Integer.compare(int x, int y) 
```
