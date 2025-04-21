---
title: Xero DE Install Script
tags:
  - Linux
  - Plasma
  - Gnome
  - XFCE
  - Hyprland
  - Cosmic
  - XeroLinux
  - ArchLinux
---
# <h2 align="center">💻 Xero D.E Install Script 💻</h2>

!!! note

    **Distro is Back** : If you want to skip all this, you can just *Donate* and grab the **XeroLinux** pre-built ISO(s) from 👉 [**Official Site**](https://xerolinux.xyz/){:target="_blank"}

### Script's Purpose

The whole reason it was created was to fix the badly implemented **ArchInstall** profiles which do not provide a solid enough base, while extending them further nothing more. For customizations and other stuff, please use the included toolkit found in the app menu/launcher.

<p align="center">
    <img src="https://i.imgur.com/B78htpV.png" alt="shot">
</p>

This script is subject to change over time, so please treat this guide as a general reference rather than an exact one. As updates and improvements are made, some steps or options may differ from what is shown. Keep that in mind while following along, and always refer to the most recent version for the best results.

Finally, before we begin, this script will **NOT** install a customized/riced version of the DEs keeping them *Vanilla*. It's all about the freedom of choice, leaving final setup up to you. I just included the tools you might need while taking care of all the dependencies, making it a little bit easier to setup your system.

---

<h1 align="center">.// The Wiki \\.</h1>

### Installation Guide

#### System Preparation

Let's start off by knowing what we need to get started. First off, we will need the latest version of the >> [**ArchLinux ISO**](https://archlinux.org/download/){:target="_blank"}, a USB stick to burn ISO onto, we can either use >> [**Balena Etcher**](https://etcher.balena.io/#download-etcher){:target="_blank"} or the highly recommended >> [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"}.

Those are the essentials. Let's begin...

#### Installing ArchLinux

Ok, so now that we have burned the ISO to the USB using either tools, boot the system we want to install it on using it. Am not gonna go through showing you how, you should know that by now lol.

<p align="center">
    <img src="https://i.imgur.com/RO64NWD.png" alt="shot">
</p>

**Note :**

!!! warning

    This guide expects you to be connected to the internet via ethernet. If you aren't and need to connect over WiFi, please follow guide on the [**ArchWiki**](https://wiki.archlinux.org/title/Installation_guide#Connect_to_the_internet){:target="_blank"}

- **Remote Install via SSH**

Now, unlike other guides out there, I will be showing how we can use **SSH** to do the installation remotely, which will make things much easier. All we need is a secondary PC running **Linux**. If none is available, this part can be skipped.

Ok, first things first, we need to set a password to the *root* user. We do it by typing the following command in the TTY, like this :

```Bash
passwd
```

Now we type our temporary password & confirm it. Once that's done, we need to get the machine's **IP Address**, we do that by running this command :

```Bash
ip a
```

Once we have it, all we need to do to connect to the machine is the following command :

```Bash
ssh root@ipaddress
```

We confirm by typing `yes`. That's it, now we are connected to the machine remotely, so we can now easily copy paste comands for a much simpler install...

- **ArchInstall Script**

Once connected, first thing we will have to do is, make sure we have latest version of **ArchInstall**. We do that by running the following command :

```Bash
pacman -Syy archinstall && archinstall --advanced
```

Now some of you might be asking me, "why the `--advanced` flag ?", to which I answer, simply because devs still hide the *parallel downloads* behind it for whatever reason. It's fine at least now you know.

Ok, now that we have the installer running, am not going to go through each and every option one by one, just the important ones. Those are explained in the video. Am also not gonna bother with *manual partitioning* since the guide is intended for single OS easy install.

That's why we will be using the **Best Guess** option, carefully selecting the correct drive we want install **ArchLinux** onto.

!!! warning

    **User Data** : I will not be held responsible for any data loss resulting from selection of the wrong drive. **BE VERY CAREFUL HERE**.

Anyway, let's make sure we skip the parts I mentioned in the video, like *Profiles*, *Drivers*, *Extra Packages* and *Extra Repos*, since everything will now be done **Post-Install** via my Toolkit. Don't forget to set parallel downloads to as many as you like for faster downloads. Also as mentioned, we do not need to enable any extra repos like *multilib* since my script will do that for us later on.

Now once everything is configured and set, hit install, sit back, grab a cup of Tea/Coffee and watch it do its thing. Might take a while it all depends on Internet connection...

#### The script

!!! tip

    **Inspection**. We do not recommend to blindly execute scripts without inspecting them first. Check out the code >> [**Multi-DE**](https://github.com/xerolinux/XeroHub/blob/main/content/script/xero-install.sh){:target="_blank"}.

We have combined older ones into a single *Multi-DE* installer since they were all similar. Easier for everyone. Thanks to [**SpiderPunkXL**](https://github.com/SpiderPunkXL){:target="_blank"} for the idea. Anyway, once that's all done, we will be prompted if we want to `chroot` into our new install, we answer with **NO**, reboot and loging with created user in TTY. 

<h3 align="center"><strong>MAKE SURE YOU ARE LOGGED IN WITH NEW CREDENTIALS NOT ROOT !</strong></h3>

<p align="center">

   <img src="https://i.imgur.com/esK1OAO.png" alt="shot">
</p>

!!! warning

    The script shared herein is a work-in-progress. **Cosmic** is still in Alpha stages. Please do not use it on your production machine. Either use in a VM (bad idea) or on a test machine, like a side laptop or something.

Once you trust it, you can move on. Now, depending on the method that was used, `ssh` or not, we either copy paste the command below or type it manually :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/xero-install.sh)"
```

**Hyprland/Cosmic VM Note :** 

If you want to test them inside a VM, please make sure you have 3D acceleration turned on in the VM or **VirtGL** in the case to **KVM** for best experience. Anyway, you will see such a message when selecting them via the script. They heavily rely on it due to all the effects and with them being **Wayland** only.. 

<p align="center">
    <img src="https://i.imgur.com/sIJsyD2.png" alt="shot">
</p>

#### Script logic

To start, the script includes the **XeroLinux** & **Chaotic-AUR** repos, to ease the pain when it comes to packages that come from the **A.U.R** (Arch User Repository), so less compiling for you, the end-user. It also will install the **XeroLinux Toolkit** making it easier to configure your system post-install.

I have written the script in such a way where it will check what distro it's being run on, blocking it from going any further if either a D.E is already installed, or if it's being run on anything other than a **Base Arch Install**. I did that to avoid any potential issues resulting in countless support tickes that would waste both your and my time. Better safe than sorry.

<p align="center">
    <img src="https://i.imgur.com/TjdY9fx.png" alt="shot">
</p>

Furthermore, I made sure that, during installation it would check if you are running it in a VM, if so it will install the relevant **Guest Drivers/Utils**. Not forgetting any of you who prefer to use a *Bootloader* other than **Grub**, where it will skip the part where it installs hooks and configs.

Lastly, all D.E specific packages represent a meticulously curated list of how I would install them. If you disagree with my choice and want more or less of them, you are free to copy my work, modify to work for your specific needs. FOSS is FOSS. I will never judge or stop you from doing so. On the contrary I would highly encourage you to do it. 

Now, installation might take a while, it all depends on the speed of your Internet connection. I have included quite a few quality-of-life packages which should make your experience as Seamless as possible.

#### System Config

If all went smoothly, we should now be greeted with the login page. Once logged in, open Terminal, and update the system. Done !

```Bash
sudo pacman -Syyu
```

Then we launch the **XeroLinux Post Installation Toolkit** from the App Launcher. That's it.

<p align="center">
    <img src="https://i.imgur.com/JuWceYE.png" alt="shot">
</p>

It's up to you to discover all the options. The whole point of this guide is how to get included DEs installed the right way while expanding them a little, not to set up the system from A to Z. For more info, check out the [**Toolkit Wiki**](https://wiki.xerolinux.xyz/xlapit/)

### Install Issues

If you encounter any issues or have questions directly related to these scripts, feel free to reach out to me on **Fosstodon** or **Discord**. All relevant links are provided in the footer, and I'll do my best to assist you.

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or our custom **ChatGPT A.I.** available on **Discord**.

### Final words

That’s it, boys and girls, we’ve successfully installed our system! 🎉 The rest is in your capable hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Who knows, you might even stumble upon something that’ll make your setup sing! Just don’t blame me if you get lost in the endless sea of tweaks and options, consider it part of the adventure.

😄 Happy tinkering! 😄
