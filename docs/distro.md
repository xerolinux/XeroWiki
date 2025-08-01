---
title: The XeroLinux Distro
tags:
  - Linux
  - Distro
  - XeroLinux
---

<h1 align="center">💿 XeroLinux Distro 💿</h1>

<p align="center" style="font-size: 1.0em; color: #ca54ca;">
  🐧<strong>Info Build Status<em>(Not ISOs)</em></strong>🐧
</p>
<div id="live-build-commit" style="text-align: center; font-size: 0.96em;">
  Loading latest commit info...
</div>

!!! info

    In a nutshell, the **XeroLinux** ISO bundles all my scripts, toolkit, and custom rice into a seamless, easy-to-install package, skipping the hassle of running the ArchInstall script entirely. No more, no less. [**Source Code**](https://github.com/XeroLinuxDev/xero-build){:target="_blank"}.

### Thank you

Before we begin, I would like to tell everyone of you who has supported the **XeroLinux** project by either getting the ISO or some merch, how much your simple act of kindness means to me. I cannot put it into words. So all am gonna say is God bless you all. I hope your kindness is reciprocated. 🙏❤️

<p align="center">
    <img src="https://i.imgur.com/ejZ1ZQv.png" alt="rice">
</p>

### Free Demo ISOs

These *Demo* ISOs available *now*, **free** of charge are for testing purposes only, since they come without an installer and *cow-space* is pretty limited (100MiB), so you won’t be able to update or install big packages. They’re just for testing, so don’t try updating, it won’t work because of the space limit.

Finally, since Live Environment is not persistent, installing anything that requires a reboot, like Drivers is therefore impossible, keep that in mind before attempting to do so.

All this is great for checking out what the distro can do and experimenting with the setup before making a donation. A solid way to tinker, see the tweaks in action, and dive into the details without any commitment.

Satisfied ? You can take the plunge and donate for a copy » [**Here**](https://ko-fi.com/xerolinux/shop){:target="_blank"}.

---

<h1 align="center">.// The Wiki \\.</h1>

<h2 align="center">⚠️ <strong>nVidia "Nouveau" Blacklisted.</strong> ⚠️</h2>
<h4 align="center">Always update & Reboot post-install before using the Distro.</h4>

!!! warning

    The "*nouveau*" Open Source Kernel Driver, used to boot the ISO(s), currently does not have support for the new 50 Series nVidia cards. This only affects the **Gnome Spin**. On the **KDE Flagship** we have blacklisted it so it might still work. For a non-exhaustive list of currently supported **nVidia** GPUs, please click [**Here**](https://nouveau.freedesktop.org/CodeNames.html){:target="_blank"} or [**Here**](https://nouveau.freedesktop.org/FeatureMatrix.html){:target="_blank"}.

## Installation

Before we dive in, it's important to note that **XeroLinux** features **KDE Plasma** & **GNOME**, two powerful and distinct desktop environments. While they were designed to run on a variety of systems, for the best experience, we recommend mid-range or higher hardware. That said, they can work on low-end hardware, but performance may be less than optimal.

**Quick heads up for anyone new here:**

This distro won’t work on old-school computers that use legacy **BIOS/MBR**. It only runs on newer setups with **EFI/UEFI** — that’s the modern way computers start up. 

If you’re not sure what that means, just read [**This Article**](https://www.macrium.com/blog/understanding-mbr-bios-and-gpt-uefi){:target="_blank"} and check if your PC supports **UEFI**. If it doesn’t, don’t sweat it, just pick a distro made for older hardware instead. Easy as that! 

> Note : If at any moment while using it, you get the `unkown key "%INSTALL_DB%" in local database` issue during update, please run the following command in terminal :

```Bash
sudo find /var/lib/pacman/local/ -type f -name "desc" -exec sed -i '/^%INSTALLED_DB%$/,+2d' {} \;
```

## Bootable Tool

To boot into the Distro's Live Environment, all you have to do is use the tried and true [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to put ISO on & boot, that way you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

<p align="center">
    <img src="https://i.imgur.com/LTVLXo3.png" alt="rice">
</p>

## Nouveau Wayland

Due to an ongoing issue with *nouveau+wayland* on **nVidia** GPUs causing CPU to be pegged at 100% we’ve temporarily disabled the *"nouveau"* driver by default on the **KDE Flagship**, so if you’re using multiple monitors, only one will work and performance may be limited. 

To get the best experience, please make sure to 1) update your system, 2) install the GPU drivers using the included toolkit, and then 3) reboot your computer, in that exact order. Following these steps will ensure you can fully benefit from your setup.

This *might* have also fixed support for the *50 Series* **nVidia** GPUs, I do not know. Test it and report back. This does not apply to the **Gnome Spin** which still uses *"nouveau"* to boot. So if you want to use it, it might not boot on the aforementioned GPUs. Again report.

We apologize for any inconvenience.

## X11 is no more

We have moved completely to **Wayland** on the flagship, as we have on the **Gnome Dev Spin**. If you still rely on **X11**, please use the toolkit to re-enable it. That is a major shift by the Plasma Team, they split **X11** & **Wayland** packages.

<p align="center">
    <img src="https://i.imgur.com/FeBe8gQ.png" alt="X11">
</p>

## Calamares Installer

The [**Calamares**](https://codeberg.org/Calamares/calamares){:target="_blank"} installer will auto start. 

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

Also, the currently supported **Filesystems** are, `ext4` and `xfs`. As of **June 2025** we have removed **BTRFS** from the choice of filesystems due to unforeseen issues with it failing to create volumes. Might bring it back later on down the line.

If you are planning on using the **Manual Partitioning** option however, **BTRFS** will still show up as an option, can't disable it from there. **PLEASE IGNORE IT !!**

## GUI Package Managers

Additionally, I'd like to point out that no *GUI package managers* are included by default, as I believe in giving you the freedom to choose the one that suits your workflow best. Through the provided toolkit, you can select from **Octopi**, **PacSeekTUI**, or **Bauh**. That said, I strongly advise against installing KDE's **Discover** if you're aiming for stability; it's notoriously troublesome. But, as always, the final decision is yours.

## Hybrid/Dual GPUs

Although **XeroLinux** now supports Hybrid laptops with both integrated (iGPU) and dedicated graphic cards (dGPU), they can be a bit tricky, as there's no one-size-fits-all solution. The idea behind this setup is to save battery life and keep things cool, so the dGPU isn’t meant to do all the heavy lifting all the time.

Just in case you *do* encounter the dreaded **Black Screen of Doom** after an update, remember we ship `downgrade` package, so take full advantage of it and revert back to last known working version of your GPU driver, be it **nVidia** or **mesa** (AMD/Intel).

We’re keeping it simple by providing the essential drivers to help everything run smoothly, without any extra tools. But if you love tinkering and want to explore other options, go for it! The beauty of open-source software is that you have the freedom to customize your experience. So dive in, have fun, and make your laptop uniquely yours!

## FAQ & Answers

> Q : Theming broke after update how do I get it back ?

A : That happens from time to time due to system changes. Just launch toolkit from the dock, option `7` for service then `s` to reset. This will reset to out of box settings, so only do it after fresh install/update. If it happens after you changed things just re-apply theme/icon pack and you should be good to go.

> Q : Why not include **nVidia** GPU Drivers on the ISO ?

A : Simply because we can only include one, limits device support, post-install covers a wider range of configs.

> Q : Why not add a Window Manager like **Hyprland** ?

A : We did ! However not as an ISO but in post-install script form  ==> [**Here**](https://wiki.xerolinux.xyz/hyprxero/){:target="_blank"}

> Q : Why not include a well-known browser like **Firefox** or **LibreWolf** ?

A : This was covered on a separate post ==> [**Here**](https://xerolinux.xyz/updates/browser-situation/){:target="_blank"}

> Q : What if I cannot afford to donate, how can I get **XeroLinux** ?

A : You can convert Vanilla Arch with either **Gnome** or **KDE Plasma** to *mimic* the distro ==> [**Here**](https://xerolinux.xyz/posts/vanilla-to-xero/){:target="_blank"}

> Q : I dislike the way **ArchInstall** installs some DEs is there a better way to install them ?

A : Yep, we have written a script that installs any of **Gnome**, **KDE Plasma**, **XFCE**, **Hyprland** or even **Cosmic Alpha** ==> [**Here**](https://wiki.xerolinux.xyz/script/){:target="_blank"}

> Q : Why doesn't the Distro include more tools for Gaming, Production and so on out the box ?

A : Because while some of you might like our choices, others might not. That's why we prefer to leave the choice up to you. Plus it would keep the ISO size more manageable.

> Q : Can I request a feature or package to be added ?

A : Of course you can ! But keep in mind that it will require us to weigh the pros & cons of every feature or package before we agree to include them. It also depends on how useful they are. We reserve the right to accept or not. The decision is up to us. We want the Distro to remain stable and *bloat free*. The more we add the more variables we introduce that might break it for some. You can do so either [**Here**](https://fider.xerolinux.xyz){:target="_blank"} or on [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}.

> Q : Why isn't the Distro free of charge like the majority out there ?

A : We would love for it to be, but alas, it's currently the only way for it to survive the harsh reality we live in, especially that it's made in **Lebanon**, a war zone of sorts. Plus we need to pay for hosting, bandwidth, Internet and so on. But who knows what the future holds ? Maybe if things get better it will be free for everyone.

> Q : How can I/we contribute to the project ?

A : Glad you asked that. Very easy, you can do that in may ways. You can either donate n grab the ISO to test and report bugs directly to us on [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}, or on [**Github**](https://github.com/XeroLinuxDev/xero-build){:target="_blank"}. The more of you who do the better the distro will be. Without you, bugs might remain unseen & unfixed.

## Support/Issues

If you encounter any *other* issues or have questions directly related to the installation, feel free to reach out to me on **Fosstodon** or **Discord**. Please do not ask ok **Ko-Fi**. All relevant links are provided in the footer, and I'll do my best to assist you.

<p align="center">
    <img src="https://i.imgur.com/6qyA6nM.jpeg" alt="rice">
</p>

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or our custom **ChatGPT A.I.** available on **Discord**. As for release changelog, you can find this [**Here**](https://github.com/XeroLinuxDev/xero-build/blob/main/Changelog.md){:target="_blank"}.

That's it, there ain't much to it. The rest is in your hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Just don’t blame me if you get lost in the endless sea of tweaks and options 🎉
