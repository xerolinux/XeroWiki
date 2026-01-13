---
title: Xero Arch Installer
tags:
  - Linux
  - Boot
  - Script
  - XeroInstall
---

<h1 align="center">🎨 Xero Arch Installer 🎨</h1>
<h2 align="center">Project is currently in Alpha Stages. Testers Needed !</h2>

!!! info

    This script was created for Vanilla Arch & ArchISO and not meant to be used on top of any other Distro. It's to be used for a fresh install. Will format full disk, no manual partioning is offered yet. Also it's to be used only if you know what you are doing, no help/support will be provided. **USE AT YOUR OWN RISK !**

<p align="center">
    <img src="https://i.imgur.com/vl5hMAF.png" alt="preview">
</p>

### What is this

This is a clean, streamlined Arch Linux installer I built with a modern, fairly easy to use [**TUI**](https://en.wikipedia.org/wiki/Text-based_user_interface){:target="_blank"}. The idea was inspired by [**ArchInstall**](https://github.com/archlinux/archinstall){:target="_blank"}. I always liked that approach, but between maintaining the distro and everything else, I never had the time to build something similar myself.

As **XeroLinux** stands today, it’s missing two important features: **BTRFS with Compression** and **Encryption**. I wanted to include both, but [**Calamares](https://codeberg.org/Calamares/calamares){:target="_blank"} really does not play nicely with those setups. Add to that the lack of proper documentation, and I simply had no reliable way to implement them without things breaking. Until someone with deeper **Calamares** knowledge comes along, those features have to stay on hold.

That’s where this script comes in. It lets you install **Arch Linux** from scratch, while guiding you step by step through the entire process. At the end, you’ll have **XeroLinux**. Yes, some people have complained about the distro being *paywalled*, so this is a way to get it *free of charge*. All you need is a basic understanding of your hardware and the ability to answer a few prompts along the way. Nothing more, nothing less.
    
### TUI Features

- 🎨 **Beautiful TUI** - Modern interface using `gum` for clean menus
- 💾 **Flexible Disk Setup** - Support for BTRFS (with subvolumes), EXT4, XFS
- 🔒 **LUKS Encryption** - Optional full disk encryption
- 🎮 **Graphics Drivers** - Easy selection for NVIDIA, AMD, Intel, or VMs
- 🔄 **Smart Swap** - ZRAM with compression or traditional swap file
- 🚀 **Automated KDE Setup** - Runs XeroLinux KDE installer.

Since this is currently in *Alpha* stages, we do need people willing to help test it, in order to get a stable final product. So if you are interested, please join our [**Discord Server**](https://discord.xerolinux.xyz){:target="_blank"} and ping me so get you the info you need. No links will be provided here until it's ready for production.

---

<h1 align="center">.// Screenshots \\.</h1>

<p align="center">
  <a href="https://i.imgur.com/sU7bHQL.png" target="_blank" rel="noopener">
    <img src="https://i.imgur.com/sU7bHQL.png" width="50%">
  </a>
  <a href="https://i.imgur.com/3MDVkOi.png" target="_blank" rel="noopener">
    <img src="https://i.imgur.com/3MDVkOi.png" width="50%">
  </a>
</p>

### Wrapping up

At the end of the day, this is about giving people options. If you enjoy learning, like knowing what’s happening under the hood, and want full control over your system, this installer is for you. It takes a bit more attention than a one click setup, but that’s also where the fun is.

This project is still evolving, and like everything in the Arch world, it’s a journey rather than a finished product. Feedback, testing, and constructive ideas are always welcome. If it helps you get a clean, solid XeroLinux system up and running, then it’s already doing its job.

Be G33ky & Enjoy 🤓
