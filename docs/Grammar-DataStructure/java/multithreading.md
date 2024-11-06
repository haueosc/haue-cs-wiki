# 多线程
## 1. 概念介绍（可跳）
### 1.1 程序、进程和线程
- 程序：为完成特定任务，用某种语言编写的`一组指令的集合`。即指`一段静态的代码`，静态对象。
- 进程：程序的一次执行过程，或是正在内存中运行应用程序
- 线程：程序可进一步细化为线程，是程序的一条执行路径。一个进程中至少有一个线程。
### 1.2 线程调度
- 分时调度：所有线程`轮流使用`CPU的使用权，并且分配每个线程占用CPU的时间。
- 抢占式调度：让`优先级高`的线程以`较大的概率`优先使用cpu。
### 1.3 并发和并行
- 并行：指两个或多个事件在同一时刻发生
- 并发：指两个或多个事件在同一时间段内发生，但是在同一时刻时，只能执行单个事件。
## 2.创建和启动线程
**在java中，使用功能java.lang.Thread类代表线程，所有的线程对象都必须是Thread类或其子类**
### 2.1方式一：继承Thread类

<h3>Thread类的特性</h3>

- 每个线程都是通过某个特定Thread对象的run()方法来完成操作的，因此把run()方法体称为`线程执行体`。
- 通过该Thread对象的start()方法来启动这个线程，而非直接调用run()
- 要想实现多线程，必须在主线程中创建新的线程对象。
    

<h3>通过继承Thread类来创建并启动多线程的方式如下：</h3>

- 定义Thread类的子类，并重写该类的run()方法，该run()方法的方法体就代表了该线程需要完成的任务。
- 创建Thread子类的实例，即创建了线程对象。
- 调用线程对象的start()方法来启动该线程 

`示例代码：`
```java
//自定义线程类
package com.zzuli_52hertz.thread;

public class MyThread extends Thread {
    //定义指定线程名称的构造方法
    public MyThread(String name) {
        //调用父类的String参数的构造方法，指定线程的名称
        super(name);
    }

    /**
     * 重写run方法，完成该线程执行的逻辑
     */
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(getName()+"：正在执行！"+i);
            // 通过getName获取线程名字并打印
        }
    }
}
```
`测试类`
```java
package com.zzuli_52hertz.thread;
// 类均在包com.zzuli_52hertz.thread下
public class TestMyThread {
    public static void main(String[] args) {
        //创建自定义线程对象1
        MyThread mt1 = new MyThread("子线程1");
        //开启子线程1
        mt1.start();
        
        //创建自定义线程对象2
        MyThread mt2 = new MyThread("子线程2");
        //开启子线程2
        mt2.start();
        
        //在主方法中执行for循环
        for (int i = 0; i < 10; i++) {
            System.out.println("main线程！"+i);
        }
    }
}
```

`注意`
- 想要启动多线程，必须调用start()方法。
- 一个线程对象只能调用一次start()方法启动，如果重复调用了，会抛出异常`IllegalThreadStateException`

### 2.2方式二：实现Runnable接口
**由于java单继承的限制，当我们已经继承其他的类时，便不能再继承Thread类，这时就可以使用继承Runnable接口的方法操作线程**

<h4>实现步骤：</h4>

- 定义Runnable接口的实现类，并重写该接口的run()方法，该run()方法的方法体同样是该线程的线程执行体。
- 创建Runnable实现类的实例，并以此实例作为Thread的一个参数来创建Thread对象，该Thread对象才是真正的线程对象。
- 调用线程对象的start()方法，启动线程。调用Runnable接口实现类的run方法。

`示例代码`
```java
package com.zzuli_52hertz.thread;

public class MyRunnable implements Runnable { // 实现接口
    @Override
    public void run() { // 重写run方法
        for (int i = 0; i < 20; i++) {
            System.out.println(Thread.currentThread().getName() + " " + i);
        }
    }
}
```
`测试类`
```java
package com.zzuli_52hertz.thread;

public class TestMyRunnable {
    public static void main(String[] args) {
        //创建自定义类对象  线程任务对象
        MyRunnable mr = new MyRunnable();
        //创建线程对象
        Thread t = new Thread(mr, "小李");q
        t.start();

        // 主线程同时进行
        for (int i = 0; i < 20; i++) {
            System.out.println("小琦 " + i);
        }
    }
}
```
`注意`
- 上面使用了Thread类的一个构造方法Thread(Runnable target , String name)
- 实际上，所有的多线程代码都是通过运行Thread的start()方法来运行的。因此，不管是继承Thread类还是实现Runnable接口来实现多线程，最终还是通过Thread的对象的API来控制线程的，熟悉Thread类的API是进行多线程编程的基础。

