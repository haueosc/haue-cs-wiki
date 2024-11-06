# 线程池

****

## 线程回顾

****

创建线程的方式

- 继承 Thread 类
- 实现 Runnable 接口

创建后的线程有如下状态：

NEW：新建的线程，无任何操作

```java
public static void main(String[] args) {
        Thread thread = new Thread(() -> System.out.println(Thread.currentThread().getName() + "is running"));
        Thread.State state = thread.getState();
        // 线程刚创建还未执行，状态为 NEW
        System.out.println(state);
    }
```

RUNNABLE：可执行的线程，在 JVM 中执行但是在等待操作系统的资源

```java
public static void main(String[] args) {
    Thread thread = new Thread(() -> System.out.println(Thread.currentThread().getName() + "is running"));
    thread.start();
    Thread.State state = thread.getState();
    // 调用 start() 方法,可以执行，但不代表一定在执行
    System.out.println(state);
}
```

BOLCKED：阻塞，获取不到锁

```java
public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (Test.class) {
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (Test.class) {
            }
        });
        thread1.start();
        thread2.start();
        // 等待，保证 线程1 开始执行
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Thread.State state = thread2.getState();
        System.out.println(state);
    }
```

WAITING：等待，等待其他线程进行操作，时间不确定

```java
public static void main(String[] args) {
        Thread thread = new Thread(LockSupport::park);
        thread.start();
        // 等待线程开始执行
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread.State state = thread.getState();
        System.out.println(state);

        // 等待状态解除禁止，线程执行完毕
        LockSupport.unpark(thread);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        state = thread.getState();
        System.out.println(state);
    }
```

TIMED_WAITING：等待，等待的时间是确定的

```java
public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        thread.start();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread.State state = thread.getState();
        System.out.println(state);
    }
```

TERMINATED：终止，线程已经运行完毕

```java
public static void main(String[] args) {
        Thread thread = new Thread(() -> System.out.println(Thread.currentThread().getName() + "is running"));
        thread.start();
        try {
            // 等待线程执行完毕
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread.State state = thread.getState();
        System.out.println(state);
    }
```

****

## 引入线程池

****

上述创建线程的方式存在如下缺陷：

- 线程使用完后会被销毁，高并发场景下频繁创建和销毁线程的性能开销不可忽略
- 无法控制线程并发数量，线程过多会导致 JVM 宕机

线程池是一种池化思想，由于创建和销毁线程需要时间，以及系统资源开销，我们需要一个“管理者"来统一管理线程及任务分配，减少这些开销，解决资源不足的问题。

在主要大厂的编程规范中，不允许在应用中自行显式地创建线程，线程必须通过线程池提供。

****

### 线程池解决了什么问题

****

- 降低系统资源消耗，通过重用已存在的线程，降低线程创建和销毁造成的消耗：
- 提高系统响应速度，当有任务到达时，通过复用已存在的线程，无需等待新线程的创建便能立即执行：
- 方便线程并发数的管控。因为线程若是无限制的创建，可能会导致内存占用过多而产生OOM
- 节省CPU切换线程的时间成本（需要保持当前执行线程的现场，并恢复要执行线程的现场）。
- 提供更强大的功能，延时定时线程池

****

### 线程池引发了什么问题

****

- 异步任务提交后，如果JVM宕机，已提交的任务会丢失，需要考虑确认机制
- 使用不合理可能导致内存溢出问题
- 参数过多，代码结构引入数据结构与算法，增加使用难度

****

## 线程池概述

****

### 线程池继承结构

****

