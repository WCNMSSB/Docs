---
sidebar_position: 1
sidebar_label: 安装SteamVR
---

# 安装SteamVR

:::warning
**注意**：
我们正在写本片文档

:::

:::warning
**注意**：
VR区的大部分内容都与SteamVR有关！！！

SteamVR已经被普遍认为是VR区的必备！
:::

## 安装STEAM

### Windows

打开你电脑的浏览器（列如Edge/chrome/firefox）

访问[STEAM官方的下载页面](https://store.steampowered.com/about/)

点击`安装STEAM`

等待安装包下载完成

然后打开它

或者打开你的下载目录双击`SteamSetup.exe`

允许管理员权限

此时应该出现了Steam安装向导

点击下一步选择语言，选择你的语言后下一步

然后选择你的安装位置（建议选择除C盘以外的位置安装）后下一步

等待安装完成后启动STEAM

首次启动会下载更新，请耐心等待

等待安装完更新后弹出登陆界面

安装完成

### Linux

#### 命令行安装


##### Debian系（Debian，Ubuntu······）

```bash
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install steam -y
```
##### 通用方案

（其实不太会，装不上就去网上搜吧QWQ）

先安装Flatpak

```bash
# Ubuntu/Debian
sudo apt install flatpak
```
```bash
# Fedora
sudo dnf install flatpak
```
```bash
# Arch
sudo pacman -S flatpak
```
接下来安装Steam

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub com.valvesoftware.Steam -y
```

安装完以后点击`Install steam`或`Steam`

等待更新启动

#### deb包安装

[点击前往Steam官网下载页](https://store.steampowered.com/about/)

点击安装Steam（先确认按钮右边的标是否是Steam标，其实是SteamOS的标志）

等待下载

下载完成后双击可以尝试安装

不行就打开终端

检查是否拥有APT，如果没有就去装

输入sudo apt install [你的Steam_latest.deb]



## 登陆Steam
（注册STEAM账号不教，自己去搜）

## 安装SteamVR

### 快捷命令

确保Steam正在正常运行且完成了登录

按下WIN+R打开运行

输入以下命令快捷安装SteamVR

```bash
steam://install/250820
```
点击安装

等待安装完成

安装完成后启动STEAMVR

### 网页安装

[点我前往SteamVR在Steam上的商店页](https://store.steampowered.com/app/250820/SteamVR/)

登陆你的Steam账户

点击添加到库

然后点击马上开玩

也可以回到Steam

点击库

点击游戏和软件

勾选工具并在弹出的窗口点确定

然后在左侧列表中找到SteamVR

点击安装

### 初次设置

打开SteamVR

你应该会看到如下图的画面


![rqzwsz](/docs/vr/steamvr/ziwoshezhi.png)

点击图中红色框的`更新权限`按钮并授权管理员权限

然后提示窗口应该消失了

变成了如下图的窗口

![steamvrhello](/docs/vr/steamvr/steamvrhello.png)

点击左上角的三条横杠

点击`设置`

![SteamVR menu](/docs/vr/steamvr/steamvrtouchmenu.png)

在弹出的SteamVR设置窗口中点击`OpenXR`

点击`将STEAMVR设置为OPENXR运行时`

![SteamVR Set N Runtime](/docs/vr/steamvr/touchandsetopenxr.png)

授予管理员权限后完成

## 完成

恭喜你完成了基础的初次配置