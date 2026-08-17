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

将你的Quest关机

然后按住`电源键`加`音量-`直至设备进rec？