### 2.3 变形写法（进阶）
**使用匿名内部类对象来实现线程的创建和启动** <br><br>
`变形1`
```java
new Thread("新的线程！"){
	@Override
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println(getName()+"：正在执行！"+i);
		}
	}
}.start();
```
`变形2`
```java
new Thread(new Runnable(){
	@Override
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println(Thread.currentThread().getName()+"：" + i);
		}
	}
}).start();
```

## 3.Thread类的常用结构

### 3.1构造器

- public Thread() :分配一个新的线程对象。
- public Thread(String name) :分配一个指定名字的新的线程对象。
- public Thread(Runnable target) :指定创建线程的目标对象，它实现了Runnable接口中的run方法
- public Thread(Runnable target,String name) :分配一个带有指定目标新的线程对象并指定名字。

### 3.2基本常用方法

* public void run() :此线程要执行的任务在此处定义代码。
* public void start() :导致此线程开始执行; Java虚拟机调用此线程的run方法。
* public String getName() :获取当前线程名称。
* public void setName(String name)：设置该线程名称。
* public static Thread currentThread() :返回对当前正在执行的线程对象的引用。在Thread子类中就是this，通常用于主线程和Runnable实现类
* public static void sleep(long millis) :使当前正在执行的线程以指定的毫秒数暂停（暂时停止执行）。
* public static void yield()：yield只是让当前线程暂停一下，让系统的线程调度器重新调度一次，希望优先级与当前线程相同或更高的其他线程能够获得执行机会，但是这个不能保证，完全有可能的情况是，当某个线程调用了yield方法暂停之后，线程调度器又将其调度出来重新执行。

### 3.3生命状态相关方法

* public final boolean isAlive()：测试线程是否处于活动状态。如果线程已经启动且尚未终止，则为活动状态。 

* void join() ：等待该线程终止。 

  void join(long millis) ：等待该线程终止的时间最长为 millis 毫秒。如果millis时间到，将不再等待。 

  void join(long millis, int nanos) ：等待该线程终止的时间最长为 millis 毫秒 + nanos 纳秒。 

* public final void stop()：`已过时`，不建议使用。强行结束一个线程的执行，直接进入死亡状态。run()即刻停止，可能会导致一些清理性的工作得不到完成，如文件，数据库等的关闭。同时，会立即释放该线程所持有的所有的锁，导致数据得不到同步的处理，出现数据不一致的问题。

### 3.4优先级相关方法
每个线程都有一定的优先级，同优先级线程组成先进先出队列（先到先服务），使用分时调度策略。优先级高的线程采用抢占式策略，获得较多的执行机会。每个线程默认的优先级都与创建它的父线程具有相同的优先级。

- Thread类的三个优先级常量：
  - MAX_PRIORITY（10）：最高优先级 
  - MIN _PRIORITY （1）：最低优先级
  - NORM_PRIORITY （5）：普通优先级，默认情况下main线程具有普通优先级。

* public final int getPriority() ：返回线程优先级 
* public final void setPriority(int newPriority) ：改变线程的优先级，范围在[1,10]之间。

## 4.多线程的生命周期
线程的生命周期有六种状态：新建（New）、就绪（Runnable）、锁阻塞（Blocked）、计时等待（Timed_waiting）、无限等待（Waiting）、死亡（Teaminated）。CPU需要在多条线程之间切换，于是线程状态会多次在运行、阻塞、就绪之间切换。<br><br>
<img src="\images\Grammer-DataStructure\java\多线程1.png">

### 4.1 状态简介
此处参考zzuliMoocjava程序设计技术课件
- 新建态：使用new运算符创建一个线程对象后，该线程仅仅是一个空对象，系统没用为它分配资源，该线程处于新建态。
- 运行态（就绪态和运行中态）：从操作系统角度看，处于新建态的线程调用start()启动线程后，进入就绪态，等待jvm虚拟机进行调度。线程获取jvm虚拟机的调度后就进入运行中，进入运行中的线程对象，执行线程对象的run()方法。
- 阻塞态或（计时）等待态：
一个运行态的线程因某种原因不能继续运行时，进入阻塞态或（计时）等待态。此时，线程不能执行，即使处理器空闲也不能执行。只有当引起阻塞的原因被消除，或等待条件满足时，线程再转入运行态，重新进入线程队列排队等待运行，再次运行时将从暂停处继续运行。

