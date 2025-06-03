---
title: DaVinci Reslove Installer
tags:
  - Linux
  - DaVinci
  - Editing
---

# <h2 align="center">📽️ DaVinci Reslove Installer 📽️</h2>

### ℹ️ Info

This script will install **DaVinci Resolve** software as well as additional software for remote monitoring and utilities for setting up hardware control panels. It also installs Blackmagic RAW Player and Blackmagic Proxy Generator into the applications folder.

<p align="center">
    <img src="https://i.imgur.com/EgULGgW.png" alt="DaVinci">
</p>

---

<h1 align="center">.// The Wiki \\.</h1>
<h3 align="center">⚠️ <strong>DaVinCi support NOT provided</strong> ⚠️</h3>

### 📜 Installation

!!! warning

    In case you selected the *Studio* version, you will have to provide your own license, one will not be given to you, so please no not ask ! You will be responsible on making it work as well. I just created the script to make it easier for you to install the software, I do not use it myself. For support please check their [**Forum**](https://forum.blackmagicdesign.com/){:target="_blank"}.
    
- **⚙️ Supported Platform :**

The script was written for **ArchLinux** and derivatives only ! However you can take it and adapt it to work on whatever Distro-Base you are using. All I ask is not to come back to me and ask for help. Now on to how to use it. [**Link to Script**](https://xerolinux.xyz/script/davinci.sh){:target="_blank"}

- **🚀 Installation :**

Run this command in Terminal :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/davinci.sh)"
```

Script will install the required `figlet` and `fuse2` packages in case they are missing before running, then it will resume.

Select the version you want to use. Once download is done, it will extract and run the **DaVinci** installer. Go through it as you would on a **Windows** machine and click finish. Then the script will ask you what GPU you have, be it **nVidia** or **AMD** select the appropriate one, at which point the script will take care of the rest. Once it's all done, just launch the app, either from the newly created desktop shortcut or the App Launcher.

### 🔄 Version differences

**DaVinci Resolve** (free) provides a robust set of editing, color grading, and audio tools suitable for most users, but it is limited to 4K output and lacks advanced features like multi-GPU support and AI-powered effects. It covers the essentials for independent creators and small projects.

**DaVinci Resolve Studio** (paid) expands on this with higher resolution support, advanced noise reduction, AI-driven tools, multi-GPU acceleration and unlocks hardware-accelerated H.264/5 video encoding and higher resolution exports. It is designed for professionals who need enhanced performance and a wider range of high-end features for complex workflows.

However, whichever version you select, they both lack native **AAC** and **MP3** audio encoding on Linux. meaning you cannot directly export **MP4** files with **AAC** audio from **Resolve** on Linux without using external tools like FFmpeg. Also for a better experience, best use it on an **nVidia** GPU since that's what the software favors.

### 🗨️ Wrap up

While powerful and stable, Linux users face limitations as mentioned above. Despite this, Resolve remains the top professional video editor available on Linux for users comfortable with extra setup.

In case the script fails please do let me know on **Discord**. I will try to fix it. Download might fail in case a new version gets released, I will try my best to keep it up-to-date. I have to manually update links, no other way. I hope this made your life easier. Enjoy ;)
