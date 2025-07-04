---
title: XeroLinux KDE Rices
tags:
  - Linux
  - Ricing
  - Plasma
---

<h1 align="center">🎨 XeroLinux KDE Rices 🎨</h1>

!!! warning

    I would like to clarify one very important aspect of ricing. We use custom themes, and those might not get updated very often, if at all by their respective developers/artists, which might result in some parts of the system and apps not to get themed correctly. That, my friends, is unfortunately out of our hands.

### Information

This is my complete conversion script, that will transform your **KDE Plasma** into something out of this world. I spent days, nay weeks optimizing it for best performance and stability. Some bugs may remain, please report them.

### Performance

As mentioned, this rice has been throughly optimized for best performance on higher-end systems.. Although it might work on lower-end ones, for better performance I do not recommend that you use it there. So please do not report any performance issues.

---

<h1 align="center">.// The Wiki \\.</h1>

### Installation

!!! warning

    Before you proceed, kindly note that in order for the rice to work, you will need to add and activate the **XeroLinux Repo**. Some required packages for example wallpapers come from it and do not exist elsewhere. For How-To guide please [**Click Here**](https://xerolinux.xyz/updates/add-our-repo/){:target="_blank"}

**Install At Own Risk!!!**. As of now it supports **Plasma 6.x.x**. If you notice any issues and report them via issue tracker on here and I will do my best to address them. To apply the rice, please follow the commands posted below. You will need either **Paru** or **Yay** (installed via my toolkit). Keep in mind that this will replace some files. Read below...

- **Layan based Rice :**

```Bash
git clone https://github.com/xerolinux/xero-layan-git
cd xero-layan-git/ && ./install.sh
```

<p align="center">
    <img src="https://i.imgur.com/VA2tycb.jpeg" alt="rice">
</p>

**Elements Used :**

The rice uses the **Layan** [**GTK**](https://github.com/vinceliuice/Layan-gtk-theme){:target="_blank"} / [**KDE**](https://github.com/vinceliuice/Layan-kde){:target="_blank"} Theme & [**Tela Circle Icons**](https://github.com/vinceliuice/Tela-circle-icon-theme){:target="_blank"} by [**VinceLiuice**](https://github.com/vinceliuice){:target="_blank"}. As for Widgets AkA Plasmoids, it uses [**Apdatifier**](https://store.kde.org/p/2135796){:target="_blank"}, [**Netspeed**](https://store.kde.org/p/2136505){:target="_blank"}, [**Quick Shutdown**](https://store.kde.org/p/1288430){:target="_blank"},
[**Toggle Overview**](https://store.kde.org/p/2132554){:target="_blank"} and [**Wunderground PWS**](https://store.kde.org/p/2135799){:target="_blank"}.

- **Orchis Dark based rice :**

```Bash
git clone https://github.com/xerolinux/xero-orchis-dark.git
cd xero-orchis-dark/ && ./install.sh
```

- Firefox Dark Black Theme => [**Here**](https://addons.mozilla.org/en-US/firefox/addon/nicedarktheme/){:target="_blank"}

<p align="center">
    <img src="https://i.imgur.com/LhXPFrH.jpeg" alt="rice">
</p>

**Elements Used :**

The rice uses the **Orchis** [**GTK**](https://github.com/vinceliuice/Orchis-theme){:target="_blank"} / [**KDE**](https://github.com/vinceliuice/Orchis-kde){:target="_blank"} Theme as for the rest it uses the exact same widgets & icons as the **Layan** rice. Only difference being that icons are blue as opposed to purple. As for the GTK theme you will have the option to select either subtle grey or pitch black, I would recommend default for consistency with KDE theme. Up to you. 

### Backing up

The install script will backup some app settings & all system ones before applying and overriding them with new ones, you will be able to restore what you need from the backup, so please do not report that. You have been warned. In case of any issues please find us on our [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}. Best of luck !