### 4.2sleep()方法细讲
执行sleep()方法，可以使当前正在执行的线程休眠(暂停执行)若干时间

`方法`
- public static void sleep(long millis) throws InterruptedException
- public static void sleep(long millis, int nanos) throws InterruptedException

`注意`
- sleep方法必须要处理异常，因为其抛出InterruptedException异常。要么捕获该异常，要么抛出异常。
- run()方法中不能抛出异常，要想在run()中使用sleep()，只能选择异常处理。
- sleep()结束的方式有两种：休眠时间结束、被interrupt方法提前唤醒。

## 5.通过同步机制解决线程安全问题

### 5.1同步机制解决线程安全问题的原理
同步机制的原理，其实就相当于给某段代码加“锁”，任何线程想要执行这段代码，都要先获得“锁”，我们称他为同步锁。那个线程获得了“同步锁”之后，“同步锁”就会记录这个线程的ID，这样其他线程就只能等待了，除非这个线程“释放”了锁对象，其他线程才能重新获得/占用“同步锁对象”

### 5.2同步代码块和同步方法
**同步代码块**：synchronized 关键字可以用于某个区块前面，表示只对这个区块的资源实行互斥访问。
格式:
```java
synchronized(同步锁){
     需要同步操作的代码
}
```
**同步方法**:synchronized 关键字直接修饰方法，表示同一时刻只有一个线程能进入这个方法，其他线程在外面等着。
```java
public synchronized void method(){
    可能会产生线程安全问题的代码
}
```

### 5.3synchronized的同步锁是谁
- 同步锁对象可以是任意类型，但是必须保证竞争“同一个共享资源”的多个线程必须使用同一个“同步锁对象”。
- 对于同步代码块来说，同步锁对象是由程序员手动指定的（很多时候也是指定为this或类名.class）
- 对于同步方法来说，同步锁对象只能是默认的：静态方法对应当前类的class对象（即 类名.class）、非静态方法对应this

### 5.4示例代码
`静态方法加锁`
```java
package com.zzuli_52hertz.safe;

class TicketSaleThread extends Thread{
    private static int ticket = 100;
    public void run(){//直接锁这里，肯定不行，会导致，只有一个窗口卖票
        while (ticket > 0) {
            // 如果由于同步锁无法进入方法，线程在此等待，而此时已经经过了（ticket>0）的判断
            // 进入方法后要再进行一次（ticket>0）的判断，因为最后一张票可能在等待时被卖出
            saleOneTicket();
        }
    }

    public synchronized static void saleOneTicket(){
        //锁对象是TicketSaleThread类的Class对象，而一个类的Class对象在内存中肯定只有一个
        if(ticket > 0) {//不加条件，相当于条件判断没有进入锁管控，线程安全问题就没有解决
            System.out.println(Thread.currentThread().getName() + "卖出一张校园卡，卡号:" + ticket);
            ticket--;
        }
    }
}
public class SaleTicketDemo3 {
    public static void main(String[] args) {
        TicketSaleThread t1 = new TicketSaleThread();
        TicketSaleThread t2 = new TicketSaleThread();
        TicketSaleThread t3 = new TicketSaleThread();

        t1.setName("小李");
        t2.setName("小琦");
        t3.setName("小韩");

        t1.start();
        t2.start();
        t3.start();
    }
}

```
`非静态方法加锁`
```java
package com.zzuli_52hertz.safe;


public class SaleTicketDemo4 {
    public static void main(String[] args) {
        TicketSaleRunnable tr = new TicketSaleRunnable();
        Thread t1 = new Thread(tr, "窗口一");
        Thread t2 = new Thread(tr, "窗口二");
        Thread t3 = new Thread(tr, "窗口三");

        t1.start();
        t2.start();
        t3.start();
    }
}

class TicketSaleRunnable implements Runnable {
    private int ticket = 100;

    public void run() {//直接锁这里，肯定不行，会导致，只有一个窗口卖票
        while (ticket > 0) {
            saleOneTicket();
        }
    }

    public synchronized void saleOneTicket() {//锁对象是this，这里就是TicketSaleRunnable对象，因为上面3个线程使用同一个TicketSaleRunnable对象，所以可以
        if (ticket > 0) {//不加条件，相当于条件判断没有进入锁管控，线程安全问题就没有解决
            System.out.println(Thread.currentThread().getName() + "卖出一张票，票号:" + ticket);
            ticket--;
        }
    }
}
```

