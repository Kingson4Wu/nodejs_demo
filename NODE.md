<http://www.runoob.com/nodejs/nodejs-tutorial.html>

NPM 使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:
$ npm -v
2.3.0
如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：
$ sudo npm install npm -g
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@2.14.2 /usr/local/lib/node_modules/npm

全局安装与本地安装
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
npm install express          # 本地安装
npm install express -g   # 全局安装
本地安装
1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。
全局安装
1. 将安装包放在 /usr/local 下。
2. 可以直接在命令行里使用。
3. 不能通过 require() 来引入本地安装的包。

卸载模块
我们可以使用以下命令来卸载 Node.js 模块。
$ npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
$ npm ls
更新模块
我们可以使用以下命令更新模块：
$ npm update express
搜索模块
使用以下来搜索模块：
$ npm search express


***

Node.js REPL(交互式解释器)
Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
Node 自带了交互式解释器，可以执行以下任务：
读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
执行 - 执行输入的数据结构
打印 - 输出结果
循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。
Node 的交互式解释器可以很好的调试 Javascript 代码。
开始学习 REPL
我们可以输入以下命令来启动 Node 的终端：
$ node
>


Node.js 工具模块
在 Node.js 模块库中有很多好用的模块。接下来我们为大家介绍几种常用模块的使用：
序号	模块名 & 描述
1	OS 模块
提供基本的系统操作函数。
2	Path 模块
提供了处理和转换文件路的工具。
3	Net 模块
用于底层的网络通信。提供了服务端和客户端的的操作。
4	DNS 模块
用于解析域名。
5	Domain 模块
简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。



***

Node.js 教程
Node.js 教程
Node.js 安装配置
Node.js 创建第一个应用
NPM 使用介绍
Node.js REPL
Node.js 回调函数
Node.js 事件循环
Node.js EventEmitter
Node.js Buffer
Node.js Stream
Node.js 模块系统
Node.js 函数
Node.js 路由
Node.js 全局对象
Node.js 常用工具
Node.js 文件系统
Node.js GET/POST请求
Node.js 工具模块
Node.js Web 模块
Node.js Express 框架
Node.js RESTful API
Node.js 多进程
Node.js JXcore 打包

***

Node.js JXcore 打包
Node.js 是一个开放源代码、跨平台的、用于服务器端和网络应用的运行环境。
JXcore 是一个支持多线程的 Node.js 发行版本，基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。
但我们这篇文章主要是要教大家介绍 JXcore 的打包功能。
JXcore 安装
下载 JXcore 安装包，并解压，在解压的的目录下提供了 jx 二进制文件命令，接下来我们主要使用这个命令。
步骤1、下载
下载 JXcore 安装包 http://jxcore.com/downloads/，你需要根据你自己的系统环境来下载安装包。
1、Window 平台下载：Download，
2、Linux/OSX 下载安装命令，直接下载解压包下的 jx 二进制文件拷贝到 /usr/bin 目录下：
$ wget https://s3.amazonaws.com/nodejx/jx_rh64.zip
$ unzip jx_rh64.zip
$ cp jx_rh64/jx /usr/bin
将 /usr/bin 添加到 PATH 路径中：
$ export PATH=$PATH:/usr/bin
以上步骤如果操作正确，使用以下命令，会输出版本号信息：
$ jx --version
v0.10.32
包代码
例如，我们的 Node.js 项目包含以下几个文件，其中 index.js 是主文件：
drwxr-xr-x  2 root root  4096 Nov 13 12:42 images
-rwxr-xr-x  1 root root 30457 Mar  6 12:19 index.htm
-rwxr-xr-x  1 root root 30452 Mar  1 12:54 index.js
drwxr-xr-x 23 root root  4096 Jan 15 03:48 node_modules
drwxr-xr-x  2 root root  4096 Mar 21 06:10 scripts
drwxr-xr-x  2 root root  4096 Feb 15 11:56 style
接下来我们使用 jx 命令打包以上项目，并指定 index.js 为 Node.js 项目的主文件：
$ jx package index.js index
以上命令执行成功，会生成以下两个文件：
index.jxp 这是一个中间件文件，包含了需要编译的完整项目信息。
index.jx 这是一个完整包信息的二进制文件，可运行在客户端上。
载入 JX 文件
我们使用 jx 命令打包项目：
$ node index.js command_line_arguments
使用 JXcore 编译后，我们可以使用以下命令来执行生成的 jx 二进制文件：
$ jx index.jx command_line_arguments
更多 JXcore 功能特性你可以参考官网：http://jxcore.com/。

<http://www.runoob.com/nodejs/nodejs-jxcore-packaging.html>