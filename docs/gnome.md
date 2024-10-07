---
title: Gnome-Install Script
tags:
  - Linux
  - Gnome
  - XeroLinux
  - ArchLinux
---
# <h2 align="center">💻 Gnome-Install Script 💻</h2>

!!! warning

    **Vanilla Alert** : This script just installs *Vanilla Gnome* with some extra useful packages in 1 of 3 ways, **NOTHING MORE** !

### What this script is

The intention of the **GnomeInstall** script is *not* to replace **ArchInstall** but to fix its **Gnome** profile while extending it further nothing more. The Toolkit can be used on any DE or WM it's agnostic.

The script is subject to change over time, so please treat the video above as a general reference rather than an exact guide. As updates and improvements are made, some steps or options may differ from what is shown. Keep that in mind while following along, and always refer to the most recent version of this guide for the best results.

---

<h1 align="center">.// The Wiki \\.</h1>

In this super detailed guide I will be showing off how we can easily setup a more complete version of **Gnome**.

### The Guide

#### System Preparation

Let's start off by knowing what we need to get started. First off, we will need the latest version of the >> [**ArchLinux ISO**](https://archlinux.org/download/){:target="_blank"}, a USB stick to burn ISO onto, we can either use >> [**Balena Etcher**](https://etcher.balena.io/#download-etcher){:target="_blank"} or the highly recommended >> [**Ventoy**](https://xerolinux.xyz/posts/ventoy-multi-boot/){:target="_blank"}.

Those are the essentials. As to my **Gnome Install** script will get to that a bit later down the line. Once we got everything, we shall begin...

#### Installing ArchLinux

Ok, so now that we have burned the ISO to the USB using either tools, boot the system we want to install it on using it. Am not gonna go through showing you how, you should know that by now lol.

<p align="center">
    <img src="https://i.imgur.com/RO64NWD.png" alt="shot">
</p>

**Note :**

!!! warning

    This guide expects you to be connected to the internet via ethernet. If you aren't and need to connect over WiFi, you can follow guide on the [**ArchWiki**](https://wiki.archlinux.org/title/Installation_guide#Connect_to_the_internet){:target="_blank"}

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

<p align="center">
    <img src="https://i.imgur.com/OVzwVYt.png" alt="shot">
</p>

Ok, now that we have the installer running, am not going to go through each and every option one by one, just the important ones. Those are explained in the video. Am also not gonna bother with *manual partitioning* since the guide is intended for single OS easy install.

That's why we will be using the **Best Guess** option, carefully selecting the correct drive we want install **ArchLinux** onto.

!!! warning

    **User Data** : I will not be held responsible for any data loss resulting from selection of the wrong drive. **BE VERY CAREFUL HERE**.

Anyway, let's make sure we skip the parts I mentioned in the video, since everything will now be done **Post-Install** via my Toolkit. Don't forget to set parallel downloads to as many as you like for faster downloads. Also as mentioned, we do not need to enable any extra repos like *multilib* since my script will do that for us later on.

Now once everything is configured and set, hit install, sit back, grab a cup of Tea/Coffee and watch it do its thing. Might take a while it all depends on Internet connection...

#### Installing Gnome

Once that's all done, we will be prompted if we want to `chroot` into our new install, we answer with yes of course since we still have no DE yet.

!!! tip

    **Inspection**. We do not recommend to blindly execute scripts without inspecting them first. Check out the code 👉 [**Source Code**](https://github.com/xerolinux/XeroHub/blob/main/content/script/xero-gnome.sh){:target="_blank"}

Once you trust it, you can move on. Now, depending on the method that was used, `ssh` or not, we either copy paste the command below or type it manually :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/xero-gnome.sh)"
```

This script will perform several checks and then prompt you to confirm the addition of the **XeroLinux** and **Chaotic-AUR** repositories, along with my recommended configurations. If you agree, simply follow the prompts. The script will exit if you choose not to proceed.

<p align="center">
    <img src="https://i.imgur.com/VCSAdRp.png" alt="shot">
</p>

I *highly* recommend the second option: **Xero's Curated Set of Gnome Packages** to avoid potential future headaches. I've meticulously reviewed all package groups to ensure the best experience. However, you're free to choose any of the other options, it's entirely up to you in the end.

<p align="center">
    <img src="https://i.imgur.com/TOZNp4j.png" alt="shot">
</p>

You will notice that, the *multilib* repo was enabled as well. I made sure of that since most newcomers forget to do it. It's an essential repo required for the likes of **Steam**, and various drivers.

Installation might take a while, it all depends on the speed of your Internet connection. I have included quite a few quality-of-life packages which should make your experience as Seamless as possible. I have also taken care of a few dependencies that might be required down the line.

Finally, for now at least, once script is done, we will be prompted to exit and reboot the system. We do that by typing `exit` then `reboot`, and that's it for this part anyway...

#### System Setup

If all went smoothly, we should now be greeted with `GDM`, **Gnome**'s login page. Once logged in, there are a few things we need to take care of first. Open Terminal, as shown in video, and update the system

```Bash
sudo pacman -Syyu
```

Then we launch the **XeroLinux Post Installation Toolkit** from the AppMenu, under **System**. That's what we will be using from here on in.

<p align="center">
    <img src="https://i.imgur.com/JuWceYE.png" alt="shot">
</p>

It's up to you to discover all the options. The whole point of this guide is how to get **Gnome** the right way not to set up the system from A to Z. For more info, check out the [**Toolkit Wiki**](https://wiki.xerolinux.xyz/xlapit/)

### Issues

If you encounter any issues or have questions directly related to this script, feel free to reach out to me on **Fosstodon** or **Discord**. All relevant links are provided in the footer, and I'll do my best to assist you.

However, if your questions are related to your specific hardware, I may not have the answers you're looking for, as my knowledge is limited to what works on my own systems. For hardware-specific queries, your best resources are the [**ArchWiki**](https://wiki.archlinux.org){:target="_blank"}, or our custom **ChatGPT A.I.** available on **Discord**.

### Final words

That’s it, boys and girls, we’ve officially installed **Gnome** better than *ArchInstall* can! 🎉 The rest is in your capable hands now. Dive into the toolkit, poke around, and see if there’s anything that catches your fancy. Who knows—you might even stumble upon something that’ll make your setup sing! Just don’t blame me if you get lost in the endless sea of tweaks and options—consider it part of the adventure.

😄 Happy tinkering! 😄
