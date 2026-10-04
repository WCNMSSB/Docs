---
sidebar_position: 500
sidebar_label: 安装一体机VR游戏
---

# 安装一体机VR游戏


:::warning
**注意**：
我们正在写本片文档

:::

## 下载

大多数资源平台都可以


## 安装

接下来就要开始安装了

### 分类

当你解压下载好的zip后可能会看到图示结构

![zipapkmulu](/docs/vr/zipgameapkmulu.png)

`adb`        ——这一般是adb/Android SDK Platform-Tools(Platform-Tools)是安装工具

`xxx.xxxxxxx.xxxxx`——这是obb文件夹，进入里面是游戏资源文件（.obb结尾）文件夹名称一般是游戏包名（可能部分游戏没有）

`我是其他文件夹（如moddata等·）`——这是部分游戏的模组文件夹一般为Moddata等

`X_X_XXX.apk`——这一般是游戏本体

`一键安装.bat`——这个就是一般Windows系统用的安装脚本，只需要将头显使用usb连接到电脑后双击即可

xxxx只是示例名字，可能不叫这个


#### 自动安装

##### Windows脚本自动安装

很简单

你只需要安装好adb驱动然后将你的头显用线连接到电脑然后双击脚本即可

（可能需要带上头显点一次授权窗口）

##### 头显助手安装

你可以使用部分助手安装（先不急着写）

#### 手动安装

##### Windows手动安装

解压好zip文件得到文件夹

打开它

安装好adb驱动然后将你的头显用线连接到电脑

打开adb命令行

然后输入

```bash
adb devices
```

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

接下来输入

```bash
adb install [你的apk路径，也可以直接把apk拖进来]
```
等待出现`Success`

接下来安装obb（没有就不用装）

```bash
adb push [你的obb文件夹，也可以直接把文件夹拖进来] /sdcard/android/obb
```

然后是mod/其他文件夹（没有就不用装）

```bash
adb push [你的mod/其他文件夹，也可以直接把文件夹拖进来] /sdcard/android/obb
```


以下是一次完整的安装流程示例

```bash
D:\XXXXXXXX\adb>adb devices
* daemon not running; starting now at tcp:5037
* daemon started successfully
List of devices attached
XXXXX        unauthorized


D:\XXXXXXXX\adb>adb devices
List of devices attached
XXXXX        device


D:\XXXXXXXX\adb>adb install D:\XXXXXXXX\X_X_XXX.apk
Performing Streamed Install
Success

D:\XXXXXXXX\adb>adb push D:\XXXXXXXX\xxx.xxxxxxx.xxxxx /sdcard/android/obb
D:\XXXXXXXX\xxx.xxxxxxx.xxxxx\: 1 file pushed, 0 skipped. 6.7 MB/s (93389938 bytes in 13.304s)

D:\XXXXXXXX\adb>adb push D:\XXXXXXXX\我是其他文件夹（如moddata等·） /sdcard
D:\XXXXXXXX\我是其他文�... MB/s (186779876 bytes in 23.882s)
```
这样就安装完了

##### 头显内手动安装

建议使用[MT管理器](https://mt.cc/download/)

下载后点击安装(Quest使用`文件`找到下载的文件后点击三个点-打开方式-软件包安装程序 安装)

安装后打开并授予文件管理权限

然后在头显内解压zip

进入到解压后的目录

长按apk选择打开方式

点击类型-全部-

找到软件包安装程序长按

点击设置为默认打开方式

如果有shizuku或者root可以授权后长按apk

选择打开方式

点击类型-内置

长按apk信息点击设置为默认

可以更方便！

接下来安装obb

找到obb文件夹

将moddata长按复制到用户存储根目录

长按将他复制到android/obb

(可能需要进阶权限，如shizuku，root)

## 授予权限

打开应用的设置页或者使用点击MT管理器的左上角菜单-已安装应用-点击你安装的应用-更多-详情

该操作也会跳转到应用在设置的详情页

点击权限

允许所有的

然后返回

点击特殊权限

允许所有

## 完成

恭喜你完成了