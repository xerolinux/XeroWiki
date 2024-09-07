---
title: XeroLinux Plasma-Install
tags:
  - Linux
  - Plasma
  - XeroLinux
  - ArchLinux
---

<h2 align="center">.//💻 The Plasma-Install Script 💻\\.</h2>

### What it is

With the help of this script, you will be able to install **Plasma** in one of 4 methods as you can see in the image below. Not only that, but it will also fix **PipeWire** and **Bluetooth**.

<p align="center">
    <img src="https://i.imgur.com/TOZNp4j.png" alt="shot">
</p>

This script has an option to include my repo, **Chaotic-AUR**'s & Toolkit. Toolkit also includes the option to apply my rice. So if you opt to include it, you do not need to get other projects/tools separately. It’s meant as an All-in-One solution.

---

<h1 align="center">.// The Wiki \\.</h1>

!!! tip

    For a full in-depth guide with a video included, feel free to check it out on our [**Official Site**](https://xerolinux.xyz/news/xerolinux-plasma/){:target="_blank"} where we go over each step in detail.

### How To Use :

First off, you will need to download the latest [**Arch ISO**](https://archlinux.org/download/){:target="_blank"}, boot it, and follow the steps below...

**- Step 1:**
Grab the latest version of **ArchInstall** script

```Bash
pacman -Syy archinstall
```

**- Step 2:**
Run the **ArchInstall** guided setup via the command below

```Bash
archinstall --advanced
```

**- Step 3:**
Please go through the motions skipping the **Profiles** and **Additional Packages** steps ignoring them completely, don't forget to set parallel downloads to as many as you want for faster downloads. Oh and skip GPU Drivers, since you will be able to do that and more via my toolkit which will be offered during install, and select **NetworkManager** for your network (It will be installed by this script anyway).

!!! warning

    This guide expects you to be connected to the internet via ethernet. If you aren’t and need to connect over WiFi, you can follow the guide on the [**ArchWiki**](https://wiki.archlinux.org/title/Installation_guide#Connect_to_the_internet){:target="_blank"}

Finally, select install, and let it do its thing, won't take long as it will just install basic packages nothing too big. Once it's done, it will prompt you if you want to **chroot** into your installed system, select yes since you don't have **Plasma** installed yet...

**- Step 4:**

!!! note

    Don't just run the script, without inspecting it first. So before using _Curl_ command you can examine it => [**HERE**](https://raw.githubusercontent.com/xerolinux/xero-plasma/main/xero-plasma.sh){:target="_blank"}

Now is the time to run my script. To do so, type the below command in the terminal, hit enter, and have fun...

```Bash
bash -c "$(curl -fsSL https://tinyurl.com/PlasmaInstall)"
```

Just follow the onscreen prompts. I would highly recommend the *Curated KDE Install*, but you can choose whihever method you want. It's all up to you. Accepting the inclusion of **Toolkit** will add not only my repo, but the **Chaotic-AUR** one too for portions of it to work.

### Report Issues

To report any issues or suggest quality-of-life modifications to the script please feel free to do so on the [**Issues**](https://github.com/xerolinux/xero-plasma/issues){:target="_blank"} page. Otherwise, I won't be able to get to them fast enough or at all. Thanks.

Enjoy ;)

