---
title: XeroLinux Layan KDE
tags:
  - Linux
  - Ricing
  - Plasma
---

<h2 align="center">.//🎨 The Layan KDE Rice 🎨\\.</h2>

!!! warning

    I would like to clarify one very important aspect of ricing. We use custom themes, and those might not get updated very often, if at all by their respective developers/artists, which might result in some parts of the system and apps not to get themed correctly. That, my friends, is unfortunately out of our hands.

### Information

This is my complete conversion script, that will transform your **KDE Plasma** into something out of this world. I spent days, nay weeks optimizing it for best performance and stability. Some bugs may remain, please report them.

<p align="center">
    <img src="https://i.imgur.com/VA2tycb.jpeg" alt="rice">
</p>

### Performance

As mentioned, this rice has been throughly optimized for best performance on higher-end systems.. Although it might work on lower-end ones, for better performance I do not recommend that you use it there. So please do not report any performance issues.

---

<h1 align="center">.// The Wiki \\.</h1>

### Installation

**Install At Own Risk!!!**. As of now it supports **Plasma 6.x.x**. If you notice any issues and report them via issue tracker on here and I will do my best to address them. To apply the rice, please follow the commands posted below. You will need either **Paru** or **Yay** (installed via my toolkit). Keep in mind that this will replace some files. Read below...

```Bash
git clone https://github.com/xerolinux/xero-layan-git
cd xero-layan-git/ && ./install.sh
```

### Backing up

The install script will backup some app settings & all system ones before applying and overriding them with new ones, you will be able to restore what you need from the backup, so please do not report that. You have been warned. In case of any issues please find us on our [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}. Best of luck !

I would recommend you keep the folder backed up somewhere since it will get deleted once script is done with execution. That way, when I announce updates all you will have to do is git pull, like so...

```Bash
cd xero-layan-git/ && git pull
```

## Theme Elements Used

The rice uses the **Layan** [**GTK**](https://github.com/vinceliuice/Layan-gtk-theme){:target="_blank"} / [**KDE**](https://github.com/vinceliuice/Layan-kde){:target="_blank"} Theme & [**Tela Circle Icons**](https://github.com/vinceliuice/Tela-circle-icon-theme){:target="_blank"} by [**VinceLiuice**](https://github.com/vinceliuice){:target="_blank"}. As for Widgets AkA Plasmoids, it uses [**Apdatifier**](https://store.kde.org/p/2135796){:target="_blank"}, [**Netspeed**](https://store.kde.org/p/2136505){:target="_blank"}, [**Quick Shutdown**](https://store.kde.org/p/1288430){:target="_blank"},
[**Toggle Overview**](https://store.kde.org/p/2132554){:target="_blank"} and [**Wunderground PWS**](https://store.kde.org/p/2135799){:target="_blank"}.

Adding any more would start causing issues IMO. I kept it at a minimum for balance and stability. You are free to add more, remove what you do not need etc.. This is just a good base. Finally do not report issues to me, I am not the one who created any of the elements used, report upstream to respective Devs. Thanks.
