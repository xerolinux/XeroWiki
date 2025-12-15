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

### Thank you

Before we begin, I would like to tell everyone of you who has supported the **XeroLinux** project by either getting the ISO or some merch, how much your simple act of kindness means to me. I cannot put it into words. So all am gonna say is God bless you all. I hope your kindness is reciprocated. 🙏❤️

<p align="center">
    <img src="https://i.imgur.com/ejZ1ZQv.png" alt="rice">
</p>

### Free Demo

!!! warning

    Please do **NOT** under any circumstances attempt to use the **Demo** with *Persistent Ventoy*. You will only be hurting yourselves as it will not be a good experience, many features were left out for full ISO. If you do and ask for help you *Will* be ignored. 

A *Demo* ISO is available *now*, **free** of charge for testing purposes only, since it comes without an installer and *cow-space* is pretty limited (100MiB), so you won’t be able to update or install big packages. It's just for testing, so don’t try updating, it won’t work because of the space limit.

Finally, since Live Environment is not persistent, installing anything that requires a reboot, like Drivers is therefore impossible, keep that in mind before attempting to do so.

All this is great for checking out what the distro has to offer and experimenting with the setup before donating for full version. A solid way to tinker, see the tweaks in action, and dive into the details without any commitment.

Satisfied ? You can take the plunge and donate for a copy » [**Here**](https://ko-fi.com/xerolinux/shop){:target="_blank"} or [**Here**](https://iso.xerolinux.xyz/crypto.html){:target="_blank"}.

---

<h1 align="center">.// The Wiki \\.</h1>

<h2 align="center">📀 <strong>New nVidia ISO Added</strong> 📀</h2>
<h4 align="center">Always update & Reboot post-install before using the Distro.</h4>

## Installation

Before we dive in, it's important to note that **XeroLinux** features **KDE Plasma** a powerful and distinct desktop environment. While it was designed to run on a variety of systems, for the best experience, we recommend mid-range or higher hardware. That said, they can work on low-end hardware, but performance may be less than optimal.

## nVidia ISO Split

We have decided to split **XeroLinux** into two ISOs because the GPU world has become a bit of a circus. **nVidia** decided to retire the old *900* and *1000* series cards from the modern driver lineup, which means only shiny new RTX cards get the “VIP treatment” from the latest open drivers. Instead of forcing everyone into a one-size-fits-nobody installer, we created a dedicated **nVidia** ISO built specifically for **RTX** users, and a Standard ISO that keeps **Intel** and **AMD** systems happy.

While it’s sad to see those legendary older cards ride off into the sunset, this split actually gives everyone a smoother experience. Each ISO now does exactly what it’s meant to do, with fewer surprises, fewer black screens, and a whole lot more reliability. It’s our way of turning an unfortunate driver situation into something cleaner, clearer, and friendlier for the entire **XeroLinux** community.

## GPU Swap Detection

**XeroLinux** now includes a small background service that quietly checks which graphics hardware is inside your computer. It does this by reading standard system information (the same information shown by tools like “About This System”). When it notices that the hardware has changed, for example, if you install an **nVidia** card or remove one, it records the change and shows a popup notification in **Plasma**. Nothing runs unless something actually changes.

When you choose to continue, **XeroLinux** opens an easy-to-use tool that installs or removes the correct graphics drivers based on your current hardware. The tool updates system components like the boot configuration and kernel modules automatically, ensuring everything loads correctly on the next restart. This approach supports **Intel**, **AMD**, **nVIdia**, and hybrid setups, and it does so in a way that’s transparent, predictable, and safe for all users.

## Legacy Systems

Please avoid booting ISO on on old-school computers that use legacy **BIOS/MBR**. It only works on newer setups with **EFI/UEFI** — Legacy Boot will be removed soon !

If you’re not sure what that means, just read [**This Article**](https://www.macrium.com/blog/understanding-mbr-bios-and-gpt-uefi){:target="_blank"} and check if your PC supports **UEFI**. If it doesn’t, don’t sweat it, just pick a distro made for older hardware instead. Easy as that!

## Bootable Tool

To boot into the Distro's Live Environment, all you have to do is use the tried and true [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"} to put ISO on & boot, that way you have **Grub** as fallback in case **SystemD-Boot** fails. If you burn using **Etcher** or similar tools there will be nothing to fall back to. Just an FYI.

<p align="center">
    <img src="https://i.imgur.com/LTVLXo3.png" alt="rice">
</p>

## X11 is no more

We have moved completely to **Wayland** on XeroLinux. If you still rely on **X11**, please use the toolkit to re-enable it. That is a major shift by the Plasma Team, they split **X11** & **Wayland** packages.

## Calamares Installer

**XeroLinux**, like many other distros uses the [**Calamares**](https://codeberg.org/Calamares/calamares){:target="_blank"} installer. 

<p align="center">
    <img src="https://i.imgur.com/8f0b3NI.png" alt="netinstall">
</p>

With this release, we have decided to re-enable the **NetInstall** module, allowing you to select what packages/apps you want out of the box. Keep in mind that the included **Flakon** browser on the Live Environment, will be removed during install, replaced with the one you selected from that module. One very important thing to note here, the more packages you select the longer the install will take, especially if your Internet connection is as slow as mine here in Leb lol.

<!--## XeroLinux Toolkit

I highly recommend using the toolkit (the first icon on the dock) to streamline your initial setup experience. It was designed to make the process much smoother and more pleasant. Keep in mind, however, that it's not meant to handle everything for you, just the essentials.

For more info about it check the [**Wiki**](https://wiki.xerolinux.xyz/xlapit/){:target="_blank"}

<p align="center">
    <img src="https://i.imgur.com/yym6CPo.png" alt="rice">
</p>-->

## Fingerprint GUI Tool

A new fingerprint GUI tool was created in-house for **XeroLinux**. Easy to use. Will be included starting December 2025 release. 

<p align="center">
    <img src="https://i.imgur.com/WUGMuLk.png" alt="rice">
</p>

> Note : Polkit (GUI) *might* continue to prompt for password, just swipe your finger and it will authenticate. Terminal works. As for SDDM and more info [**Click Here**](https://xerolinux.xyz/posts/xero-fingerprint/){:target="_blank"}.

## Supported Filesystems

Also, the currently supported **Filesystems** are, `ext4` and `xfs`. We have removed **BTRFS** from the choice of filesystems due to unforeseen issues with it failing to create volumes. Might bring it back later on down the line.

## GUI Package Managers

Additionally, I'd like to point out that no *GUI package managers* are included by default, as I believe in giving you the freedom to choose the one that suits your workflow best. Through the provided toolkit, you can select from **Octopi**, **Bauh** or **Bazaar**. That said, I strongly advise against installing KDE's **Discover** if you're aiming for stability; it's notoriously troublesome. But, as always, the final decision is yours.

## Issues/Fixes

If at any moment while using it, you get the `unkown key "%INSTALL_DB%" in local database` issue during update, please run the following command in terminal :

```Bash
sudo find /var/lib/pacman/local/ -type f -name "desc" -exec sed -i '/^%INSTALLED_DB%$/,+2d' {} \;
```

That's it. Hopefully nothing else exists.

## Support/Issues

If you encounter any *other* issues or have questions directly related to the installation, feel free to reach out to me on **Fosstodon** or **Discord**. Please do not ask ok **Ko-Fi**. All relevant links are provided in the footer, and I'll do my best to assist you.

<p align="center">
    <img src="https://i.imgur.com/6qyA6nM.jpeg" alt="rice">
</p>

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or on **Discord**. As for release changelog, you can find this [**Here**](https://github.com/XeroLinuxDev/xero-build/blob/main/Changelog.md){:target="_blank"}.

That's it, there ain't much to it. The rest is in your hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Just don’t blame me if you get lost in the endless sea of tweaks and options 🎉
