---
title: The XeroLinux Distro
tags:
  - Linux
  - Distro
---

<h2 align="center">.//💿 The XeroLinux Distro 💿\\.</h2>

!!! note

    Check out the release notes and issues » [**Here**](https://github.com/XeroLinuxDev/xero-build/#-release-notes-){:target="_blank"}. To access source code, head on over to the » [**XeroLinuxDev Org**](https://github.com/XeroLinuxDev){:target="_blank"}.

### Thank you

Before we begin, I would like to tell everyone of you who has supported the **XeroLinux** project by either getting the ISO or some merch, how much your simple act of kindness means to me. I cannot put it into words. So all am gonna say is God bless you all. I hope your kindness is reciprocated. 🙏❤️

In case you haven't gotten your copy yet, check out how to » [**Here**](https://ko-fi.com/s/cf9def9630){:target="_blank"}.

### Information

This is the famous **XeroLinux Distro**. It's a culmination of everything you see here, like the **Xero Toolkit**, The **Plasma Install Script** & the **Xero Layan Rice**. All combined as an easy to install **Arch+KDE** Distro.

![type:video](https://www.youtube.com/embed/lsYg6-wUWXw)

### Is it any Special?

This is a common question I get. To be honest, there’s no groundbreaking advantage—it simply provides an easier way to install Arch with a polished KDE experience right out of the box, which many users seem to appreciate. I created it specifically for them, as an alternative to my DIY install script, and as a way for you to support my journey.

---

<h1 align="center">.// The Wiki \\.</h1>

## Installation

!!! warning

    When it comes to **Encryption**, I haven't tested it thoroughly. Use at your own Risk! **Calamares** is meh when it comes to that. All I know is it's extremely limited. It can't ecrypt both `boot` n `root`, just one or the other. Am sorry I test what I can. Please report any findings to me on [**Discord**](https://discord.gg/HPkEc38AcB){:target="_blank"}.

To install the distro, all you have to do is use the tried and true [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to put ISO on & boot, that way you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

<p align="center">
    <img src="https://i.imgur.com/QsLRWtG.png" alt="rice">
</p>

[**Calamares**](https://github.com/calamares/calamares){:target="_blank"} will auto-launch on boot. Just go through the motions and when you get to the user creation page, if you select the *Autologin* option, you will be logged in to an **X11/Xorg** session, not **Wayland**, we chose that for compatibility with legacy hardware nothing more. Yes you can still switch to *Wayland* post-install, just use the toolkit, it's under option **7. System Troubleshooting & Tweaks >> 6. Change Autologin Session X11/Wayland (SDDM)**.

<p align="center">
    <img src="https://i.imgur.com/yym6CPo.png" alt="rice">
</p>

Anyway, the installer is and will always function in offline mode, meaning that while no actual Internet connection is required during install, it's highly recommended you do have one in order to be able to update later on. Also, the currently supported **Filesystems** are, `ext4`, `btrfs` and `xfs`. I don't know much about `btrfs` so I will try my best to help there, just do not expect me to have all the answers regarding it, sorry.

We have also had no choice but to disable the **Swap+/-Hibernate** options due to an ongoing issue with latest version of **Calamares**. Will be re-added at some point in the future. Until then you can still use **Swap File** only if you have *8GB* or less RAM otherwise it would be a waste of space.

That's it, there ain't much to it. Launch our toolkit from the dock, update system first, and have fun shaping the distro to your liking...