## 6. 线程的通信
当我们`需要多个线程`来共同完成一件任务，并且我们希望他们`有规律的执行`，那么多线程之间需要一些通信机制，可以协调它们的工作，以此实现多线程共同操作一份数据---于是便有了**等待唤醒机制**

### 6.1 等待唤醒机制
在一个线程满足某个条件时，就进入等待状态（`wait() / wait(time)`）， 等待其他线程执行完他们的指定代码过后再将其唤醒（`notify()`）;或可以指定wait的时间，等时间到了自动唤醒；在有多个线程进行等待时，如果需要，可以使用 `notifyAll()`来唤醒所有的等待线程。wait/notify 就是线程间的一种协作机制。

- wait：线程不再活动，不再参与调度，这时的线程状态是 WAITING 或 TIMED_WAITING。当这个线程得到其他线程的`通知（notify）`或者等待时间到，便令这个对象上的线程重新进入到调度队列（`ready queue`）中。
- notify：选取所通知对象的 wait set 中的一个线程释放；
- notifyAll：释放所通知对象的 wait set 上的全部线程。

### 6.2 示例代码
`使用两个线程打印 1-100。线程1, 线程2 交替打印`
```java
class Communication implements Runnable {
    int i = 1;
    public void run() {
        while (true) {
            synchronized (this) {
                notify(); //另一个线程被唤醒，但由于同步锁机制，仍然无法立即执行该代码块。
                if (i <= 100) {
                    System.out.println(Thread.currentThread().getName() + ":" + i++);
                } else
                    break;
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```
### 6.3 sleep()和wait()的异同
1. 相同点：一旦执行，都会使得当前线程结束执行状态，进入阻塞状态。
2. 不同点：
    - 定义方法所属的类：sleep():Thread中定义。  wait():Object中定义；
    - 使用范围的不同：sleep()可以在任何需要使用的位置被调用； wait():必须使用在同步代码块或同步方法中
    - 都在同步结构中使用的时候，是否释放同步监视器的操作不同：sleep():不会释放同步监视器 ;wait():会释放同步监视器
    - 结束等待的方式不同：sleep()：指定时间一到就结束阻塞。 wait():可以指定时间也可以无限等待直到notify或notifyAll。


## 7.通过Callable接口实现多线程
`Callable`接口是`java.util.concurrent`包下的接口，它与`Runnable`接口类似，也是定义了一个`call()`方法，该方法返回一个`Object`对象。`Callable`接口的`call()`方法可以有返回值，并且可以抛出异常。

### 7.1Runnable和Callable的区别:
- 相比run()方法，可以有返回值
- 方法可以抛出异常
- 支持泛型的返回值（需要借助FutureTask类，获取返回结果）

### 7.2相关接口和类
1. Future接口
 <br>　Future是一个接口,代表了一个异步计算的结果,接口中的方法用来检查计算是否完成,等待完成和得到计算结果;

2. FutureTask类
<br> FutureTask 同时实现了Runnable, Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值(FutureTask是Futrue接口的唯一的实现类)

### 7.3 三者之间的关系
<br>
<img src="\images\Grammer-DataStructure\java\多线程2.png" >

### 7.4 示例代码
```java 
//1.创建一个实现Callable的实现类
class NumThread implements Callable {
    //2.实现call方法，将此线程需要执行的操作声明在call()中
    @Override
    public Object call() throws Exception {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
                sum += i;
            }
        }
        return sum;
    }
}


public class CallableTest {
    public static void main(String[] args) {
        //3.创建Callable接口实现类的对象
        NumThread numThread = new NumThread();

        //4.将此Callable接口实现类的对象作为传递到FutureTask构造器中，创建FutureTask的对象
        FutureTask futureTask = new FutureTask(numThread);
        //5.将FutureTask的对象作为参数传递到Thread类的构造器中，创建Thread对象，并调用start()
        new Thread(futureTask).start();


//      接收返回值
        try {
            //6.获取Callable中call方法的返回值
            //get()返回值即为FutureTask构造器参数Callable实现类重写的call()的返回值。
            Object sum = futureTask.get();
            System.out.println("总和为：" + sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }

}
```