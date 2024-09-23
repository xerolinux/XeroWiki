---
title: The XeroLinux Distro
tags:
  - Linux
  - Distro
  - XeroLinux
---

# <h2 align="center">💿 XeroLinux Distro 💿</h2>

!!! note

    Check out the release notes and issues » [**Here**](https://github.com/XeroLinuxDev/xero-build/#-release-notes-){:target="_blank"}. To access source code, head on over to the » [**XeroLinuxDev Org**](https://github.com/XeroLinuxDev){:target="_blank"}. To know more about the Distro it's all explained on the [**Main Site**](https://xerolinux.xyz/iso/){:target="_blank"}

### Thank you

Before we begin, I would like to tell everyone of you who has supported the **XeroLinux** project by either getting the ISO or some merch, how much your simple act of kindness means to me. I cannot put it into words. So all am gonna say is God bless you all. I hope your kindness is reciprocated. 🙏❤️

In case you haven't gotten your copy yet, check out how to » [**Here**](https://ko-fi.com/s/cf9def9630){:target="_blank"}.

---

<h1 align="center">.// The Wiki \\.</h1>

## Installation

!!! warning

    When it comes to **Encryption**, I haven't tested it thoroughly. Use at your own Risk! **Calamares** is meh when it comes to that. All I know is it's extremely limited. It can't ecrypt both `boot` n `root`, just one or the other. Am sorry I test what I can. Please report any findings to me on [**Discord**](https://discord.gg/HPkEc38AcB){:target="_blank"}.

Before we dive in, it's important to note that **XeroLinux** features **KDE Plasma**, a powerful and feature-rich desktop environment. While it’s designed to run on a variety of systems, for the best experience, we recommend mid-range or higher hardware. That said, it can work on low-end hardware, but performance may be less than optimal. Check the requirements below for more details!

**Minimum**

- 4GB RAM (DDR3+)
- 16GB HDD/SSD Storage
- Modern iGPU (512MB vRAM)

**Recommended**

- 8GB+ RAM (DDR3+)
- 32GB+ HDD/SSD Storage
- Modern dGPU (4GB+ vRAM)

**Bootable Tool**

To boot into the Distro's Live Environment, all you have to do is use the tried and true [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to put ISO on & boot, that way you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

**Calamares Installer**

<p align="center">
    <img src="https://i.imgur.com/QsLRWtG.png" alt="rice">
</p>

[**Calamares**](https://github.com/calamares/calamares){:target="_blank"} will auto-launch on boot. Just go through the motions and when you get to the user creation page, if you select the *Autologin* option, you will be logged in to an **X11/Xorg** session, not **Wayland**, we chose that for compatibility with legacy hardware nothing more.

Anyway, the installer is and will always function in offline mode, meaning that while no actual Internet connection is required during install, it's highly recommended you do have one in order to be able to update later on.

**XeroLinux Toolkit**

You can still switch to *Wayland* post-install, just use the toolkit, it's under option **System Troubleshooting & Tweaks >> Change Autologin Session X11/Wayland (SDDM)** and select *Wayland*, reboot, done.

<p align="center">
    <img src="https://i.imgur.com/yym6CPo.png" alt="rice">
</p>

**Included Filesystems**

Also, the currently supported **Filesystems** are, `ext4`, `btrfs` and `xfs`. I don't know much about `btrfs` so I will try my best to help there, just do not expect me to have all the answers regarding it, sorry.

## Complications

We have had no choice but to disable the **Swap+/-Hibernate** options due to an ongoing issue with latest version of **Calamares**. Will be re-added at some point in the future. Until then you can still use **Swap File** only if you have *8GB* or less RAM otherwise it would be a waste of space.

If you encounter any *other* issues or have questions directly related to the installation, feel free to reach out to me on **Fosstodon** or **Discord**. All relevant links are provided in the footer, and I'll do my best to assist you.

<p align="center">
    <img src="https://i.imgur.com/6qyA6nM.jpeg" alt="rice">
</p>

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or our custom **ChatGPT A.I.** available on **Discord**.

That's it, there ain't much to it. The rest is in your hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Just don’t blame me if you get lost in the endless sea of tweaks and options 🎉
