---
title: The XeroLinux Distro
tags:
  - Linux
  - Distro
  - XeroLinux
---

# <h2 align="center">💿 XeroLinux Distro 💿</h2>

!!! info

    In a nutshell, the **XeroLinux** ISO bundles all my scripts, toolkit, and custom rice into a seamless, easy-to-install package, skipping the hassle of running the ArchInstall script entirely. No more, no less. [**Source Code**](https://github.com/XeroLinuxDev){:target="_blank"}

### Thank you

Before we begin, I would like to tell everyone of you who has supported the **XeroLinux** project by either getting the ISO or some merch, how much your simple act of kindness means to me. I cannot put it into words. So all am gonna say is God bless you all. I hope your kindness is reciprocated. 🙏❤️

In case you haven't gotten your copy yet, check out how to » [**Here**](https://ko-fi.com/xerolinux/shop){:target="_blank"}.

<p align="center">
    <img src="https://i.imgur.com/ejZ1ZQv.png" alt="rice">
</p>

---

<h1 align="center">.// The Wiki \\.</h1>

## Installation

Before we dive in, it's important to note that **XeroLinux** features **KDE Plasma** & **GNOME**, two powerful and distinct desktop environments. While they were designed to run on a variety of systems, for the best experience, we recommend mid-range or higher hardware. That said, they can work on low-end hardware, but performance may be less than optimal. Check the requirements below for more details!

<center>

| **Minimum** 	| **Recommended** 	|
|---	|---	|
| 4GB RAM (DDR3+) 	| 8GB+ RAM (DDR3+) 	|
| 16GB HDD/SSD Storage 	| 32GB+ HDD/SSD Storage 	|
| Modern iGPU (512MB vRAM) 	| Modern dGPU (4GB+ vRAM) 	|

</center>

## Bootable Tool

To boot into the Distro's Live Environment, all you have to do is use the tried and true [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to put ISO on & boot, that way you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

<p align="center">
    <img src="https://i.imgur.com/LTVLXo3.png" alt="rice">
</p>

## Calamares Installer

Launch the [**Calamares**](https://github.com/calamares/calamares){:target="_blank"} installer from our new **Welcome App**. Just go through the motions and when you get to the user creation page, if you select the *Autologin* option, you will be logged in to an **X11/Xorg** session, not **Wayland**, we chose that for compatibility with legacy hardware nothing more.

You can still switch to *Wayland* post-install either via KDE's **SDDM** settings or the included toolkit, choice is yours. I recommend toolkit as system settings tend to be buggy.

<p align="center">
    <img src="https://i.imgur.com/QsLRWtG.png" alt="rice">
</p>

Anyway, the installer is and will always function in offline mode, meaning that while no actual Internet connection is required during install, it's highly recommended you do have one in order to be able to update later on.

## XeroLinux Toolkit

I highly recommend using the toolkit (the first icon on the dock) to streamline your initial setup experience. It was designed to make the process much smoother and more pleasant. Keep in mind, however, that it's not meant to handle everything for you, just the essentials.

For more info about it check the [**Wiki**](https://wiki.xerolinux.xyz/xlapit/){:target="_blank"}

<p align="center">
    <img src="https://i.imgur.com/yym6CPo.png" alt="rice">
</p>

## Supported Filesystems

Also, the currently supported **Filesystems** are, `ext4`, `btrfs` and `xfs`. I don't know much about `btrfs` so I will try my best to help there, just do not expect me to have all the answers regarding it, sorry. 

Additionally, `xfs` has a minor issue where it will show a very quick error message before `Grub` appears, I have no clue how to fix that, if you do please do let me know. Working together to squash bugs would allow me to do so at a much quicker pace.

## GUI Package Managers

Additionally, I'd like to point out that no *GUI package managers* are included by default, as I believe in giving you the freedom to choose the one that suits your workflow best. Through the provided toolkit, you can select from **Octopi**, **PacSeekTUI**, or **Bauh**. That said, I strongly advise against installing KDE's **Discover** if you're aiming for stability; it's notoriously troublesome. But, as always, the final decision is yours.

## ISO Differences

The **KDE Plasma** version is and always will be the main edition. I call it the **Flagship** simply because  it's the DE I love and contribute to the most. It can be unstable at times however, since it's constantly evolving and keeps getting new features non stop making the most customizable/riceable DE out there. That's why I love it so much. So it's targeted to anyone who likes that sort of stuff and don't mind a few bugs here n there...

<p align="center">
  <img width="360" src="https://i.imgur.com/X0tqq1R.jpeg">  <img width="360" src="https://i.imgur.com/QiB1mxk.jpeg">
</p>

As of February 2025, a new **Gnome** Dev-Spin has been added to the mix. The key differences between it and the **KDE Flagship** is that it's more oriented to those of you who do not game much, and prefer to have a stable system that stays out of your way while you do your work. 

Additionally, we have avoided *ricing* it, e.g: no custom theme was used, following the **Gnome Guidelines**. All we did was use the Accent color feature to enable the Purple colors, and for consistency, we applied the **Tela Circle Purple** icon theme, while including just enough extensions & **GhosTTY** terminal (soon to be replaced with [**Ptyxis**](https://gitlab.gnome.org/chergert/ptyxis)), making it more functional.

**Gnome Note :** 

> I highly recommend against installing too many extensions if you want to keep your system stable. Also, please avoid using any themes, as they might cause overall issues since the Gnome devs do not like it when you do. In the end it's all up to you. You have been warned ;)

## Hybrid/Dual GPUs

Although **XeroLinux** now supports Hybrid laptops with both integrated (iGPU) and dedicated graphic cards (dGPU), they can be a bit tricky, as there's no one-size-fits-all solution. The idea behind this setup is to save battery life and keep things cool, so the dGPU isn’t meant to do all the heavy lifting all the time.

We’re keeping it simple by providing the essential drivers to help everything run smoothly, without any extra tools. But if you love tinkering and want to explore other options, go for it! The beauty of open-source software is that you have the freedom to customize your experience. So dive in, have fun, and make your laptop uniquely yours!

## Get new features

If you already are on **XeroLinux**, any version, all you have to do, to get new changes in, is to run option **Apply latest XeroLinux specific changes/updates.** under 1st option in the toolkit. That way you do not need to grab new ISO n reinstall to get them. As shown in image below...

<p align="center">
    <img width="750" src="https://i.imgur.com/Ok6Re2z.png" alt="xlapit">
</p>

No need to run this all the time. Just once every new ISO release, if and when I announce new features. Usually it's just updated packages. To know more, you can either follow updates on **Discord** or on [**Fosstodon**](https://fosstodon.org/@XeroLinux){:target="_blank"}. 

## Support/Issues

If you encounter any *other* issues or have questions directly related to the installation, feel free to reach out to me on **Fosstodon** or **Discord**. Please do not ask ok **Ko-Fi**. All relevant links are provided in the footer, and I'll do my best to assist you.

<p align="center">
    <img src="https://i.imgur.com/6qyA6nM.jpeg" alt="rice">
</p>

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or our custom **ChatGPT A.I.** available on **Discord**.

As for any **KDE** or **GNOME** related issues, you are kindly requested to report them over on the [**KDE Bugtracker**](https://bugs.kde.org){:target="_blank"} & [**GNOME BugZilla**](https://gitlab.gnome.org/GNOME){:target="_blank"}.

That's it, there ain't much to it. The rest is in your hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Just don’t blame me if you get lost in the endless sea of tweaks and options 🎉
