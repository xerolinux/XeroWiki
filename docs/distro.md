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

### Information

This is the famous **XeroLinux Distro**. It's a culmination of everything you see here, like the **Xero Toolkit**, The **Plasma Install Script** & the **Xero Layan Rice**. All combined as an easy to install **Arch+KDE** Distro.

![type:video](https://www.youtube.com/embed/lsYg6-wUWXw)

### Is it any Special?

This is a common question I get. To be honest, there’s no groundbreaking advantage—it simply provides an easier way to install Arch with a polished KDE experience right out of the box, which many users seem to appreciate. I created it specifically for them, as an alternative to my DIY install script, and as a way for you to support my journey.

Users are free to prefer any other distro over mine. I am not and will never force it. Also, I have never pretended that XeroLinux is better than any other distro. It's never been a competition, and I would hate for people to think it was. I hope this clarifies things.

---

<h1 align="center">.// The Wiki \\.</h1>

## Installation

To install the distro, all you have to do is use [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to boot, so you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

<p align="center">
    <img src="https://i.imgur.com/QsLRWtG.png" alt="rice">
</p>

[**Calamares**](https://github.com/calamares/calamares){:target="_blank"} will auto-launch on boot. If you select the *Autologin* option in the installer you will be logged in to **X11** not **Wayland**, again we chose that for compatibility nothing more.

Anyway the installer is and will always function in offline mode, meaning that, while no actual Internet connection is required during install, it's highly recommended you do have one in order to be able to update later on.

We have also had no choice but to disable the **Swap+/-Hibernate** options due to an ongoing issue with latest version of **Calamares**. Will be re-added at some point in the future. Until then you can still use **Swap File** in only if you have *8GB* or less RAM otherwise it would be a waste of space.

That's it, there ain't much to it. Launch our toolkit from the dock, update system, and have fun shaping the distro to your liking...
