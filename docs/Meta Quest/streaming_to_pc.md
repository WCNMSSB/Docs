---
sidebar_position: 3
sidebar_label: 串流至PC
---

:::warning
**注意**：
我们正在写本片文档

:::

# 串流至PC

本篇文档会尝试教会你如何将你的Quest(quest （一代）只有部分方法可用)串流至你的电脑

你需要有一台电脑、路由器（建议5Ghz的WIfi6及以上）/一根数据线（USB3.0以上、需电脑也支持）、还有你的Quest

## VR模式

接下来我们开始串流VR模式的教学吧!

部分可能需要魔法网路！

[点击我进入魔法网络有关的教学!](https://wcnmssb.github.io/Docs/docs/Meta%20Quest/magicnetwork)

:::warning
**注意**：
大部分VR串流软件都需要SteamVR，请自己下载好并且初次启动配置并绑定系统默认OpenXR运行时

开启SteamVR后点击SteamVR左边的三条杠-`设置`-`OpenXR`-`将SteamVR设置为OPENXR运行时`

[点我前往Steam VR在Steam的商店页](https://store.steampowered.com/app/250820/SteamVR/)

:::

每个串流方式各有优点

每个串流软件也各有不同

个人觉得在win上VD>ALVR>Steam Link>Meta Horizon Link>Ivry

linux则是Wivrn>ALVR

需要按需求选择哦~

### VD(Virtual Desktop)

#### 简介

`Virtual Desktop`是一个比较老的串流软件

它支持超多平台(oculus go/gear、Quest、Pico neo3以上、Play For Dream MR、Android XR以及vive部分机器)

功能多、要求配置不高、内置OpenXR运行时、可调节选项多

支持无线、有线（beta版）、互联网串流（需调试，要求门槛高，本教程不教学）

综合体验最好的之一，只是价格比较高（24.99USD）Meta有推荐策略可以拿30USD

虽然有盗版，但是本人不会教学

接下来我们开始吧

#### 安装

你要想使用`Virtual Desktop`你需要安装它

PC端可能需要魔法网络

Quest必要魔法网络

##### PC端

###### 安装

:::warning
**注意**：
！！！Steam上的`Virtual Desktop Classic`没有串流功能！！！！！

不要买！！！！

下载Virtual Desktop Streamer电脑端不用付费！！！

:::

[点我前往VD官网](https://www.vrdesktop.net/)

[点我直接下载最新正式版VD电脑端！](https://files.vrdesktop.net/files/VirtualDesktop.Streamer.Setup.exe)

[需要有线串流的点我直接下载最新Beta版VD电脑端！](https://download.vrdesktop.net/files/beta/VirtualDesktop.Streamer.Setup.exe)

需要有线无线来回用的也要下Beta版哦~

下载完成后双击`VirtualDesktop.Streamer.Setup.exe`走流程安装

安装完以后应该会弹出窗口（如果没有就自己去打开）

应该和下图相近或一样

![刚装完的VDS](/docs/metaquest/VDN.png)

###### 配置

如果你知道你头显端的用户名你可以现在添加（下面会教你怎么填）


##### 头显端

###### 安装

打开你对应的头显端商店（手机或者头显端商店都行）

这里放几个快捷链接

[Meta Quest](https://www.meta.com/experiences/virtual-desktop/2017050365004772/) | 
[Pico](https://store-global.picoxr.com/global/detail/1/3540) | 
[Android XR](https://play.google.com/store/apps/details?id=virtualdesktop.android) | 
[Viveport](https://www.viveport.com/apps/057d9b7a-02eb-4f98-8b1e-13e92680f3df) | 
[Vive Business Store](https://business.vive.com/appstore/detail/057d9b7a-02eb-4f98-8b1e-13e92680f3df) | 
Play For Dream没找到

在对应的商店买完以后在头显的商店里安装（Quest需要魔法）（部分商店可以直接通过网站向头显发送下载命令）

安装完成以后打开它（Quest必须开着魔法、其他家不确定）

##### 配置连接

确保PC和头显的VD都是开着的

此时头显端应该出现以下画面

![VDTX](/docs/metaquest/vdusername.png)

图中箭头指的红色框框内的蓝色字体就是`用户名`

按图示填写到VD中

点击`Add account`

![VDADDUSER](/docs/metaquest/VDADD.png)

选择你对应头显的平台

![VDACC](/docs/metaquest/VDADDCC.png)

在输入框输入你的用户名

![VDADUESER](/docs/metaquest/VDADDUSERN.png)

点击`Add`添加以后就应该完成了

如下图所示

![VDPCOK](/docs/metaquest/VDPCOK.png)

查看电脑的状态栏的VD图标

![VD灰色图标](/docs/metaquest/VDHS.png)

如果是这样就无法连接

你可能没有添加用户名，如果不是

打开一次魔法让他变成和下图一样的黄色即可

![VD黄色图标](/docs/metaquest/VDYL.png)

#### 连接

##### 无线

将你的电脑使用网线（建议且建议连接到千兆以上网口） Wifi(不建议但可用，至少5Ghz wifi5)

打开头显端VD（Quest第一次需要梯子）

打开完成以后应该如下图

![VDvrok](/docs/metaquest/VDVRREADY.jpg)

将你的头显连接到同一个网络

此时应该会出现你的电脑

点击它等待连接

如果一直卡在Connecting.....就关掉魔法再连

此时应该显示Connected就是连接成功了

此时应该显示桌面

按一下左手柄的菜单键打开菜单

点击Launch SteamVR启动SteamVR串流

此时你应该正常进入了SteamVR

打开游戏开始玩吧！

##### 有线

此方案目前只支持Quest且需要Meta Horizon OS V2.6（头显VD左下角206以上）

打开头显系统设置

左边一栏找到Link点击

右边往下滑找到USB连接

确保应用的USB连接为开启

打开头显端VD（Quest第一次需要梯子）

打开完成以后应该如下图

![VDvrok](/docs/metaquest/VDVRREADY.jpg)

将你的头显使用数据线连接到PC(不要允许文件访问)

此时右上角应该会弹出连接规格和速度

不出意外一小会就会显示你的电脑

点击连接即可

此时应该显示Connected就是连接成功了

此时应该显示桌面

按一下左手柄的菜单键打开菜单

点击Launch SteamVR启动SteamVR串流

此时你应该正常进入了SteamVR

打开游戏开始玩吧！


### Steam Link

### Meta Horizon Link(Meta Quest Link/Oculus)

### ALVR

### Ivry

### Wivrn(Linux)

###

## PC模式

