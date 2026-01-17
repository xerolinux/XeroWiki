---
title: Unofficial Chaotic-AUR Tool
tags:
  - Linux
  - FOSS
  - Script
  - Chaotic-AUR
---

<h1 align="center">🗒️ Unofficial Chaotic-AUR Tool 🗒️</h1>
<h2 align="center">Not related or affiliated by the Chaotic-AUR Team !</h2>

!!! info

    This script was created as a fun side-project. Please do not use unless you know what you are doing ! All info conatained in the script comes from the : [**Chaoti-AUR Site**](https://aur.chaotic.cx/){:target="_blank"}

<p align="center">
    <img src="https://i.imgur.com/8L3n7MG.png" alt="chaotic-tool">
</p>

### Overview

This **Unofficial Chaotic-AUR Tool** is a native `PyQt6` desktop application for Arch-based systems that lets you enable or disable the **Chaotic-AUR** repository using your system’s polkit (pkexec) authentication.

It provides a clean dark-themed interface with an on-screen Enabled/Disabled status indicator, an always-visible output log, and built-in pages to browse the live package list (via the Chaotic backend API) with search, view recent build/pipeline status, check deployments/mirrors, and see the official Chaotic team members with GitHub avatars and quick links.

---

<h2 align="center">🗒️ How-To use the script 🗒️</h2>

### Requirements

Install Python, polkit (for pkexec prompts), and PyQt6 :

```Bash
sudo pacman -S --needed python python-pyqt6 python-pip python-pipx
```
### Run Command

To run the script just use this simple command :

```Bash
curl -fsSL "https://xerolinux.xyz/script/chaotic-tool.py" | python3
```

## Closing words

If you’ve ever wanted the convenience of **Chaotic-AUR** without the “copy commands, edit config, hope nothing breaks” routine, this tool is meant to make that whole experience feel simple and familiar. One window, clear status, clean output, and the same actions you’d normally do by hand, just wrapped in a straightforward GUI with proper polkit prompts.

As always, treat third-party repositories with respect: verify what you install, keep an eye on what changes, and don’t hesitate to disable it if something feels off. Enjoy the speed boost, stay safe, and happy tinkering.

*Prebuilt packages, zero compile pain.* 🤓
