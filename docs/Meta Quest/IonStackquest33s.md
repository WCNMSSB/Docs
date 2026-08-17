---
sidebar_position: 2
sidebar_label: 使用IonStack Root 你的Quest3/3s
---

:::warning
**注意**：
我们正在写本片文档

:::

:::warning
**注意**：
我们不对因恁所作的事情导致的任何后果承担责任

所有责任需您自己承担！！！

！！！请自行承担使用风险！！！

:::

Magisk视频教程

<iframe style={{"width":"100%", "aspectRatio":"16/9"}} src="//player.bilibili.com/player.html?isOutside=true&aid=117008196704035&bvid=BV1oA3t6PENC&cid=40439253706&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


KSU视频教程

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117014119063515&bvid=BV1rYGw6rEQG&cid=40472546593&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

# 简介


# 注意事项

:::warning
**注意**：
 千万不要写入任何分区！！！！！！！

 Quest3/3s目前没有任何方法解锁`Boot Loader`

:::

因为是临时root——是依靠加载`内核模块`(ksu  .ko文件) （Magisk则是靠`拥有root权限的进程`）进行root

并没有修改固件

所以可以在不解锁`Boot Loader`的情况下root

正因为没有修改固件

所以重启就会恢复掉root

只能再次加载

# 实践

:::warning
**注意**：
我们不对因恁所作的事情导致的任何后果承担责任

所有责任需您自己承担！！！

！！！请自行承担使用风险！！！

:::


## 准备

你需要[adb工具包(Android SDK Platform-Tools)](https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn)、


## 适配

先去fork[这个仓库](https://github.com/F-19-F/IonStackQuest3)

