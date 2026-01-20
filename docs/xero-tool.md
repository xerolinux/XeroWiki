---
title: XeroLinux Customization Hub
tags:
  - Linux
  - Distro
  - XeroLinux
  - Customization
---

<h1 align="center">🎨 XeroLinux Customization Hub 🎨</h1>

## Overview 

The **XeroLinux Customization Hub** is a vibrant, all-in-one GUI tool I created as a fun side project, that consolidates all the **XeroLinux** themes, scripts, and system tools. Built with `PyQt6`, it features animated RGB borders, a dark-themed interface with cyan/teal accents, and embedded screenshots to give you a visual preview of each customization option.

<p align="center">
    <img src="../images/xero-tool.webp" alt="xero-tool">
</p>

## Features

This tool was created for *any* Arch System. It includes :

- **Desktop Rices**: Install beautiful desktop Rices.
- **GRUB Themes**: Inst aany of 8 stunning `Grub` themes.
- **Scripts & Tools**: Quick access to essential utilities & Scripts.

---

<h1 align="center">.// Documentation \\.</h1>

## Tool Usage

### Single Command

- **Dependencies :**

Before running the tool, ensure you have the required dependencies installed:

```bash
sudo pacman -S python python-pyqt6
```

- **Execution :**

Execute the tool directly from the web with a single command:

```bash
curl -fsSL https://xerolinux.xyz/script/xero-tool.py | python3
```

Alternatively, you can download it first and run it locally:

```bash
curl -fsSL https://xerolinux.xyz/script/xero-tool.py -o xero-tool.py
python3 xero-tool.py
```

---

### Manual Methods

Below is how you can use each feature separately and manually...

**Requirements :**

```Bash
sudo pacman -S --needed python python-pyqt6 python-pip python-pipx
```

- **XeroLayan :**

```Bash
git clone https://github.com/xerolinux/xero-layan-git
cd xero-layan-git/ && ./install.sh
```

- **Xero Cosmic:**

```Bash
wget https://xerolinux.xyz/script/cosmic.sh
chmod +x cosmic.sh && sh cosmic.sh
```

- **Xero Grubs :**

```Bash
git clone https://github.com/xerolinux/xero-grubs
cd xero-grubs/ && sudo ./install.sh
```

- **Plymouth Manager :**

```Bash
wget https://raw.githubusercontent.com/XeroLinuxDev/extra-scripts/refs/heads/main/usr/local/bin/xpm
chmod + xpm && sh xpm
```

- **Unofficial Chaotic-AUR Tool :**

```Bash
curl -fsSL "https://xerolinux.xyz/script/chaotic-tool.py" | python3
```

---

## Issues & Fixes

- **Plymouth Boot Delay**

In many cases, on a very fast system with an nVme SSD boot animation can go by way too quickly. To solve that please do the following to add a short delay to boot sequence :

```Bash
sudo systemctl edit plymouth-quit.service --drop-in=long_splash.conf
```

Add the following to that file :

```Bash
[Service]
ExecStartPre=/usr/bin/sleep 6
```

<p align="center">
    <img src="../images/Delay.png" alt="delay">
</p>

Adjust delay to fit your setup. Save it and apply with `sudo systemctl daemon-reload`.

- **Plymouth Multi-Monitor**

In a multi-monitor setup, **Plymouth** might not show the animation scaled correctly. To fix that, do the following :

```Bash
sudo nano /etc/default/grub
```

Then use a tool like `xrandr` to identify your primary monitor, and add it to grub's `GRUB_CMDLINE_LINUX_DEFAULT='` line, like so `video=DP-1:1920x1080@60`, replacing the `DP-1` with yours. Save and exit, then update grub with the following command :

```Bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

---

## Screenshots

- **XeroLayan**

<p align="center">
    <img src="../images/Rice.jpeg" alt="rice">
</p>

- **Dracula Cosmic**

<p align="center">
    <img src="../images/Cosmic.png" alt="rice">
</p>

- **Xero Grubs**

<p align="center">
  <img src="../images/Grub.png">
</p>

- **Plymouth Manager**

<p align="center">
    <img src="../images/Plymouth.png" alt="plymouth">
</p>

- **Chaotic-AUR-Tool**

<p align="center">
  <a href="../images/chaotic-tool.png" target="_blank" rel="noopener">
    <img src="../images/chaotic-tool.png" width="49%">
  </a>
  <a href="../images/chaotic-tool3.png" target="_blank" rel="noopener">
    <img src="../images/chaotic-tool3.png" width="49%">
  </a>
</p>

---

## Final Words

The XeroLinux Customization Hub brings together all your favorite XeroLinux customization options into one sleek, easy-to-use interface. Whether you're looking to rice your desktop, beautify your bootloader, or manage system tools, this hub has you covered. The animated interface and embedded previews make it not just functional, but visually appealing as well. Give it a try and transform your Arch Linux experience!
