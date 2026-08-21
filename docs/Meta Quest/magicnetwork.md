---
sidebar_position: 2
sidebar_label: quest网络问题
---

**注意**：
我们正在写本片文档

:::

# 解决quest网路问题

# 解决网络连接受限/已连接到设备，但无法提供互联网连接

## 原因

自Android 5.0起(Meta Horizon OS现在基于安卓14)，谷歌引入了Captive Portal机制， 用于检测WiFi网络认证是否正常。 该机制默认检测访问的是谷歌服务器，要魔法网络才能访问，如若没有魔法就会出现网络受限的情况， WiFi图标上会出现一个感叹号标志，导致系统不能访问网络

## 解决

### 使用Quest助手

[下载](https://quest.vrzwk.cn/download)并将`quest助手`安装至Quest

启动`quest助手`

完成后点击右上角`ADB未连接(连接教程)`并根据教程完成连接

然后点击`头显调试`

往下滑找到`解除WiFi受限自动断开`右边的箭头并点击执行

然后重启即可


### 使用adb

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

# 使用系统服务（系统更新、商店、APP更新等）

## 提要

Meta的所有服务都需要连接到Meta的服务器

但是这玩意在国外还被墙了

所以需要魔法环境（须自备，本人不提供）

## 选择魔法代理方式

### 头显自代理

#### Clash For Android

[下载Clash For Android](https://github.com/clashbk/clash_for_android/releases/tag/2.5.12)

因为原库成滚木了所以放了第三方存储库

激活以后下载完将文件放进头显（记住放的位置）

#### NetProxy

### 电脑代理

#### Clash For Windows

#### Meta助手

### 手机

#### NetProxy

#### Proxy Server

### 软路由

软路由是最方便稳定的方法之一

但是咱没那东西QwQ

所以还没研究