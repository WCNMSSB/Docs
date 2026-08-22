---
sidebar_position: 2
sidebar_label: quest网络问题
---

:::
**注意**：
我们正在写本片文档

:::

# 解决quest网路问题

## 解决网络连接受限/已连接到设备，但无法提供互联网连接

### 原因

自Android 5.0起(Meta Horizon OS现在基于安卓14)，谷歌引入了Captive Portal机制， 用于检测WiFi网络认证是否正常。 该机制默认检测访问的是谷歌服务器，要魔法网络才能访问，如若没有魔法就会出现网络受限的情况， WiFi图标上会出现一个感叹号标志，导致系统不能访问网络

### 解决

#### 使用Quest助手

[下载](https://quest.vrzwk.cn/download)并将`quest助手`安装至Quest

启动`quest助手`

完成后点击右上角`ADB未连接(连接教程)`并根据教程完成连接

然后点击`头显调试`

往下滑找到`解除WiFi受限自动断开`右边的箭头并点击执行

然后重启即可


#### 使用adb

adb连接后输入

```bash
adb shell settings delete global captive_portal_https_url
adb shell settings delete global captive_portal_http_url
adb shell settings put global captive_portal_http_url {地址}
adb shell settings put global captive_portal_https_url {地址}
```
示例：（可以直接用）

```bash
adb shell settings delete global captive_portal_https_url
adb shell settings delete global captive_portal_http_url
adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate_204
adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate_204
```
重启头显

## 使用系统服务（系统更新、商店、APP更新等）

### 提要

Meta的所有服务都需要连接到Meta的服务器

但是这玩意在国外还被墙了

所以需要魔法环境（须自备，本人不提供）

### 选择魔法代理方式

#### 头显自代理

##### Clash For Android

[下载Clash For Android](https://github.com/clashbk/clash_for_android/releases/tag/2.5.12)

因为原库成滚木了所以放了第三方存储库

激活以后下载完将文件放进头显（记住放的位置）

打开`文件`（系统自带的app）

点击`这台头戴设备`

找到你下载的apk文件

点击三个点-`打开方式`-`软件包安装程序`

然后允许安装来源

然后再安装

安装完成后打开`Clash`

点击`配置`

点击右上角`+`

添加你的配置并保存

然后回到首页点击`已停止    点此启动`

然后点击`代理`后选择正确的节点

回到主页

完成！

#### 电脑代理

##### Clash For Windows

电脑安装完成并正确配置节点以后点击`常规`

将`允许局域网接入Clash`打开

然后查看电脑ip

可以通过点击`允许局域网接入Clash`右边的![Clash网络接口查看](/docs/metaquest/cwljk.png)查看

第三项的地址即为IP地址

记住后边有用


###### 无线连接

戴上你的quest

打开`设置`

点击`Wi-Fi`

找到你的网络点击右侧的`连接`

直接点击`高级`

点击代理下方的`无`

选择`手动`

代理主机名填写你电脑的ip地址（上边让你记了）

代理端口看你Clash主页——常规-端口就是（默认是7890）

填写进去

然后点击确认

然后输入密码连接

此时应该就可以正常使用Meta的服务了

如果不行请检查梯子和配置或者安装TAP网路适配器

###### 有线连接

[Gnirehtet](https://github.com/Genymobile/gnirehtet/releases)

`java`的需要安装java

`rust`的不需要依赖（推荐）

下载下来解压备用

[adb工具包(Android SDK Platform-Tools)](https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn)

选择对应平台版本下载

解压下来将platform-tools里面的所有文件复制到你解压的gnirehtet-XXXX-XXXXX文件夹里

此时你的文件夹里应该有如下文件

![gnirehtet_and_platform-tools](/docs/metaquest/gnirehtet_and_platform-tools.png)

现在用数据线将Quest连接到电脑

安装文件夹中的`gnirehtet.apk`

安装完以后

双击`gnirehtet-run.cmd`


可能会弹出ADB授权窗口

请允许(建议始终允许)

然后会弹出VPN请求界面

请允许

此时应该就可以了

##### Meta助手

[官网](https://ochelper.xlemon.cn/home.html)

这里下载

教程也有

#### 手机

##### NetProxy

打开并安装Netproxy和其Magisk模块并给予root权限

在节点选择正确订阅

点击`设置`——`代理设置`

打开网络开关栏目中的开关（取决于你手机的联网方式）

`代理ipv6`建议选`代理ipv6`

找到网络协议一栏

勾选所有（代理usb共享流量非必须，其他必须）

然后打开主页的`开关`

打开手机热点

带上你的Quest

选择你的热点并连接

##### Proxy Server

安装并打开Proxy Server

点击右上角`Add`

选择`Proxy Server`

`Server name`随便填 建议纯英文

然后点击`get random port`

然后直接返回

点击`yes`保存

带上你的Quest

选择你的网络

点击`高级 `

`代理`选择`手动`

代理主机名填写手机ip

端口看Proxy Server里的

填完后点确认

然后填密码点`连接`

#### 软路由

软路由是最方便稳定的方法之一

但是咱没那东西QwQ

所以还没研究

### 完成

此时你的服务应该都能用了