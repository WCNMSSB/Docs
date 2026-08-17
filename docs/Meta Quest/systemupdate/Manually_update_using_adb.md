---
sidebar_position: 1
sidebar_label: 手动使用adb更新
---
:::warning
**注意**：
我们正在补充本片文档

:::

# 手动使用ADB更新你的固件

准备:你的Quest、一根数据线(接口类型取决于你的设备，通常为typec to usba)、一台支持`ADB命令行工具(platform-tools)`并且支持连接设备的设备(最好可以上网)

# 下载ADB工具(platform-tools)
[点击这里前往谷歌官方网站](https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn)

然后选择你对应平台的下载

下载完成后解压备用

# 获取你当前的固件版本

因为Meta最近的大部分固件都无法回滚版本

所以我们要确定当前版本（要不然白下）

## 使用ADB查询

打开你解压的adb文件夹
### Windows

点击上边的地址栏框，都删掉后
输入`cmd`回车

使用数据线连接Quest

然后输入`adb devices`

不出一小会你的设备应该会弹出授权窗口，请允许它（建议始终允许）

cmd窗口应该会

```bash
XXXXXXX/adb>adb devices
List of devices attached
XXXXXXX        device
```

如果是


```bash
XXXXXXX/adb>adb devices
List of devices attached
XXXXXXX        unauthorized
```

请在设备弹出的窗口允许

允许完以后在执行就没问题了

然后输入

```bash
adb shell getprop ro.build.version.incremental
```

应该会输出

```bash
XXX/adb>adb shell getprop ro.build.version.incremental
52345320035400520
```

`52345320035400520`就是你的固件版本

如果输出了
```bash
XXX/adb>adb shell getprop ro.build.version.incremental
adb.exe: device unauthorized.
This adb server's $ADB_VENDOR_KEYS is not set
Try 'adb kill-server' if that seems wrong.
Otherwise check for a confirmation dialog on your device.

```

那么请重复授权步骤

### 手机Meta Horizon

:::warning
**注意**：

打开Quest的蓝牙

这是必须的

:::

打开你手机上的`Meta Horizon`   (别忘了提前开魔法！)

点击右下角`设备`或者左上角`菜单`

选择`设备`那一栏

选择你的设备

然后等待连接

连接成功后点击`头戴设备设置`---`关于头戴设备`

`头戴设备版本`那一栏就是固件版本

# 下载新版本固件

前往[Cocaine.Trade](https://cocaine.trade/)

选择你的设备

`Incremental`一列就是固件版本

选择比你新的、你想用的下载（点一下版本号就是下载）

下载完成以后备用（可选复制到ADB文件夹和改名）

# 升级

# 进入侧载更新模式
## ADB命令

在ADB命令行使用以下命令重启到sideload模式(设备开机)
```bash
adb reboot sideload
```

你的Quest应该会重启

然后黑屏亮灯(3是紫色)

此时在adb命令行输入

```bash
adb devices
```
你应该能看到

```bash
XXXXX/adb>adb devices
List of devices attached
XXXXXXXXXXX  sideload
```


## 手动进入

将你的Quest关机

然后按住`电源键`加`音量-`直至设备进fastboot

使用`音量-`将光标移动到`Sideload update`

然后按下`电源键`

你的Quest应该会重启

然后黑屏亮灯(3是紫色)

此时在adb命令行输入

```bash
adb devices
```
你应该能看到

```bash
XXXXX/adb>adb devices
List of devices attached
XXXXXXXXXXX  sideload
```

# 侧载更新

回到ADB窗口

输入`adb sideload `(注意最后有一个空格)

然后把你的包拖进来

回车

不出意外应该开始了

等他完成

输出应该是这样的

```bash
XXXXX/adb>adb sideload E:\q3_52345320035400520.zip
Total xfer: 2.00x
```
如果是

```bash
XXXXX/adb>adb sideload E:\q3_52345320035400520.zip
Total xfer: 1.00x
```
说明你的包比你当前的版本低

或者版本差太大(需要几个版本几个版本升级)

# 完成

不出意外的话你的Quest会重启

然后等进系统即可

接下来检查版本号

如果是你侧载的版本

恭喜你升级成功