![image-20240625142529340](https://lys2021.com/wp-content/uploads/2024/06/image-20240625142529340.png)

- 最常用的是 ThreadPoolExecutor
- 调度用 ScheduledThreadPoolExecutor，类似 Timer 和 TimerTask。
- 任务拆分合并用 ForkJoinPool
- Executors是工具类，协助创建线程池的

****

### 线程池工作状态

****

![image-20240625144239291](https://lys2021.com/wp-content/uploads/2024/06/image-20240625144239291.png)

- RUNNING（运行状态)：这是线程池的初始状态。
  - 在此状态下，线程池接受新任务，并且也会处理等待队列中的任务。
  - 线程池的线程会一直运行，直到被转换到其他状态。

- SHUTDOWN（关闭状态）：当调用线程池的shutdown()方法时，线程池会进入此状态。
  - 在此状态下，线程池不接受新任务，但会继续处理等待队列中的任务。
  - 等待队列中的任务处理完毕后，线程池中的线程会逐渐结束，直到所有线程结束运行。

- STOP（停止状态）：当调用线程池的shutdownNow()方法时，线程池会进入此状态。
  - 在此状态下，线程池不接受新任务，同时也不处理等待队列中的任务
  - 而是尝试停止所有正在执行的任务，并且回收线程池中的所有线程。

- TIDYING（整理状态）：当所有的任务已经终止，workerCount（工作线程数）为0时，线程池会进入此状态。
  - 此时，会执行terminated()钩子方法，允许线程池执行一些收尾工作。

- TERMINATED（终止状态）：terminated()钩子方法执行完毕后，线程池会进入此状态。
  - 在终止状态下，线程池的任务完全结束，不再有任何活动。


****

### 七个核心参数

****

| 参数名                             | 描述                                       |
| ---------------------------------- | ------------------------------------------ |
| `corePoolSize`                     | 核心线程池基本大小，核心线程数             |
| `maximumPoolSize`                  | 线程池最大线程数                           |
| `keepAliveTime`                    | 线程空闲后的存活时间                       |
| `TimeUnit unit`                    | 线程空闲后的存活时间单位                   |
| `BlockingQueue workQueue`          | 存放任务的阻塞队列                         |
| `ThreadFactory threadFactory`      | 创建线程的工厂                             |
| `RejectedExecutionHandler handler` | 当阻塞队列和最大线程池都满了之后的饱和策略 |

****

#### corePoolSize

****

核心线程数

- 线程池刚创建时，线程数量为0，当每次执行 execute 添加新的任务时会在线程池创建一个新的线
  程，直到线程数量达到 corePoolSize 为止。
- 核心线程会一直存活，即使没有任务需要执行，当线程数小于核心线程数时，即使有线程空闲，线程
  池也会优先创建新线程处理
- 设置 allowCoreThreadTimeout=true （默认false）时，核心线程超时会关闭

****

#### maximumPoolSize

****

最大线程数

- 当池中的线程数 >= corePoolSize ，且任务队列已满时。线程池会创建新线程来处理任务
- 当池中的线程数 = maximumPoolSize ，且任务队列已满时，线程池会拒绝处理任务而抛出异常

如果使用无界的阻塞队列，该参数不生效

****

#### BlockingQueue

****

阻塞队列

- 当线程池正在运行的线程数量已经达到 corePoolSize ，那么再通过 execute 添加新的任务则会被加到 workQueue 队列中
- 任务会在队列中排队等待执行，而不会立即执行
- 一般来说，这里的阻塞队列有以下几种选择：ArrayBlockingQueue ， LinkedBlockingQueue ， SynchronousQueue 

****

#### keepAliveTime & TimeUnit 

****

保活时间及其单位

- 当线程空闲时间达到 keepAliveTime 时，线程会退出，直到线程数量 =corePoolSize
- 如果 allowCoreThreadTimeout=true ，则会直到线程数量=0

keepAliveTime 是时间的大小，TimeUnit 是时间单位 

****

#### ThreadFactory 

****

线程工厂

- 主要用来创建线程
- 通过newThread()方法提供创建线程，该方法创建的线程都是“非守护线程”而且“线程优先级都是默认优先级”

****

#### RejectedExecutionHandler 

****

拒绝策略

- 当线程数已经达到 maxPoolSize ，且队列已满，会拒绝新任务
- 当线程池被调用 shutdown() 后，会等待线程池里的任务执行完毕，再 shutdown 。如果在调用shutdown() 和线程池真正 shutdown 之间提交任务，会拒绝新任务
- 当拒绝处理任务时线程池会调用 rejectedExecutionHandler 来处理这个任务。

如果没有设置默认是 AbortPolicy ，另外在 ThreadPoolExecutor 类有几个内部实现类来处理这类情况：

- ThreadPoolExecutor.AbortPolicy ：丢弃任务并抛出 RejectedExecutionException 异常。
- ThreadPoolExecutor.CallerRunsPolicy ：由调用线程处理该任务
- ThreadPoolExecutor.DiscardPolicy ：也是丢弃任务，但是不抛出异常
- ThreadPoolExecutor.DiscardOldestPolicy ：丢弃队列最前面的任务，然后重新尝试执行任务

另外实现 RejectedExecutionHandler 接口即可实现自定义的拒绝策略

****

### 线程池逻辑结构

****

线程池的编程模式下，任务是提交给整个线程池，而不是直接提交给某个线程，线程池在拿到任务后，就在内部协调空闲的线程，如果有，则将任务交给某个空闲的华线程。

一个线程同时只能执行一个任务，但可以同时向一个线程池提交多个任务。![image-20240625164308135](https://lys2021.com/wp-content/uploads/2024/06/image-20240625164308135.png)

当一个任务被提交，线程池会进行如下工作：

- 首先判断当前的核心线程数量如果小于核心线程数，创建一个核心线程并执行任务

- 如果大于核心线程数，则尝试将其放入等待队列，如果队列没有满则放入队列等待执行

- 如果队列已满，则判断非核心线程数的数量+核心线程数是否小于最大线程数量

- 小于：则创建一个非核心线程并执行任务（并不会取队列中的任务）

- 大于：执行拒绝策略

****

###  线程池线程数设置

****

虽然使用线程池的好处很多，但是如果其线程数配置得不合理，不仅可能达不到预期效果，反而可能降低应用的性能。

因此按照任务类型分类，对不同的任务类型确定不同的线程数量。

****

#### 任务类型分类

****

- IO密集型任务：
  - 此类任务主要是执行 IO 操作。由于执行 lO 操作的时间较长，导致 CPU 的利用率不高，这类任务 CPU 常处于空闲状态。
  - Netty 的 IO 读写操作为此类任务的典型例子
- CPU 密集型任务：
  - 此类任务主要是执行计算任务。由于响应时间很快，CPU 一直在运行，这种任务 CPU 的利用率很高。
  - 例如设计加密解密算法等大量需要 CPU 运算的场景
- 混合型任务：
  - 此类任务既要执行逻辑计算，又要进行 IO 操作（如 RPC 调用、数据库访问）相对来说，由于执行 IO 操作的耗时较长（一次网络往返往往在数百毫秒级别)，这类任务的 CPU 利用率也不是太高。
  - Web 服务器的 HTTP 请求处理操作为此类任务的典型例子

****

#### 确定任务线程数

****

- IO 密集型任务：

  - 由于 IO 密集型任务的CPU使用率较低，导致线程空余时间很多，因此通常需要开 CPU 核心数两倍的线程
  - Netty 的 IO 处理任务就是典型的 IO 密集型任务，所以，Netty 的 Reactor 实现类（定制版的线程池）的 IO 处理线程数默认正好为 CPU 核数的两倍

- CPU密集型任务：

  - CPU 密集型的任务并行的任务越多，花在任务切换的时间就越多，CPU 执行任务的效率就越低，一般开等于 CPU 的核心数的线程数量
  - 比如 4 个核心的 CPU，通过 4 个线程并行地执行 4 个 CPU 密集型任务，此时的效率是最高的。但是如果线程数远远超出 CPU 核心数量，就需要频繁地切换线程，线程上下文切换时需要消耗时间，反而会使得任务效率下降。

- 混合型任务：

  - 业界有一个比较成熟的估算公式，具体如下：

  - ```
    最佳线程数 = ((线程等待时间 + 线程 CPU 时间) / 线程 CPU 时间) * CPU核数
    ```

  - 通过公式可以看出：等待时间所占的比例越高，需要的线程就越多，CPU 耗时所占的比例越高，需要的线程就越少

  - 比如在 Web 服务器处理 HTTP 请求时，假设平均线程 CPU 运行时间为 100 毫秒，而线程等待时间（比如包括 DB 操作、RPC 操作作、缓存操作等）为 900 毫秒，如果 CPU 核数为 8 那么根据上面这个公式，估算如下：`(900 毫秒+100 毫秒) / 100 毫秒 * 8 = 10 * 8 = 80`，最好开 80 个线程

****

## 关键源码剖析

****

### 属性 & 构造方法

****

 对于 ThreadPoolExecutor 有几个关键的属性，这里需要先大致了解：

```java
public class ThreadPoolExecutor extends AbstractExecutorService {
 
    // 控制变量-存放状态和线程数
    private final AtomicInteger ctl = new AtomicInteger(ctlOf(RUNNING, 0));
 
    // 任务队列，必须是阻塞队列
    private final BlockingQueue<Runnable> workQueue;
 
    // 工作线程集合，存放线程池中所有的（活跃的）工作线程，只有在持有全局锁mainLock的前提下才能访问此集合
    private final HashSet<Worker> workers = new HashSet<>();
    
    // 全局锁
    private final ReentrantLock mainLock = new ReentrantLock();
 
    // awaitTermination方法使用的等待条件变量
    private final Condition termination = mainLock.newCondition();
    
    // 线程工厂，用于创建新的线程实例
    private volatile ThreadFactory threadFactory;
 
    // 拒绝执行处理器，对应不同的拒绝策略
    private volatile RejectedExecutionHandler handler;
    
    // 空闲线程等待任务的时间周期，单位是纳秒
    private volatile long keepAliveTime;
    
    // 是否允许核心线程超时，如果为true则keepAliveTime对核心线程也生效
    private volatile boolean allowCoreThreadTimeOut;
    
    // 核心线程数
    private volatile int corePoolSize;
 
    // 线程池容量
    private volatile int maximumPoolSize;
 
    ......
}    
```

对于其构造方法如下：

```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory,
                          RejectedExecutionHandler handler) {
    if (corePoolSize < 0 ||
        maximumPoolSize <= 0 ||
        maximumPoolSize < corePoolSize ||
        keepAliveTime < 0)
        throw new IllegalArgumentException();
    if (workQueue == null || threadFactory == null || handler == null)
        throw new NullPointerException();
    this.corePoolSize = corePoolSize;
    this.maximumPoolSize = maximumPoolSize;
    this.workQueue = workQueue;
    this.keepAliveTime = unit.toNanos(keepAliveTime);
    this.threadFactory = threadFactory;
    this.handler = handler;
}
```

由此可见，当我们手动创建线程池时，线程池并不会直接工作，而是将我们手动设置的关键参数进行初始化。

****

### execute 方法

****

ThreadPoolExecutor 的最基本使用方式就是通过 execute 方法提交一个 Runnable 任务，首先看图理解 execute 的执行逻辑

![image-20240625174625992](https://lys2021.com/wp-content/uploads/2024/06/image-20240625174625992.png)

查看源码中的 execute 方法，这里我们分层次来看，先看最主要的外部的几个条件判断：

```java
public void execute(Runnable command) {
        if (command == null)
            throw new NullPointerException();
        /*
         * Proceed in 3 steps:
         *
         * 1. If fewer than corePoolSize threads are running, try to
         * start a new thread with the given command as its first
         * task.  The call to addWorker atomically checks runState and
         * workerCount, and so prevents false alarms that would add
         * threads when it shouldn't, by returning false.
         *
         * 2. If a task can be successfully queued, then we still need
         * to double-check whether we should have added a thread
         * (because existing ones died since last checking) or that
         * the pool shut down since entry into this method. So we
         * recheck state and if necessary roll back the enqueuing if
         * stopped, or start a new thread if there are none.
         *
         * 3. If we cannot queue task, then we try to add a new
         * thread.  If it fails, we know we are shut down or saturated
         * and so reject the task.
         */
        int c = ctl.get();
    	// 获取当前线程池里的线程数
        if (workerCountOf(c) < corePoolSize) {  // 判断工作线程数，如果小于 corePollSize，则执行addWork
            if (addWorker(command, true))
                return;
            c = ctl.get();
        }
    	//否则，如果线程池还在运行，offer 到等待队列中
        if (isRunning(c) && workQueue.offer(command)) {
            int recheck = ctl.get();
            if (! isRunning(recheck) && remove(command))
                reject(command);
            else if (workerCountOf(recheck) == 0)
                addWorker(null, false);
        }  // 这里判断是否可以通过创建非核心线程的方式创建线程并执行
        else if (!addWorker(command, false)) 
            reject(command);  // 如果不能，则执行拒绝策略
    }
```

其实源码里面的注释解释的已经很明白了，这里的逻辑其实已经说明了一些常见的问题：

- 当提交任务时，只要核心线程数没有满，都会新建核心线程执行任务，不会使用以前创建好的空闲的核心线程去执行
- 当无法向队列提交任务时，如果可以新建非核心线程，则会新建非核心线程并执行任务，不会在创建之后从队列中取任务执行

****

### addWorker 方法

****

接下来我们灌注一下 addWorker 方法：

```java
// 添加工作线程，如果返回false说明没有新创建工作线程，如果返回true说明创建和启动工作线程成功
private boolean addWorker(Runnable firstTask, boolean core) {
    //第一步，计数判断，不符合条件打回false
    retry:
    for (int c = ctl.get();;) {
        // 这个是十分复杂的条件，这里先拆分多个与（&&）条件：
        // 1. 线程池状态至少为SHUTDOWN状态，也就是rs >= SHUTDOWN(0)
        // 2. 线程池状态至少为STOP状态，也就是rs >= STOP(1)，或者传入的任务实例firstTask不为null，或者任务队列为空
        // 其实这个判断的边界是线程池状态为shutdown状态下，不会再接受新的任务，在此前提下如果状态已经到了STOP、或者传入任务不为空、或者任务队列为空（已经没有积压任务）都不需要添加新的线程
        if (runStateAtLeast(c, SHUTDOWN)
            && (runStateAtLeast(c, STOP)
                || firstTask != null
                || workQueue.isEmpty()))
            return false;
        // 注意这也是一个死循环 - 二层循环
        for (;;) {
            // 这里每一轮循环都会重新获取工作线程数wc
            // 1. 如果传入的core为true，表示将要创建核心线程，通过wc和corePoolSize判断，如果wc >= corePoolSize，则返回false表示创建核心线程失败
            // 2. 如果传入的core为false，表示将要创非建核心线程，通过wc和maximumPoolSize判断，如果wc >= maximumPoolSize，则返回false表示创建非核心线程失败
            if (workerCountOf(c)
                >= ((core ? corePoolSize : maximumPoolSize) & COUNT_MASK))
                return false;
            // 成功通过CAS更新工作线程数wc，则break到最外层的循环
            if (compareAndIncrementWorkerCount(c))
                break retry;
            // 走到这里说明了通过CAS更新工作线程数wc失败，这个时候需要重新判断线程池的状态是否由RUNNING已经变为SHUTDOWN
            c = ctl.get();  // Re-read ctl
            // 如果线程池状态已经由RUNNING已经变为SHUTDOWN，则重新跳出到外层循环继续执行
            if (runStateAtLeast(c, SHUTDOWN))
                continue retry;
            // 如果线程池状态依然是RUNNING，CAS更新工作线程数wc失败说明有可能是并发更新导致的失败，则在内层循环重试即可 
            // else CAS failed due to workerCount change; retry inner loop 
        }
    }
    
    //第二步，创建新work放入线程集合works（一个HashSet）
    
    // 标记工作线程是否启动成功
    boolean workerStarted = false;
    // 标记工作线程是否创建成功
    boolean workerAdded = false;
    Worker w = null;
    try {
        // 传入任务实例firstTask创建Worker实例，Worker构造里面会通过线程工厂创建新的Thread对象，所以下面可以直接操作Thread t = w.thread
        // 这一步Worker实例已经创建，但是没有加入工作线程集合或者启动它持有的线程Thread实例
        w = new Worker(firstTask);
        final Thread t = w.thread;
        if (t != null) {
            // 这里需要全局加锁，因为会改变一些指标值和非线程安全的集合
            final ReentrantLock mainLock = this.mainLock;
            mainLock.lock();
            try {
                int c = ctl.get();
                // 这里主要在加锁的前提下判断ThreadFactory创建的线程是否存活或者判断获取锁成功之后线程池状态是否已经更变为SHUTDOWN
                // 1. 如果线程池状态依然为RUNNING，则只需要判断线程实例是否存活，需要添加到工作线程集合和启动新的Worker
                // 2. 如果线程池状态小于STOP，也就是RUNNING或者SHUTDOWN状态下，同时传入的任务实例firstTask为null，则需要添加到工作线程集合和启动新的Worker
                // 对于2，换言之，如果线程池处于SHUTDOWN状态下，同时传入的任务实例firstTask不为null，则不会添加到工作线程集合和启动新的Worker
                // 这一步其实有可能创建了新的Worker实例但是并不启动（临时对象，没有任何强引用），这种Worker有可能成功下一轮GC被收集的垃圾对象
                if (isRunning(c) ||
                    (runStateLessThan(c, STOP) && firstTask == null)) {
                    if (t.isAlive()) // precheck that t is startable
                        throw new IllegalThreadStateException();
                    // 把创建的工作线程实例添加到工作线程集合
                    workers.add(w);
                    int s = workers.size();
                    // 尝试更新历史峰值工作线程数，也就是线程池峰值容量
                    if (s > largestPoolSize)
                        largestPoolSize = s;
                    // 这里更新工作线程是否启动成功标识为true，后面才会调用Thread#start()方法启动真实的线程实例
                    workerAdded = true;
                }
            } finally {
                mainLock.unlock();
            }
            // 如果成功添加工作线程，则调用Worker内部的线程实例t的Thread#start()方法启动真实的线程实例
            if (workerAdded) {
                t.start();
                // 标记线程启动成功
                workerStarted = true;
            }
        }
    } finally {
        // 线程启动失败，需要从工作线程集合移除对应的Worker
        if (! workerStarted)
            addWorkerFailed(w);
    }
    return workerStarted;
}
 
// 添加Worker失败
private void addWorkerFailed(Worker w) {
    final ReentrantLock mainLock = this.mainLock;
    mainLock.lock();
    try {
        // 从工作线程集合移除之
        if (w != null)
            workers.remove(w);
        // wc数量减1    
        decrementWorkerCount();
        // 基于状态判断尝试终结线程池
        tryTerminate();
    } finally {
        mainLock.unlock();
    }
}
```

先看看 addWork 的两个参数，第一个是需要提交的线程Runnable firstTask，第二个参数是 boolean 类型，表示是否为核心线程。 

其中三处调用 addWork：

- 第一次，条件if (workerCountOf(c) < corePoolSize)：这个很好理解，工作线程数少于核心线程数，提交任务。所以addWorker(command, true)
- 第二次，如果 workerCountOf(recheck) == 0： 如果worker的数量为0，那就 addWorker(null,false)，由于之前已经把command提交到阻塞队列了workQueue.offer(command)。所以提交一个空线程，直接从阻塞队列里面取就可以了。
- 第三次，如果线程池没有RUNNING或者offer阻塞队列失败，addWorker(command,false)：说明阻塞队列满了，将任务提交到非核心线程池。

****

### Worker 对象

****

线程池中的每一个线程被封装成了内部的一个Worker对象，ThreadPool维护的其实就是一组Worker对象：

```java
private final class Worker extends AbstractQueuedSynchronizer implements Runnable{
    private static final long serialVersionUID = 6138294804551838833L;
 
    // 保存ThreadFactory创建的线程实例，如果ThreadFactory创建线程失败则为null
    final Thread thread;
    // 保存传入的Runnable任务实例
    Runnable firstTask;
    // 记录每个线程完成的任务总数
    volatile long completedTasks;
    
    // 唯一的构造函数，传入任务实例firstTask，注意可以为null
    Worker(Runnable firstTask) {
        // 禁止线程中断，直到runWorker()方法执行
        setState(-1); // inhibit interrupts until runWorker
        this.firstTask = firstTask;
        // 通过ThreadFactory创建线程实例，注意一下Worker实例自身作为Runnable用于创建新的线程实例
        this.thread = getThreadFactory().newThread(this);
    }
 
    // 委托到外部的runWorker()方法，注意runWorker()方法是线程池的方法，而不是Worker的方法
    public void run() {
        runWorker(this);
    }
 
    // Lock methods
    //
    // The value 0 represents the unlocked state.
    // The value 1 represents the locked state.
    //  是否持有独占锁，state值为1的时候表示持有锁，state值为0的时候表示已经释放锁
    protected boolean isHeldExclusively() {
        return getState() != 0;
    }
 
    // 独占模式下尝试获取资源，这里没有判断传入的变量，直接CAS判断0更新为1是否成功，成功则设置独占线程为当前线程
    protected boolean tryAcquire(int unused) {
        if (compareAndSetState(0, 1)) {
            setExclusiveOwnerThread(Thread.currentThread());
            return true;
        }
        return false;
    }
    
    // 独占模式下尝试是否资源，这里没有判断传入的变量，直接把state设置为0
    protected boolean tryRelease(int unused) {
        setExclusiveOwnerThread(null);
        setState(0);
        return true;
    }
    
    // 加锁
    public void lock()        { acquire(1); }
 
    // 尝试加锁
    public boolean tryLock()  { return tryAcquire(1); }
 
    // 解锁
    public void unlock()      { release(1); }
 
    // 是否锁定
    public boolean isLocked() { return isHeldExclusively(); }
    
    // 启动后进行线程中断，注意这里会判断线程实例的中断标志位是否为false，只有中断标志位为false才会中断
    void interruptIfStarted() {
        Thread t;
        if (getState() >= 0 && (t = thread) != null && !t.isInterrupted()) {
            try {
                t.interrupt();
            } catch (SecurityException ignore) {
            }
        }
    }
}
```

****

### runWorker 方法

****

Worker 方法中的 run 方法实际调用的是线程池中的 runWorker 方法：

```java
final void runWorker(Worker w) {
    // 获取当前线程，实际上和Worker持有的线程实例是相同的
    Thread wt = Thread.currentThread();
    // 获取Worker中持有的初始化时传入的任务对象，这里注意存放在临时变量task中
    Runnable task = w.firstTask;
    // 设置Worker中持有的初始化时传入的任务对象为null
    w.firstTask = null;
    // 由于Worker初始化时AQS中state设置为-1，这里要先做一次解锁把state更新为0，允许线程中断
    w.unlock(); // allow interrupts
    // 记录线程是否因为用户异常终结，默认是true
    boolean completedAbruptly = true;
    try {
        // 1. 如果线程池外部传递了任务则直接执行外部传递的任务
        // 2. 如果没有获取到外部传递进来的任务则调用getTask()去队列中获取任务并执行
        // 2.1. 如果在任务队列中获取到了任务则直接执行已经获取的任务
        // 2.2. 如果任务队列为空，没有任务则反复执行空循环阻塞当前线程死亡
        // getTask()由于使用了阻塞队列，这个while循环如果命中后半段会处于阻塞或者超时阻塞状态，getTask()返回为null会导致线程跳出死循环使线程终结
        while (task != null || (task = getTask()) != null) {
            // Worker加锁，本质是AQS获取资源并且尝试CAS更新state由0更变为1
            w.lock();
            // 如果线程池正在停止（也就是由RUNNING或者SHUTDOWN状态向STOP状态变更），那么要确保当前工作线程是中断状态
            // 否则，要保证当前线程不是中断状态
            if ((runStateAtLeast(ctl.get(), STOP) ||
                    (Thread.interrupted() &&
                    runStateAtLeast(ctl.get(), STOP))) &&
                !wt.isInterrupted())
                wt.interrupt();
            try {
                // 钩子方法，任务执行前
                beforeExecute(wt, task);
                try {
                    // 调用任务的run方法，而不是start()方法，因为Worker本身就是一个线程类
                    task.run();
                    // 钩子方法，任务执行后 - 正常情况
                    afterExecute(task, null);
                } catch (Throwable ex) {
                    // 钩子方法，任务执行后 - 异常情况
                    afterExecute(task, ex);
                    throw ex;
                }
            } finally {
                // 清空task临时变量，这个很重要，否则while会死循环执行同一个task
                task = null;
                // 执行完成后自增当前工作线程执行的任务数量
                w.completedTasks++;
                // Worker解锁，本质是AQS释放资源，设置state为0
                w.unlock();
            }
        }
        // 如果线程能够执行到最后一行代表线程执行过程中没有由于发生异常导致跳出循环，将 突然结束 标志改为false
        completedAbruptly = false;
    } finally {
        // 处理线程退出，completedAbruptly为true说明由于用户异常导致线程非正常退出
        // 执行回收工作线程的逻辑
        processWorkerExit(w, completedAbruptly);
    }
}
```

runWorker 方法的本质其实就是通过一个 while 循环不断地通过 getTask() 方法获取任务，在调用方法执行的时候会先获取外部传递的任务，如果没有获取到外部传递的任务则调用 getTask() 方法获取任务队列中的任务并执行

****

### getTask 方法

****

```java
private Runnable getTask() {
    // timeOut变量的值表示上次从阻塞队列中取任务时是否超时
    boolean timedOut = false; // Did the last poll() time out?
    for (;;) {
        int c = ctl.get();
        int rs = runStateOf(c);
        // Check if queue empty only if necessary.
        /*
         * 如果线程池状态rs >= SHUTDOWN，也就是非RUNNING状态，再进行以下判断：
         * 1. rs >= STOP，线程池是否正在stop；
         * 2. 阻塞队列是否为空。
         * 如果以上条件满足，则将workerCount减1并返回null。
         * 因为如果当前线程池状态的值是SHUTDOWN或以上时，不允许再向阻塞队列中添加任务。
         */
        if (rs >= SHUTDOWN && (rs >= STOP || workQueue.isEmpty())) {
            decrementWorkerCount();
            return null;
        }
        int wc = workerCountOf(c);
        // 判断是不是要超时处理
        // timed变量用于判断是否需要进行超时控制。
        // allowCoreThreadTimeOut默认是false，也就是核心线程不允许进行超时；
        // wc > corePoolSize，表示当前线程池中的线程数量大于核心线程数量；
        // 对于超过核心线程数量的这些线程，需要进行超时控制
        boolean timed = allowCoreThreadTimeOut || wc > corePoolSize;
        
        /*
         * 将线程队列数量原子性减
         * wc > maximumPoolSize的情况是因为可能在此方法执行阶段同时执行了setMaximumPoolSize方法；
         * timed && timedOut 如果为true，表示当前操作需要进行超时控制，并且上次从阻塞队列中获取任务发生了超时
         * 接下来判断，如果有效线程数量大于1，或者阻塞队列是空的，那么尝试将workerCount减1；
         * 如果减1失败，则返回重试。
         * 如果wc == 1时，也就说明当前线程是线程池中唯一的一个线程了。
         */
        if ((wc > maximumPoolSize || (timed && timedOut))
            //计数器做原子递减，递减成功后，返回null，for被中止
            && (wc > 1 || workQueue.isEmpty())) {
            if (compareAndDecrementWorkerCount(c))
                return null;
            //递减失败，继续下一轮循环，直到成功
            continue;
        }
        try {
            //如果线程可被释放，那就poll，释放的时间为：keepAliveTime
			//否则，线程是不会被释放的，take一直被阻塞在这里，直到来了新任务继续工作
            Runnable r = timed ?
                workQueue.poll(keepAliveTime, TimeUnit.NANOSECONDS) :
                workQueue.take();
            if (r != null)
                return r;
            // 到这里说明可被释放的线程等待超时，已经销毁，设置该标记，下次循环将线程数减少
            timedOut = true;
        } catch (InterruptedException retry) {
            // 如果获取任务时当前线程发生了中断，则设置timedOut为false并返回循环重试
            timedOut = false;
        }
    }
}
```

综上所述，线程池内部将我们提交的任务封装成了一个个 Woker 对象来管理，我们调用线程池的 execute 方法，实际上：

- execute 根据策略调用  -> addWoker 方法
- addWoker 方法调用 Worker 的 run 方法
- Worker 的 run 方法调用 runWorker 方法
- runWorker 方法不断去用 getTask 获取任务执行

****