---
title: Cosmic Install Script (Alpha)
tags:
  - Linux
  - Cosmic
  - CosmicDE
  - XeroLinux
  - ArchLinux
---

# <h2 align="center">✴️ Cosmic Script (Alpha) ✴️</h2>

!!! warning

    The script shared herein is work-in-progress. **Cosmic** is still in Alpha stages; so it needs time to reach full maturity. Please do not use it on your production machine. If you want to test in a VM, for best performance I would highly recommend [**ProxmoxVe**](https://www.proxmox.com/en/proxmox-virtual-environment/overview){:target="_blank"}.

### Script info

Well, it does what title says, it installs **Cosmic** in one of 3 ways. I also discovered the **Cosmic** group on **Arch** does not include the `xdg-user-dirs` package which creates the `Documents, Music, Pictures, Downloads & Videos` folders in your `home` & `system76-power` is missing which the `Cosmic Settings` will prompt you for; so I added them.

- **Complete**     : Installs Cosmic from Extra Repos.
- **Selective**    : Select pkgs you want yourselves.
- **Development**  : Commit-based Install -DANGER-.

<p align="center">
  <img src="https://i.imgur.com/Fvl9uRU.png">
</p>

Included are some useful packages, like a freaking web browser eg. **Firefox**, an archive manager, **Meld** and so much more. It's a start. We shall add more if you wish, just keep in mind that only packages coming from the official **Arch Repositories** are supported, none from the **AUR**.

### Execution Blockers

I have also implemented some checks making sure script is being run in *chroot* and on *ArchLinux* blocking execution anywhere else. This helps me in the long run not having to bang my head against the wall trying to provide support in case it was run on Distros I have no control over.

<p align="center">
  <img width="360" src="https://i.imgur.com/JlFRZRd.png">  <img width="360" src="https://i.imgur.com/uNilqW8.png">
</p>

So to avoid the headaches, I decided to block the execution. Better for everyone. This will allow me to concentrate on the distro and other current/future projects, with support being limited within **XeroLinux**.

Scroll down for usage instructions...

------

<h1 align="center">.// The Wiki \\.</h1>

### Instructions

!!! danger

    Do not select the **Development Version** unless you are ready to fix issues that might arise from it. It's the *Rolling* version which means it's commit based. Should you choose it, I recommend you do regular backups before updating. Please report all the bugs related to the DE or any feature requests you might have upstream, to the [**Cosmic Bug Tracker**](https://github.com/pop-os){:target="_blank"}

Using this script is identical to the [**Plasma Installer**](https://xerolinux.xyz/news/xerolinux-plasma/){:target="_blank"} am not gonna rehash it all here. Suffice it to say, you will need to go through the **ArchInstall** script, skipping the *Profiles* and *Drivers* sections completely, which would result in a minimal *Server* install of Arch.

Anyway, once that's all done, we will be prompted if we want to `chroot` into our new install, we answer with yes of course since we still have no DE yet.

**Caution :** We do not recommend to blindly execute scripts without inspecting them first. We do it this way so it's much easier to use. Especially in cases like this one. But in the end it's all up to you. Anyway, you can find the code on >> [**Github**](https://github.com/xerolinux/xero-plasma/blob/main/xero-cosmic.sh){:target="_blank"}.

Now, we type the following command :

```Bash
bash -c "$(curl -fsSL https://tinyurl.com/CosmicXero)"
```

This will execute the script. Just go through the prompts. In this case however, I would **Highly** recommend option **Complete Cosmic Install** to avoid any future headaches. But that's not to say we cannot select any of the other option, it's all up to you in the end.

The script will tell you that going throught with the installation, the **XeroLinux** as well as the **Chaotic-AUR** repos will be enabled in order for script to work correctly, like so...

<p align="center">
  <img src="https://i.imgur.com/Ph3HbCH.png">
</p>

You will notice that, the *multilib* repo was enabled as well. I made sure of that since most newcomers forget to do it. It's an essential repo required for the likes of **Steam**, and various drivers.

Finally, for now at least, once script is done, we will be prompted to exit and reboot the system. We do that by typing `exit` then `reboot`, that's it !

Now use my toolkit to install any drivers *especially* if you are using an **nVidia** GPU otherwise you will have a bad time. Besides that enjoy the DE.

If you would like to customize the look, feel free to jump on over to the all-new [**Cosmic-Themes**](https://cosmic-themes.org){:target="_blank"} site, where you will be able to grab a few cool ones, like **Catppuccin**, **Dracula** among others. Keep in mind that those are just color schemes no more no less. They do not apply to everything.

### Wrapping up

That's it for now. If you would like to help out so we can bring it to the public, you are more than welcome to. Especially when it comes to the *Hardware Checker* part which requires a lot of testing that I cannot do due to limited hardware availability.

**Cosmic** is shaping up to be the DE that *might* break the current *Top 2* (KDE and Gnome) making it the *Top 3* DEs of all time. Who knows ? I wish the **System76** team all the best.

Cheers !
