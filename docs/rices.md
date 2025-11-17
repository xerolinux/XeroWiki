---
title: XeroLinux KDE Rices
tags:
  - Linux
  - Ricing
  - Plasma
---

<h1 align="center">🎨 XeroLinux KDE Rices 🎨</h1>

!!! info

    I would like to clarify one very important aspect of ricing. We use custom themes, and those might not get updated very often, if at all by their respective developers/artists, which might result in some parts of the system and apps not to get themed correctly. That, my friends, is unfortunately out of our hands.

### Information

This is my complete conversion script, that will transform your **KDE Plasma** into something out of this world. I spent days, nay weeks optimizing it for best performance and stability. Some bugs may remain, please report them.

### Performance

As mentioned, this rice has been throughly optimized for best performance on higher-end systems.. Although it might work on lower-end ones, for better performance I do not recommend that you use it there. So please do not report any performance issues.

---

<h1 align="center">.// The Wiki \\.</h1>

### The Rices

- **Layan based Rice :**

!!! warning

    Before you proceed, kindly note that in order for the rice to work, you will need to manually add and activate the **XeroLinux Repo** since script doesn't currently do that yet. Some required packages like wallpapers come from it and do not exist elsewhere. For How-To guide please [**Click Here**](https://xerolinux.xyz/updates/add-our-repo/){:target="_blank"}

**Installation :**

```Bash
git clone https://github.com/xerolinux/xero-layan-git
cd xero-layan-git/ && ./install.sh
```

<p align="center">
    <img src="https://i.imgur.com/VA2tycb.jpeg" alt="rice">
</p>

**Elements Used :**

The rice uses the **Layan** [**GTK**](https://github.com/vinceliuice/Layan-gtk-theme){:target="_blank"} / [**KDE**](https://github.com/vinceliuice/Layan-kde){:target="_blank"} Theme & [**Tela Circle Icons**](https://github.com/vinceliuice/Tela-circle-icon-theme){:target="_blank"} by [**VinceLiuice**](https://github.com/vinceliuice){:target="_blank"}. As for Widgets AkA Plasmoids, it uses [**Apdatifier**](https://store.kde.org/p/2135796){:target="_blank"}, [**Netspeed**](https://store.kde.org/p/2136505){:target="_blank"}, [**Quick Shutdown**](https://store.kde.org/p/1288430){:target="_blank"},
[**Toggle Overview**](https://store.kde.org/p/2132554){:target="_blank"}, [**Wunderground PWS**](https://store.kde.org/p/2135799){:target="_blank"}, [**Panel Colorizer**](https://store.kde.org/p/2130967){:target="_blank"}, [**Kurve Audio Visualizer**](https://store.kde.org/p/2299506){:target="_blank"}, [**Krohnkite**](https://www.pling.com/p/2144146){:target="_blank"} and [**Smart Video Wallpaper**](https://www.pling.com/p/2139746){:target="_blank"}

- **Xero Cosmic Rice :**

!!! warning

    Before you proceed, kindly note that **ArchInstall** currently does not enable the **Cosmic-Greeter** service, so you will have to do that on your own via `sudo systemctl enable --now cosmic-greeter`, only after that will you be able to login to graphical session. Script will proceed to add both **XeroLinux** & **Chaotic-AUR** repos for less compilation. use this on a *Fresh Install* of **Cosmic** prior to making your own modifications.

**Installation**

Quickest method :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/cosmic.sh)"
```

Or, if you prefer :
    
```Bash
wget https://xerolinux.xyz/script/cosmic.sh
chmod +x cosmic.sh && sh cosmic.sh
```

<p align="center">
    <img src="https://i.imgur.com/KAbUOno.png" alt="rice">
</p>

This rice is work in progress, will always be. Note that I do not use **Cosmic** myself on the daily, so updates will be few and far between. Nevertheless, it's been thoroughly tested, and works as is, for now. I will say this once, this comes with minimal to no support, **USE AT YOUR OWN RISK !**. 

### Wrapping up

These script were created to make it easier for you to try n use my dots. Feel free to suggest any changes over on **Github**. And in case of any issues please find us on our [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}. Best of luck !
