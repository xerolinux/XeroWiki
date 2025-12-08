---
title: XeroLinux KDE Rices
tags:
  - Linux
  - Boot
  - Ricing
  - Plymouth
---

<h1 align="center">🎨 XeroLinux Plymouth Manager 🎨</h1>

!!! info

    This script was created for Arch & Arch-Derivatives with the **Chaotic-AUR** repo enabled, since most if not all themes come from there.Please do not attempt to use it without that repo enabled. For a guide on how to enable it please [**Click Here**](https://aur.chaotic.cx/docs){:target="_blank"}

### Information

This is my [**Plumouth**](https://wiki.archlinux.org/title/Plymouth){:target="_blank"} manager script. It allows you to install Plymouth and manage themes the easy way. It also has an option that safely reverts any changes should you not want it anymore. It was created for fun, during my spare time.

---

<h1 align="center">.// The Wiki \\.</h1>

### Install & Usage

Before you grab n use this script, please read the info box on top of this page, and only proceed once repo has been enabled. Doing so without it will result in failure. With that out of the way, here's how to use the script...

Pre-Rquisites :
```Bash
sudo pacman -S wget git
```

**Installation :**

```Bash
wget https://raw.githubusercontent.com/XeroLinuxDev/extra-scripts/refs/heads/main/usr/local/bin/xpm
chmod + xpm && sh xpm
```

<p align="center">
    <img src="https://i.imgur.com/AL7frmH.png" alt="plymouth">
</p>

**Nerd Note :** 

> If you are nerdy enough, you can also move this script into `/usr/local/bin/` so you don't have to keep looking for it. This will make it so all you have to do is type `xpm` (or whatever toy renamed script to) in terminal, just like you would `fastfetch`. Just an FYI. ;)


**Script Usage :**

Select 1st option to install and activate **Plymouth**. 2nd option is where all the fun happens. Use it to install and mange themes. Use Sub-Option `a` to do that. Sub-Option `p` will open your browser to a **Github** repo where you will be able to preview *some* of the included themes.

That said, once you have installed a theme select sub-option `b` to apply it. You can also install a bunch of themes then go back apply & test each one. That's it !

Be G33ky & Enjoy 🤓
